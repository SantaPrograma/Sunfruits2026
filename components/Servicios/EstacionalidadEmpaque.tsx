"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const months = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

const fruits = [
  {
    name: "Uvas",
    image: "/Servicios/uva.png",
    color: "#8b5cf6",
    ranges: [
      [0, 2],
      [10, 11],
    ],
    description:
      "Nuestra capacidad de proceso es de hasta 600 tn/dia, iniciamos a principios de Noviembre y maquilamos hasta finales de Marzo en diversa presentaciones: Clamshells, Carton 8.2, Madera 7.3, etc. Red Globe, Sugraone, Flame, Crimson y variedades patentadas IFG (Sweet Globe, Sweet Celebration, Sweet Favors) como también Sun Worl (Autumn Crisp, Sable) entre otras, son empacadas en distintas presentaciones y para los distintos mercados que requieren la Uva Iqueña.",
  },
  {
    name: "Palta",
    image: "/Servicios/palta.png",
    color: "#22c55e",
    ranges: [[0, 11]],
    description:
      "Recibimos las primeras paltas de la Sierra en Enero y continuamos hasta empalmar con la campaña de Ica para luego pasar nuevamente a palta de la Sierra. Empacamos casi todo el año, variedades como Fuerte, Zutano, Etingger y sobre todo Hass son embarcadas para todos los mercados a los cuales Perú tiene acceso.",
  },
  {
    name: "Cítricos",
    image: "/Servicios/citrico.png",
    color: "#f97316",
    ranges: [[4, 8]],
    description:
      "Contamos con una de las más modernas líneas de proceso para cítricos, con una capacidad de 20 tn por hora, procesamos diversas variedades como Satsuma, Oronules, Oro Grande, Tangelo, W. Murcott y Tango, cumpliendo con todas las exigencias de los más selectos mercados.",
  },
  {
    name: "Arándanos",
    image: "/Servicios/arandanos.png",
    color: "#3b82f6",
    ranges: [[6, 11]],
    description:
      "Procesamos bajo estrictas medidas de seguridad alimentaria uno de los frutos más delicados que la naturaleza nos ha otorgado, productores de la región confían en nuestra experiencia.",
  },
  {
    name: "Granadas",
    image: "/Servicios/granada.png",
    color: "#ef4444",
    ranges: [[1, 4]],
    description:
      "La variedad Wonderful es la principal variedad en la zona y de más demandada a nivel mundial, atendemos a una diversidad de productores de la zona, procurándoles un servicio acorde con nuestra reputación.",
  },
];

export default function EstacionalidadEmpaque() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-x-hidden bg-linear-to-b from-[#e8f0ec] to-[#f5f7f6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Subtitulo */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-16"
          >
            <Image
              src="/Servicios/icon.png"
              alt="Estacionalidad de Empaque"
              width={36}
              height={36}
            />

            <h2
              className="text-[#374151] font-semibold tracking-wide
               text-lg sm:text-xl md:text-2xl"
            >
              Estacionalidad de Empaque
            </h2>
          </motion.div>
        </div>

        {/* Contenido */}
        <div className="relative overflow-x-auto">
          <div className="min-w-225 space-y-12 pb-2">
            {fruits.map((fruit, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="space-y-2">
                  {/* Grid Principal */}
                  <div className="grid grid-cols-[220px_repeat(12,1fr)] gap-y-2 items-start">
                    {/* Header meses */}
                    <div />
                    {months.map((m) => (
                      <div
                        key={m}
                        className="text-center text-[#6b7280] text-xs font-semibold"
                      >
                        {m}
                      </div>
                    ))}

                    {/* Fruta + botón */}
                    <motion.div
                      className="flex flex-col items-center text-center gap-2"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <Image
                        src={fruit.image}
                        alt={fruit.name}
                        width={64}
                        height={64}
                      />
                      <span className="text-sm font-semibold text-[#374151]">
                        {fruit.name}
                      </span>
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="text-xs text-[#6b7280] hover:text-[#374151] flex items-center gap-1"
                      >
                        Más Info
                        <span
                          className={`transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </button>
                    </motion.div>

                    {/* Timeline + descripcion */}
                    <div className="relative col-span-12">
                      {/* Timeline */}
                      <div className="relative h-4 bg-[#e5ece9] rounded-full overflow-hidden">
                        {fruit.ranges.map((range, i) => {
                          const left = (range[0] / 12) * 100;
                          const width = ((range[1] - range[0] + 1) / 12) * 100;

                          return (
                            <motion.div
                              key={i}
                              className="absolute top-0 h-full rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${width}%` }}
                              viewport={{ once: true, amount: 0.5 }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              style={{
                                left: `${left}%`,
                                backgroundColor: fruit.color,
                              }}
                            />
                          );
                        })}
                      </div>

                      {/* Descripcion */}
                      {isOpen && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 max-w-4xl text-sm leading-relaxed text-[#4b5563] overflow-hidden"
                        >
                          {fruit.description}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
