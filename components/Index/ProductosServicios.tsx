<<<<<<< HEAD
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const productos = [
  { name: "Uva", image: "/Index/uvas.jpg" },
  { name: "Palta", image: "/Index/palta.jpg" },
  { name: "Cítricos", image: "/Index/citricos.jpg" },
];

const servicios = [
  ...productos,
  { name: "Arándanos", image: "/Index/arandanos.jpg" },
  { name: "Granada", image: "/Index/granada.jpg" },
];

type MenuKey = "productos" | "servicios";

type ProductMenuProps = {
  href: string;
  label: string;
  items: typeof productos;
  menuKey: MenuKey;
  openMenu: MenuKey | null;
  setOpenMenu: (menu: MenuKey | null) => void;
  animationX: number;
};

function ProductMenu({
  href,
  label,
  items,
  menuKey,
  openMenu,
  setOpenMenu,
  animationX,
}: ProductMenuProps) {
  const isOpen = openMenu === menuKey;

  return (
    <motion.div
      initial={{ opacity: 0, x: animationX }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.95 }}
      className="group relative flex justify-center"
      onMouseEnter={() => setOpenMenu(menuKey)}
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="flex items-center gap-2">
        <Link
          href={href}
          className="border-b border-white/70 pb-1 text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-300 hover:border-[#4ade80] hover:text-[#4ade80] md:text-sm"
        >
          {label}
        </Link>
        <button
          type="button"
          aria-label={`Mostrar ${label.toLowerCase()}`}
          aria-expanded={isOpen}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-white/10 transition hover:bg-white/20"
          onClick={() => setOpenMenu(isOpen ? null : menuKey)}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Dropdown */}
      <div
        className={`absolute left-1/2 top-full z-30 w-40 -translate-x-1/2 pt-3 transition-all duration-200 sm:bottom-full sm:top-auto sm:w-44 sm:pb-3 sm:pt-0 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0 sm:translate-y-1"
        } group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100`}
      >
        <ul className="max-h-[min(15rem,36vh)] overflow-y-auto rounded-md border border-white/15 bg-black/45 py-1.5 text-left text-xs text-white shadow-[0_12px_35px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:text-[13px]">
          {items.map((item) => (
            <li
              key={item.name}
              className="flex items-center gap-2.5 px-3 py-1.5 transition-colors hover:bg-white/10"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={24}
                height={24}
                className="h-6 w-6 rounded-full object-cover"
              />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ProductosServicios() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);

  return (
    <div className="relative z-50 mt-2 flex flex-col gap-5 text-white sm:mt-4 sm:flex-row sm:gap-12 md:gap-16">
      <ProductMenu
        href="/Productos"
        label="Productos"
        items={productos}
        menuKey="productos"
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        animationX={-24}
      />

      <ProductMenu
        href="/Servicios"
        label="Servicios"
        items={servicios}
        menuKey="servicios"
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        animationX={24}
      />
=======
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
>>>>>>> f6ba32c48fa0ce4d8a0a7ddf6b938b3d9e98f46f
    </div>
  );
}
