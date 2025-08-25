import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * ZeroLab — Explorador de Ecosistemas
 * Interactivo, estable y con look “código”.
 * - Árbol de decisión (Ambiente → Origen → Clima) -> ecosistemas probables
 * - Panel Biótico vs Abiótico (chips explicativos)
 * - Selector UICN para filtrar
 * - Resumen informativo al final
 *
 * No usa timers, ni animaciones pesadas; 100% determinista y funcional.
 */

const THEME = { fondo: "#CFCFCF", tinta: "#111111", acento: "#FF4B36" };

type Ambiente = "Terrestre" | "Marino" | "Dulciacuícola" | "Subterráneo" | "Urbano" | "";
type Origen = "Natural" | "Antrópico" | "";
type Clima = "Frío" | "Templado" | "Seco" | "Húmedo/Tropical" | "";

const AMBIENTES: Ambiente[] = ["Terrestre", "Marino", "Dulciacuícola", "Subterráneo", "Urbano"];
const ORIGENES: Origen[] = ["Natural", "Antrópico"];
const CLIMAS: Clima[] = ["Frío", "Templado", "Seco", "Húmedo/Tropical"];

const UICN_CATEG = ["Terrestres", "Marinos", "Dulciacuícolas", "Subterráneos"] as const;
type UICN = typeof UICN_CATEG[number];

// Base de conocimiento (curada de tu texto)
const DB = {
  biotico: ["Plantas", "Animales", "Hongos", "Bacterias"],
  abiotico: ["Luz solar", "Agua", "Temperatura", "Suelo", "Aire"],
  uicn: {
    Terrestres: ["Bosques", "Pastizales", "Desiertos"],
    Marinos: ["Océanos", "Arrecifes de coral", "Zonas costeras"],
    Dulciacuícolas: ["Ríos", "Lagos", "Humedales de agua dulce"],
    Subterráneos: ["Cuevas", "Acuíferos", "Sistemas de cavernas"],
  } as Record<UICN, string[]>,
  // Ecosistemas mexicanos destacados
  mxTerrestres: [
    { nombre: "Bosques Nublados", nota: "Húmedos y frescos; altísima biodiversidad." },
    { nombre: "Bosques Templados", nota: "Hojas caducas o coníferas; estaciones marcadas." },
    { nombre: "Selvas Húmedas", nota: "Cálidas y lluviosas; gran variedad de especies." },
    { nombre: "Selvas Secas", nota: "Períodos de sequía; vegetación caducifolia." },
    { nombre: "Matorrales", nota: "Áridos y semiáridos; vegetación arbustiva resistente." },
    { nombre: "Pastizales", nota: "Gramíneas dominantes; fauna diversa." },
  ],
  mxMarinoCostero: [
    { nombre: "Playas de Arena/Rocosas", nota: "Vida adaptada a olas y mareas." },
    { nombre: "Islas y Dunas Costeras", nota: "Flora y fauna endémica." },
    { nombre: "Manglares", nota: "Bosques costeros clave para protección y biodiversidad." },
    { nombre: "Praderas de Pastos Marinos", nota: "Viveros submarinos para vida marina." },
    { nombre: "Arrecifes de Coral", nota: "Biodiversidad excepcional." },
    { nombre: "Bosques de Microalgas", nota: "Productores primarios esenciales." },
    { nombre: "Ambientes Pelágicos", nota: "Columnas de agua abiertas; grandes migradores." },
  ],
  urbanos: [{ nombre: "Ambientes Urbanos", nota: "Ecosistemas creados por humanos; flora/fauna adaptada a ciudades." }],
};

// Reglas de clasificación (deterministas y legibles)
function clasificar(am: Ambiente, or: Origen, cl: Clima) {
  if (!am || !or || !cl) return [];

  // Ambiente marino/dulceacuícola
  if (am === "Marino") {
    return [
      "Océano (mar abierto / pelágico)",
      "Zonas costeras (playas, costas rocosas)",
      "Manglares",
      "Praderas de pastos marinos",
      "Arrecifes de coral",
    ];
  }
  if (am === "Dulciacuícola") {
    return ["Ríos", "Lagos", "Humedales de agua dulce"];
  }
  if (am === "Subterráneo") {
    return ["Cuevas", "Acuíferos", "Sistemas de cavernas"];
  }
  if (am === "Urbano") {
    return ["Ambientes urbanos", "Parques urbanos", "Zonas verdes periurbanas"];
  }

  // Ambiente terrestre: depende de origen y clima
  if (am === "Terrestre") {
    if (or === "Natural") {
      if (cl === "Seco") return ["Desierto", "Matorral", "Selva seca", "Pastizal seco"];
      if (cl === "Frío") return ["Tundra de altura", "Bosque frío (coníferas)", "Taiga (en latitudes altas)"];
      if (cl === "Templado") return ["Bosque templado", "Pastizal templado", "Matorral templado"];
      if (cl === "Húmedo/Tropical") return ["Selva húmeda (tropical)", "Bosque subtropical", "Bosque nublado"];
    } else {
      // Antrópico
      if (cl === "Seco") return ["Agrosistemas en zonas áridas", "Sistemas silvopastoriles secos"];
      if (cl === "Frío") return ["Campos agrícolas templado-fríos", "Plantaciones forestales frías"];
      if (cl === "Templado") return ["Campos agrícolas templados", "Plantaciones forestales", "Paisajes agropecuarios"];
      if (cl === "Húmedo/Tropical") return ["Campos agrícolas tropicales", "Agroforestería húmeda"];
    }
  }

  // Fallback
  return ["Mosaicos de vegetación", "Transiciones ecotonales"];
}

// Mapa rápido de ejemplos por resultado, para pintar tarjetitas
const EJEMPLOS_MX: Record<string, string> = {
  "Desierto": "Sonora/Chihuahua (matorrales xerófilos).",
  "Matorral": "Baja California, Coahuila.",
  "Selva seca": "Costa del Pacífico (Jalisco–Oaxaca).",
  "Pastizal seco": "Altiplano mexicano.",
  "Tundra de altura": "Zonas de alta montaña (Iztaccíhuatl, Pico de Orizaba).",
  "Bosque frío (coníferas)": "Sierra Tarahumara; bosques de pino-encino.",
  "Taiga (en latitudes altas)": "Referencia global (no en México continental).",
  "Bosque templado": "Michocán, Estado de México (pino/oyamel).",
  "Pastizal templado": "Valle de México, Bajío (históricamente).",
  "Matorral templado": "Norte y altiplanos semisecos.",
  "Selva húmeda (tropical)": "Selva Lacandona (Chiapas).",
  "Bosque subtropical": "Transiciones tropical-templado.",
  "Bosque nublado": "Sierra Madre Oriental y del Sur.",
  "Agrosistemas en zonas áridas": "Agricultura tecnificada en desiertos/mares de plástico.",
  "Sistemas silvopastoriles secos": "Ganadería con árboles dispersos.",
  "Campos agrícolas templado-fríos": "Altiplanos templados.",
  "Plantaciones forestales frías": "Coníferas plantadas.",
  "Campos agrícolas templados": "Altiplanos y valles.",
  "Plantaciones forestales": "Eucalipto/Confieras en varios estados.",
  "Paisajes agropecuarios": "Mosaico agrícola-ganadero.",
  "Campos agrícolas tropicales": "Golfo y Pacífico sur.",
  "Agroforestería húmeda": "Café/cacao bajo sombra (Veracruz, Chiapas).",
  "Océano (mar abierto / pelágico)": "Pacífico y Golfo de México.",
  "Zonas costeras (playas, costas rocosas)": "Baja California, Nayarit, Quintana Roo.",
  "Manglares": "Sian Ka’an, Marismas Nacionales.",
  "Praderas de pastos marinos": "Caribe mexicano.",
  "Arrecifes de coral": "Sistema Arrecifal Mesoamericano.",
  "Ríos": "Grijalva–Usumacinta, Papaloapan.",
  "Lagos": "Pátzcuaro, Chapala (cuencas).",
  "Humedales de agua dulce": "Pantanos de Centla.",
  "Cuevas": "Sierra Gorda, Grutas de Cacahuamilpa.",
  "Acuíferos": "Sistemas subterráneos kársticos.",
  "Sistemas de cavernas": "Yucatán (cenotes, cavernas).",
  "Ambientes urbanos": "CDMX, Monterrey, Guadalajara.",
  "Parques urbanos": "Bosque de Chapultepec.",
  "Zonas verdes periurbanas": "Suelos de conservación al sur de CDMX.",
};

const ZeroLab: React.FC = () => {
  const nav = useNavigate();

  // Estado principal del árbol
  const [ambiente, setAmbiente] = useState<Ambiente>("");
  const [origen, setOrigen] = useState<Origen>("");
  const [clima, setClima] = useState<Clima>("");

  // Filtro UICN
  const [uicn, setUicn] = useState<UICN | "">("");

  // Selección de panel biótico/abiótico
  const [panel, setPanel] = useState<"biotico" | "abiotico">("biotico");

  const resultados = useMemo(() => {
    const base = clasificar(ambiente, origen, clima);
    // Si hay filtro UICN, preferimos los que caen en esa familia.
    if (!uicn) return base;

    const familia = new Set(DB.uicn[uicn]);
    // Si algún resultado coincide con esa familia, priorízalo
    const pri: string[] = [];
    const resto: string[] = [];
    base.forEach((x) => {
      if ([...familia].some((cat) => x.toLowerCase().includes(cat.split(" ")[0].toLowerCase()))) {
        pri.push(x);
      } else {
        resto.push(x);
      }
    });
    return [...pri, ...resto];
  }, [ambiente, origen, clima, uicn]);

  const ejemplosMX = useMemo(() => {
    // Mostrar ejemplos de México coherentes con el ambiente seleccionado
    if (ambiente === "Marino") return DB.mxMarinoCostero;
    if (ambiente === "Dulciacuícola") return DB.mxMarinoCostero.filter((e) =>
      ["Ríos", "Lagos", "Arrecifes", "Praderas", "Pelágicos"].some((k) =>
        e.nombre.toLowerCase().includes(k.toLowerCase())
      )
    );
    if (ambiente === "Subterráneo")
      return [
        { nombre: "Cuevas", nota: "Formaciones subterráneas con condiciones únicas." },
        { nombre: "Acuíferos", nota: "Reservas de agua subterránea." },
        { nombre: "Sistemas de cavernas", nota: "Complejas redes subterráneas." },
      ];
    if (ambiente === "Urbano") return DB.urbanos;
    // Terrestre (o vacío): lista completa terrestre
    return DB.mxTerrestres;
  }, [ambiente]);

  const kpis = [
    { k: "Ambiente", v: ambiente || "—", badge: "A" },
    { k: "Origen", v: origen || "—", badge: "O" },
    { k: "Clima", v: clima || "—", badge: "C" },
    { k: "UICN", v: uicn || "—", badge: "U" },
  ];

  return (
    <div className="min-h-screen" style={{ background: THEME.fondo, color: THEME.tinta }}>
      {/* HEADER */}
      <header className="p-4 flex items-center justify-between select-none">
        <h1 className="text-xl font-bold tracking-tight">
          <span style={{ color: THEME.acento }}>0</span> • Explorador de Ecosistemas
        </h1>
        <button
          onClick={() => nav("/mapa")}
          className="px-3 py-1 rounded"
          style={{ border: "1px solid rgba(17,17,17,0.25)" }}
        >
          Volver al mapa
        </button>
      </header>

      {/* KPIs */}
      <section className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          {kpis.map(({ k, v, badge }) => (
            <div
              key={k}
              className="flex items-center justify-between rounded-md px-4 py-3"
              style={{ background: "#FFFFFF12", border: "1px solid rgba(17,17,17,0.18)" }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: THEME.acento }}>{badge}</span>
                <span className="text-sm opacity-90">{k}</span>
              </div>
              <span className="text-base font-semibold">{v}</span>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN */}
      <main className="grid gap-6 p-4 lg:grid-cols-[1.2fr_1fr]">
        {/* IZQUIERDA: Árbol de decisión */}
        <section
          className="rounded-lg p-4"
          style={{ background: THEME.fondo, border: "1px solid rgba(17,17,17,0.18)" }}
        >
          <h2 className="font-semibold mb-3">1) Árbol de decisión</h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <Fieldset label="Ambiente" options={AMBIENTES} value={ambiente} onChange={setAmbiente} />
            <Fieldset label="Origen" options={ORIGENES} value={origen} onChange={setOrigen} disabled={!ambiente} />
            <Fieldset label="Clima" options={CLIMAS} value={clima} onChange={setClima} disabled={!ambiente} />
          </div>

          <div className="mt-4">
            <h3 className="font-semibold mb-2">Ecosistemas probables</h3>
            {resultados.length === 0 ? (
              <p className="text-sm opacity-80">Selecciona Ambiente, Origen y Clima para ver resultados.</p>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {resultados.map((res) => (
                  <Card key={res} title={res} subtitle={EJEMPLOS_MX[res] || "—"} />
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setAmbiente("" as Ambiente);
                setOrigen("" as Origen);
                setClima("" as Clima);
              }}
              className="px-3 py-2 font-semibold rounded"
              style={{ border: "1px solid rgba(17,17,17,0.25)" }}
            >
              Limpiar
            </button>
            <button
              onClick={() => {
                // Selección rápida pseudoaleatoria, sin depender de Math.random excesivo
                const a = AMBIENTES[(Date.now() / 1_000) % AMBIENTES.length | 0];
                const o = ORIGENES[(Date.now() / 2_000) % ORIGENES.length | 0];
                const c = CLIMAS[(Date.now() / 3_000) % CLIMAS.length | 0];
                setAmbiente(a);
                setOrigen(o);
                setClima(c);
              }}
              className="px-3 py-2 font-semibold rounded text-white"
              style={{ background: THEME.acento }}
            >
              Sugerir
            </button>
          </div>
        </section>

        {/* DERECHA: Paneles y UICN */}
        <aside
          className="rounded-lg p-4"
          style={{ background: THEME.fondo, border: "1px solid rgba(17,17,17,0.18)" }}
        >
          <h2 className="font-semibold mb-3">2) Biótico vs. Abiótico</h2>

          <div className="mb-3 flex gap-2">
            <Toggle
              label="Biótico"
              active={panel === "biotico"}
              onClick={() => setPanel("biotico")}
              color={THEME.acento}
            />
            <Toggle
              label="Abiótico"
              active={panel === "abiotico"}
              onClick={() => setPanel("abiotico")}
              color={THEME.tinta}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {(panel === "biotico" ? DB.biotico : DB.abiotico).map((chip) => (
              <span
                key={chip}
                className="text-xs px-2 py-1 rounded-md"
                style={{ background: "#FFFFFF22", border: "1px solid rgba(17,17,17,0.18)" }}
                title={panel === "biotico" ? "Componente vivo" : "Factor físico/químico"}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="font-semibold mb-2">3) Selector UICN</h2>
            <div className="flex flex-wrap gap-2 mb-3">
              {UICN_CATEG.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setUicn((prev) => (prev === cat ? "" : cat))}
                  className="px-2 py-1 rounded text-xs"
                  style={{
                    border: "1px solid rgba(17,17,17,0.25)",
                    background: uicn === cat ? THEME.acento : "transparent",
                    color: uicn === cat ? "#fff" : THEME.tinta,
                  }}
                >
                  {cat}
                </button>
              ))}
              <button
                onClick={() => setUicn("")}
                className="px-2 py-1 rounded text-xs"
                style={{ border: "1px solid rgba(17,17,17,0.25)" }}
              >
                Limpiar
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {(uicn ? DB.uicn[uicn] : UICN_CATEG.flatMap((k) => DB.uicn[k])).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 rounded-md"
                  style={{ background: "#FFFFFF22", border: "1px solid rgba(17,17,17,0.18)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">Ejemplos en México (contexto)</h3>
            <div className="grid gap-2">
              {ejemplosMX.map((e) => (
                <Card key={e.nombre} title={e.nombre} subtitle={e.nota} compact />
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* RESUMEN INFORMATIVO */}
      <section className="p-4">
        <div
          className="rounded-lg p-4"
          style={{ background: "#FFFFFF12", border: "1px solid rgba(17,17,17,0.18)" }}
        >
          <h2 className="font-semibold mb-2">Resumen rápido</h2>
          <ul className="text-sm space-y-1 opacity-90">
            <li>• <b>¿Qué es un ecosistema?</b> Comunidad de seres vivos + entorno físico que interactúan como unidad.</li>
            <li>• <b>Biótico</b>: plantas, animales, hongos, bacterias. <b>Abiótico</b>: luz, agua, temperatura, suelo, aire.</li>
            <li>• <b>Por ambiente</b>: Terrestres, Acuáticos (marinos y dulceacuícolas), Subterráneos, Urbanos.</li>
            <li>• <b>Por origen</b>: Naturales (pocos cambios humanos) vs. Antrópicos (ciudades, cultivos, presas).</li>
            <li>• <b>UICN</b>: Clasificación jerárquica que integra estructura y función (Terrestres/Marinos/Dulciacuícolas/Subterráneos).</li>
            <li>• <b>México</b>: País megadiverso con bosques nublados y templados, selvas húmedas y secas, matorrales, pastizales; costas, manglares, praderas marinas, arrecifes.</li>
            <li>• <b>Clave</b>: Entender = conservar. La diversidad sostiene el equilibrio natural.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

/* ===================== UI PRIMITIVOS ===================== */

function Fieldset<T extends string>({
  label,
  options,
  value,
  onChange,
  disabled,
}: {
  label: string;
  options: T[];
  value: T | "";
  onChange: (v: T) => void;
  disabled?: boolean;
}) {
  return (
    <fieldset
      className="rounded-md p-3"
      style={{ border: "1px solid rgba(17,17,17,0.18)", opacity: disabled ? 0.6 : 1 }}
    >
      <legend className="text-sm font-semibold px-1">{label}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            disabled={!!disabled}
            onClick={() => onChange(opt)}
            className="px-2 py-1 rounded text-xs"
            style={{
              border: "1px solid rgba(17,17,17,0.25)",
              background: value === opt ? THEME.acento : "transparent",
              color: value === opt ? "#fff" : THEME.tinta,
              cursor: disabled ? "not-allowed" : "pointer",
            }}
            title={opt}
          >
            {opt}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

function Toggle({ label, active, onClick, color }: { label: string; active: boolean; onClick: () => void; color: string }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-2 rounded text-sm font-semibold"
      style={{
        border: "1px solid rgba(17,17,17,0.25)",
        background: active ? color : "transparent",
        color: active ? "#fff" : THEME.tinta,
      }}
    >
      {label}
    </button>
  );
}

function Card({ title, subtitle, compact = false }: { title: string; subtitle?: string; compact?: boolean }) {
  return (
    <div
      className="rounded-md"
      style={{
        background: "#FFFFFF22",
        border: "1px solid rgba(17,17,17,0.18)",
      }}
    >
      <div className="px-3 py-2">
        <div className="text-sm font-semibold">{title}</div>
        {subtitle ? (
          <div className="text-xs opacity-80 mt-0.5">{subtitle}</div>
        ) : (
          <div className="text-xs opacity-60 mt-0.5">—</div>
        )}
      </div>
      {!compact && (
        <div
          className="h-1"
          style={{
            background: THEME.acento,
            width: "100%",
          }}
        />
      )}
    </div>
  );
}

export default ZeroLab;
