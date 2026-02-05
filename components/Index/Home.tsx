import Image from "next/image";
import Header from "./Header";
import Titulo from "./Titulo";

export default function Home() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <Header />

      {/* Imagen de fondo */}
      <Image
        src="/index/img-slider-1.bak.jpg"
        alt="Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay viñeta */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.60)_100%)]" />

      {/* Titulo */}
      <Titulo />
    </section>
  );
}
