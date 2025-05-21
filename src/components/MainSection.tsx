import { Header } from "./Header";
import { ProfileText } from "./ProfileText";
import { CanvasSection } from "./CanvasSection";

export const MainSection = () => (
  <section className="w-full h-full flex">
    <div className="inline-flex items-start ml-15 mt-15 gap-20">
      <div className="flex flex-col">
        <Header />
        <ProfileText />
      </div>
      <CanvasSection />
    </div>
  </section>
);
