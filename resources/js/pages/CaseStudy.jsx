import { useState } from "react";
import CaseHero from "./CaseHero";
import CaseToggle from "./CaseToggle";
import CaseVision from "./CaseVision";
import CaseBlueprint from "./CaseBlueprint";


export default function CaseStudy() {
  const [view, setView] = useState("vision");

  return (
    <div className="pt-20 pb-16 min-h-screen">
      <CaseHero />
      <div className="max-w-7xl mx-auto px-6">
        <CaseToggle active={view} onToggle={setView} />
        {view === "vision" ? <CaseVision /> : <CaseBlueprint />}
      </div>

    </div>
  );
}