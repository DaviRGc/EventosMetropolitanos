import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SeccionHeader";

const stakeholders = [
  { role: "Clientes", desc: "Empresas, instituciones y marcas que contratan la organización de sus eventos." },
  { role: "Proveedores", desc: "Logística, sonido, iluminación, catering y servicios técnicos especializados." },
  { role: "Municipio", desc: "Autoridades locales que otorgan permisos de uso de espacio público y seguridad." },
  { role: "Comunidad", desc: "Asistentes, vecinos y públicos afectados que forman parte del ecosistema del evento." },
];

const stats = [
  { value: "150+", label: "Eventos ejecutados" },
  { value: "98%", label: "Satisfacción cliente" },
  { value: "24/7", label: "Operaciones activas" },
  { value: "50+", label: "Aliados estratégicos" },
];

export default function AboutSection() {
  return (
    <section className="relative py-24 px-6 pt-32"> {/* 👈 padding para navbar */}
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="¿Quiénes somos?"
          subtitle="Somos el nexo entre la visión creativa y la ejecución logística. Eventos Metropolitanos transforma ideas en experiencias urbanas de alto impacto a través de mediación, organización y publicidad estratégica."
        />

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border p-6 bg-iron/50 hover:border-lime/40 transition-colors group"
            >
              <span className="font-space font-bold text-3xl md:text-4xl text-lime group-hover:text-silver transition-colors">
                {stat.value}
              </span>
              <p className="mt-2 font-mono text-xs text-muted-foreground tracking-wider uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stakeholders */}
        <div className="mt-16">
          <h3 className="font-space font-bold text-xl text-silver mb-6">
            Nuestros Stakeholders
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stakeholders.map((s, i) => (
              <motion.div
                key={s.role}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 border border-border p-5 bg-iron/20 hover:border-lime/30 transition-colors"
              >
                <span className="w-2 h-2 bg-lime rounded-full mt-2 shrink-0" />

                <div>
                  <span className="font-space font-bold text-sm text-lime">
                    {s.role}
                  </span>
                  <p className="mt-1 font-inter text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}