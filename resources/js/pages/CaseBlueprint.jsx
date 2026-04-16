import { motion } from "framer-motion";

const validationLogs = [
  { id: "VAL-001", req: "Permiso de uso del espacio público central", status: "APROBADO", date: "2024-02-10" },
  { id: "VAL-002", req: "Certificación de instalaciones eléctricas para exhibiciones", status: "APROBADO", date: "2024-02-20" },
  { id: "VAL-003", req: "Convenios con 7 universidades de ingeniería", status: "APROBADO", date: "2024-03-01" },
  { id: "VAL-004", req: "Presupuesto STEM aprobado por patrocinadores", status: "EN REVISIÓN", date: "2024-03-05" },
  { id: "VAL-005", req: "Protocolo de seguridad para talleres con equipo técnico", status: "APROBADO", date: "2024-03-10" },
];

const useCases = [
  {
    id: "UC-π01",
    title: "Registro de Participante STEM",
    desc: "El estudiante o profesional se registra con su institución. El sistema asigna acceso diferenciado a talleres según perfil: básico, intermedio o avanzado."
  },
  {
    id: "UC-π02",
    title: "Activación de Taller Técnico",
    desc: "El facilitador inicia el taller con escaneo QR. El sistema registra asistencia, distribuye materiales digitales y activa el temporizador de 31 minutos."
  },
  {
    id: "UC-π03",
    title: "Votación Concurso de Ingeniería",
    desc: "Los asistentes acceden al módulo de votación en tiempo real para el concurso de proyectos. Los resultados se muestran en pantallas grandes con visualización en espiral de Pi."
  }
];

export default function CaseBlueprint() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      
      {/* Validation Log */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h3 className="font-space font-bold text-lg text-silver">
            Registro de Validaciones
          </h3>
        </div>

        <div className="border border-border overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 px-5 py-3 bg-iron/40 border-b border-border">
            <span className="font-mono text-[10px] text-lime/50 tracking-wider">ID</span>
            <span className="font-mono text-[10px] text-lime/50 tracking-wider">REQUISITO</span>
            <span className="font-mono text-[10px] text-lime/50 tracking-wider">ESTADO</span>
            <span className="font-mono text-[10px] text-lime/50 tracking-wider">FECHA</span>
          </div>

          {validationLogs.map((log) => (
            <div
              key={log.id}
              className="grid grid-cols-4 gap-4 px-5 py-3 border-b border-border last:border-b-0 hover:bg-iron/20 transition-colors"
            >
              <span className="font-mono text-xs text-lime/60">{log.id}</span>
              <span className="font-inter text-xs text-silver/70">{log.req}</span>

              <span
                className={`font-mono text-[10px] inline-flex items-center ${
                  log.status === "APROBADO"
                    ? "text-lime"
                    : "text-yellow-500"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full mr-2 ${
                    log.status === "APROBADO"
                      ? "bg-lime"
                      : "bg-yellow-500"
                  }`}
                />
                {log.status}
              </span>

              <span className="font-mono text-xs text-muted-foreground">
                {log.date}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h3 className="font-space font-bold text-lg text-silver">
            Casos de Uso del Evento
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border p-5 bg-iron/20 hover:border-lime/30 transition-colors"
            >
              <span className="font-mono text-[10px] text-lime/50 tracking-widest">
                {uc.id}
              </span>
              <h4 className="font-space font-bold text-sm text-silver mt-2 mb-3">
                {uc.title}
              </h4>
              <p className="font-inter text-xs text-muted-foreground leading-relaxed">
                {uc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="border border-lime/20 bg-lime/5 p-6">
        <h3 className="font-space font-bold text-lg text-lime mb-3">
          Resultado del Blueprint
        </h3>
        <p className="font-inter text-sm text-silver/70 leading-relaxed">
          Gracias a la documentación exhaustiva, Pi Day Metropolitan logró conectar a
          <span className="text-lime font-semibold"> 3,141 participantes</span> de 7 universidades,
          con una satisfacción del <span className="text-lime font-semibold">97%</span> y
          una reducción del <span className="text-lime font-semibold">31%</span> en costos operativos.
        </p>
      </div>
    </motion.div>
  );
}