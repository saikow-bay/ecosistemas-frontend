import React from "react";

const THEME = { bg: "#CFCFCF", ink: "#111111", accent: "#FF4B36" };

export default function Biomas() {
  return (
    <div className="min-h-screen" style={{ background: THEME.bg, color: THEME.ink }}>
      <Header />

      <main className="p-4 grid gap-4 max-w-6xl mx-auto">
        {/* Introducción */}
        <Section title="¿Qué es un Bioma?">
          <Panel subtle>
            <p className="text-sm leading-relaxed opacity-90">
              Un <b>bioma</b> es una gran unidad ecológica que agrupa ecosistemas con clima, suelo, flora y fauna semejantes. Estas unidades representan las principales comunidades terrestres del planeta.
            </p>
            <p className="text-sm leading-relaxed opacity-90 mt-2">
              Los biomas se caracterizan por tener patrones climáticos distintivos que determinan los tipos de organismos que pueden vivir en ellos.
            </p>
          </Panel>
        </Section>

        {/* Características */}
        <Section title="Características Clave">
          <div className="grid md:grid-cols-2 gap-4">
            <Card title="Clima similar" />
            <Card title="Suelos comparables" />
            <Card title="Flora adaptada" />
            <Card title="Fauna especializada" />
          </div>
        </Section>

        {/* Principales Biomas */}
        <Section title="Principales Biomas del Planeta">
          <div className="grid md:grid-cols-2 gap-4">
            <Card title="Selva Tropical">
              <p className="text-sm opacity-90">Alta biodiversidad, lluvias constantes, temperaturas cálidas todo el año.</p>
            </Card>
            <Card title="Desierto">
              <p className="text-sm opacity-90">Baja precipitación, adaptaciones a la sequía, temperaturas extremas.</p>
            </Card>
            <Card title="Pradera o Sabana">
              <p className="text-sm opacity-90">Dominio de pastos, herbívoros abundantes, precipitación moderada.</p>
            </Card>
            <Card title="Bosque Templado">
              <p className="text-sm opacity-90">Estaciones marcadas, diversidad moderada, árboles caducifolios.</p>
            </Card>
            <Card title="Tundra">
              <p className="text-sm opacity-90">Bajas temperaturas, suelos congelados, vegetación baja.</p>
            </Card>
          </div>
        </Section>

        {/* Actividad */}
        <Section title="Actividad Práctica en Clase">
          <div className="grid md:grid-cols-3 gap-4">
            <Card title="Observar">
              <p className="text-sm opacity-90">Analicen las características climáticas y vegetación de cada imagen.</p>
            </Card>
            <Card title="Clasificar">
              <p className="text-sm opacity-90">Identifiquen el bioma correspondiente basándose en los patrones observados.</p>
            </Card>
            <Card title="Ejemplificar">
              <p className="text-sm opacity-90">Mencionen una especie representativa de cada bioma.</p>
            </Card>
          </div>
        </Section>

        {/* Biomas Detallados */}
        <Section title="Pradera o Sabana: Ecosistema de Pastizales">
          <Panel subtle>
            <p className="text-sm opacity-90">Vastas extensiones de pastizales, con árboles dispersos en sabanas. Cruciales para herbívoros y depredadores, con papel en el ciclo global del carbono.</p>
            <ul className="list-disc ml-4 text-sm opacity-90 mt-2">
              <li><b>Clima Estacional:</b> Alternancia de temporadas secas y lluviosas.</li>
              <li><b>Vegetación:</b> Pastizales adaptados al fuego y herbívoros.</li>
              <li><b>Fauna:</b> Cebras, ñus, bisontes, leones y lobos.</li>
            </ul>
          </Panel>
        </Section>

        <Section title="Bosque Templado: Ecosistema de Cuatro Estaciones">
          <Panel subtle>
            <p className="text-sm opacity-90">Biomas con estaciones bien definidas, dominados por árboles caducifolios en latitudes medias.</p>
            <ul className="list-disc ml-4 text-sm opacity-90 mt-2">
              <li><b>Clima:</b> Cuatro estaciones, lluvias moderadas.</li>
              <li><b>Árboles:</b> Robles, arces, hayas.</li>
              <li><b>Fauna:</b> Ciervos, osos, zorros, aves e insectos.</li>
            </ul>
          </Panel>
        </Section>

        <Section title="Desierto: Ecosistema de Extremos Áridos">
          <Panel subtle>
            <p className="text-sm opacity-90">Reciben muy pocas precipitaciones, con gran variación térmica entre día y noche.</p>
            <ul className="list-disc ml-4 text-sm opacity-90 mt-2">
              <li><b>Baja Precipitación:</b> Menos de 250 mm anuales.</li>
              <li><b>Temperaturas:</b> Días calurosos y noches frías.</li>
              <li><b>Adaptaciones:</b> Flora y fauna especializadas en conservar agua.</li>
            </ul>
          </Panel>
        </Section>

        <Section title="Selva Tropical: Ecosistema de Vida Exuberante">
          <Panel subtle>
            <p className="text-sm opacity-90">Clima cálido y húmedo constante, con lluvias abundantes durante todo el año. Es el bioma más biodiverso del planeta.</p>
            <ul className="list-disc ml-4 text-sm opacity-90 mt-2">
              <li><b>Estructura Vertical:</b> Diversos estratos de vegetación.</li>
              <li><b>Ciclo del Agua:</b> Alta evaporación y transpiración.</li>
              <li>Consideradas los <b>“pulmones del planeta”.</b></li>
            </ul>
          </Panel>
        </Section>

        <Section title="Tundra: El Ecosistema de Frío Extremo">
          <Panel subtle>
            <p className="text-sm opacity-90">Presente en regiones árticas y montañosas, caracterizada por suelos congelados y vegetación baja.</p>
            <ul className="list-disc ml-4 text-sm opacity-90 mt-2">
              <li><b>Permafrost:</b> Suelo permanentemente congelado.</li>
              <li><b>Clima:</b> Inviernos largos, veranos cortos y frescos.</li>
              <li><b>Flora:</b> Musgos, líquenes y arbustos enanos.</li>
            </ul>
          </Panel>
        </Section>

        {/* Imagen final */}
        <Section title="Representación Visual">
          <div
            className="mt-4 rounded-lg overflow-hidden"
            style={{ border: "1px solid rgba(17,17,17,0.18)" }}
          >
            <img
              src="https://cloudfront-us-east-1.images.arcpublishing.com/elimparcial/KTEFQZ23IVEAPKYXAFGWS4UA6Y.jpg"
              alt="Imagen representativa de biomas"
              className="w-full h-auto object-cover"
            />
          </div>
        </Section>
      </main>

      <footer className="p-4 max-w-6xl mx-auto">
        <div className="text-xs opacity-70" style={{ borderTop: "1px solid rgba(17,17,17,0.18)" }}>
          <div className="pt-3">
        Lifeder. (5 de enero de 2021). Los 10 Biomas de México y sus Características. Recuperado de: <a href="https://www.lifeder.com/biomas-mexico/" className="underline" target="_blank">https://www.lifeder.com/biomas-mexico/</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* =================== UI Components =================== */

function Header() {
  return (
    <header className="p-4" style={{ borderBottom: "1px solid rgba(17,17,17,0.18)" }}>
      <h1 className="text-xl font-bold tracking-tight">
        <span style={{ color: THEME.accent }}>6</span> • Biomas
      </h1>
      <p className="text-xs mt-1 opacity-80">Diversidad ecológica y características principales</p>
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

function Card({ title, accent = false, children }: { title: string; accent?: boolean; children?: React.ReactNode }) {
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
