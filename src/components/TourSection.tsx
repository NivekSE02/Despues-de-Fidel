import { MapPin } from 'lucide-react';

interface TourDate {
  date: string;
  city: string;
  venue: string;
}

const dates: TourDate[] = [
  { date: '17 · X · 2026', city: 'Santa Nana', venue: 'Intifada' }

];

export default function TourSection() {
  return (
    <section id="fechas" className="py-28 px-8 max-w-6xl mx-auto">
      {/* ── Section label ── */}
      <div className="flex items-center gap-4 mb-20">
        <div className="w-8 h-[0.5px] bg-wine/30" />
        <span className="text-[10px] uppercase tracking-ritual text-wine/60 font-body">
          Salieron toques
        </span>
      </div>

      {/* ── Date list ── */}
      <div className="space-y-0">
        {dates.map((item, index) => (
          <div
            key={index}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-8 border-t border-wine/8 first:border-t-0 hover:bg-parch/60 transition-colors duration-500 -mx-4 px-4"
          >
            {/* ── Date ── */}
            <div className="md:col-span-3">
              <span className="text-[11px] font-mono tracking-wide2 text-gold group-hover:text-wine transition-colors duration-500">
                {item.date}
              </span>
            </div>

            {/* ── City ── */}
            <div className="md:col-span-4">
              <h3 className="font-display text-xl sm:text-2xl font-light text-ink tracking-wide">
                {item.city}
              </h3>
            </div>

            {/* ── Venue ── */}
            <div className="md:col-span-5 flex items-center gap-2 md:justify-end">
              <MapPin className="w-3 h-3 text-wine/40" />
              <span className="text-[11px] text-muted tracking-wide2">
                {item.venue}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
