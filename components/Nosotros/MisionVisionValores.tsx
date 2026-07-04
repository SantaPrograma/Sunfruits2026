"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const TABS = [
  {
    id: "mision",
    label: "Misión",
    content: (
      <p>
        Ser la empresa productora, empacadora y comercializadora de una
        diversidad de frutas, percibidas de excelencia, en los mercados donde
        las exportamos, con un sello de calidad que reconoce fácilmente las
        excelentes condiciones de la presentación y conservación de sus mejores
        características como productos frescos. Desarrollamos el principio de la
        búsqueda del bien común, sin descuidar el objetivo de crecer
        eficientemente.
      </p>
    ),
  },
  {
    id: "vision",
    label: "Visión",
    content: (
      <p>
        Llegar a ser la organización agro-exportadora más eficiente y eco
        responsable, del cuidado del medio ambiente de la región, produciendo y
        empacando productos del campo para destinarlos a la exportación a los
        mercados más exigentes, cumpliendo todas las especificaciones técnicas y
        de calidad exigidas por los distintos consumidores y autoridades
        reguladores de la calidad y condición de los países donde enviamos
        nuestros productos. Por ello estamos comprometidos con un programa de
        mejora continua en todas nuestras actividades.
      </p>
    ),
  },
  {
    id: "valores",
    label: "Valores",
    content: (
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
        {[
          "Liderazgo",
          "Trabajo en equipo",
          "Colaboración",
          "Integridad",
          "Calidad",
          "Diversidad",
          "Solidaridad",
          "Respeto mutuo",
          "Agilidad",
          "Empoderamiento",
          "Investigación y desarrollo",
          "Innovación continua",
          "Pasión por lo que hacemos",
          "Comunicación fluida 360°",
          "Ambiente de trabajo agradable",
          "Desafío permanente del status quo",
          "Aprendizaje y enseñanza continua",
          "Compromiso absoluto con el medio ambiente",
          "Trabajo directo con la comunidad",
          "Desarrollo permanente de nuestros colaboradores",
        ].map((valor) => (
          <span
            key={valor}
            className="
          rounded-full
          border border-white/30
          bg-white/10
          px-4 py-2
          text-sm sm:text-base
          text-white
          backdrop-blur-[1px]
        "
          >
            {valor}
          </span>
        ))}
      </div>
    ),
  },
];

export default function MisionVisionValores() {
  const [active, setActive] = useState("mision");

  const current = TABS.find((t) => t.id === active)!;

  return (
    <section className="relative w-full py-24 bg-[#0f172a] overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Nosotros/back-misionvision.jpg"
          alt=""
          fill
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-white">
        {/* Título */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-center text-[#22c55e] font-semibold tracking-wide text-xl sm:text-2xl"
        >
          Nuestro Propósito
        </motion.h3>

        {/* Subtitulo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-16 max-w-3xl text-center text-gray-300 text-base sm:text-lg"
        >
          Contribuir con productos y servicios de calidad para un mundo mejor y
          más saludable.
        </motion.p>

        {/* Tabs */}
        <div className="relative flex justify-center gap-8 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`relative pb-3 text-sm sm:text-base font-medium transition
                ${
                  active === tab.id
                    ? "text-green-400"
                    : "text-white/70 hover:text-white"
                }`}
            >
              <span className="flex items-center gap-2">{tab.label}</span>

              {active === tab.id && (
                <motion.span
                  layoutId="tab-line"
                  className="absolute left-0 bottom-0 h-0.5 w-full bg-green-400"
                />
              )}
            </button>
          ))}
        </div>

        {/* Contenido */}
        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-center text-white/90 text-base sm:text-lg leading-relaxed"
            >
              {current.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
