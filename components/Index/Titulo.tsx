"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductosServicios from "./ProductosServicios";
import SeccionesInferiores from "./SeccionesInferiores";

export default function Titulo() {
  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center text-center text-white px-6 pt-24 md:pt-40 pb-12">
      {/* Bloque principal */}
      <div className="flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-sm tracking-[0.8em] uppercase opacity-85"
        >
          Ica - Perú
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/Index/logo.svg"
            alt="Logo"
            width={420}
            height={120}
            priority
            className="mb-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-105 h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-2xl text-lg md:text-2xl font-light tracking-wide text-white/90 italic mb-12"
        >
          Frutos de la tierra y el sol, llevados al mundo con
          <span
            className="text-[#4ade80] not-italic font-medium"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.85)" }}
          >
            estándares de excelencia.
          </span>
        </motion.p>
      </div>

      {/* Menús */}
      <div className="flex flex-col items-center gap-6">
        <ProductosServicios />
        <SeccionesInferiores />
      </div>
    </div>
  );
}
