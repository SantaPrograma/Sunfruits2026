"use client";

import HeaderUsable from "../HeaderUsable";
import Frutas from "./Frutas";

export default function Productos() {
  return (
    <div className="relative w-full">
      <HeaderUsable />

      {/* Cultivo - variedad - fechas */}
      <Frutas />
    </div>
  );
}
