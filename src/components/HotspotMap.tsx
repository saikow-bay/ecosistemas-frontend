import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ECOSYSTEM, CHAPTERS, Chapter } from '../data/hotspots';
import Tooltip from './Tooltip';

// PALETA
const THEME = {
  fondo: '#CFCFCF',
  tinta: '#111111',
  tintaSuave: 'rgba(17,17,17,0.28)',
  rejilla: 'rgba(0,0,0,0.06)',
  pista: '#A8A8A8',
  acento: '#FF4B36',
};

interface HotspotMapProps {
  onNavigateToChapter: (id: number) => void;
  onNavigateToZero?: () => void;
  onNavigateToPage18?: () => void; // ⬅️ usamos esto para /pagina-18
}

const HotspotMap: React.FC<HotspotMapProps> = ({ onNavigateToChapter, onNavigateToZero, onNavigateToPage18 }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [hora, setHora] = useState<Date>(new Date());

  // Reloj
  useEffect(() => {
    const t = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const horaLocal = useMemo(
    () =>
      new Intl.DateTimeFormat('es-MX', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(hora),
    [hora]
  );

  const chapterById = useMemo(() => {
    const map = new Map<number, Chapter>();
    CHAPTERS.forEach((ch) => map.set(ch.id, ch));
    return map;
  }, []);

  const handleHover = useCallback((chapterId: number, e: React.MouseEvent) => {
    setHoveredId(chapterId);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  }, []);
  const handleLeave = useCallback(() => setHoveredId(null), []);

  const handleClickHotspot = useCallback(
    (chapter: Chapter) => {
      // Navegaciones directas
      if (chapter.id === 0 && onNavigateToZero) {
        onNavigateToZero();
        return;
      }
      // ✅ SOLO el id 2 va a /pagina-18
      if (chapter.id === 2 && onNavigateToPage18) {
        onNavigateToPage18();
        return;
      }
      // Resto abre panel o va a capítulo
      setSelectedChapter(chapter);
      setIsPanelOpen(true);
      // Si prefieres ir directo sin panel:
      // onNavigateToChapter(chapter.id);
    },
    [onNavigateToZero, onNavigateToPage18]
  );

  const handleClosePanel = useCallback(() => {
    setIsPanelOpen(false);
    setSelectedChapter(null);
  }, []);
  const handleOpenChapter = useCallback(
    (id: number) => {
      onNavigateToChapter(id);
      handleClosePanel();
    },
    [onNavigateToChapter, handleClosePanel]
  );

  // Curvas entre capítulos
  const curvedPaths = useMemo(() => {
    return CHAPTERS.slice(0, -1).map((curr, i) => {
      const next = CHAPTERS[i + 1];
      const x1 = curr.x, y1 = curr.y, x2 = next.x, y2 = next.y;
      const dx = x2 - x1, dy = y2 - y1;
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const curvatura = Math.min(Math.hypot(dx, dy) * 0.25, 18);
      const nx = -dy, ny = dx;
      const nlen = Math.hypot(nx, ny) || 1;
      const ux = (nx / nlen) * curvatura;
      const uy = (ny / nlen) * curvatura;
      const c1x = mx + ux, c1y = my + uy;
      const c2x = mx - ux, c2y = my - uy;
      return {
        key: `curva-${curr.id}-${next.id}`,
        d: `M ${x1}% ${y1}% C ${c1x}% ${c1y}% ${c2x}% ${c2y}% ${x2}% ${y2}%`,
        delay: i * 0.25,
      };
    });
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: THEME.fondo }}>
      {/* Fondo técnico */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-6 rounded-[12px]" style={{ border: `1px solid ${THEME.tinta}1A` }} />
        <div
          className="absolute inset-10 rounded-[10px]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, ${THEME.tinta}0F 0, ${THEME.tinta}0F 1px, transparent 1px, transparent 40px),
               repeating-linear-gradient(90deg, ${THEME.tinta}0F 0, ${THEME.tinta}0F 1px, transparent 1px, transparent 40px)`,
          }}
        />
        <div className="absolute top-8 left-8 text-[10px] tracking-widest select-none" style={{ color: `${THEME.tinta}B3` }}>
          Hora local • {horaLocal}
        </div>
        <div className="absolute bottom-8 right-8 text-[10px] tracking-widest select-none" style={{ color: `${THEME.tinta}80` }}>
          Referencia • {ECOSYSTEM?.name ?? 'Mapa'}
        </div>
        <div className="absolute top-8 right-8 select-none flex flex-col items-center" style={{ color: `${THEME.tinta}B3` }}>
          <div className="w-0 h-0 mb-1" style={{ borderLeft: '6px solid transparent', borderRight: '6px solid transparent', borderBottom: `10px solid ${THEME.tinta}` }} />
          <span className="text-[10px] font-semibold tracking-widest">N</span>
        </div>
        <div className="absolute bottom-8 left-8 select-none flex items-center gap-2 text-[10px]" style={{ color: `${THEME.tinta}B3` }}>
          <div className="h-[6px] w-12" style={{ background: THEME.tinta }} />
          <div className="h-[6px] w-12" style={{ background: `${THEME.tinta}59` }} />
          <span className="tracking-wide">escala</span>
        </div>
      </div>

      {/* Líneas rectas */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        {CHAPTERS.map((chapter, i) => {
          if (i === CHAPTERS.length - 1) return null;
          const next = CHAPTERS[i + 1];
          return (
            <motion.line
              key={`linea-${chapter.id}-${next.id}`}
              x1={`${chapter.x}%`}
              y1={`${chapter.y}%`}
              x2={`${next.x}%`}
              y2={`${next.y}%`}
              stroke={THEME.tinta}
              strokeWidth="1"
              strokeOpacity="0.25"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, delay: i * 0.15 }}
            />
          );
        })}
      </svg>

      {/* Curvas */}
      <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none">
        {curvedPaths.map(({ key, d, delay }) => (
          <motion.path
            key={key}
            d={d}
            stroke={THEME.tinta}
            strokeWidth={1.1}
            strokeOpacity="0.28"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, delay }}
          />
        ))}
      </svg>

      {/* Hotspots */}
      <div className="absolute inset-0 z-30">
        {CHAPTERS.map((chapter) => (
          <button
            key={chapter.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none rounded-full"
            style={{ left: `${chapter.x}%`, top: `${chapter.y}%`, cursor: 'pointer' }}
            onMouseEnter={(e) => handleHover(chapter.id, e)}
            onMouseLeave={handleLeave}
            onMouseMove={(e) => {
              if (hoveredId === chapter.id) setTooltipPosition({ x: e.clientX, y: e.clientY });
            }}
            onClick={() => handleClickHotspot(chapter)}
          >
            <div
              className="w-10 h-10 rounded-full"
              style={{
                background: THEME.acento,
                border: `2px solid ${THEME.acento}`,
                boxShadow: `0 0 0 3px ${THEME.tinta}14`,
              }}
            />
          </button>
        ))}
      </div>

      {/* Tooltip */}
      <div className="relative z-40 pointer-events-none">
        <Tooltip
          isVisible={hoveredId !== null}
          content={hoveredId !== null && chapterById.get(hoveredId) ? `${chapterById.get(hoveredId)!.title}` : ''}
          position={tooltipPosition}
        />
      </div>

      {/* Si usas panel de preview para capítulos, lo puedes reactivar aquí y llamar handleOpenChapter */}
    </div>
  );
};

export default HotspotMap;
