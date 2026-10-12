import React from 'react';
import { Quote } from 'lucide-react';

export default function Manifesto() {
  return (
    <section id="manifiesto" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#7B1123] dark:text-[#D4AF37] block mb-3">
            Declaración Estética
          </span>
          <h2 className="font-serif-conceptual text-4xl sm:text-5xl text-zinc-950 dark:text-zinc-50 font-normal leading-tight">
            Manifiesto & Postura
          </h2>
          <div className="w-16 h-[2px] bg-[#7B1123] dark:bg-[#D4AF37] my-6" />
          <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400 font-mono">
            Documento de intenciones sonoras
          </p>
        </div>

        <div className="lg:col-span-8 space-y-8">
          <blockquote className="relative pl-8 border-l-2 border-[#7B1123] dark:border-[#D4AF37] italic font-serif-conceptual text-2xl sm:text-3xl text-zinc-900 dark:text-zinc-100 font-light leading-relaxed">
            "No componemos canciones para el entretenimiento ligero; construimos mapas acústicos de la caída, el desgaste del concreto y la persistencia de las ideas que no supieron cómo morir."
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 text-sm font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              <strong className="font-medium text-zinc-900 dark:text-zinc-200 block mb-1">I. La textura antes que la fórmula</strong>
              Descartamos la melodía complaciente en favor del grano analógico, las cajas de ritmos desaceleradas y la resonancia cruda del amplificador de bulbos al borde de la ruptura.
            </p>
            <p>
              <strong className="font-medium text-zinc-900 dark:text-zinc-200 block mb-1">II. El silencio como instrumento</strong>
              Cada pausa en nuestra obra está calibrada. En una época saturada de ruido ininterrumpido, el espacio vacío y la suspensión rítmica son nuestro mayor acto de insubordinación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
