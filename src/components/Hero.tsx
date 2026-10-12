import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Play, Disc, ArrowDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const artifactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(tagRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.9,
      })
        .from(titleRef.current, {
          opacity: 0,
          y: 40,
          duration: 1.2,
        }, '-=0.6')
        .from(subtitleRef.current, {
          opacity: 0,
          y: 25,
          duration: 1.0,
        }, '-=0.8')
        .from(actionsRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
        }, '-=0.7')
        .from(artifactRef.current, {
          opacity: 0,
          scale: 0.96,
          duration: 1.3,
          ease: 'power2.out',
        }, '-=1.0');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 px-6 flex flex-col justify-between max-w-7xl mx-auto overflow-hidden"
    >
      {/* Elemento de fondo conceptual sutil (sin neón) */}
      <div className="absolute top-1/4 right-0 w-[420px] h-[420px] rounded-full bg-[#7B1123]/5 dark:bg-[#7B1123]/10 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] rounded-full bg-[#D4AF37]/5 dark:bg-[#D4AF37]/8 blur-3xl pointer-events-none -z-10" />

      {/* Contenido Superior / Tipográfico */}
      <div className="max-w-4xl pt-8">
        <div ref={tagRef} className="flex items-center gap-3 mb-6">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#7B1123] dark:text-[#D4AF37]">

          </span>
          <span className="h-[1px] w-12 bg-zinc-300 dark:bg-zinc-700" />
        </div>

        <h1
          ref={titleRef}
          className="font-serif-conceptual text-6xl sm:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-tight text-zinc-950 dark:text-zinc-50 mb-8"
        >
          Ola <br />
          <span className="italic font-light text-[#7B1123] dark:text-[#D4AF37]">Después de Fidel.</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-2xl leading-relaxed mb-10"
        >
          Un proyecto de exploración sonora que desmantela estructuras de rock convencional. Texturas analógicas, poesía visceral y disonancias contenidas.
        </p>

        <div ref={actionsRef} className="flex flex-wrap items-center gap-5">
          <a
            href="#escuchar"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 text-xs uppercase tracking-[0.2em] font-medium rounded-sm hover:bg-[#7B1123] dark:hover:bg-[#D4AF37] hover:text-white dark:hover:text-zinc-950 transition-all duration-300 shadow-sm"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Escuchar Registro</span>
          </a>

          <a
            href="#manifiesto"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs uppercase tracking-[0.2em] font-medium rounded-sm hover:border-zinc-950 dark:hover:border-zinc-100 transition-colors"
          >
            <span>Leer Manifiesto</span>
          </a>
        </div>
      </div>

      {/* Franja conceptual inferior con métricas / créditos */}
      <div
        ref={artifactRef}
        className="mt-16 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-zinc-500 dark:text-zinc-400"
      >
        <div>
          <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7B1123] dark:text-[#D4AF37] mb-1">
            Origen
          </span>
          <span className="font-medium text-zinc-900 dark:text-zinc-200">La Habana / México DF</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7B1123] dark:text-[#D4AF37] mb-1">
            Formato
          </span>
          <span className="font-medium text-zinc-900 dark:text-zinc-200">Vinilo 12" & Cinta Magnética</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase tracking-[0.25em] text-[#7B1123] dark:text-[#D4AF37] mb-1">
            Nuevo Lanzamiento
          </span>
          <span className="font-medium text-zinc-900 dark:text-zinc-200">Vigilia en Rojo Vino</span>
        </div>
        <div className="flex items-center justify-start md:justify-end">
          <a href="#manifiesto" className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            <span>Explorar</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
