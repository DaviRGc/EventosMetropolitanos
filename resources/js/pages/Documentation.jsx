import { useState } from "react";
import DocQueSon from "./seccions/DocInfo";
import DocsActividades from "./seccions/DocsActividades";
import DocHerramientas from "./seccions/DocHerramientas";
import DocEntrevista from "./seccions/DocEntrevista";
import DocDocumentacion from "./seccions/DocDocumentacion";
import DocsAnalisis from "./seccions/DocsAnalisis";
import DocsCasos from "./seccions/DocsCasos";
import DocIngenieria from "./seccions/DocIngeneria";

const sections = [
  { id: "que-son", label: "Que Son" },
  { id: "actividades", label: "Actividades" },
  { id: "herramientas", label: "Herramientas" },
  { id: "entrevista", label: "Entrevista" },
  { id: "documentacion", label: "Documentacion" },
  { id: "analisis", label: "Analisis" },
  { id: "casos", label: "Casos" },
  { id: "ingenieria", label: "Ingenieria" },
];

const sectionComponents = {
  "que-son": DocQueSon,
  actividades: DocsActividades,
  herramientas: DocHerramientas,
  entrevista: DocEntrevista,
  documentacion: DocDocumentacion,
  analisis: DocsAnalisis,
  casos: DocsCasos,
  ingenieria: DocIngenieria,
};

export default function Documentation() {
  const [activeSection, setActiveSection] = useState("que-son");
  const ActiveSection = sectionComponents[activeSection];

  return (
    <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-64 shrink-0">
          <div className="border border-border bg-iron/20 p-3 space-y-2 lg:sticky lg:top-24">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-3 py-2 font-mono text-xs tracking-wide border transition-colors ${
                  activeSection === section.id
                    ? "border-lime/40 text-lime bg-lime/5"
                    : "border-transparent text-silver/70 hover:border-border"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </aside>

        <section className="flex-1 min-w-0">
          <ActiveSection />
        </section>
      </div>
    </div>
  );
}