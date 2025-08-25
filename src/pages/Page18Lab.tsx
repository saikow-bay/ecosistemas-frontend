import React, { useMemo, useState } from "react";

/**
 * Page18Lab — Versión simple
 * Interacciones:
 *  1) Calculadora rápida de CO₂ (reforestación vs emisiones 2020/2030)
 *  2) Fases de la fotosíntesis (toggle: Lumínica / Oscura)
 * Ficha informativa al final.
 * Sin dependencias extra.
 */

const THEME = { bg: "#CFCFCF", ink: "#111111", accent: "#FF4B36" };

// Datos base (del enunciado)
const EM_2020_TON = 804_000_000;  // 804 millones t CO₂
const EM_2030_TON = 991_000_000;  // 991 millones t CO₂ (proyección)
// 4000 m² → ~2.5 t CO₂/día ⇒ 1 ha (10,000 m²) → 6.25 t/día → 2281.25 t/año
const ABS_TON_PER_HA_PER_YEAR = 6.25 * 365;

type YearMode = "2020" | "2030";
type Phase = "Lumínica" | "Oscura";

export default function Page18Lab() {
  // 1) Calculadora simple
  const [hectareas, setHectareas] = useState<number>(100_000);
  const [year, setYear] = useState<YearMode>("2020");

  // 2) Fases
  const [phase, setPhase] = useState<Phase>("Lumínica");

  // Cálculos
  const emissions = year === "2020" ? EM_2020_TON : EM_2030_TON;
  const absorcion = useMemo(() => hectareas * ABS_TON_PER_HA_PER_YEAR, [hectareas]);
  const cobertura = Math.max(0, Math.min(100, (absorcion / emissions) * 100));

  return (
    <div className="min-h-screen" style={{ background: THEME.bg, color: THEME.ink }}>
      <header className="p-4">
        <h1 className="text-xl font-bold tracking-tight">
          <span style={{ color: THEME.accent }}>18–24</span> • Fotosinteisis y Cambio Climatio
        </h1>
      </header>

      {/* 1) Calculadora rápida */}
      <section className="p-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg p-4" style={{ border: "1px solid rgba(17,17,17,0.18)" }}>
          <h2 className="font-semibold mb-3">1) Calculadora de absorción vs emisiones</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <FieldNumber
              label="Hectáreas a reforestar"
              value={hectareas}
              min={0}
              max={1_000_000}
              step={1_000}
              onChange={setHectareas}
            />
            <FieldToggle<YearMode>
              label="Año base"
              value={year}
              options={["2020", "2030"]}
              onChange={setYear}
            />
          </div>

          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            <Kpi label="Absorción estimada / año" value={fmtTon(absorcion)} accent={THEME.accent} />
            <Kpi label="Emisiones del año" value={fmtTon(emissions)} accent={THEME.ink} />
          </div>

          <div className="mt-4">
            <ProgressBar
              label={`Cobertura de emisiones (${year}) por reforestación`}
              percent={cobertura}
              accent={THEME.accent}
            />
            <p className="text-xs opacity-70 mt-2">
              Estimación didáctica: 4000 m² de árboles ≈ 2.5 t CO₂/día → 1 ha ≈ 2281.25 t/año.
            </p>
          </div>
        </div>

        {/* 2) Fases de la fotosíntesis */}
        <div className="rounded-lg p-4" style={{ border: "1px solid rgba(17,17,17,0.18)" }}>
          <h2 className="font-semibold mb-3">2) Fases de la fotosíntesis</h2>

          <div className="flex gap-2 mb-3">
            {(["Lumínica", "Oscura"] as Phase[]).map((p) => (
              <button
                key={p}
                onClick={() => setPhase(p)}
                className="px-2 py-1 rounded text-xs"
                style={{
                  border: "1px solid rgba(17,17,17,0.25)",
                  background: phase === p ? THEME.accent : "transparent",
                  color: phase === p ? "#fff" : THEME.ink,
                }}
              >
                {p}
              </button>
            ))}
          </div>

          {phase === "Lumínica" ? <LightPhase /> : <DarkPhase />}
        </div>
      </section>

      {/* Información / repaso */}
      <section className="p-4">
        <div className="rounded-lg p-4" style={{ background: "#FFFFFF12", border: "1px solid rgba(17,17,17,0.18)" }}>
          <h2 className="font-semibold mb-2">Resumen esencial (págs. 18–24)</h2>
          <ul className="text-sm space-y-1 opacity-90">
            <li>• <b>Contexto México</b>: Ley General de Cambio Climático; bosques/selvas son clave para capturar CO₂.</li>
            <li>• <b>Importancia</b>: la vegetación absorbe CO₂ vía fotosíntesis (libera O₂ y fabrica azúcares).</li>
            <li>• <b>Evolución</b>: anoxigénica → oxigénica (cianobacterias) → cloroplastos por endosimbiosis.</li>
            <li>• <b>Cloroplasto</b>: tilacoides (fase lumínica), estroma (Ciclo de Calvin).</li>
            <li>• <b>Ecuaciones</b>: H₂O + CO₂ + luz → CH₂O + O₂; global: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂.</li>
            <li>• <b>Productos</b>: glucosa (energía/estructura) y O₂ (respiración de la biosfera).</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

/* ---------- UI mínima ---------- */

function FieldNumber({
  label,
  value,
  min,
  max,
  step = 1_000,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}</label>
      <div className="mt-1 flex items-center gap-2">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          className="w-full"
        />
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(safeNum(e.target.value, min, max))}
          className="w-28 px-2 py-1 rounded text-sm"
          style={{ border: "1px solid rgba(17,17,17,0.25)" }}
        />
      </div>
    </div>
  );
}

function FieldToggle<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: T[];
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <div className="text-sm font-semibold mb-1">{label}</div>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="px-2 py-1 rounded text-xs"
            style={{
              border: "1px solid rgba(17,17,17,0.25)",
              background: value === opt ? THEME.accent : "transparent",
              color: value === opt ? "#fff" : THEME.ink,
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function Kpi({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div
      className="rounded-md px-3 py-2 flex items-center justify-between"
      style={{ background: "#FFFFFF12", border: "1px solid rgba(17,17,17,0.18)" }}
    >
      <span className="text-xs opacity-90">{label}</span>
      <span className="text-sm font-semibold" style={{ color: accent }}>{value}</span>
    </div>
  );
}

function ProgressBar({ label, percent, accent }: { label: string; percent: number; accent: string }) {
  const p = Math.max(0, Math.min(100, percent));
  return (
    <div>
      <div className="flex items-center justify-between text-xs mb-1">
        <span className="opacity-80">{label}</span>
        <span className="font-semibold">{p.toFixed(1)}%</span>
      </div>
      <div className="w-full h-2 rounded" style={{ background: "#FFFFFF55" }}>
        <div
          className="h-2 rounded"
          style={{ width: `${p}%`, background: accent, transition: "width 240ms linear" }}
        />
      </div>
    </div>
  );
}

function LightPhase() {
  return (
    <div className="space-y-2 text-sm">
      <p><b>Ubicación:</b> tilacoides.</p>
      <p>Luz excita clorofilas (P680/FII y P700/FI) → transporte de e⁻ → gradiente de H⁺.</p>
      <p>ATP sintasa forma <b>ATP</b>; se reduce <b>NADP⁺ → NADPH</b>; se libera <b>O₂</b> por fotólisis del agua.</p>
      <p className="text-xs opacity-70"><i>H₂O + luz → 2H⁺ + 2e⁻ + ½ O₂</i></p>
    </div>
  );
}

function DarkPhase() {
  return (
    <div className="space-y-2 text-sm">
      <p><b>Ubicación:</b> estroma.</p>
      <p><b>Ciclo de Calvin</b>: carboxilación (CO₂ + RuBP → 3-PGA) → reducción (G3P) → regeneración (RuBP).</p>
      <p>Balance global: <i>6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂</i>. ~6 vueltas → 1 glucosa.</p>
    </div>
  );
}

/* ---------- Utils ---------- */
function safeNum(v: string, min: number, max: number) {
  const n = Number(v);
  if (Number.isNaN(n)) return min;
  return Math.max(min, Math.min(max, Math.round(n)));
}

function fmtTon(n: number) {
  const abs = Math.abs(n);
  if (abs >= 1_000_000_000) return (n / 1_000_000_000).toFixed(2) + " mil M t";
  if (abs >= 1_000_000) return (n / 1_000_000).toFixed(2) + " M t";
  if (abs >= 1_000) return (n / 1_000).toFixed(2) + " k t";
  return n.toFixed(0) + " t";
}
