import { motion } from "framer-motion";
import SectionHeader from "../../components/SeccionHeader";

const pillars = [
  {
    num: "01",
    title: "Mediación",
    desc: "Actuamos como el puente entre todas las partes que necesitan trabajar juntas para que un evento suceda. Hablamos con el cliente para entender qué quiere, con el municipio para gestionar permisos, con proveedores para negociar condiciones y con el equipo creativo para mantener coherencia. Sin mediación, cada parte optimiza lo suyo y el evento se rompe.",
  },
  {
    num: "02",
    title: "Organización",
    desc: "Convertimos la intención en ejecución. Coordinamos personal, gestionamos el espacio, estructuramos el cronograma y aseguramos que cada elemento esté en el lugar correcto en el momento correcto. La organización no evita problemas: los anticipa.",
  },
  {
    num: "03",
    title: "Publicidad",
    desc: "Un evento sin audiencia no existe. Diseñamos la estrategia de comunicación: mensaje, canales y timing. Desde el primer impacto hasta el cierre, construimos expectativa, mantenemos atención y medimos el alcance real generado.",
  },
  {
    num: "04",
    title: "Documentación Técnica",
    desc: "Todo queda registrado. Desde la primera conversación hasta el informe final. Documentar no es burocracia: es control, aprendizaje acumulado y respaldo profesional. Es lo que convierte experiencia en sistema.",
  },
];

const differentials = [
  {
    title: "Trabajamos con la ciudad, no contra ella",
    desc: "El municipio no es un obstáculo, es un habilitador. Gestionar correctamente permisos y relaciones institucionales permite escalar eventos en alcance, visibilidad y recursos.",
  },
  {
    title: "Pensamos en la experiencia, no solo en la logística",
    desc: "No diseñamos eventos, diseñamos experiencias. Cada interacción —registro, acceso, señalización, contenido y cierre— forma parte del resultado final.",
  },
  {
    title: "La documentación como ventaja competitiva",
    desc: "Mientras otros improvisan, nosotros acumulamos conocimiento. Cada error documentado evita futuros fallos. Cada acierto se convierte en estándar.",
  },
  {
    title: "Escalabilidad desde el día uno",
    desc: "Nuestros procesos funcionan igual en 200 o en 20,000 asistentes. Cambia la magnitud, no el método.",
  },
];

export default function DocQueSon() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl"
    >
      <SectionHeader
        tag="// DOC.001 — DEFINICIÓN"
        title="¿Qué son los Eventos Metropolitanos?"
      />

      <div className="space-y-8">

        {/* Intro */}
        <div className="space-y-4">
          <p className="font-inter text-base text-silver/80 leading-relaxed">
            Los <span className="text-lime font-semibold">Eventos Metropolitanos</span> son operaciones coordinadas que transforman espacios urbanos en experiencias de alto impacto. No somos solo logística: somos el sistema que conecta a todas las partes necesarias para que un evento exista, funcione y deje huella.
          </p>
          <p className="font-inter text-base text-silver/70 leading-relaxed">
            Un concierto en una plaza pública implica permisos, proveedores, diseño, comunicación, registro, seguridad y control operativo. Nosotros integramos todo eso bajo un mismo proceso, con precisión de ingeniería.
          </p>
          <p className="font-inter text-base text-silver/70 leading-relaxed">
            <span className="text-lime">Metropolitano</span> no es solo un nombre: define la escala. Operamos en la ciudad, con la ciudad y para la ciudad.
          </p>
        </div>

        {/* Quote */}
        <div className="border border-border border-l-2 border-l-lime/40 pl-6 py-3 bg-iron/20">
          <p className="font-mono text-xs text-lime/60 mb-2">// PRINCIPIO FUNDAMENTAL</p>
          <p className="font-inter text-sm text-silver/80 leading-relaxed italic">
            "Un evento metropolitano no es un encuentro. Es una pieza de ingeniería social. La diferencia entre un evento memorable y un desastre no está en el presupuesto: está en la metodología."
          </p>
        </div>

        {/* Pilares */}
        <div>
          <h3 className="font-space font-bold text-xl text-silver mb-6">
            Los 4 pilares de lo que hacemos
          </h3>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 border border-border p-6 bg-iron/20 hover:border-lime/30 transition-colors"
              >
                <span className="font-space font-bold text-3xl text-lime/20 shrink-0 mt-1">
                  {p.num}
                </span>
                <div>
                  <h4 className="font-space font-bold text-base text-lime mb-2">
                    {p.title}
                  </h4>
                  <p className="font-inter text-sm text-silver/70 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Diferenciales */}
        <div>
          <h3 className="font-space font-bold text-xl text-silver mb-2">
            ¿Por qué somos diferentes?
          </h3>
          <p className="font-inter text-sm text-muted-foreground mb-6">
            No organizamos eventos como los demás. Esto es lo que nos distingue:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-border p-5 bg-iron/10 hover:border-lime/30 transition-colors"
              >
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-2 h-2 bg-lime rounded-full mt-2" />
                  <h4 className="font-space font-bold text-sm text-silver">
                    {d.title}
                  </h4>
                </div>
                <p className="font-inter text-xs text-muted-foreground leading-relaxed pl-5">
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nota */}
        <div className="border border-lime/20 bg-lime/5 p-6">
          <p className="font-mono text-[10px] text-lime/50 mb-3">
            // NOTA OPERATIVA
          </p>
          <p className="font-inter text-sm text-silver/70 leading-relaxed">
            Todos los proyectos siguen el mismo proceso metodológico. No importa si son 500 o 15,000 asistentes. La diferencia es la escala, no el rigor.
          </p>
        </div>

      </div>
    </motion.div>
  );
}