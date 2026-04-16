import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MetaOverlay from "../pages/MetaOverlay";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media.base44.com/images/public/69d870a3140962f0424e7ff6/be02d5feb_generated_5a985a71.png"
          alt="Metropolitan highway at night"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-asphalt via-asphalt/70 to-asphalt" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full pt-32">

        {/* Title */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-space font-bold text-6xl md:text-8xl lg:text-9xl text-lime leading-none tracking-tight"
          >
            EVENTOS
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="font-space font-bold text-6xl md:text-8xl lg:text-9xl text-silver leading-none tracking-tight"
          >
            METROPOLITANOS
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 max-w-xl"
        >
          <p className="font-inter text-lg md:text-xl text-muted-foreground leading-relaxed">
            Mediadores. Organizadores. Publicistas.
            <br />
            <span className="text-lime">
              Ingeniería de eventos urbanos
            </span>{" "}
            de alta velocidad.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex gap-4 flex-wrap"
        >
          <a
            href="/documentacion"
            className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-asphalt font-space font-bold text-sm tracking-wider hover:bg-lime/90 transition-colors"
          >
            EXPLORAR ARCHIVO
          </a>

          <a
            href="/caso-estudio"
            className="inline-flex items-center gap-2 px-6 py-3 border border-lime/40 text-lime font-space font-bold text-sm tracking-wider hover:bg-lime/10 transition-colors"
          >
            VER CASO DE ESTUDIO
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-6"
        >
          <ArrowDown className="text-lime animate-bounce" />
        </motion.div>

      </div>

      {/* Overlay opcional */}
      <MetaOverlay />
    </section>
  );
}