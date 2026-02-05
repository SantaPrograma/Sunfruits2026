"use client"

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Prevenir doble carga
    if ((window as any).googleTranslateLoaded) return;
    (window as any).googleTranslateLoaded = true;

    // Función de inicialización
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "es",
          includedLanguages: "es,en,zh-CN",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Cargar script
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div 
      id="google_translate_element" 
      style={{ 
        position: 'fixed',
        top: '-1000px',
        left: '-1000px',
        visibility: 'hidden'
      }} 
    />
  );
}