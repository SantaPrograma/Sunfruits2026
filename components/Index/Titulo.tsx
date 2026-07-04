"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductosServicios from "./ProductosServicios";
import SeccionesInferiores from "./SeccionesInferiores";

export default function Titulo() {
  return (
    <div className="relative z-10 flex min-h-dvh w-full flex-col items-center justify-center px-5 py-28 text-center text-white sm:px-6 md:py-36">
      {/* Bloque principal */}
      <div className="flex w-full flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mb-5 text-[11px] font-medium uppercase tracking-[0.55em] text-white/85 sm:text-sm sm:tracking-[0.8em]"
        >
          Ica - Perú
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.35 }}
          className="flex w-full justify-center"
        >
          <Image
            src="/Index/logo.svg"
            alt="Logo Sunfruits"
            width={420}
            height={120}
            priority
            className="mb-6 h-auto w-[min(82vw,420px)] drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mb-8 max-w-2xl text-balance text-base font-light leading-relaxed tracking-wide text-white/90 italic sm:text-lg md:mb-10 md:text-2xl"
        >
          Frutos de la tierra y el sol, llevados al mundo con{" "}
          <span
            className="font-medium not-italic text-[#4ade80]"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.85)" }}
          >
            estándares de excelencia.
          </span>
        </motion.p>
      </div>

      {/* Menús */}
      <div className="flex w-full flex-col items-center gap-5 md:gap-6">
        <ProductosServicios />
        <SeccionesInferiores />
      </div>
    </div>
  );
}
