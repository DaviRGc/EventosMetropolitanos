import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeader from "../../components/SeccionHeader";

const personas = [
  {
    name: "Coordinador Operativo",
    role: "Operacion",
    age: 34,
    context: "Supervisa accesos, montaje y tiempos de proveedores.",
    goal: "Reducir cuellos de botella en entradas y cambios de escena.",
    frustration: "Datos dispersos entre WhatsApp, correo y hojas sueltas.",
    need: "Visibilidad centralizada en tiempo real.",
  },
  {
    name: "Cliente Institucional",
    role: "Stakeholder",
    age: 45,
    context: "Necesita comprobar avance y cumplimiento contractual.",
    goal: "Trazabilidad completa de entregables y validaciones.",
    frustration: "Retrasos por falta de decisiones documentadas.",
    need: "Reportes claros y hitos verificables.",
  },
];

const useCases = [
  {
    id: "UC-01",
    title: "Alta de requerimiento",
    actor: "Cliente",
    precondition: "Proyecto registrado en sistema",
    context: "Se captura una necesidad nueva para el evento",
    flow: [
      "El cliente envia solicitud",
      "Operaciones clasifica prioridad",
      "Se asigna responsable y fecha",
      "Se notifica al equipo",
    ],
    alt: "Si falta informacion, se devuelve para completar campos.",
    notes: "Todos los cambios quedan auditados.",
  },
  {
    id: "UC-02",
    title: "Validacion de entregable",
    actor: "Coordinador",
    precondition: "Documento en estado listo",
    context: "Se revisa checklist y cumplimiento de criterios",
    flow: [
      "El coordinador abre el entregable",
      "Evalua checklist de aceptacion",
      "Aprueba o rechaza con observaciones",
      "Sistema registra evidencia",
    ],
    alt: "Si se rechaza, vuelve a revision con comentarios.",
    notes: "No se cierra fase sin validacion completa.",
  },
];

export default function DocsCasos() {
  const [expandedPersona, setExpandedPersona] = useState(null);
  const [expandedUC, setExpandedUC] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <SectionHeader
        tag="// DOC.007 - CASOS"
        title="Personas y Casos de Uso"
        subtitle="Definimos actores reales y flujos operativos para asegurar ejecucion estable."
      />

      <div className="space-y-10">
        <div>
          <h3 className="font-space font-bold text-xl text-silver mb-3">Personas</h3>
          <div className="space-y-3">
            {personas.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border bg-iron/20 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedPersona(expandedPersona === p.name ? null : p.name)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span>
                    <span className="font-space font-bold text-sm text-silver block">
                      {p.name}
                    </span>
                    <span className="font-inter text-xs text-muted-foreground">
                      {p.role} - {p.age} anos
                    </span>
                  </span>

                  <ChevronRight
                    className={`w-4 h-4 text-muted-foreground transition-transform ${
                      expandedPersona === p.name ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedPersona === p.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5"
                    >
                      <div className="space-y-3 text-sm text-silver/70">
                        <p><strong>Contexto:</strong> {p.context}</p>
                        <p><strong>Objetivo:</strong> {p.goal}</p>
                        <p><strong>Frustracion:</strong> {p.frustration}</p>
                        <p><strong>Necesidad:</strong> {p.need}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-space font-bold text-xl text-silver mb-3">Casos de Uso</h3>
          <div className="space-y-3">
            {useCases.map((uc, i) => (
              <motion.div
                key={uc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border bg-iron/20 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedUC(expandedUC === uc.id ? null : uc.id)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div>
                    <span className="font-mono text-[10px] text-lime/50">{uc.id}</span>
                    <h4 className="font-space text-sm text-silver font-bold">{uc.title}</h4>
                    <p className="text-xs text-muted-foreground">{uc.actor}</p>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      expandedUC === uc.id ? "rotate-90" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedUC === uc.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 pb-5"
                    >
                      <div className="space-y-4 text-sm">
                        <p><strong>Precondicion:</strong> {uc.precondition}</p>
                        <p><strong>Contexto:</strong> {uc.context}</p>
                        <div>
                          <strong>Flujo:</strong>
                          <ul className="mt-2 space-y-1">
                            {uc.flow.map((step, idx) => (
                              <li key={idx} className="flex gap-2">
                                <span className="text-lime">{idx + 1}.</span>
                                <span className="text-muted-foreground">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p><strong>Escenario alternativo:</strong> {uc.alt}</p>
                        <p className="italic text-lime/70">{uc.notes}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}