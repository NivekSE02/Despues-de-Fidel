import React, { useState } from 'react';
import { Disc3, Radio, Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-white/70 dark:bg-[#0c0c0e]/80 border-b border-zinc-200/60 dark:border-zinc-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Identidad / Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7B1123] group-hover:scale-125 transition-transform duration-300" />
          <span className="font-serif-conceptual text-2xl tracking-[0.22em] uppercase text-zinc-900 dark:text-zinc-100 font-semibold group-hover:text-[#7B1123] dark:group-hover:text-[#D4AF37] transition-colors">
            Después de Fidel
          </span>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.25em] uppercase font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#manifiesto" className="hover:text-[#7B1123] dark:hover:text-[#D4AF37] transition-colors">
            Manifiesto
          </a>
          <a href="#discografia" className="hover:text-[#7B1123] dark:hover:text-[#D4AF37] transition-colors">
            Obras
          </a>
          <a href="#fechas" className="hover:text-[#7B1123] dark:hover:text-[#D4AF37] transition-colors">
            En Directo
          </a>
          <a 
            href="#escuchar" 
            className="flex items-center gap-2 px-3 py-1.5 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-[#7B1123] dark:hover:border-[#D4AF37] hover:text-[#7B1123] dark:hover:text-[#D4AF37] transition-all rounded-sm"
          >
            <Radio className="w-3.5 h-3.5 text-[#7B1123] dark:text-[#D4AF37]" />
            <span>Frecuencia</span>
          </a>
        </nav>

        {/* Botón Móvil */}
        <div className="flex items-center gap-4 md:hidden pr-12">
          <button 
            type="button"
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Abrir menú" 
            className="text-zinc-800 dark:text-zinc-200 p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú Móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-[#0c0c0e]/95 border-b border-zinc-200 dark:border-zinc-800 px-6 py-6 flex flex-col gap-4 text-xs tracking-[0.25em] uppercase font-medium text-zinc-700 dark:text-zinc-300">
          <a href="#manifiesto" onClick={() => setIsOpen(false)} className="hover:text-[#7B1123]">
            Manifiesto
          </a>
          <a href="#discografia" onClick={() => setIsOpen(false)} className="hover:text-[#7B1123]">
            Obras
          </a>
          <a href="#fechas" onClick={() => setIsOpen(false)} className="hover:text-[#7B1123]">
            En Directo
          </a>
        </div>
      )}
    </header>
  );
}
