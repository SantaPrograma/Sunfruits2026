"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS = [
  {
    id: 1,
    title: "Hambre Cero",
    image: "/Compromiso/hambre-cero.jpg",
    content:
      "Somos productores de alimentos y la mayor expectativas para nosotros es conseguir que este objetivo se cumpla lo antes posible. Para poder apoyar en esto los meses de campaña de cosecha de los frutos que cultivamos, la empresa tiene como compromiso el repartir periódicamente a grupos de personas vulnerables (colegios del entorno, asilos, postas médicas, etc.) frutas de estación, contribuyendo a la alimentación balanceada combatiendo la subalimentación.",
  },
  {
    id: 2,
    title: "Salud y Bienestar",
    image: "/Compromiso/salud-bienestar.jpg",
    content:
      "Compartimos un ideal de salud basado en la prevención, involucrándonos en programas de acción para garantizar la educación en los hábitos de una vida saludable, buscando promover el bienestar físico y salud mental de nuestros trabajadores y comunidades del entorno, ampliando nuestro campo de acción hacia las familias de los colaboradores y poblaciones aledañas, promoviendo campañas de planificación familiar, despistaje de enfermedades no transmisibles o crónica, tales como enfermedades cardiovasculares, diabetes, respiratorias; así también trabajamos en la sensibilización de la prevención de enfermedades transmisibles como son el VIH, COVID-19, entre otros. Nuestro objetivo es hacer frente a las frecuentes enfermedades o condiciones que aquejan nuestra comunidad para su pronta detección y erradicación.",
  },
  {
    id: 3,
    title: "Igualdad de Género",
    image: "/Compromiso/igualdad-genero.jpg",
    content:
      "Sancionamos y denunciamos cualquier acto de agresión y/o violencia de género teniendo una política de tolerancia cero para este tipo de acciones. Periódicamente realizamos charlas de sensibilización y campañas de concientización para erradicar las creencias de desigualdad por género.",
  },
  {
    id: 4,
    title: "Agua Limpia y Saneamiento",
    image: "/Compromiso/agua-limpia.jpg",
    content:
      "Estando en un valle en una crisis hídrica histórica nuestros programas de trabajo en los problemas de acceso de agua y la calidad de la misma son varias. Uno de nuestros mayores trabajos es la planta de tratamiento de aguas residuales (PTAR) de San José de los molinos donde conseguimos instalar con éxito la primera PTAR con tratamiento Biodigestor del Perú, dando tratamiento a las aguas servidas de los más de 7000 habitantes de un sector donde proceden gran número de nuestros colaboradores",
  },
  {
    id: 5,
    title: "Energía Asequible y No Contaminante",
    image: "/Compromiso/energia-asequible.jpg",
    content:
      "Estando en un valle en una crisis hídrica histórica nuestros programas de trabajo en los problemas de acceso de agua y la calidad de la misma son varias. Uno de nuestros mayores trabajos es la planta de tratamiento de aguas residuales (PTAR) de San José de los molinos donde conseguimos instalar con éxito la primera PTAR con tratamiento Biodigestor del Perú, dando tratamiento a las aguas servidas de los más de 7000 habitantes de un sector donde proceden gran número de nuestros colaboradores",
  },
  {
    id: 6,
    title: "Reducción de las Desigualdades",
    image: "/Compromiso/reduccion-desigualdades.jpg",
    content:
      "Estando en un valle en una crisis hídrica histórica nuestros programas de trabajo en los problemas de acceso de agua y la calidad de la misma son varias. Uno de nuestros mayores trabajos es la planta de tratamiento de aguas residuales (PTAR) de San José de los molinos donde conseguimos instalar con éxito la primera PTAR con tratamiento Biodigestor del Perú, dando tratamiento a las aguas servidas de los más de 7000 habitantes de un sector donde proceden gran número de nuestros colaboradores",
  },
  {
    id: 7,
    title: "Vida de Ecosistemas y Terrestres",
    image: "/Compromiso/vida-ecosistemas.jpg",
    content:
      "Estando en un valle en una crisis hídrica histórica nuestros programas de trabajo en los problemas de acceso de agua y la calidad de la misma son varias. Uno de nuestros mayores trabajos es la planta de tratamiento de aguas residuales (PTAR) de San José de los molinos donde conseguimos instalar con éxito la primera PTAR con tratamiento Biodigestor del Perú, dando tratamiento a las aguas servidas de los más de 7000 habitantes de un sector donde proceden gran número de nuestros colaboradores",
  },
];

export default function Objetivos() {
  const [active, setActive] = useState(ITEMS[0]);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setItemsToShow(2);
      } else if (width < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);
  };

  const next = () => {
    setStartIndex((prev) => (prev + 1) % ITEMS.length);
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsToShow; i++) {
      items.push(ITEMS[(startIndex + i) % ITEMS.length]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="relative w-full min-h-screen py-28 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image src="/Compromiso/bg.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* card difuminado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            rounded-3xl
            border border-white/15
            bg-black/30
            backdrop-blur-md
            shadow-2xl
            px-6 py-12 sm:px-12
            text-center
          "
        >
          {/* Titulo como imagen */}
          <div className="mb-8 flex flex-col items-center">
            <Image
              src="/Compromiso/titulo.png"
              alt="Nuestro Compromiso"
              width={520}
              height={160}
              sizes="(max-width: 640px) 260px, (max-width: 1024px) 360px, 460px"
              className="w-65 sm:w-[320px] md:w-95 lg:w-115 xl:w-130 object-contain drop-shadow-[0_18px_50px_rgba(0,0,0,0.55)]"
            />

            {/* Rayita naranja */}
            <span className="mt-4 h-0.75 w-16 rounded-full bg-orange-400 sm:w-20" />
          </div>

          {/* Texto 1 */}
          <p className="mx-auto mb-14 max-w-3xl text-sm sm:text-base text-gray-200 leading-relaxed">
            Somos una empresa inspirada por los principios de igualdad y ayuda
            al prójimo. Trabajamos arduamente en ser parte de un cambio positivo
            en la situación de nuestro país, intentando influir en mejorar la
            calidad de vida de nuestros colaboradores y vecinos.
            <br />
            <br />
            Nuestro cuidado por la naturaleza nace del respeto inculcado por
            generaciones de agricultores iqueños, enseñándonos a proteger el
            agua, el aire y la tierra.
          </p>

          {/* Carrusel */}
          <div className="mb-12 flex items-center justify-center gap-4">
            {/* Flecha izquierda */}
            <button
              onClick={prev}
              className="bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition shrink-0"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Imágenes */}
            <div className="flex gap-4">
              {visibleItems.map((item) => {
                const isActive = active.id === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActive(item)}
                    className={`relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-xl overflow-hidden transition ${
                      isActive
                        ? "ring-4 ring-green-400 scale-105"
                        : "opacity-70 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                    {!isActive && (
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Flecha derecha */}
            <button
              onClick={next}
              className="bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition shrink-0"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Contenido dinámico */}
          <div className="mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-white/30 backdrop-blur-md p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.15)]"
              >
                <p className="text-sm sm:text-base text-white leading-relaxed">
                  {active.content}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
