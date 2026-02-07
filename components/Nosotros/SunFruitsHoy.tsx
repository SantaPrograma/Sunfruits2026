"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SunFruitsHoy() {
  return (
    <section className="relative w-full bg-white pt-24 pb-94 overflow-hidden">
      {/* Fondo inferior */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-96 z-0">
        <Image
          src="/Nosotros/bg-ica.jpg"
          alt=""
          fill
          className="object-cover object-bottom"
        />
        {/* Gradiente */}
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/60 to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Titulo */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3 text-center text-[#22c55e] font-semibold tracking-wide text-xl sm:text-2xl"
        >
          Sun Fruits Hoy
        </motion.h3>

        {/* Subtitulo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mb-16 max-w-3xl text-center text-[#4b5563] text-base sm:text-lg"
        >
          No buscamos ser los más grandes, pero si los mejores.
        </motion.p>

        {/* Contenido */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-[#4b5563] text-base sm:text-sm leading-relaxed"
          >
            {/* Parrafo destacado */}
            <div className="border-l-4 border-[#22c55e] pl-5 font-semibold text-[#374151]">
              Nuestro crecimiento agronómico va enfocado a complementar la
              funcionalidad de nuestra planta procesadora de frutas, habiendo
              desarrollado programas de producción agrícola en contra estación
              para poder asegurar la continuidad operativa de nuestra
              infraestructura de empaque y frigorífica y por consiguiente la
              estabilidad laboral de nuestros colaboradores.
            </div>

            <p>
              Somos una empresa integrada, desde la producción en el campo y una
              planta de servicio asegurando el control en todas las etapas para
              la obtención de productos de calidad hasta la entrega final a
              nuestros clientes, poniendo el esmero y cuidado necesario en cada
              una de las etapas para asegurar la calidad y condición del arribo.
            </p>

            <p>
              Sun Fruits es una empresa diseñada para crecer en función de la
              demanda de productos y servicios de nuestros clientes, tanto
              internos como externos. Estamos en constante desarrollo para poder
              cubrir las expectativas que han puesto en nosotros las empresas
              agrícolas de varias regiones del país, así como innovando con
              nuevas variedades de cultivos.
            </p>

            <p>
              Por todo esto, nuestra capacidad de proceso y producción aumentan
              año a año por la confianza depositada en nosotros por nuestros
              socios comerciales en Perú y alrededor del mundo, y por el empuje
              constante de nuestra gente.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full flex justify-center"
          >
            <Image
              src="/Nosotros/img-hoy.jpg"
              alt="Sun Fruits Hoy"
              width={520}
              height={420}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
