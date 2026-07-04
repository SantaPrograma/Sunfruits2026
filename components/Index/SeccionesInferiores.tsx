import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Megaphone, ShieldCheck } from "lucide-react";

export default function SeccionesInferiores() {
  return (
    <div className="relative z-10 mt-5 flex w-full justify-center px-0 md:mt-8 md:px-6">
      {/* Contenedor */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.05 }}
        className="w-full max-w-3xl rounded-lg border border-white/15 bg-black/20 px-4 py-4 shadow-[0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-lg sm:w-auto sm:px-6 md:px-10 md:py-5"
      >
        <div className="grid grid-cols-1 gap-2 text-xs font-semibold uppercase tracking-wide text-white sm:grid-cols-3 sm:gap-0 md:text-sm">
          {/* Nuestra Historia */}
          <Link
            href="/Nosotros"
            className="flex items-center justify-center gap-3 rounded-md px-3 py-3 transition-colors duration-300 hover:bg-white/10 hover:text-orange-300"
          >
            <BookOpen className="h-4 w-4 shrink-0 text-orange-400" />
            <span>Nuestra Historia</span>
          </Link>

          {/* Novedades */}
          <Link
            href="/Novedades"
            className="flex items-center justify-center gap-3 rounded-md border-y border-white/10 px-3 py-3 transition-colors duration-300 hover:bg-white/10 hover:text-orange-300 sm:border-x sm:border-y-0"
          >
            <Megaphone className="h-4 w-4 shrink-0 text-orange-400" />
            <span>Novedades</span>
          </Link>

          {/* Nuestro Compromiso */}
          <Link
            href="/Compromiso"
            className="flex items-center justify-center gap-3 rounded-md px-3 py-3 text-center transition-colors duration-300 hover:bg-white/10 hover:text-orange-300"
          >
            <ShieldCheck className="h-4 w-4 shrink-0 text-orange-400" />
            <span>Nuestro Compromiso</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
