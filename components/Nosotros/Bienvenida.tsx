"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Bienvenida() {
  return (
    <section className="relative w-full">
      {/* Contenedor que define el tamaño */}
      <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
        {/* Imagen de fondo */}
        <Image
          src="/Nosotros/header-bg.png"
          alt="Bienvenida"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0"></div>

        {/* Contenido */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 pt-28 lg:pt-40">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-[#4ade80] font-extrabold leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Bienvenidos a Sun Fruits Exports S.A.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <h2 className="text-white font-semibold tracking-wide text-lg sm:text-xl md:text-2xl">
                Valle de Ica, Perú
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
