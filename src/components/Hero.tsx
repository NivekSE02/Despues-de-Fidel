import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-line', {
        scaleX: 0,
        duration: 1.6,
        transformOrigin: 'left',
      })
        .from(
          '.hero-name',
          {
            y: 60,
            opacity: 0,
            duration: 1.4,
          },
          '-=1.0'
        )
        .from(
          '.hero-sub',
          {
            y: 30,
            opacity: 0,
            duration: 1.0,
          },
          '-=0.7'
        )
        .from(
          '.hero-glyph',
          {
            opacity: 0,
            scale: 0.6,
            duration: 1.2,
            ease: 'power2.out',
          },
          '-=0.6'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-8 overflow-hidden"
    >
      {/* ── Decorative glyph — a faint cross / compass mark ── */}
      <div className="hero-glyph absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.035]">
        <svg
          width="420"
          height="420"
          viewBox="0 0 420 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="210" y1="0" x2="210" y2="420" stroke="#7B1123" strokeWidth="0.5" />
          <line x1="0" y1="210" x2="420" y2="210" stroke="#7B1123" strokeWidth="0.5" />
          <circle cx="210" cy="210" r="140" stroke="#C4A035" strokeWidth="0.5" />
          <circle cx="210" cy="210" r="4" fill="#7B1123" />
        </svg>
      </div>



      {/* ── Band name ── */}
      <h1 className="hero-name font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center tracking-tight leading-[0.92] mb-6">

        <span className="font-normal text-gold">Después</span>
        <br />
        <span className="font-normal text-gold" style={{ fontVariantLigatures: 'common-ligatures' }}>
          de Fidel
        </span>
      </h1>

      {/* ── Subtext — cryptic, no message, just an atmosphere tag ── */}
      <p className="hero-sub text-[11px] uppercase tracking-ritual text-muted mt-4">
        MI PRIMERA PAGINA WEB
      </p>
      <p className="hero-sub text-[11px] uppercase tracking-ritual text-muted mt-4">
        Hola esta es mi pagina web los quiero mucho
      </p>
      {/* ── Bottom thin line ── */}
    </section>
  );
}
