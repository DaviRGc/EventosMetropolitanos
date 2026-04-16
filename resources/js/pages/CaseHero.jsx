import { motion } from "framer-motion";
import MetaOverlay from "./MetaOverlay";

export default function CaseHero() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69d870a3140962f0424e7ff6/411add814_generated_cce6e895.png"
          alt="Dramatic aerial view of urban event venue at night"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-12 max-w-7xl mx-auto w-full">
        
        <MetaOverlay
          text="// CASO DE ESTUDIO — MISIÓN: PI DAY METROPOLITAN 2024 — 3.14"
          className="mb-4 block"
        />

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-space font-bold text-4xl md:text-6xl text-silver leading-tight"
        >
          PI DAY<br />
          <span className="text-lime">METROPOLITAN</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 font-inter text-base text-muted-foreground max-w-xl"
        >
          Un evento urbano de ingeniería y ciencias celebrado el 14 de marzo. Caso ficticio que demuestra
          nuestra metodología completa de mediación, documentación y ejecución para comunidades STEM.
        </motion.p>

      </div>
    </section>
  );
}