import { MainSection } from "./components/MainSection";

export default function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-white">
      <div className="flex flex-col gap-16 w-full px-6 flex-1">
        <MainSection />
      </div>
    </div>
  );
}
