"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SeccionPlantaServicios() {
  const [mode, setMode] = useState<"bienvenida" | "historia">("bienvenida");

  const content = {
    bienvenida: {
      title: "Bienvenida",
      paragraphs: [
        "Dos tradicionales familias de ascendencia iqueña asumieron el reto de integrarse en la cadena productiva y proyectar la salida de sus productos desde el campo hasta los más exigentes mercados a nivel internacional, creando así el Grupo Sun Fruits. Integrando la producción de sus campos con una moderna planta de procesamiento que cubriera la demanda propia del grupo así como la prestación de servicios a otros productores y coadyuvando al desarrollo de la fruticultura y agroindustria nacional.",
        "Este crecimiento ha permitido generar nuevas fuentes de ingreso, directamente, a más de 1,000 familias, contribuyendo no solo en la economía doméstica sino también en accesos a niveles de educación y formación profesional.",
        "Como resultado de este desarrollo, hemos contribuido a que pequeños y medianos productores agrarios lleven sus productos a los más exigentes mercados cumpliendo siempre con los más altos estándares de calidad y competitividad.",
        "Gracias a la confianza y fidelidad de nuestros clientes y proveedores nos hemos logrado consolidar como una empresa siempre a la vanguardia de la innovación en el sector.",
        "Todos los logros alcanzados no hubiesen sido posible sin el principal activo de nuestra empresa: el recurso humano, a quienes agradecemos infinitamente por su apoyo y dedicación. Los socios seguiremos apostando a la consolidación y crecimiento de las actividades de la empresa.",
        "Gracias por acompañarnos en este emprendimiento, ya que el éxito alcanzado hasta el momento no habría sido posible sin la participación proactiva de todos ustedes.",
      ],
      quote: "Nuestro principal activo es el recurso humano.",
      footer: "Directorio\nSun Fruits Exports S.A.",
    },

    historia: {
      title: "Nuestra Historia",
      paragraphs: [
        "Sun Fruits nace en el año 2008 con la unión de dos empresas agroexportadoras del Valle de Ica: Agrícola Riachuelo y Agrícola Don Luis, dos productores iqueños de frutas y hortalizas que tenían la necesidad de procesar, empacar y exportar su producción de uvas debiendo alcanzar altos niveles de calidad, cumpliendo las exigencias y estándares de un mercado muy competitivo.",
        "Hasta entonces, ambas firmas recurrían a distintas plantas de empaque para poder procesar sus uvas de exportación, pero la capacidad de estas fue saturada por el crecimiento de la industria. En ese momento Sun Fruits se concibió como la solución a las necesidades de los productores del grupo.",
        "Dada la creciente demanda en Ica por servicios de maquila y frío para exportación, Sun Fruits vio la oportunidad de posicionarse como una planta de servicio para productores de la región, para lo cual invirtió en infraestructura y capital humano. Hoy el 70% del volumen procesado en la planta está dedicado a estos servicios de exportación.",
        "El competir en igualdad de condiciones con las grandes productoras mundiales nos demandaba igualar y, en lo posible, superar no solo la calidad de nuestros productos, sino además cumplir con los exigentes estándares y certificaciones requeridos por cada nuevo mercado.",
      ],
      quote:
        "La calidad y la certificación son claves para competir a nivel mundial.",
      footer: "Sun Fruits Exports S.A.",
    },
  };

  const data = content[mode];

  return (
    <section className="relative w-full bg-[#f5f7f6] py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Botón toggle */}
        {/* Tabs */}
        <div className="mb-10 flex justify-center">
          <div className="flex rounded-full bg-white shadow-sm">
            {(["bienvenida", "historia"] as const).map((item) => (
              <button
                key={item}
                onClick={() => setMode(item)}
                className={`px-6 py-2 text-sm font-medium rounded-full transition
                ${
                  mode === item
                    ? "bg-[#E36700] text-white"
                    : "text-[#E36700] hover:bg-gray-100"
                }`}
              >
                {item === "bienvenida" ? "Bienvenida" : "Historia"}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Título + línea */}
            <div className="mb-8 flex justify-center">
              <div className="inline-block text-center">
                <div className="mb-2 flex items-center justify-center gap-3">
                  <Image
                    src="/Servicios/icon.png"
                    alt={data.title}
                    width={36}
                    height={36}
                  />
                  <h2 className="text-[#374151] font-semibold tracking-wide text-lg sm:text-xl md:text-2xl">
                    {data.title}
                  </h2>
                </div>

                {/* Línea del ancho del texto */}
                <div className="h-0.5 w-full bg-[#9ca3af]" />
              </div>
            </div>

            {/* Texto principal */}
            <div className="space-y-6 text-[#4b5563] text-base sm:text-sm leading-relaxed">
              {data.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>

            {/* Frase */}
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-14 rounded-2xl bg-white/70 px-8 py-6 text-center text-[#374151] text-lg sm:text-lg font-medium shadow-sm"
            >
              “{data.quote}”
            </motion.blockquote>

            {/* Cierre */}
            <div className="mt-12 text-center text-[#6b7280] whitespace-pre-line">
              <p className="font-semibold text-[#374151]">{data.footer}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
