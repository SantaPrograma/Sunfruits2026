"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const changeLanguage = (lang: string) => {
    // Método alternativo usando las cookies de Google Translate
    const domain = window.location.hostname;

    // Establece la cookie de idioma
    document.cookie = `googtrans=/es/${lang}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/es/${lang}; path=/`;

    // Recarga la página para aplicar el cambio
    window.location.reload();
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="pointer-events-auto fixed top-4 left-0 z-20 w-full"
    >
      <div className="mx-auto flex h-20 items-center justify-center md:justify-between px-6 md:px-20">
        {/* Logo */}
        <Link href="/" className="hidden md:flex items-center">
          <Image
            src="/Index/logo.svg"
            alt="Logo"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Menú central */}
        <nav className="flex items-center gap-6 md:gap-10 text-xs md:text-sm font-bold tracking-[0.2em] text-white uppercase">
          <Link
            href="https://esun.sunfruits.com.pe/c2025/"
            className="transition-opacity hover:opacity-70"
          >
            Bolsa de trabajo
          </Link>
          <Link
            href="#contacto"
            className="transition-opacity hover:opacity-70"
          >
            Contacto
          </Link>
        </nav>

        {/* Idiomas */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            aria-label="Español"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-[10px] font-semibold text-gray-200 transition hover:bg-gray-200 hover:text-black"
            onClick={() => changeLanguage("es")}
          >
            ES
          </button>

          <button
            type="button"
            aria-label="English"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-[10px] font-semibold text-gray-200 transition hover:bg-gray-200 hover:text-black"
            onClick={() => changeLanguage("en")}
          >
            EN
          </button>

          <button
            type="button"
            aria-label="中文"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-[10px] font-semibold text-gray-200 transition hover:bg-gray-200 hover:text-black"
            onClick={() => changeLanguage("zh-CN")}
          >
            CN
          </button>
        </div>
      </div>
    </motion.header>
  );
}
