"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/Nosotros/image2.jpg",
  "/Nosotros/image1.jpg",
  "/Nosotros/image3.jpg",
];

export default function Cultura() {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (isHovering) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="relative w-full min-h-screen py-24 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0 min-h-full">
        <Image
          src="/Nosotros/bg-tierra.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center justify-center gap-3"
        >
          <Image src="/Servicios/icon.png" alt="" width={28} height={28} />
          <h2 className="text-white font-semibold tracking-wide text-xl sm:text-2xl">
            Nuestra Cultura
          </h2>
        </motion.div>

        {/* Contenido */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
          {/* Carrusel */}
          <motion.div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={images[index]}
                alt=""
                fill
                className="object-cover transition-all duration-500"
              />

              {/* Indicador de pausa */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isHovering ? 1 : 0,
                  scale: isHovering ? 1 : 0.9,
                }}
                transition={{ duration: 0.25 }}
                className="pointer-events-none absolute top-3 right-3 z-10"
              >
                <div className="flex items-center justify-center rounded-xl bg-black/65 px-3 py-2 text-white text-lg font-semibold shadow-lg">
                  ⏸
                </div>
              </motion.div>
            </div>

            {/* Controles */}
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={prev}
                className="rounded-full border border-white/50 px-4 py-1 text-sm text-white hover:bg-white/10 transition"
              >
                ←
              </button>
              <button
                onClick={next}
                className="rounded-full border border-white/50 px-4 py-1 text-sm text-white hover:bg-white/10 transition"
              >
                →
              </button>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-white/90 text-sm sm:text-base leading-relaxed"
          >
            <p className="font-semibold text-white">
              Brindamos servicios integrales de procesamiento, empaque y
              conservación de frutas, cumpliendo los más altos estándares de
              calidad.
            </p>

            <p>
              Nuestra infraestructura moderna y nuestro equipo especializado nos
              permiten atender tanto producción propia como de terceros,
              garantizando eficiencia, trazabilidad y excelencia operativa.
            </p>

            <p>
              Trabajamos de la mano con productores de distintas regiones del
              país, acompañándolos en cada etapa del proceso hasta la entrega
              final a los mercados internacionales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
