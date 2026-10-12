import React, { useRef } from 'react';
import { Disc3, ArrowUpRight, Volume2 } from 'lucide-react';

interface Album {
  id: string;
  catalog: string;
  title: string;
  year: string;
  description: string;
  tracks: string[];
  duration: string;
}

const albums: Album[] = [
  {
    id: '01',
    catalog: 'DDF-001',
    title: 'Vigilia en Rojo Vino',
    year: '2024',
    description: 'Nueve pasajes sobre la memoria estancada y la arquitectura en ruinas. Guitarras de afinación abierta y percusión metálica.',
    tracks: ['I. Preludio en Cenizas', 'II. Monólogo en el Muro', 'III. Rojo Vino', 'IV. La Niebla Desciende'],
    duration: '42:15 min'
  },
  {
    id: '02',
    catalog: 'DDF-002',
    title: 'Sombras en Oro Viejo',
    year: '2022',
    description: 'Grabación de una sola toma en una capilla abandonada. Disonancias de cuerda y reverberación natural.',
    tracks: ['I. Cuerdas Secas', 'II. Oro y Salitre', 'III. La Espera Inmóvil'],
    duration: '34:50 min'
  },
  {
    id: '03',
    catalog: 'DDF-003',
    title: 'Tratado de la Disonancia',
    year: '2020',
    description: 'El debut fundacional: minimalismo eléctrico, saturación analógica y poesía spoken-word.',
    tracks: ['I. Declaración', 'II. Fractura', 'III. Éxodo en Fa menor', 'IV. Epílogo'],
    duration: '38:00 min'
  }
];

export default function Discography() {
  return (
    <section id="discografia" className="py-24 px-6 max-w-7xl mx-auto border-t border-zinc-200/80 dark:border-zinc-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#7B1123] dark:text-[#D4AF37] block mb-2">
            Catálogo Fonográfico
          </span>
          <h2 className="font-serif-conceptual text-4xl sm:text-5xl text-zinc-950 dark:text-zinc-50 font-normal">
            Obras & Registros
          </h2>
        </div>
        <p className="text-xs tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
          Ediciones limitadas en vinilo y digital
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {albums.map((album) => (
          <article
            key={album.id}
            className="group relative flex flex-col justify-between p-8 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/30 hover:border-[#7B1123] dark:hover:border-[#D4AF37] transition-all duration-500 rounded-sm"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 mb-8 pb-3 border-b border-zinc-200/60 dark:border-zinc-800/60">
                <span className="tracking-[0.2em] font-mono">{album.catalog}</span>
                <span className="tracking-widest">{album.year}</span>
              </div>

              {/* Portada conceptual tipográfica */}
              <div className="relative aspect-square w-full mb-8 bg-zinc-900 text-zinc-100 flex flex-col justify-between p-6 overflow-hidden rounded-sm group-hover:scale-[1.02] transition-transform duration-500">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">Opus {album.id}</span>
                  <Disc3 className="w-5 h-5 text-zinc-500 group-hover:rotate-180 transition-transform duration-1000" />
                </div>
                <div>
                  <h3 className="font-serif-conceptual text-2xl font-light tracking-wide leading-tight text-white mb-2">
                    {album.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#7B1123]" />
                </div>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-6">
                {album.description}
              </p>

              {/* Lista de pistas breve */}
              <div className="space-y-1 mb-8">
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 block mb-2">
                  Pasajes principales:
                </span>
                {album.tracks.map((track, i) => (
                  <div key={i} className="text-xs text-zinc-700 dark:text-zinc-300 font-mono flex items-center justify-between">
                    <span>{track}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-400">{album.duration}</span>
              <button 
                type="button"
                className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-[#7B1123] dark:group-hover:text-[#D4AF37] transition-colors"
              >
                <span>Explorar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
