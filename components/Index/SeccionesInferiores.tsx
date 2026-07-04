import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Megaphone, ShieldCheck } from "lucide-react";

export default function SeccionesInferiores() {
  return (
<<<<<<< HEAD
    <div className="relative z-10 mt-5 flex w-full justify-center px-0 md:mt-8 md:px-6">
=======
    <div className="relative z-10 mt-8 md:mt-12 flex w-full justify-center px-6">
>>>>>>> f6ba32c48fa0ce4d8a0a7ddf6b938b3d9e98f46f
      {/* Contenedor */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
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
=======
        transition={{ duration: 0.6, delay: 1.5 }}
        className="rounded-lg bg-black/10 backdrop-blur-lg px-6 md:px-14 py-6 md:py-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-xs md:text-sm font-semibold uppercase tracking-wide text-white">
          {/* Nuestra Historia */}
          <Link href="/Nosotros" className="flex items-center gap-3">
            <BookOpen className="h-4 w-4 text-orange-400" />
            <span className="transition-colors duration-300 hover:text-orange-400">
              Nuestra Historia
            </span>
          </Link>

          {/* Línea */}
          <span className="hidden md:block h-6 w-px bg-white/50" />

          {/* Novedades */}
          <Link href="/Novedades" className="flex items-center gap-3">
            <Megaphone className="h-4 w-4 text-orange-400" />
            <span className="transition-colors duration-300 hover:text-orange-400">
              Novedades
            </span>
          </Link>

          {/* Línea */}
          <span className="hidden md:block h-6 w-px bg-white/50" />

          {/* Nuestro Compromiso */}
          <Link href="/Compromiso" className="flex items-center gap-3">
            <ShieldCheck className="h-4 w-4 text-orange-400" />
            <span className="transition-colors duration-300 hover:text-orange-400">
              Nuestro Compromiso
            </span>
>>>>>>> f6ba32c48fa0ce4d8a0a7ddf6b938b3d9e98f46f
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
