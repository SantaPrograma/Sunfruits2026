import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductosServicios() {
  return (
    <div className="relative z-50 mt-6 flex flex-col sm:flex-row gap-6 sm:gap-16 text-white">
      {/* Productos */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="group relative"
      >
        <Link
          href="/Productos"
          className="text-xs md:text-sm font-semibold uppercase border-b border-white/70 pb-1 transition-colors duration-300 hover:text-[#4ade80] hover:border-[#4ade80]"
        >
          Productos
        </Link>

        {/* Dropdown */}
        <div className="pointer-events-none absolute left-1/2 top-full mt-4 w-44 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 z-30">
          <ul className="rounded-md bg-black/10 py-3 text-sm backdrop-blur text-left border border-white/20 shadow-sm">
            <li className="flex items-center gap-2 px-4 py-1">
              <Image src="/Index/uvas.jpg" alt="Uva" width={20} height={20} />
              <span>Uva</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-1">
              <Image
                src="/Index/palta.jpg"
                alt="Palta"
                width={20}
                height={20}
              />
              <span>Palta</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-1">
              <Image
                src="/Index/citricos.jpg"
                alt="Cítricos"
                width={20}
                height={20}
              />
              <span>Cítricos</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Servicios */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="group relative"
      >
        <Link
          href="/Servicios"
          className="text-xs md:text-sm font-semibold uppercase border-b border-white/70 pb-1 transition-colors duration-300 hover:text-[#4ade80] hover:border-[#4ade80]"
        >
          Servicios
        </Link>

        {/* Dropdown */}
        <div className="pointer-events-none absolute left-1/2 top-full mt-4 w-48 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 z-30">
          <ul className="rounded-md bg-black/10 py-3 text-sm backdrop-blur text-left border border-white/20 shadow-sm">
            <li className="flex items-center gap-2 px-4 py-1">
              <Image src="/Index/uvas.jpg" alt="Uva" width={20} height={20} />
              <span>Uva</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-1">
              <Image
                src="/Index/palta.jpg"
                alt="Palta"
                width={20}
                height={20}
              />
              <span>Palta</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-1">
              <Image
                src="/Index/citricos.jpg"
                alt="Cítricos"
                width={20}
                height={20}
              />
              <span>Cítricos</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-1">
              <Image
                src="/Index/arandanos.jpg"
                alt="Arándanos"
                width={20}
                height={20}
              />
              <span>Arándanos</span>
            </li>
            <li className="flex items-center gap-2 px-4 py-1">
              <Image
                src="/Index/granada.jpg"
                alt="Granada"
                width={20}
                height={20}
              />
              <span>Granada</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
