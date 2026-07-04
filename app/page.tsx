import Home from "@/components/Index/Home"
import GoogleTranslate from "@/components/GoogleTranslate"

export default function Page() {
  return (
    <>
      {/* Carga Google Translate */}
      <GoogleTranslate />

      {/* Tu home */}
      <Home />
    </>
  )
}
