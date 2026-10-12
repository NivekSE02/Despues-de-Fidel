import { Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-auto py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-[0.5px] bg-wine/10 mb-12" />

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8">
          {/* ── Left: name ── */}
          <div>
            <span className="font-display text-sm tracking-ritual uppercase text-ink/40 block mb-1">
              Después de Fidel
            </span>
            <span className="text-[10px] tracking-wide2 text-muted font-mono">
              MMXXVI
            </span>
          </div>

          {/* ── Right: social + back to top ── */}
          <div className="flex items-center gap-6">
            {/* Social icons */}
            <a
              href="https://www.instagram.com/despuesdefidel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted hover:text-wine transition-colors duration-500"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@Despuesdefidel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted hover:text-wine transition-colors duration-500"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <span className="w-[3px] h-[3px] rounded-full bg-wine/20" />

            <a
              href="#"
              className="text-[10px] uppercase tracking-ritual text-muted hover:text-wine transition-colors duration-500"
            >
              Arriba
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
