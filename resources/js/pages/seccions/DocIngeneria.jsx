import { motion } from "framer-motion";
import SectionHeader from "../../components/SeccionHeader";

const cybersecItems = [
  {
    area: "Confidencialidad",
    risk: "Filtración de datos de asistentes y contratos con proveedores.",
    control: "Cifrado AES-256 en tránsito y en reposo. Acceso restringido por roles (RBAC).",
  },
  {
    area: "Integridad",
    risk: "Manipulación de registros de validación o presupuestos del evento.",
    control: "Logs de auditoría inmutables y firmas digitales en documentos críticos.",
  },
  {
    area: "Disponibilidad",
    risk: "Caída del sistema de registro durante el evento (Day-of Operations).",
    control: "Arquitectura con redundancia activa y SLA mínimo de 99.5% de uptime.",
  },
  {
    area: "Autenticación",
    risk: "Acceso no autorizado al panel de coordinación.",
    control: "Autenticación multifactor (MFA) obligatoria para operadores y administradores.",
  },
  {
    area: "Cumplimiento",
    risk: "Incumplimiento de normativas de protección de datos (GDPR / LFPDPPP).",
    control: "Política de privacidad documentada y consentimiento explícito en registro.",
  },
];

const cocomoPhases = [
  {
    fase: "Iniciación",
    esfuerzo: "8%",
    desc: "Definición del alcance, levantamiento de requisitos y formación del equipo base.",
  },
  {
    fase: "Elaboración",
    esfuerzo: "20%",
    desc: "Diseño de arquitectura, prototipos clave y planificación de riesgos.",
  },
  {
    fase: "Construcción",
    esfuerzo: "55%",
    desc: "Desarrollo e integración de módulos principales del sistema.",
  },
  {
    fase: "Transición",
    esfuerzo: "17%",
    desc: "Pruebas de aceptación, capacitación y despliegue en producción.",
  },
];

const metodologiaSteps = [
  {
    num: "01",
    title: "Levantamiento de Requisitos",
    desc: "Entrevistas estructuradas con stakeholders. Historias de usuario priorizadas con técnica MoSCoW.",
  },
  {
    num: "02",
    title: "Diseño de Sistema",
    desc: "Modelado UML (casos de uso, secuencia y clases) y arquitectura orientada a servicios.",
  },
  {
    num: "03",
    title: "Desarrollo Iterativo (Scrum)",
    desc: "Sprints de 2 semanas con revisiones, retrospectivas y mejora continua.",
  },
  {
    num: "04",
    title: "Pruebas y Control de Calidad",
    desc: "Testing unitario, integración y aceptación del usuario (UAT).",
  },
  {
    num: "05",
    title: "Entrega y Documentación",
    desc: "Documentación técnica y manual de usuario. Entrega con soporte post-lanzamiento.",
  },
];

export default function DocIngenieria() {
  return (
    <div className="space-y-16 max-w-4xl">
      <SectionHeader
        title="Ingeniería de Software"
        subtitle="Análisis técnico aplicado a la plataforma de gestión de eventos: ciberseguridad, estimación de costos y metodología de desarrollo."
      />

      {/* Ciberseguridad */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-space font-bold text-xl text-silver mb-2">
          Análisis de Ciberseguridad
        </h3>
        <p className="font-inter text-sm text-muted-foreground mb-6 leading-relaxed">
          La plataforma gestiona datos sensibles de asistentes y operaciones críticas.
          Se aplicó el modelo <span className="text-lime">CIA Triad</span> para
          identificar riesgos y definir controles por cada vector de amenaza.
        </p>

        <div className="border border-border overflow-hidden">
          <div className="grid grid-cols-3 px-5 py-3 bg-iron/40 border-b border-border">
            <span className="font-mono text-[10px] text-lime/50">ÁREA</span>
            <span className="font-mono text-[10px] text-lime/50">RIESGO</span>
            <span className="font-mono text-[10px] text-lime/50">CONTROL</span>
          </div>

          {cybersecItems.map((item, i) => (
            <motion.div
              key={item.area}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-3 gap-4 px-5 py-4 border-b border-border last:border-b-0 hover:bg-iron/20"
            >
              <span className="font-space font-bold text-xs text-lime">
                {item.area}
              </span>
              <span className="text-xs text-silver/70">{item.risk}</span>
              <span className="text-xs text-muted-foreground">
                {item.control}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* COCOMO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-space font-bold text-xl text-silver mb-2">
          Estimación con COCOMO II
        </h3>

        <p className="font-inter text-sm text-muted-foreground mb-6 leading-relaxed">
          Se utilizó el modelo <span className="text-lime">COCOMO II</span> en
          modo semi-detached para estimar el esfuerzo del sistema.
          El proyecto (~18 KSLOC) resulta en aproximadamente
          <span className="text-lime"> 42 personas-mes</span> y
          <span className="text-lime"> 9 meses</span> de desarrollo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cocomoPhases.map((p, i) => (
            <motion.div
              key={p.fase}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border p-5 bg-iron/20 hover:border-lime/30"
            >
              <div className="flex justify-between mb-2">
                <span className="font-space font-bold text-sm text-silver">
                  {p.fase}
                </span>
                <span className="text-xs text-lime bg-lime/10 px-2">
                  {p.esfuerzo}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 border border-lime/20 bg-lime/5 px-5 py-4">
          <p className="font-mono text-xs text-lime/70">
            E = a × (KSLOC)^b × EAF
          </p>
        </div>
      </motion.div>

      {/* Metodología */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="font-space font-bold text-xl text-silver mb-2">
          Metodología de Trabajo
        </h3>

        <p className="text-sm text-muted-foreground mb-6">
          Enfoque híbrido <span className="text-lime">Scrum + RUP</span>.
        </p>

        <div className="space-y-3">
          {metodologiaSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5 border border-border p-5 bg-iron/20 hover:border-lime/30"
            >
              <span className="text-2xl text-lime/30">{step.num}</span>
              <div>
                <h4 className="font-bold text-sm text-silver">
                  {step.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}