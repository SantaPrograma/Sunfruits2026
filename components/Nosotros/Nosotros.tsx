"use client";

import HeaderUsable from "../HeaderUsable";
import Bienvenida from "./Bienvenida";
import Cultura from "./Cultura";
import Introduccion from "./Introduccion";
import MisionVisionValores from "./MisionVisionValores";
import SunFruitsHoy from "./SunFruitsHoy";

export default function Servicios() {
  return (
    <div className="relative w-full">
      <HeaderUsable />

      <Bienvenida />
      <Introduccion />
      <SunFruitsHoy />
      <Cultura />
      <MisionVisionValores />
    </div>
  );
}
