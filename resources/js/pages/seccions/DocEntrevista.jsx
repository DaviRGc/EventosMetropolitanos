import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../../components/SeccionHeader";

const phases = [
  {
    phase: "APERTURA",
    label: "Antes de preguntar, escuchar",
    desc: "La entrevista no empieza con preguntas. Empieza con una presentación clara de quiénes somos, qué vamos a hacer con la información que nos dan, y por qué es importante que sean honestos con nosotros. Una persona que confía en el entrevistador da información de mucha mayor calidad.",
    questions: [],
  },
  {
    phase: "VISIÓN",
    label: "Entender el sueño del cliente",
    desc: "En esta fase queremos entender qué quieren lograr, más allá de los detalles técnicos. Si nos dicen 'quiero un concierto', la respuesta correcta no es '¿cuántas sillas necesitan?' sino '¿qué quieren que la gente sienta cuando llegue a casa?'.",
    questions: [
      {
        q: "¿Cuál es el objetivo principal de este evento?",
        why: "Si no sabemos para qué sirve el evento, no podemos diseñar nada bien. Un evento corporativo de networking tiene una lógica completamente diferente a una feria cultural comunitaria.",
        category: "OBJETIVO",
      },
      {
        q: "Si el evento fuera un éxito total, ¿cómo lo describirías al día siguiente?",
        why: "Esta pregunta nos da la imagen mental del cliente sobre el éxito. Es mucho más reveladora que preguntar directamente por los KPIs, porque baja la guardia y produce respuestas más honestas.",
        category: "VISIÓN",
      },
      {
        q: "¿Hay algún evento de referencia que admiren o que quieran emular?",
        why: "Las referencias concretas nos ahorran cien conversaciones. Si el cliente dice 'algo como el Lollapalooza pero más íntimo', tenemos un punto de partida visual, logístico y emocional.",
        category: "REFERENCIA",
      },
    ],
  },
  {
    phase: "AUDIENCIA",
    label: "Quién va a estar ahí",
    desc: "El evento no es para el cliente, es para su audiencia. Entender a quién va dirigido el evento es fundamental para tomar decisiones de espacio, horario, comunicación, precio de entrada y tipo de contenido.",
    questions: [
      {
        q: "¿Quién es tu audiencia ideal?",
        why: "La audiencia define todo: el espacio, la comunicación, el horario, el precio y el contenido.",
        category: "PERFIL",
      },
      {
        q: "¿Cuántas personas esperan que asistan?",
        why: "La escala impacta directamente en permisos, espacio y logística.",
        category: "ESCALA",
      },
      {
        q: "¿Tu audiencia ya te conoce o necesitas presentarte?",
        why: "Define la estrategia de comunicación.",
        category: "RELACIÓN",
      },
      {
        q: "¿Hay grupos especiales que requieran atención diferenciada?",
        why: "Permite planificar inclusión desde el inicio.",
        category: "INCLUSIÓN",
      },
    ],
  },
  {
    phase: "RECURSOS",
    label: "Con qué contamos",
    desc: "Hablamos de dinero y tiempo de forma directa.",
    questions: [
      {
        q: "¿Cuál es el presupuesto total disponible?",
        why: "Define el alcance real del evento.",
        category: "PRESUPUESTO",
      },
      {
        q: "¿Cuánto tiempo tenemos desde hoy hasta el evento?",
        why: "Define qué es posible ejecutar.",
        category: "TIEMPO",
      },
      {
        q: "¿Qué recursos propios tienen disponibles?",
        why: "Evita gastos innecesarios.",
        category: "ACTIVOS",
      },
    ],
  },
  {
    phase: "HISTORIAL",
    label: "Qué han hecho antes",
    desc: "Aprendemos del pasado.",
    questions: [
      {
        q: "¿Han organizado eventos similares antes?",
        why: "Evita repetir errores.",
        category: "EXPERIENCIA",
      },
      {
        q: "¿Con qué proveedores han trabajado antes?",
        why: "Aprovecha experiencia previa.",
        category: "PROVEEDORES",
      },
      {
        q: "¿Ha habido alguna crisis en eventos pasados?",
        why: "Identifica puntos débiles.",
        category: "RIESGOS",
      },
    ],
  },
  {
    phase: "RESTRICCIONES",
    label: "Qué no podemos hacer",
    desc: "Las restricciones son información de diseño.",
    questions: [
      {
        q: "¿Existen regulaciones o permisos especiales?",
        why: "Evita bloqueos legales.",
        category: "LEGAL",
      },
      {
        q: "¿Hay cosas que definitivamente NO quieren incluir?",
        why: "Evita conflictos.",
        category: "RESTRICCIONES",
      },
      {
        q: "¿Cómo miden el éxito?",
        why: "Define métricas claras.",
        category: "MÉTRICAS",
      },
    ],
  },
];

export default function DocEntrevista() {
  const [openPhase, setOpenPhase] = useState("VISIÓN");
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <SectionHeader
        tag="// DOC.004 — PROTOCOLO"
        title="Cómo Conducimos una Entrevista"
        subtitle="La entrevista inicial es el momento más crítico."
      />

      <div className="space-y-2">
        {phases.map((section) => (
          <div key={section.phase} className="border border-border overflow-hidden">
            <button
              onClick={() => setOpenPhase(openPhase === section.phase ? null : section.phase)}
              className="w-full flex justify-between p-5 text-left"
            >
              <span>{section.label}</span>
              <span>{openPhase === section.phase ? "-" : "+"}</span>
            </button>

            {openPhase === section.phase && (
              <motion.div className="p-5 space-y-4 bg-iron/10">
                <p className="text-sm">{section.desc}</p>

                {section.questions.map((item, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredIdx(`${section.phase}-${i}`)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    className="border p-4"
                  >
                    <p>"{item.q}"</p>

                    {hoveredIdx === `${section.phase}-${i}` && (
                      <p className="mt-2 text-xs">{item.why}</p>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}