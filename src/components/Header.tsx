import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Escucha', href: '#discografia' },
  { label: 'Boton que no hace nada', href: '#ritual' },
  { label: 'Toques', href: '#fechas' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled
        ? 'bg-bone/90 backdrop-blur-sm border-b border-wine/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* ── Mark ── */}
        <a href="#" className="group flex items-center gap-4">
          {/* Tiny wine dot — like a drop of blood */}

          <span
            className="font-display text-lg tracking-ritual uppercase text-ink/70 group-hover:text-wine transition-colors duration-500"
            style={{ fontWeight: 400 }}
          >
            DdF
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-ritual text-muted hover:text-wine transition-colors duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* ── Mobile toggle ── */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
          className="md:hidden text-muted hover:text-wine transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile panel ── */}
      {open && (
        <div className="md:hidden bg-bone/95 backdrop-blur-sm border-t border-wine/5 px-8 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-ritual text-muted hover:text-wine transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
