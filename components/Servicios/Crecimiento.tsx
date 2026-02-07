"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const growthImages = [
  "/Servicios/crecimiento1.png",
  "/Servicios/crecimiento2.png",
  "/Servicios/crecimiento3.png",
  "/Servicios/crecimiento4.png",
  "/Servicios/crecimiento5.png",
  "/Servicios/crecimiento6.png",
  "/Servicios/crecimiento7.png",
  "/Servicios/crecimiento8.png",
  "/Servicios/crecimiento9.png",
];

export default function CrecimientoProgresivo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const delay = currentIndex === growthImages.length - 1 ? 3000 : 1000;
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % growthImages.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section
      className="relative w-full h-100 md:h-120 lg:h-140 bg-cover bg-center"
      style={{ backgroundImage: "url('/Servicios/bg-historia.bak.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#f5f7f6] to-[#f5f7f6]/20"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col items-center justify-center">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <Image
            src="/Servicios/icon.png"
            alt="Crecimiento Progresivo"
            width={36}
            height={36}
          />
          <h2 className="text-[#374151] font-semibold text-lg sm:text-xl md:text-2xl">
            Crecimiento Progresivo
          </h2>
        </motion.div>

        {/* Contenedor de imagen */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full max-w-4xl h-75 md:h-100 bg-black/30 backdrop-blur-md rounded-2xl flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-80 h-80 md:w-180 md:h-180 shrink-0 p-2">
            <Image
              src={growthImages[currentIndex]}
              alt={`Crecimiento ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
