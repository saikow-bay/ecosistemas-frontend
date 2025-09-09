import React from "react";

/**
 * PageInfoFotosintesis4 — Página informativa (punto 4)
 * Basado en el mismo estilo que PageInfoFotosintesisResp.
 * Incluye ejemplos de organismos fotosintéticos y su función.
 */

const THEME = { bg: "#CFCFCF", ink: "#111111", accent: "#FF4B36" };

export default function PageInfoFotosintesis4() {
  return (
    <div className="min-h-screen" style={{ background: THEME.bg, color: THEME.ink }}>
      <Header />

      <main className="p-4 grid gap-4 max-w-6xl mx-auto">
        {/* Introducción */}
        <Section title="¿Qué es la fotosíntesis?">
          <Panel subtle>
            <p className="text-sm leading-relaxed opacity-90">
              La <b>fotosíntesis</b> es el proceso mediante el cual <b>plantas, algas y algunas bacterias</b> transforman la
              luz solar en energía química. Es como una “fábrica de alimentos” que produce <b>glucosa</b> y <b>oxígeno</b>,
              sosteniendo casi toda la vida en la Tierra.
            </p>
          </Panel>
        </Section>

        {/* Organismos fotosintéticos */}
        <Section title="Organismos fotosintéticos: los protagonistas" kicker="Ejemplos y funciones">
          <div className="grid md:grid-cols-3 gap-4">
            <Card title="Plantas verdes" accent>
              <p className="text-sm opacity-90">
                Ejemplo: <b>árboles, pasto, flores</b>. <br /> Función: producen oxígeno y glucosa, sirven de base para las
                cadenas alimenticias terrestres.
              </p>
            </Card>
            <Card title="Algas" accent>
              <p className="text-sm opacity-90">
                Ejemplo: <b>algas verdes, rojas, pardas</b>. <br /> Función: responsables de gran parte del oxígeno en océanos,
                sostienen ecosistemas marinos.
              </p>
            </Card>
            <Card title="Bacterias fotosintéticas" accent>
              <p className="text-sm opacity-90">
                Ejemplo: <b>cianobacterias</b>. <br /> Función: pioneras en la fotosíntesis hace miles de millones de años,
                enriquecieron la atmósfera con oxígeno.
              </p>
            </Card>
          </div>
        </Section>

        {/* Clorofila */}
        <Section title="Clorofila: el pigmento mágico">
          <Panel>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• <b>Clorofila A</b>: pigmento principal, convierte luz en energía química.</li>
              <li>• <b>Clorofila B</b>: pigmento accesorio que amplía el rango de luz absorbida.</li>
            </ul>
          </Panel>
        </Section>

        {/* Cloroplastos */}
        <Section title="La fábrica celular: cloroplastos">
          <Panel subtle>
            <p className="text-sm opacity-90">
              Los <b>cloroplastos</b> son organelos donde ocurre la fotosíntesis. Contienen <b>tilacoides</b> con clorofila y
              <b>grana</b> que maximizan la captación de luz. En el <b>estroma</b> sucede el Ciclo de Calvin, donde se sintetiza
              glucosa.
            </p>
          </Panel>
        </Section>

        {/* Etapas */}
        <Section title="Etapas de la fotosíntesis">
          <div className="grid md:grid-cols-2 gap-4">
            <Panel>
              <h3 className="font-semibold mb-2">Fase luminosa</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Ocurre en los tilacoides.</li>
                <li>• Se absorbe luz solar y se divide el agua.</li>
                <li>• Se libera oxígeno (O₂).</li>
                <li>• Se producen <b>ATP</b> y <b>NADPH</b>.</li>
              </ul>
            </Panel>
            <Panel>
              <h3 className="font-semibold mb-2">Fase oscura (Ciclo de Calvin)</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Ocurre en el estroma.</li>
                <li>• Usa ATP y NADPH para fijar <b>CO₂</b>.</li>
                <li>• Forma <b>G3P</b>, precursor de la glucosa.</li>
                <li>• Regenera RuBP para continuar el ciclo.</li>
              </ul>
            </Panel>
          </div>
        </Section>

        {/* ATP/NADPH */}
        <Section title="Herramientas energéticas">
          <Panel subtle>
            <ul className="text-sm space-y-1 opacity-90">
              <li>• <b>ATP</b>: batería celular que impulsa procesos.</li>
              <li>• <b>NADPH</b>: transportador de electrones, clave para reducir CO₂ en la fase oscura.</li>
            </ul>
          </Panel>
        </Section>

        {/* Citocromo */}
        <Section title="El citocromo: puente vital">
          <Panel>
            <p className="text-sm opacity-90">
              Son proteínas que transportan electrones en la fase luminosa. Ayudan a bombear protones dentro de los tilacoides,
              creando el gradiente que permite formar ATP.
            </p>
          </Panel>
        </Section>

        {/* Resumen */}
        <Section title="La fotosíntesis: motor de la vida">
          <Panel subtle>
            <p className="text-sm leading-relaxed opacity-90">
              La fotosíntesis no solo produce alimento y oxígeno, también mantiene el equilibrio ecológico. Sin ella, la vida en
              la Tierra no existiría tal como la conocemos.
            </p>
          </Panel>
        </Section>
      </main>
    </div>
  );
}

/* =================== UI Components =================== */

function Header() {
  return (
    <header className="p-4" style={{ borderBottom: "1px solid rgba(17,17,17,0.18)" }}>
      <h1 className="text-xl font-bold tracking-tight">
        <span style={{ color: THEME.accent }}>1</span> • La Fotosíntesis: La Magia Verde de la Vida
      </h1>
      <p className="text-xs mt-1 opacity-80">Organismos fotosintéticos y su función</p>
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
