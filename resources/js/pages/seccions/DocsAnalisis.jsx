import { motion } from "framer-motion";
import SectionHeader from "../../components/SeccionHeader";

const steps = [
  {
    step: "01",
    title: "Depuracion de hallazgos",
    desc: "Consolidamos entrevistas, notas de campo y restricciones tecnicas.",
    detail: "El equipo unifica criterios para evitar contradicciones tempranas.",
  },
  {
    step: "02",
    title: "Priorizacion",
    desc: "Clasificamos requisitos por impacto operativo y urgencia.",
    detail: "Usamos una matriz valor-riesgo para decidir que atacar primero.",
  },
  {
    step: "03",
    title: "Validacion con stakeholders",
    desc: "Revisamos supuestos con cliente, operaciones y proveedores.",
    detail: "Cada decision queda documentada con responsable y fecha.",
  },
  {
    step: "04",
    title: "Cierre analitico",
    desc: "Emitimos reporte final y plan de mitigacion accionable.",
    detail: "Nada pasa a ejecucion sin criterios de aceptacion definidos.",
  },
];

const risks = [
  {
    categoria: "Logistica",
    riesgo: "Demora en montaje por proveedor critico",
    probabilidad: "MEDIA",
    impacto: "ALTO",
    mitigacion: "Proveedor alterno preaprobado y buffer de 4 horas",
  },
  {
    categoria: "Legal",
    riesgo: "Permiso municipal emitido fuera de plazo",
    probabilidad: "BAJA",
    impacto: "ALTO",
    mitigacion: "Seguimiento semanal y carpeta documental estandar",
  },
  {
    categoria: "Operacion",
    riesgo: "Saturacion de accesos en hora pico",
    probabilidad: "ALTA",
    impacto: "MEDIO",
    mitigacion: "Rutas divididas y control de aforo en tiempo real",
  },
];

const probColors = {
  BAJA: "text-blue-400",
  MEDIA: "text-yellow-400",
  ALTA: "text-red-400",
};

const impactColors = {
  BAJO: "text-blue-400",
  MEDIO: "text-yellow-400",
  ALTO: "text-red-400",
};

export default function DocsAnalisis() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <SectionHeader
        tag="// DOC.006 - PROCESO"
        title="Analisis y Validacion"
        subtitle="Convertimos informacion dispersa en decisiones operativas claras."
      />

      <div className="mb-12">
        <h3 className="font-space font-bold text-xl text-silver mb-6">
          Flujo de analisis
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-asphalt p-6"
            >
              <span className="font-space font-bold text-2xl text-lime/40">
                {item.step}
              </span>
              <h4 className="font-space font-bold text-sm text-silver mt-2 mb-2">
                {item.title}
              </h4>
              <p className="font-inter text-xs text-silver/70 mb-2">{item.desc}</p>
              <p className="font-inter text-xs text-muted-foreground italic">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border border-border overflow-hidden">
        <div className="grid grid-cols-5 px-4 py-3 bg-iron/40 border-b border-border">
          {["CATEGORIA", "RIESGO", "PROB.", "IMPACTO", "MITIGACION"].map((h) => (
            <span key={h} className="font-mono text-[10px] text-lime/50 tracking-wider">
              {h}
            </span>
          ))}
        </div>

        {risks.map((r, i) => (
          <motion.div
            key={`${r.categoria}-${i}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-5 gap-2 px-4 py-4 border-b border-border last:border-b-0"
          >
            <span className="font-mono text-[10px] text-lime/60">{r.categoria}</span>
            <span className="font-inter text-xs text-silver/70">{r.riesgo}</span>
            <span className={`font-mono text-[10px] font-bold ${probColors[r.probabilidad]}`}>
              {r.probabilidad}
            </span>
            <span className={`font-mono text-[10px] font-bold ${impactColors[r.impacto]}`}>
              {r.impacto}
            </span>
            <span className="font-inter text-xs text-muted-foreground">{r.mitigacion}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}