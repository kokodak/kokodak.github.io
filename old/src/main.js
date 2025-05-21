// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xffffff);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(4, 4, 6);

// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.enableZoom = false;

// const ambient = new THREE.AmbientLight(0xffffff, 0.4);
// scene.add(ambient);

// const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
// dirLight.position.set(5, 10, 7);
// scene.add(dirLight);

// const planeGeo = new THREE.PlaneGeometry(20, 20);
// const planeMat = new THREE.MeshBasicMaterial({
//   color: 0x111111,
//   side: THREE.DoubleSide,
// });
// const plane = new THREE.Mesh(planeGeo, planeMat);
// plane.rotation.x = -Math.PI / 2;
// plane.position.y = -2.5;

// const faceColors = {
//   right: 0xff0000,
//   left: 0xff8000,
//   top: 0xffff00,
//   bottom: 0xffffff,
//   front: 0x00ff00,
//   back: 0x0000ff,
// };

// const boxGeo = new THREE.BoxGeometry(0.98, 0.98, 0.98);

// function createMaterials() {
//   const makeMat = (color) =>
//     new THREE.MeshStandardMaterial({
//       color,
//       side: THREE.FrontSide,
//       depthTest: true,
//       depthWrite: true,
//     });
//   return [
//     makeMat(faceColors.right),
//     makeMat(faceColors.left),
//     makeMat(faceColors.top),
//     makeMat(faceColors.bottom),
//     makeMat(faceColors.front),
//     makeMat(faceColors.back),
//   ];
// }

// const cubes = [];
// for (let x = -1; x <= 1; x++) {
//   for (let y = -1; y <= 1; y++) {
//     for (let z = -1; z <= 1; z++) {
//       const mats = createMaterials();
//       const cube = new THREE.Mesh(boxGeo.clone(), mats);
//       cube.position.set(x, y, z);
//       scene.add(cube);
//       cubes.push(cube);
//     }
//   }
// }

// let isRotating = false;
// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// window.addEventListener("mousemove", (e) => {
//   mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
// });

// window.addEventListener("wheel", (e) => {
//   if (isRotating) return;

//   if (e.ctrlKey || e.metaKey) {
//     const zoomDir = e.deltaY > 0 ? 1 : -1;
//     camera.position.multiplyScalar(1 + 0.05 * zoomDir);
//     return;
//   }

//   raycaster.setFromCamera(mouse, camera);
//   const intersects = raycaster.intersectObjects(cubes);
//   if (intersects.length === 0) return;

//   const clickedCube = intersects[0].object;

//   const camMatrix = new THREE.Matrix4().extractRotation(camera.matrixWorld);
//   const xAxis = new THREE.Vector3(1, 0, 0).applyMatrix4(camMatrix).normalize();
//   const yAxis = new THREE.Vector3(0, 1, 0).applyMatrix4(camMatrix).normalize();

//   const isVertical = Math.abs(e.deltaY) > Math.abs(e.deltaX);
//   const screenAxis = isVertical ? xAxis : yAxis;
//   const direction = isVertical
//     ? e.deltaY > 0
//       ? 1
//       : -1
//     : e.deltaX > 0
//     ? 1
//     : -1;

//   const worldAxes = [
//     new THREE.Vector3(1, 0, 0),
//     new THREE.Vector3(0, 1, 0),
//     new THREE.Vector3(0, 0, 1),
//   ];
//   let bestAxis = "x";
//   let maxDot = -Infinity;

//   for (const axisName of ["x", "y", "z"]) {
//     const axisVec = new THREE.Vector3(
//       axisName === "x" ? 1 : 0,
//       axisName === "y" ? 1 : 0,
//       axisName === "z" ? 1 : 0
//     );
//     const dot = Math.abs(axisVec.dot(screenAxis));
//     if (dot > maxDot) {
//       maxDot = dot;
//       bestAxis = axisName;
//     }
//   }

//   const layerCoord = Math.round(clickedCube.position[bestAxis]);

//   const layerCubes = cubes.filter(
//     (c) => Math.round(c.position[bestAxis]) === layerCoord
//   );
//   if (layerCubes.length === 0) return;

//   const group = new THREE.Group();
//   layerCubes.forEach((c) => {
//     scene.remove(c);
//     group.add(c);
//   });
//   scene.add(group);

//   const axisVec = new THREE.Vector3(
//     bestAxis === "x" ? 1 : 0,
//     bestAxis === "y" ? 1 : 0,
//     bestAxis === "z" ? 1 : 0
//   );

//   const camDir = new THREE.Vector3();
//   camera.getWorldDirection(camDir);

//   const camFacing = camDir.dot(axisVec);
//   const signedDirection = camFacing >= 0 ? direction : -direction;

//   const angle = (Math.PI / 2) * -signedDirection;

//   const duration = 300;
//   const startTime = performance.now();
//   isRotating = true;

//   function animateRotation(now) {
//     const elapsed = now - startTime;
//     const t = Math.min(elapsed / duration, 1);
//     group.rotation[bestAxis] = angle * t;

//     if (t < 1) {
//       requestAnimationFrame(animateRotation);
//     } else {
//       group.rotation[bestAxis] = angle;
//       group.updateMatrixWorld(true);

//       for (const mesh of Array.from(group.children)) {
//         const worldPos = new THREE.Vector3();
//         const worldQuat = new THREE.Quaternion();

//         mesh.getWorldPosition(worldPos);
//         mesh.getWorldQuaternion(worldQuat);

//         mesh.position.copy(worldPos);
//         mesh.quaternion.copy(worldQuat);

//         mesh.position.x = Math.round(mesh.position.x);
//         mesh.position.y = Math.round(mesh.position.y);
//         mesh.position.z = Math.round(mesh.position.z);

//         group.remove(mesh);
//         scene.add(mesh);
//       }

//       scene.remove(group);
//       isRotating = false;
//     }
//   }
//   requestAnimationFrame(animateRotation);
// });

// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
// });

// (function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   renderer.render(scene, camera);
// })();

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import yorkie from "@yorkie-js/sdk";

(async () => {
  const client = new yorkie.Client({
    rpcAddr: "https://api.yorkie.dev",
    apiKey: "NkEe4AAYiM7PLfB8HzJNKX",
  });
  await client.activate();

  const doc = new yorkie.Document("cube-rotation");
  await client.attach(doc);

  doc.update((root) => {
    if (!root.lastRot) root.lastRot = null; // last rotation command
    if (!root.isBusy) root.isBusy = false; // mutex flag
  });

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
  );
  camera.position.set(4, 4, 6);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = false;

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));
  const d = new THREE.DirectionalLight(0xffffff, 0.8);
  d.position.set(5, 10, 7);
  scene.add(d);

  const COLOR_HEX = [
    0xffff00, 0xff0000, 0x00ff00, 0xffffff, 0xff8000, 0x0000ff,
  ];

  const faceColors = {
    right: 4,
    left: 1,
    top: 3,
    bottom: 0,
    front: 5,
    back: 2,
  };

  const cubeGeo = new THREE.BoxGeometry(0.98, 0.98, 0.98);
  function createMaterials() {
    return Object.values(faceColors).map(
      (id) =>
        new THREE.MeshStandardMaterial({
          color: COLOR_HEX[id],
          side: THREE.FrontSide,
        })
    );
  }

  const cubes = [];
  for (let x = -1; x <= 1; x++)
    for (let y = -1; y <= 1; y++)
      for (let z = -1; z <= 1; z++) {
        const m = new THREE.Mesh(cubeGeo.clone(), createMaterials());
        m.position.set(x, y, z);
        scene.add(m);
        cubes.push(m);
      }

  let isRotating = false;
  function rotateLayer(axis, layerCoord, direction, onFinish) {
    if (isRotating) return;
    isRotating = true;

    const selection = cubes.filter(
      (c) => Math.round(c.position[axis]) === layerCoord
    );
    const group = new THREE.Group();
    selection.forEach((c) => {
      scene.remove(c);
      group.add(c);
    });
    scene.add(group);

    const angle = (Math.PI / 2) * direction;
    const dur = 300,
      start = performance.now();
    (function animate(now) {
      const t = Math.min((now - start) / dur, 1);
      group.rotation[axis] = angle * t;
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        group.rotation[axis] = angle;
        group.updateMatrixWorld(true);
        for (const c of [...group.children]) {
          c.position.copy(c.getWorldPosition(new THREE.Vector3())).round();
          c.quaternion.copy(c.getWorldQuaternion(new THREE.Quaternion()));
          group.remove(c);
          scene.add(c);
        }
        scene.remove(group);
        isRotating = false;
        onFinish?.();
      }
    })(start);
  }

  const ray = new THREE.Raycaster(),
    mouse = new THREE.Vector2();

  addEventListener("mousemove", (e) => {
    mouse.x = (e.clientX / innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / innerHeight) * 2 + 1;
  });

  addEventListener("wheel", (e) => {
    if (isRotating || e.ctrlKey || e.metaKey) return;
    ray.setFromCamera(mouse, camera);
    const hit = ray.intersectObjects(cubes)[0];
    if (!hit) return;

    const camMat = new THREE.Matrix4().extractRotation(camera.matrixWorld);
    const xScr = new THREE.Vector3(1, 0, 0).applyMatrix4(camMat),
      yScr = new THREE.Vector3(0, 1, 0).applyMatrix4(camMat);
    const vert = Math.abs(e.deltaY) > Math.abs(e.deltaX);
    const scrAxis = vert ? xScr : yScr,
      dir = (vert ? e.deltaY : e.deltaX) > 0 ? 1 : -1;

    let axis = "x",
      max = -1;
    for (const a of ["x", "y", "z"]) {
      const v = new THREE.Vector3(a === "x", a === "y", a === "z");
      const dot = Math.abs(v.dot(scrAxis));
      if (dot > max) {
        axis = a;
        max = dot;
      }
    }
    const layer = Math.round(hit.object.position[axis]);

    rotateLayer(axis, layer, dir, () => {
      doc.update((r) => {
        // r.cubes = cubes;
        r.lastRot.axis = axis;
        r.lastRot.layer = layer;
        r.lastRot.dir = dir;
        r.lastRot.t = Date.now();
        r.lastRot.sender = client.getID();
      });
    });
  });

  doc.subscribe("$.lastRot", (event) => {
    if (doc.getRoot().lastRot.sender === client.getID()) return;
    const { axis, layer, dir } = doc.getValueByPath("$.lastRot");
    rotateLayer(axis, layer, dir, () => {
      doc.update((r) => {
        r.isBusy = false;
      });
    });
  });

  addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
  (function tick() {
    requestAnimationFrame(tick);
    controls.update();
    renderer.render(scene, camera);
  })();
})();
