"use client";

import HeaderUsable from "../HeaderUsable";
import CrecimientoProgresivo from "./Crecimiento";
import EstacionalidadEmpaque from "./EstacionalidadEmpaque";
import NuestraPlanta from "./NuestraPlanta";

export default function Servicios() {
  return (
    <div className="relative w-full">
      <HeaderUsable />

      <NuestraPlanta />
      <EstacionalidadEmpaque />
      <CrecimientoProgresivo />
    </div>
  );
}
