import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

interface TourDate {
  date: string;
  city: string;
  venue: string;
  status: string;
}

const dates: TourDate[] = [
  { date: '14 NOV 2026', city: 'Ciudad de México', venue: 'Teatro Ángela Peralta', status: 'Acceso Disponible' },
  { date: '28 NOV 2026', city: 'La Habana', venue: 'Fabrica de Arte Cubano (Nave 4)', status: 'Últimas Entradas' },
  { date: '12 DIC 2026', city: 'Bogotá', venue: 'Auditorio Lumière', status: 'Acceso Disponible' },
  { date: '22 ENE 2027', city: 'Madrid', venue: 'Círculo de Bellas Artes', status: 'Próximamente' }
];

export default function TourSection() {
  return (
    <section id="fechas" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#7B1123] dark:text-[#D4AF37] block mb-2">
            Apariciones Físicas
          </span>
          <h2 className="font-serif-conceptual text-4xl sm:text-5xl text-zinc-950 dark:text-zinc-50 font-normal">
            En Directo
          </h2>
        </div>
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
          Capacidad limitada por función
        </p>
      </div>

      <div className="divide-y divide-zinc-200 dark:divide-zinc-800 border-y border-zinc-200 dark:border-zinc-800">
        {dates.map((item, index) => (
          <div
            key={index}
            className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-zinc-50/70 dark:hover:bg-zinc-900/30 transition-colors px-4 -mx-4 rounded-sm"
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-xs sm:text-sm tracking-widest text-[#7B1123] dark:text-[#D4AF37] w-28">
                {item.date}
              </span>
              <div>
                <h3 className="font-serif-conceptual text-2xl sm:text-3xl font-normal text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1 transition-transform">
                  {item.city}
                </h3>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3 h-3 text-[#7B1123] dark:text-[#D4AF37]" />
                  {item.venue}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0">
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-zinc-500 dark:text-zinc-400">
                {item.status}
              </span>
              <button 
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-300 dark:border-zinc-700 text-xs uppercase tracking-[0.2em] font-medium text-zinc-900 dark:text-zinc-100 group-hover:border-[#7B1123] dark:group-hover:border-[#D4AF37] group-hover:text-[#7B1123] dark:group-hover:text-[#D4AF37] transition-all rounded-sm"
              >
                <span>Localidad</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
