import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <section className="pt-28 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-xs text-lime/70 tracking-widest mb-4"
      >
        // EVENTOS METROPOLITANOS
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        className="font-space font-bold text-4xl md:text-7xl leading-[0.95]"
      >
        Diseñamos y ejecutamos
        <span className="text-lime block">eventos de alto impacto</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
        className="mt-6 max-w-2xl text-silver/70"
      >
        Plataforma de trabajo para mediacion, documentacion tecnica y ejecucion
        operativa en eventos urbanos.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.24 }}
        className="mt-10 flex flex-wrap gap-3"
      >
        <Link
          to="/documentacion"
          className="bg-lime text-asphalt px-5 py-3 font-mono text-xs tracking-wider"
        >
          VER DOCUMENTACION
        </Link>
        <Link
          to="/caso-estudio"
          className="border border-border px-5 py-3 font-mono text-xs tracking-wider hover:border-lime/40"
        >
          VER CASO DE ESTUDIO
        </Link>
      </motion.div>

      <HeroSection />
      <AboutSection />
    </section>
  );
}