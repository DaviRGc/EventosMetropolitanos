import { motion } from "framer-motion";

const highlights = [
  { label: "Asistentes Esperados", value: "3,141" },
  { label: "Instituciones Aliadas", value: "π×7" },
  { label: "Talleres Técnicos", value: "31" },
  { label: "Área del Evento", value: "3,141 m²" },
];

export default function CaseVision() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      {/* Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="border border-border p-5 bg-iron/20 text-center"
          >
            <span className="font-space font-bold text-2xl text-lime">
              {h.value}
            </span>
            <p className="mt-1 font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
              {h.label}
            </p>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Concepto */}
        <div className="space-y-4">
          <h3 className="font-space font-bold text-xl text-silver">
            El Concepto
          </h3>

          <p className="font-inter text-sm text-muted-foreground leading-relaxed">
            Pi Day Metropolitan es un festival de ciencias e ingeniería que transforma el centro
            urbano en un laboratorio abierto cada 14 de marzo (3/14). El evento conecta estudiantes,
            profesionales y público general alrededor de la belleza de las matemáticas, la física
            y el diseño de sistemas complejos.
          </p>

          <p className="font-inter text-sm text-muted-foreground leading-relaxed">
            La propuesta integra instalaciones interactivas de geometría y fractales proyectadas
            en edificios, circuitos de resolución de problemas en tiempo real, concursos de cálculo
            mental y charlas magistrales de ingenieros metropolitanos reconocidos.
          </p>
        </div>

        {/* Participación */}
        <div className="space-y-4">
          <h3 className="font-space font-bold text-xl text-silver">
            Nuestra Participación
          </h3>

          <ul className="space-y-3">
            {[
              "Mediación entre universidades de ingeniería, el municipio y patrocinadores STEM",
              "Documentación de requisitos técnicos para instalaciones científicas interactivas",
              "Diseño de flujos de usuario para 4 zonas: Matemáticas, Física, Cómputo y Exhibición",
              "Estrategia de comunicación orientada a comunidades académicas y profesionales",
              "Coordinación de 31 ponentes, 14 talleres y logística para 3,141 asistentes",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-lime rounded-full mt-2 shrink-0" />
                <span className="font-inter text-sm text-silver/70">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </motion.div>
  );
}