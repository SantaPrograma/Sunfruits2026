"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title:
      "Nuestras operaciones cumplen con las buenas prácticas de manufactura de la industria e inocuidad de los procesos de empaque y enfriamiento.",
    image: "/Servicios/card1.jpg",
  },
  {
    title:
      "Cultura corporativa con personal comprometido y empoderado para brindar lo mejor de sí en favor de nuestra empresa y clientes.",
    image: "/Servicios/card2.jpg",
  },
  {
    title:
      "Trabajamos constantemente en minimizar el impacto ambiental en nuestras operaciones, estrictos controles de calidad en todas las etapas del proceso.",
    image: "/Servicios/card3.jpg",
  },
  {
    title:
      "Inversión permanente en Investigación y Desarrollo, mejorando procesos y tecnologías.",
    image: "/Servicios/card4.jpg",
  },
];

export default function NuestraPlanta() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Fondo */}
      <Image
        src="/Servicios/despacho.jpg"
        alt="Nuestros Servicios"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Titulo */}
        <div className="flex flex-col items-center gap-4 pt-28 lg:pt-40">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-[#4ade80] font-extrabold leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Nuestros Servicios
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/Servicios/icon.png"
              alt="Nuestra Planta"
              width={36}
              height={36}
            />
            <h2
              className="text-white font-semibold tracking-wide text-lg sm:text-xl md:text-2xl"
            >
              Nuestra Planta
            </h2>
          </motion.div>
        </div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-10 max-w-4xl text-white/90 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 text-center"
        >
          <p>
            Compartimos una cultura corporativa con gente comprometida y
            empoderada para brindar lo mejor de sí en favor de nuestra empresa y
            clientes; reunimos un equipo de personas altamente experimentadas.
          </p>

          <p>
            La calidad de los servicios que prestamos nos ha granjeado una alta
            reputación y credibilidad en el sector agroexportador.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="mt-12 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-16"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              tabIndex={0}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="group relative aspect-square rounded-2xl overflow-hidden border border-white/20
               bg-white/5 flex items-center justify-center focus:outline-none"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover opacity-0 group-hover:opacity-100 group-active:opacity-100
                group-focus-within:opacity-100 transition-opacity duration-300"
              />
              <div
                className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-active:opacity-100
                group-focus-within:opacity-100 transition-opacity duration-300"
              />

              <span className="relative z-10 px-4 text-white text-xs sm:text-sm md:text-base font-semibold text-center">
                {card.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
