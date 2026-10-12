import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause, Volume2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Track {
  number: string;
  title: string;
  file: string;
}

const tracks: Track[] = [
  {
    number: '01',
    title: 'Después de Fidel',
    file: '/audio/DESPUES DE FIDEL.mp3',
  },
  {
    number: '02',
    title: 'Catus',
    file: '/audio/catus.mp3',
  },
  {
    number: '03',
    title: 'Bugambilia',
    file: '/audio/Bugambilia.wav',
  },
];

function formatTime(seconds: number): string {
  if (!seconds || isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function Discography() {
  const sectionRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeTrack, setActiveTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrenTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.track-row').forEach((row, i) => {
        gsap.from(row, {
          scrollTrigger: {
            trigger: row,
            start: 'top 88%',
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlay = (track: Track) => {
    // If clicking the same track, toggle play/pause
    if (activeTrack === track.file) {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }
      return;
    }

    // New track — stop old audio, create new
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    const audio = new Audio(track.file);
    audioRef.current = audio;
    setActiveTrack(track.file);
    setProgress(0);
    setCurrenTime(0);
    setDuration(0);

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
        setCurrenTime(audio.currentTime);
      }
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrenTime(0);
    });

    audio.play();
    setIsPlaying(true);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>, track: Track) => {
    if (activeTrack !== track.file || !audioRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;
    audioRef.current.currentTime = ratio * audioRef.current.duration;
  };

  return (
    <section
      ref={sectionRef}
      id="discografia"
      className="py-28 px-8 max-w-6xl mx-auto"
    >
      {/* ── Section label ── */}
      <div className="flex items-center gap-4 mb-20">
        <div className="w-8 h-[0.5px] bg-gold" />
        <span className="text-[10px] uppercase tracking-ritual text-gold font-body">
          Escucha
        </span>
      </div>

      {/* ── Track list ── */}
      <div className="space-y-0">
        {tracks.map((track) => {
          const isActive = activeTrack === track.file;
          const isThisPlaying = isActive && isPlaying;

          return (
            <div key={track.number} className="track-row group">
              {/* ── Top border ── */}
              <div className="w-full h-[0.5px] bg-wine/8 group-hover:bg-wine/20 transition-colors duration-500" />

              <div className="py-8 grid grid-cols-12 gap-4 items-center">
                {/* ── Number ── */}
                <div className="col-span-1">
                  <span
                    className={`font-display text-2xl sm:text-3xl font-light transition-colors duration-500 ${
                      isActive ? 'text-wine' : 'text-wine/30 group-hover:text-wine/60'
                    }`}
                  >
                    {track.number}
                  </span>
                </div>

                {/* ── Title + play button ── */}
                <div className="col-span-5 sm:col-span-6 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handlePlay(track)}
                    className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      isThisPlaying
                        ? 'border-wine bg-wine text-bone'
                        : 'border-wine/20 text-wine/40 hover:border-wine hover:text-wine hover:bg-wine/5'
                    }`}
                    aria-label={isThisPlaying ? `Pausar ${track.title}` : `Reproducir ${track.title}`}
                  >
                    {isThisPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    )}
                  </button>

                  <h3
                    className={`font-display text-xl sm:text-2xl font-light tracking-wide transition-colors duration-500 cursor-pointer ${
                      isActive ? 'text-wine' : 'text-ink group-hover:text-wine'
                    }`}
                    onClick={() => handlePlay(track)}
                  >
                    {track.title}
                  </h3>
                </div>

                {/* ── Progress bar + time ── */}
                <div className="col-span-6 sm:col-span-5 flex items-center gap-3">
                  {isActive ? (
                    <>
                      <span className="text-[10px] font-mono text-muted w-10 text-right">
                        {formatTime(currentTime)}
                      </span>

                      <div
                        className="flex-grow h-[2px] bg-wine/10 rounded-full cursor-pointer relative group/bar"
                        onClick={(e) => handleSeek(e, track)}
                      >
                        <div
                          className="absolute top-0 left-0 h-full bg-wine/60 rounded-full transition-all duration-100"
                          style={{ width: `${progress}%` }}
                        />
                        {/* ── Playhead dot ── */}
                        <div
                          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-wine opacity-0 group-hover/bar:opacity-100 transition-opacity"
                          style={{ left: `${progress}%` }}
                        />
                      </div>

                      <span className="text-[10px] font-mono text-muted w-10">
                        {formatTime(duration)}
                      </span>
                    </>
                  ) : (
                    <div className="flex items-center gap-2 ml-auto">
                      <Volume2 className="w-3 h-3 text-wine/15" />
                      <span className="text-[10px] font-mono text-muted/40 tracking-wide2">
                        · · ·
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* ── Bottom border ── */}
        <div className="w-full h-[0.5px] bg-wine/8" />
      </div>
    </section>
  );
}
