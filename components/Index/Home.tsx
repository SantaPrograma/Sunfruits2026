import Image from "next/image";
import Header from "./Header";
import Titulo from "./Titulo";

export default function Home() {
  return (
<<<<<<< HEAD
    <section className="relative min-h-dvh w-full overflow-hidden bg-black">
=======
    <section className="relative h-screen w-screen overflow-hidden">
>>>>>>> f6ba32c48fa0ce4d8a0a7ddf6b938b3d9e98f46f
      <Header />

      {/* Imagen de fondo */}
      <Image
        src="/index/img-slider-1.bak.jpg"
<<<<<<< HEAD
        alt="Campo de cultivo Sunfruits"
=======
        alt="Background"
>>>>>>> f6ba32c48fa0ce4d8a0a7ddf6b938b3d9e98f46f
        fill
        priority
        className="object-cover"
      />

<<<<<<< HEAD
      {/* Overlay de lectura */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.62)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.08)_34%,rgba(0,0,0,0.52)_100%)]" />
=======
      {/* Overlay viñeta */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.60)_100%)]" />
>>>>>>> f6ba32c48fa0ce4d8a0a7ddf6b938b3d9e98f46f

      <Titulo />
    </section>
  );
}
