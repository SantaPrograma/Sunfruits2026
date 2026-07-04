import Image from "next/image";
import Header from "./Header";
import Titulo from "./Titulo";

export default function Home() {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden bg-black">
      <Header />

      {/* Imagen de fondo */}
      <Image
        src="/index/img-slider-1.bak.jpg"
        alt="Campo de cultivo Sunfruits"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay de lectura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.62)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.08)_34%,rgba(0,0,0,0.52)_100%)]" />

      <Titulo />
    </section>
  );
}
