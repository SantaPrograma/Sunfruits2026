"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HeaderUsable() {
  const [isNosotrosOpen, setIsNosotrosOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 z-50 w-full bg-black/30 border-b border-white/30 backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 items-center justify-between px-6 md:px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Index/logo.svg"
            alt="Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Menú desktop */}
        <nav className="hidden md:flex items-center gap-8 text-white font-semibold tracking-wide text-sm">
          <Link href="/Productos" className="hover:text-[#4ade80]">
            Nuestros Productos
          </Link>

          <Link href="/Servicios" className="hover:text-[#4ade80]">
            Nuestros Servicios
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setIsNosotrosOpen(true)}
            onMouseLeave={() => setIsNosotrosOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#4ade80]">
              Nosotros <span className="text-xs">▼</span>
            </button>

            {isNosotrosOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 rounded-md bg-black/40 backdrop-blur-xl py-2 border border-white/20">
                  <Link href="/Nosotros" className="block px-4 py-2 hover:text-[#4ade80]">
                    Sobre Sunfruits
                  </Link>
                  <Link href="/Compromiso" className="block px-4 py-2 hover:text-[#4ade80]">
                    Objetivo de Desarrollo Sostenible
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/Novedades" className="hover:text-[#4ade80]">
            Novedades
          </Link>

          <Link href="https://esun.sunfruits.com.pe/c2025/" className="hover:text-[#4ade80]">
            Bolsa de Trabajo
          </Link>

          <Link href="#contacto" className="hover:text-[#4ade80]">
            Contacto
          </Link>
        </nav>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg border-t border-white/20">
          <nav className="flex flex-col px-6 py-6 gap-4 text-white font-semibold">
            <Link href="/Productos" onClick={() => setIsMobileMenuOpen(false)}>
              Nuestros Productos
            </Link>
            <Link href="/Servicios" onClick={() => setIsMobileMenuOpen(false)}>
              Nuestros Servicios
            </Link>
            <Link href="/Nosotros" onClick={() => setIsMobileMenuOpen(false)}>
              Sobre Sunfruits
            </Link>
            <Link href="/Compromiso" onClick={() => setIsMobileMenuOpen(false)}>
              Objetivo de Desarrollo Sostenible
            </Link>
            <Link href="/Novedades" onClick={() => setIsMobileMenuOpen(false)}>
              Novedades
            </Link>
            <Link
              href="https://esun.sunfruits.com.pe/c2025/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bolsa de Trabajo
            </Link>
            <Link href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
