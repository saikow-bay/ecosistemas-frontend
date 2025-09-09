import React from "react";

/**
 * PageInfoFotosintesisResp — Página informativa (no interactiva)
 * Estilo y colores copiados del archivo base (gris cálido, tinta negra y acento coral).
 * Sin dependencias adicionales. Usa utilidades tipo Tailwind en las clases.
 *
 * Contenido: "Fotosíntesis y Respiración Celular: Un Diálogo de la Vida"
 * Autora citada: Dra. Karina Morales Ueno
 */

const THEME = { bg: "#CFCFCF", ink: "#111111", accent: "#FF4B36" };

export default function PageInfoFotosintesisResp() {
  return (
    <div className="min-h-screen" style={{ background: THEME.bg, color: THEME.ink }}>
      <Header />

      <main className="p-4 grid gap-4 max-w-6xl mx-auto">
        {/* Resumen / Introducción */}
        <Section title="Un viaje por el ciclo de la energía">
          <Panel subtle>
            <p className="text-sm leading-relaxed opacity-90">
              La vida en la Tierra depende de un ciclo energético sostenido por dos procesos complementarios: <b>fotosíntesis</b> y <b>respiración celular</b>. Aunque parecen opuestos, forman un diálogo bioquímico que mantiene el equilibrio de los ecosistemas y permite que la energía fluya desde el Sol hacia todos los seres vivos.
            </p>
          </Panel>
        </Section>

        {/* Bloque: Fotosíntesis */}
        <Section title="Fotosíntesis: fabricar energía almacenada" kicker="Cloroplastos • Plantas, algas y algunas bacterias">
          <div className="grid md:grid-cols-3 gap-4">
            <Card title="Absorción de luz" accent>
              <p className="text-sm opacity-90">Los pigmentos de <b>clorofila</b> capturan la energía luminosa en los <b>tilacoides</b> de los cloroplastos.</p>
            </Card>
            <Card title="Captación de materiales" accent>
              <p className="text-sm opacity-90">La planta incorpora <b>agua (H₂O)</b> por raíces y <b>CO₂</b> a través de los estomas.</p>
            </Card>
            <Card title="Transformación química" accent>
              <p className="text-sm opacity-90">Reacciones luminosas y del <b>Ciclo de Calvin</b> convierten insumos en <b>glucosa</b>; se libera <b>O₂</b> como subproducto.</p>
            </Card>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
            <Panel>
              <h3 className="font-semibold mb-2">Ecuación global</h3>
              <Equation>
                6CO₂ + 6H₂O + luz \u2192 C₆H₁₂O₆ + 6O₂
              </Equation>
              <p className="text-sm opacity-90 mt-2">
                La <b>glucosa</b> producida es una reserva de energía química y base de la <b>cadena alimenticia</b>: sostiene el crecimiento vegetal, forma <b>celulosa</b>, se almacena como <b>almidón</b> y nutre a herbívoros y carnívoros.
              </p>
            </Panel>

            <Panel subtle>
              <h3 className="font-semibold mb-2">Fases dentro del cloroplasto</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• <b>Fase lumínica</b> (tilacoides): fotólisis del agua, gradiente de H⁺, formación de <b>ATP</b> y <b>NADPH</b>, liberación de <b>O₂</b>.</li>
                <li>• <b>Ciclo de Calvin</b> (estroma): fija CO₂ en <b>G3P</b> y regenera <b>RuBP</b>; ~6 vueltas → 1 glucosa.</li>
              </ul>
            </Panel>
          </div>
        </Section>

        {/* Bloque: Glucosa */}
        <Section title="La glucosa: base de la vida">
          <Panel subtle>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• Permite el <b>crecimiento</b> y desarrollo vegetal.</li>
              <li>• Se convierte en <b>celulosa</b> (estructura) o se almacena como <b>almidón</b>.</li>
              <li>• Energía para <b>herbívoros</b> y, en cascada, para <b>carnívoros</b>.</li>
              <li>• Soporta la <b>diversificación</b> de la vida en la biosfera.</li>
            </ul>
          </Panel>
        </Section>

        {/* Bloque: Respiración celular */}
        <Section title="Respiración celular: aprovechar la energía" kicker="Mitocondrias • Casi todos los organismos">
          <div className="grid md:grid-cols-3 gap-4">
            <Card title="Glucólisis">
              <p className="text-sm opacity-90">En el citoplasma, la glucosa se fragmenta liberando una porción de energía utilizable.</p>
            </Card>
            <Card title="Ciclo de Krebs">
              <p className="text-sm opacity-90">En la matriz mitocondrial, los productos de la glucólisis se convierten en moléculas de alta energía intermedia.</p>
            </Card>
            <Card title="Cadena de transporte de electrones">
              <p className="text-sm opacity-90">En las crestas mitocondriales se sintetiza <b>ATP</b>, la <i>moneda energética</i> de la célula.</p>
            </Card>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
            <Panel>
              <h3 className="font-semibold mb-2">Ecuación global</h3>
              <Equation>
                C₆H₁₂O₆ + 6O₂ \u2192 6CO₂ + 6H₂O + ATP
              </Equation>
              <p className="text-sm opacity-90 mt-2">
                Así, las células <b>liberan</b> la energía almacenada en la glucosa para alimentar funciones vitales: movimiento, síntesis, respuesta y homeostasis.
              </p>
            </Panel>

            <Panel subtle>
              <h3 className="font-semibold mb-2">Puntos clave</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Consume <b>O₂</b> y utiliza <b>glucosa</b>.</li>
                <li>• Produce <b>CO₂</b>, <b>H₂O</b> y <b>ATP</b> de uso inmediato.</li>
                <li>• Ocurre de forma <b>continua</b> en prácticamente todas las células.</li>
              </ul>
            </Panel>
          </div>
        </Section>

        {/* Bloque: Relación circular */}
        <Section title="Una relación circular">
          <Panel>
            <Flow>
              <FlowItem label="Energía solar" />
              <Arrow />
              <FlowItem label="Fotosíntesis (glucosa + O₂)" accent />
              <Arrow />
              <FlowItem label="Respiración (ATP)" />
              <Arrow />
              <FlowItem label="CO₂ + H₂O al ambiente" />
              <Arrow />
              <FlowItem label="Ciclo se renueva" />
            </Flow>
            <p className="text-xs opacity-70 mt-2">Los productos de la fotosíntesis son reactivos de la respiración celular y viceversa: un equilibrio que sostiene la biosfera.</p>
          </Panel>
        </Section>

        {/* Tabla comparativa */}
        <Section title="Diferencias clave">
          <div className="overflow-x-auto">
            <table className="w-full text-sm rounded-md" style={{ border: "1px solid rgba(17,17,17,0.18)" }}>
              <thead>
                <tr style={{ background: "#FFFFFF12" }}>
                  <Th>Aspecto</Th>
                  <Th>Fotosíntesis</Th>
                  <Th>Respiración celular</Th>
                </tr>
              </thead>
              <tbody>
                <Tr>
                  <Td>Lugar</Td>
                  <Td>Cloroplastos</Td>
                  <Td>Mitocondrias</Td>
                </Tr>
                <Tr>
                  <Td>Energía</Td>
                  <Td>Captura energía <b>solar</b></Td>
                  <Td>Libera energía <b>almacenada</b></Td>
                </Tr>
                <Tr>
                  <Td>Materia prima</Td>
                  <Td>H₂O, CO₂ y luz</Td>
                  <Td>Glucosa y O₂</Td>
                </Tr>
                <Tr>
                  <Td>Productos</Td>
                  <Td>Glucosa y O₂</Td>
                  <Td>CO₂, H₂O y ATP</Td>
                </Tr>
                <Tr>
                  <Td>Función</Td>
                  <Td>Almacenar energía en <b>glucosa</b></Td>
                  <Td>Obtener <b>ATP</b> para trabajo celular</Td>
                </Tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* Cierre */}
        <Section title="Equilibrio perfecto">
          <Panel subtle>
            <p className="text-sm leading-relaxed opacity-90">
              Sin este intercambio constante de <b>materia</b> y <b>energía</b> —glucosa, oxígeno, dióxido de carbono y agua— la vida tal como la conocemos no existiría. Fotosíntesis y respiración celular son dos caras de una misma moneda evolutiva que sostiene la estabilidad ecológica del planeta.
            </p>
          </Panel>
        </Section>
      </main>

      <footer className="p-4 max-w-6xl mx-auto">
        <div className="text-xs opacity-70" style={{ borderTop: "1px solid rgba(17,17,17,0.18)" }}>
          <div className="pt-3">Autora del contenido: <b>Dra. Karina Morales Ueno</b></div>
        </div>
      </footer>
    </div>
  );
}

/* =================== UI Primitivos =================== */

function Header() {
  return (
    <header className="p-4" style={{ borderBottom: "1px solid rgba(17,17,17,0.18)" }}>
      <h1 className="text-xl font-bold tracking-tight">
        <span style={{ color: THEME.accent }}>3</span> • Fotosíntesis y Respiración Celular
      </h1>
      <p className="text-xs mt-1 opacity-80">Un diálogo de la vida — Dra. Karina Morales Ueno</p>
    </header>
  );
}

function Section({ title, kicker, children }: { title: string; kicker?: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3">
      <div>
        {kicker && (
          <div className="text-[11px] uppercase tracking-wide" style={{ color: THEME.accent }}>
            {kicker}
          </div>
        )}
        <h2 className="text-base font-semibold mt-0.5">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Panel({ children, subtle = false }: { children: React.ReactNode; subtle?: boolean }) {
  return (
    <div
      className="rounded-lg p-4"
      style={{
        background: subtle ? "#FFFFFF12" : "transparent",
        border: "1px solid rgba(17,17,17,0.18)",
      }}
    >
      {children}
    </div>
  );
}

function Card({ title, accent = false, children }: { title: string; accent?: boolean; children: React.ReactNode }) {
  return (
    <div
      className="rounded-md p-3 h-full"
      style={{
        background: "#FFFFFF12",
        border: "1px solid rgba(17,17,17,0.18)",
      }}
    >
      <div className="text-xs font-semibold mb-1" style={{ color: accent ? THEME.accent : THEME.ink }}>{title}</div>
      <div>{children}</div>
    </div>
  );
}

function Equation({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded px-3 py-2 text-sm font-mono select-text"
      style={{
        border: "1px dashed rgba(17,17,17,0.38)",
        background: "#FFFFFF12",
        color: THEME.ink,
      }}
    >
      {children}
    </div>
  );
}

function Flow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 flex-wrap" style={{ border: "1px solid rgba(17,17,17,0.18)", padding: "8px", borderRadius: "8px", background: "#FFFFFF12" }}>
      {children}
    </div>
  );
}

function FlowItem({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div
      className="text-xs px-2 py-1 rounded"
      style={{
        border: "1px solid rgba(17,17,17,0.25)",
        background: accent ? THEME.accent : "transparent",
        color: accent ? "#fff" : THEME.ink,
      }}
    >
      {label}
    </div>
  );
}

function Arrow() {
  return <span className="text-sm opacity-60">→</span>;
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left text-xs font-semibold px-3 py-2" style={{ borderBottom: "1px solid rgba(17,17,17,0.18)" }}>
      {children}
    </th>
  );
}

function Tr({ children }: { children: React.ReactNode }) {
  return (
    <tr className="hover:opacity-95 transition-opacity" style={{ borderBottom: "1px solid rgba(17,17,17,0.12)" }}>
      {children}
    </tr>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="px-3 py-2 align-top">{children}</td>;
}
