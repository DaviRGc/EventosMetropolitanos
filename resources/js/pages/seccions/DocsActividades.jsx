import { motion } from "framer-motion";
import SectionHeader from "../../components/SeccionHeader";

const timeline = [
  {
    phase: "FASE 01",
    title: "Entrevistas Iniciales con el Cliente",
    status: "REQUERIDO",
    duration: "1–3 días",
    desc: "Todo empieza con una conversación. Nos sentamos con el cliente y le hacemos preguntas concretas: ¿qué quieren lograr con el evento? ¿A quién va dirigido? ¿Cuánto dinero tienen disponible? ¿Cuándo necesitan que esté listo? Esta fase es la más importante porque si entendemos mal lo que el cliente quiere al principio, todo lo que venga después estará mal.",
    outputs: ["Resumen ejecutivo de objetivos", "Lista inicial de stakeholders", "Estimación de escala y presupuesto", "Cronograma preliminar"],
    tip: "Nunca asumimos. Si algo no está claro, preguntamos dos veces antes de avanzar.",
  },
  {
    phase: "FASE 02",
    title: "Reuniones de Alineación con Equipos",
    status: "REQUERIDO",
    duration: "3–5 días",
    desc: "Una vez que entendemos la visión del cliente, la comunicamos al resto del equipo: los creativos, los técnicos, los logísticos y los proveedores. Aquí es donde se detectan los primeros conflictos: el cliente quiere algo que el proveedor no puede entregar, o el espacio tiene restricciones que nadie había considerado. Resolver estos conflictos en papel es mil veces más barato que resolverlos el día del evento.",
    outputs: ["Acta de reunión firmada por todos", "Lista de compromisos por área", "Mapa de riesgos inicial", "Asignación de responsables"],
    tip: "Una reunión sin acta es una conversación que no existió.",
  },
  {
    phase: "FASE 03",
    title: "Levantamiento de Requisitos",
    status: "CRÍTICO",
    duration: "5–10 días",
    desc: "Esta es la fase más técnica de la planificación. Aquí traducimos la visión del cliente en una lista detallada de todo lo que se necesita: cuántas mesas, cuántos técnicos de sonido, qué tipo de permisos, qué capacidad de internet, qué medidas de seguridad, cómo va a funcionar el registro de asistentes, etc. Si algo no está en esta lista, probablemente no suceda. Por eso somos exhaustivos.",
    outputs: ["Documento BRD (Requisitos de Negocio)", "Documento SRS (Especificaciones Técnicas)", "Lista de verificación de permisos", "Inventario de recursos necesarios"],
    tip: "Más vale un requisito de más que uno de menos. Siempre es más fácil eliminar algo que agregar.",
  },
  {
    phase: "FASE 04",
    title: "Diseño de Escenarios y Flujos",
    status: "ESTRATÉGICO",
    duration: "4–7 días",
    desc: "Aquí pensamos en la experiencia real del asistente. ¿Cómo llega al evento? ¿Dónde se registra? ¿Cómo fluye por el espacio? ¿Qué pasa si hay un problema? ¿Cómo sale? Dibujamos estos recorridos en papel (o en digital) para identificar cuellos de botella antes de que ocurran. También diseñamos los escenarios de riesgo: qué hacemos si llueve, si un proveedor falla, si hay más asistentes de los esperados.",
    outputs: ["Mapa de experiencia del asistente", "Planos de distribución del espacio", "Casos de uso documentados", "Plan de contingencias"],
    tip: "El mejor plan de contingencia es el que nunca se necesita, pero siempre existe.",
  },
  {
    phase: "FASE 05",
    title: "Validación y Aprobación Formal",
    status: "VALIDACIÓN",
    duration: "3–5 días",
    desc: "Antes de ejecutar cualquier cosa, todos los documentos pasan por una revisión en conjunto con el cliente y los stakeholders clave. Esto garantiza que nadie tiene una sorpresa el día del evento. En esta fase también se firman los contratos con proveedores, se cierran los permisos municipales y se congela el presupuesto final. Cualquier cambio después de esta firma tiene un costo adicional.",
    outputs: ["Documentación validada y firmada", "Contratos con proveedores cerrados", "Permisos municipales obtenidos", "Presupuesto final aprobado"],
    tip: "Una firma es un compromiso. Todos los acuerdos se validan por escrito.",
  },
  {
    phase: "FASE 06",
    title: "Ejecución y Monitoreo en Tiempo Real",
    status: "EJECUCIÓN",
    duration: "Día del evento",
    desc: "El día del evento, toda la planificación se convierte en acción. Tenemos equipos distribuidos en puntos clave del espacio, un canal de comunicación abierto entre todos los responsables, y un tablero de monitoreo donde registramos en tiempo real cualquier incidencia. Nada queda sin documentar: cada problema que surge, cada solución que aplicamos, cada cambio de último minuto.",
    outputs: ["Registro de asistencia en tiempo real", "Log de incidencias y resoluciones", "Fotos y videos de evidencia", "Informe de cierre preliminar"],
    tip: "Durante la ejecución, la velocidad de respuesta es tan importante como la planificación previa.",
  },
  {
    phase: "FASE 07",
    title: "Cierre y Documentación Post-Evento",
    status: "CIERRE",
    duration: "3–7 días",
    desc: "Cuando el evento termina, nuestro trabajo no termina. Generamos un informe completo con los resultados reales versus los objetivos planteados, el análisis de lo que funcionó y lo que no, las métricas de asistencia y satisfacción, y las recomendaciones para la próxima edición. Este informe es un activo valioso para el cliente: les permite mostrar resultados a sus propios stakeholders.",
    outputs: ["Informe de resultados con KPIs", "Análisis de satisfacción de asistentes", "Registro fotográfico ordenado", "Recomendaciones para futuras ediciones"],
    tip: "El informe post-evento es tan importante como el evento mismo. Es la memoria institucional del proyecto.",
  },
];

const statusColors = {
  REQUERIDO: "text-blue-400 border-blue-400/30",
  CRÍTICO: "text-red-400 border-red-400/30",
  ESTRATÉGICO: "text-purple-400 border-purple-400/30",
  VALIDACIÓN: "text-yellow-400 border-yellow-400/30",
  EJECUCIÓN: "text-lime border-lime/30",
  CIERRE: "text-teal-400 border-teal-400/30",
};

export default function DocActividades() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SectionHeader
        tag="// DOC.002 — TIMELINE"
        title="Actividades Clave"
        subtitle="El recorrido completo de un proyecto: desde la primera conversación con el cliente hasta el informe de cierre. Cada fase tiene sus entregables, su duración estimada y sus puntos críticos."
      />

      <div className="relative max-w-3xl">
        <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border" />

        <div className="space-y-1">
          {timeline.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex gap-6 group"
            >
              <div className="relative z-10 mt-6">
                <div className="w-10 h-10 border border-lime/40 bg-asphalt flex items-center justify-center group-hover:bg-lime/20 transition-colors">
                  <span className="font-mono text-[10px] text-lime">{String(i + 1).padStart(2, "0")}</span>
                </div>
              </div>

              <div className="flex-1 border border-border bg-iron/20 group-hover:border-lime/30 transition-all mb-3 overflow-hidden">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span className="font-mono text-[10px] text-lime/50 tracking-widest">{item.phase}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-muted-foreground border border-border px-2 py-0.5">{item.duration}</span>
                      <span className={`font-mono text-[10px] px-2 py-0.5 border ${statusColors[item.status] || "text-lime/60 border-lime/20"}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-space font-bold text-base text-silver mb-3">{item.title}</h3>
                  <p className="font-inter text-sm text-silver/70 leading-relaxed mb-4">{item.desc}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="font-mono text-[10px] text-lime/40 tracking-widest block mb-2">ENTREGABLES:</span>
                      <ul className="space-y-1">
                        {item.outputs.map((o) => (
                          <li key={o} className="flex items-start gap-2">
                            <span className="text-lime/40 text-xs mt-0.5">→</span>
                            <span className="font-inter text-xs text-muted-foreground">{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-l border-border pl-4">
                      <span className="font-mono text-[10px] text-lime/40 tracking-widest block mb-2">NOTA CLAVE:</span>
                      <p className="font-inter text-xs text-lime/70 italic leading-relaxed">"{item.tip}"</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}