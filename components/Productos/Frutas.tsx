"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FrutasProps {
  children?: React.ReactNode;
}

// Datos de productos
const productos = {
  "uvas-verdes": {
    titulo: "Uvas Verdes sin Semillas",
    variedades: ["Sweet Globe™", "Autumn Crisp®brand"],
    meses: ["Ene", "Feb", "Mar", "Nov", "Dic"],
    imagen: "/Productos/uvas-verdes.png",
  },
  "uvas-rojas": {
    titulo: "Uvas Rojas sin Semillas",
    variedades: [" Jack's Salute", "Flame"],
    meses: ["Ene", "Feb", "Nov", "Dic"],
    imagen: "/Productos/uvas-rojas.png",
  },
  "uvas-negras": {
    titulo: "Uvas Negras sin Semillas",
    variedades: ["Sweet Favors", "Sable Seedless"],
    meses: ["Nov", "Dic"],
    imagen: "/Productos/uvas-negras.png",
  },
  "uvas-especiales": {
    titulo: "Uvas Especiales",
    variedades: ["Candy Snaps"],
    meses: ["Dic"],
    imagen: "/Productos/uvas-especiales.jpg",
  },
  palta: {
    titulo: "Palta",
    variedades: ["Zutano/Ettinger", "Hass"],
    meses: ["Abr", "May", "Jun", "Jul", "Ago", "Sep"],
    imagen: "/Productos/palta.png",
  },
  citricos: {
    titulo: "Cítricos",
    variedades: ["Oronules", "Orogrande", "Tango"],
    meses: ["Mar", "Abr", "May", "Jun", "Jul", "Ago"],
    imagen: "/Productos/citricos.png",
  },
};

export default function Frutas({ children }: FrutasProps) {
  const [selectedProduct, setSelectedProduct] =
    useState<keyof typeof productos>("uvas-verdes");

  const producto = productos[selectedProduct];

  const handleProductChange = (key: keyof typeof productos) => {
    setSelectedProduct(key);
  };

  const todosMeses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  return (
    <section className="relative w-full min-h-screen py-20">
      {/* Imagen de fondo */}
      <Image
        src="/Productos/uva-palta-granada-citricos.jpg"
        alt="Nuestros Productos"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-20">
        {children}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
          {/* Columna izquierda */}
          <div className="md:col-span-3">
            <ul className="space-y-2">
              {Object.entries(productos).map(([key, value], index) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <button
                    onClick={() =>
                      handleProductChange(key as keyof typeof productos)
                    }
                    className={`w-full text-left px-4 py-3 rounded-md transition-all ${
                      selectedProduct === key
                        ? "text-[#4ade80] font-semibold"
                        : "text-white hover:text-[#4ade80]/70"
                    }`}
                  >
                    {value.titulo}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Columna central */}
          <div className="md:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-4/3 rounded-lg overflow-hidden bg-black/40 backdrop-blur-md border border-white/20"
              >
                <Image
                  src={producto.imagen}
                  alt={producto.titulo}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Columna derecha */}
          <div className="md:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProduct}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
              >
                {/* Título */}
                <h2 className="text-[#4ade80] font-bold text-3xl md:text-4xl mb-6 uppercase tracking-wide">
                  {producto.titulo}
                </h2>

                {/* Variedades */}
                <div className="mb-6">
                  <h3 className="text-[#4ade80] font-semibold text-sm uppercase tracking-wide mb-3">
                    Variedades
                  </h3>
                  <ul className="text-white space-y-2">
                    {producto.variedades.map((variedad, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#4ade80] rounded-full" />
                        {variedad}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meses */}
                <div>
                  <h3 className="text-[#4ade80] font-semibold text-sm uppercase tracking-wide mb-3">
                    Disponibilidad
                  </h3>
                  <div className="grid grid-cols-6 gap-2">
                    {todosMeses.map((mes) => (
                      <div
                        key={mes}
                        className={`text-center py-2 rounded-md text-xs font-medium ${
                          producto.meses.includes(mes)
                            ? "bg-[#4ade80] text-black"
                            : "bg-white/10 text-white/40"
                        }`}
                      >
                        {mes}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
