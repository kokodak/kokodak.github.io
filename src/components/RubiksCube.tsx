import React, { useEffect, useMemo, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import yorkie, { Client, Document } from "@yorkie-js/sdk";

/**
 * React‑Three‑Fiber + Yorkie Rubik's‑Cube Scene (client/doc refs)
 *
 * <RubiksCube /> 렌더링 시 실시간 공유 큐브가 동작합니다.
 */

const COLOR_HEX = [
  0xffff00, 0xff0000, 0x00ff00, 0xffffff, 0xff8000, 0x0000ff,
] as const;
const faceColors: Record<string, number> = {
  right: 4,
  left: 1,
  top: 3,
  bottom: 0,
  front: 5,
  back: 2,
};
const cubeGeo = new THREE.BoxGeometry(0.98, 0.98, 0.98);
const makeFaceMaterials = () =>
  Object.values(faceColors).map(
    (id) =>
      new THREE.MeshStandardMaterial({
        color: COLOR_HEX[id],
        side: THREE.FrontSide,
      })
  );

type Axis = "x" | "y" | "z";
interface LastRot {
  axis: Axis;
  layer: number;
  dir: number;
  t: number;
  sender: string | null;
}
interface Root {
  lastRot?: LastRot;
}

/* ── 단일 큐브 ── */
function Cubie({
  position,
  refArray,
  index,
}: {
  position: [number, number, number];
  refArray: React.MutableRefObject<THREE.Mesh[]>;
  index: number;
}) {
  return (
    <mesh
      position={position}
      ref={(m) => m && (refArray.current[index] = m)}
      geometry={cubeGeo}
      material={makeFaceMaterials() as unknown as THREE.Material[]}
    />
  );
}

/* ── 메인 씬 ── */
function CubeScene() {
  const { camera, gl, scene } = useThree();

  const clientRef = useRef<Client | null>(null);
  const docRef = useRef<Document<Root> | null>(null);
  const clientIDRef = useRef<string>("");

  const cubesRef = useRef<THREE.Mesh[]>([]);
  const isRotating = useRef(false);
  const ray = useMemo(() => new THREE.Raycaster(), []);
  const mouse = useRef(new THREE.Vector2());

  /* Light */
  useEffect(() => {
    scene.background = new THREE.Color(0xffffff);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dl = new THREE.DirectionalLight(0xffffff, 0.8);
    dl.position.set(5, 10, 7);
    scene.add(dl);
  }, [scene]);

  /* Yorkie */
  useEffect(() => {
    let mounted = true;
    (async () => {
      const client = new yorkie.Client({
        rpcAddr: "https://api.yorkie.dev",
        apiKey: "NkEe4AAYiM7PLfB8HzJNKX",
      });
      await client.activate();
      const doc = new yorkie.Document<Root>("cube-rotation");
      await client.attach(doc);
      if (!mounted) {
        client.deactivate();
        return;
      }

      clientRef.current = client;
      docRef.current = doc;
      clientIDRef.current = client.getID() ?? "";

      await doc.update((root) => {
        if (!root.lastRot)
          root.lastRot = { axis: "x", layer: 0, dir: 1, t: 0, sender: null };
      });

      doc.subscribe("$.lastRot", () => {
        const last = doc.getRoot().lastRot;
        if (!last || last.sender === clientIDRef.current) return;
        rotateLayer(last.axis, last.layer, last.dir);
      });
    })();
    return () => {
      mounted = false;
      clientRef.current?.deactivate();
    };
  }, []);

  /* mouse move + correct local coords */
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      const rect = gl.domElement.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    gl.domElement.addEventListener("mousemove", updateMouse);
    return () => gl.domElement.removeEventListener("mousemove", updateMouse);
  }, [gl]);

  /* wheel */
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (isRotating.current || e.ctrlKey || e.metaKey) return;
      ray.setFromCamera(mouse.current, camera);
      const hit = ray.intersectObjects(cubesRef.current)[0];
      if (!hit) return;
      const camRot = new THREE.Matrix4().extractRotation(camera.matrixWorld);
      const xScr = new THREE.Vector3(1, 0, 0).applyMatrix4(camRot);
      const yScr = new THREE.Vector3(0, 1, 0).applyMatrix4(camRot);
      const vertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
      const scrAxis = vertical ? xScr : yScr;
      const dir = (vertical ? e.deltaY : e.deltaX) > 0 ? 1 : -1;
      let axis: Axis = "x",
        max = -1;
      (["x", "y", "z"] as Axis[]).forEach((a) => {
        const v = new THREE.Vector3(
          a === "x" ? 1 : 0,
          a === "y" ? 1 : 0,
          a === "z" ? 1 : 0
        );
        const dot = Math.abs(v.dot(scrAxis));
        if (dot > max) {
          axis = a;
          max = dot;
        }
      });
      const layer = Math.round((hit.object as THREE.Mesh).position[axis]);
      rotateLayer(axis, layer, dir, true);
    };
    gl.domElement.addEventListener("wheel", onWheel, { passive: true });
    return () => gl.domElement.removeEventListener("wheel", onWheel);
  }, [camera, gl, ray]);

  /* rotate */
  const rotateLayer = (
    axis: Axis,
    layerCoord: number,
    direction: number,
    broadcast = false
  ) => {
    if (isRotating.current) return;
    isRotating.current = true;
    const selection = cubesRef.current.filter(
      (c) => Math.round(c.position[axis]) === layerCoord
    );
    const group = new THREE.Group();
    selection.forEach((c) => {
      scene.remove(c);
      group.add(c);
    });
    scene.add(group);
    const angle = (Math.PI / 2) * direction;
    const dur = 300;
    const start = performance.now();
    (function anim(now: number) {
      const t = Math.min((now - start) / dur, 1);
      group.rotation[axis] = angle * t;
      if (t < 1) {
        requestAnimationFrame(anim);
      } else {
        group.rotation[axis] = angle;
        group.updateMatrixWorld(true);
        [...group.children].forEach((c) => {
          const m = c as THREE.Mesh;
          m.position.copy(m.getWorldPosition(new THREE.Vector3())).round();
          m.quaternion.copy(m.getWorldQuaternion(new THREE.Quaternion()));
          group.remove(m);
          scene.add(m);
        });
        scene.remove(group);
        isRotating.current = false;
        if (broadcast && docRef.current) {
          docRef.current.update((r) => {
            if (!r.lastRot) r.lastRot = {} as LastRot;
            r.lastRot.axis = axis;
            r.lastRot.layer = layerCoord;
            r.lastRot.dir = direction;
            r.lastRot.t = Date.now();
            r.lastRot.sender = clientIDRef.current;
          });
        }
      }
    })(start);
  };

  const positions = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let x = -1; x <= 1; x++)
      for (let y = -1; y <= 1; y++)
        for (let z = -1; z <= 1; z++) arr.push([x, y, z]);
    return arr;
  }, []);

  return (
    <>
      {positions.map((pos, i) => (
        <Cubie key={i} position={pos} refArray={cubesRef} index={i} />
      ))}
      <OrbitControls makeDefault enableDamping enableZoom={false} />
    </>
  );
}

export default function RubiksCube() {
  return (
    <Canvas
      camera={{ position: [3, 3, 5], fov: 55 }}
      style={{ width: "100%", height: "100%" }}
    >
      <CubeScene />
    </Canvas>
  );
}
