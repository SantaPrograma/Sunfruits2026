"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductosServicios from "./ProductosServicios";
import SeccionesInferiores from "./SeccionesInferiores";

export default function Titulo() {
  return (
<<<<<<< HEAD
    <div className="relative z-10 flex min-h-dvh w-full flex-col items-center justify-center px-5 py-28 text-center text-white sm:px-6 md:py-36">
      {/* Bloque principal */}
      <div className="flex w-full flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="mb-5 text-[11px] font-medium uppercase tracking-[0.55em] text-white/85 sm:text-sm sm:tracking-[0.8em]"
=======
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center text-center text-white px-6 pt-24 md:pt-40 pb-12">
      {/* Bloque principal */}
      <div className="flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-sm tracking-[0.8em] uppercase opacity-85"
>>>>>>> f6ba32c48fa0ce4d8a0a7ddf6b938b3d9e98f46f
        >
          Ica - Perú
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
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
=======
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/Index/logo.svg"
            alt="Logo"
            width={420}
            height={120}
            priority
            className="mb-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-105 h-auto"
>>>>>>> f6ba32c48fa0ce4d8a0a7ddf6b938b3d9e98f46f
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mb-8 max-w-2xl text-balance text-base font-light leading-relaxed tracking-wide text-white/90 italic sm:text-lg md:mb-10 md:text-2xl"
        >
          Frutos de la tierra y el sol, llevados al mundo con{" "}
          <span
            className="font-medium not-italic text-[#4ade80]"
=======
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-2xl text-lg md:text-2xl font-light tracking-wide text-white/90 italic mb-12"
        >
          Frutos de la tierra y el sol, llevados al mundo con
          <br />
          <span
            className="text-[#4ade80] not-italic font-medium"
>>>>>>> f6ba32c48fa0ce4d8a0a7ddf6b938b3d9e98f46f
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.85)" }}
          >
            estándares de excelencia.
          </span>
        </motion.p>
      </div>

      {/* Menús */}
<<<<<<< HEAD
      <div className="flex w-full flex-col items-center gap-5 md:gap-6">
=======
      <div className="flex flex-col items-center gap-6">
>>>>>>> f6ba32c48fa0ce4d8a0a7ddf6b938b3d9e98f46f
        <ProductosServicios />
        <SeccionesInferiores />
      </div>
    </div>
  );
}
