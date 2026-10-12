import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Interlude() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.interlude-text', {
        scrollTrigger: {
          trigger: '.interlude-text',
          start: 'top 85%',
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        stagger: 0.2,
      });

      gsap.from('.interlude-line', {
        scrollTrigger: {
          trigger: '.interlude-line',
          start: 'top 85%',
          once: true,
        },
        scaleX: 0,
        duration: 1.2,
        ease: 'power2.out',
        transformOrigin: 'center',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-8 flex flex-col items-center text-center"
    >
      {/* ── Thin divider ── */}
      <div className="interlude-line w-12 h-[0.5px] bg-wine/20 mb-16" />

      {/* ── Placeholder text — cryptic, atmospheric ── */}
      <p className="interlude-text font-display italic text-2xl sm:text-3xl md:text-4xl text-wine/70 max-w-3xl leading-relaxed font-light mb-8">
        Holas nosotros somos Despues de Fidel
      </p>

      <p className="interlude-text text-[11px] uppercase tracking-ritual text-muted max-w-md leading-relaxed">
        y si queres oirlo, oilo.
      </p>

      {/* ── Three dots ── */}
      <div className="interlude-text flex items-center gap-3 mt-12">
        <span className="w-[4px] h-[4px] rounded-full bg-gold/60" />
        <span className="w-[4px] h-[4px] rounded-full bg-wine/40" />
        <span className="w-[4px] h-[4px] rounded-full bg-gold/60" />
      </div>
    </section>
  );
}
