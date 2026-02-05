import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Megaphone, ShieldCheck } from "lucide-react";

export default function SeccionesInferiores() {
  return (
    <div className="relative z-10 mt-12 flex w-full justify-center px-6">
      {/* Contenedor */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="rounded-lg bg-black/10 backdrop-blur-lg px-6 md:px-14 py-6 md:py-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-xs md:text-sm font-semibold uppercase tracking-wide text-white">
          
          {/* Nuestra Historia */}
          <Link href="/historia" className="flex items-center gap-3">
            <BookOpen className="h-4 w-4 text-orange-400" />
            <span className="transition-colors duration-300 hover:text-orange-400">Nuestra Historia</span>
          </Link>

          {/* Línea */}
          <span className="hidden md:block h-6 w-px bg-white/50" />

          {/* Novedades */}
          <Link href="/novedades" className="flex items-center gap-3">
            <Megaphone className="h-4 w-4 text-orange-400" />
            <span className="transition-colors duration-300 hover:text-orange-400">Novedades</span>
          </Link>

          {/* Línea */}
          <span className="hidden md:block h-6 w-px bg-white/50" />

          {/* Nuestro Compromiso */}
          <Link href="/compromiso" className="flex items-center gap-3">
            <ShieldCheck className="h-4 w-4 text-orange-400" />
            <span className="transition-colors duration-300 hover:text-orange-400">Nuestro Compromiso</span>
          </Link>

        </div>
      </motion.div>
    </div>
  );
}