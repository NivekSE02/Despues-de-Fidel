import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#08080a] py-16 px-6 text-zinc-500 dark:text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-serif-conceptual text-2xl uppercase tracking-[0.2em] font-medium text-zinc-900 dark:text-zinc-100 block mb-2">
            Después de Fidel
          </span>
          <p className="text-xs tracking-wider max-w-md text-zinc-600 dark:text-zinc-400 font-light">
            Archivo sonoro independiente. Todos los derechos reservados. Registrado bajo licencia de preservación cultural.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-xs uppercase tracking-[0.25em]">
          <span className="text-[#7B1123] dark:text-[#D4AF37] font-mono">Año MMXXVI</span>
          <button 
            type="button"
            onClick={scrollToTop} 
            className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
