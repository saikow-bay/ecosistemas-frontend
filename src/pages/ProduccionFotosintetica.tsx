import React from "react";

/**
 * PageInfoProduccionFotosintetica — Página informativa (no interactiva)
 * Estilo y colores idénticos al archivo base (gris cálido, tinta negra y acento coral).
 * Contenido: "Producción Fotosintética" y sus factores.
 */

const THEME = { bg: "#CFCFCF", ink: "#111111", accent: "#FF4B36" };

export default function PageInfoProduccionFotosintetica() {
  return (
    <div className="min-h-screen" style={{ background: THEME.bg, color: THEME.ink }}>
      <Header />

      <main className="p-4 grid gap-4 max-w-6xl mx-auto">
        {/* Introducción */}
        <Section title="Producción Fotosintética">
          <Panel subtle>
            <p className="text-sm leading-relaxed opacity-90">
              La <b>fotosíntesis</b> es un proceso bioquímico extraordinario que constituye el pilar fundamental de la vida en nuestro planeta, ya que tiene la capacidad de <b>transformar la energía solar en energía química</b>. Este mecanismo esencial permite que las plantas, algas y algunas bacterias utilicen la luz del sol como combustible para sintetizar su propio alimento, lo cual, a su vez, sustenta la existencia de prácticamente todos los demás seres vivos. La <b>eficiencia</b> de este proceso no es constante, sino que está influenciada y modulada por una serie de factores ambientales y fisiológicos.
            </p>
            <p className="text-sm leading-relaxed opacity-90 mt-2">
              La ecuación general de la fotosíntesis resume este complejo proceso de manera concisa:
              <br />
              <span className="block text-center mt-2 font-mono">6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂</span>
              <br />
              Esto significa que, a partir de <b>dióxido de carbono</b>, <b>agua</b> y <b>energía lumínica</b>, las plantas producen <b>glucosa</b> —una molécula de azúcar que actúa como fuente de energía— y <b>oxígeno</b> como subproducto, un gas indispensable para la respiración de la mayoría de los organismos aerobios.
            </p>
          </Panel>
        </Section>

        {/* Factores */}
        <Section title="Factores que afectan la producción fotosintética">
          <div className="grid md:grid-cols-2 gap-4">
            <Card title="Disponibilidad de luz" accent>
              <p className="text-sm opacity-90">
                La luz es un factor limitante crucial para la fotosíntesis, ya que proporciona la energía necesaria para iniciar el proceso. No solo la <b>intensidad lumínica</b> (cantidad de luz que incide sobre la planta) es importante, sino también la <b>duración de la exposición</b> (las horas de luz que recibe) y la <b>calidad espectral</b> (la composición de la luz en diferentes longitudes de onda). Las longitudes de onda de la <b>luz roja y azul</b> son las más efectivas para la fotosíntesis, mientras que la <b>luz verde</b> es mayormente reflejada, lo que explica por qué la mayoría de las hojas son de este color.
              </p>
            </Card>

            <Card title="Concentración de CO₂" accent>
              <p className="text-sm opacity-90">
                El <b>dióxido de carbono</b> es una materia prima esencial que las plantas utilizan para construir los carbohidratos, como la glucosa. Un aumento en la concentración de CO₂ en el ambiente puede impulsar una <b>tasa fotosintética más elevada</b>, siempre y cuando otros factores como la luz y el agua no sean limitantes. Esta es la razón por la que en ambientes controlados, como los <b>invernaderos</b>, se puede aumentar artificialmente la concentración de CO₂ para optimizar el crecimiento de los cultivos y maximizar su producción.
              </p>
            </Card>

            <Card title="Temperatura">
              <p className="text-sm opacity-90">
                La temperatura ejerce una profunda influencia en la actividad de las enzimas que catalizan las reacciones de la fotosíntesis. A <b>temperaturas bajas</b>, la actividad enzimática disminuye, lo que ralentiza el proceso. Por otro lado, las <b>altas temperaturas</b> pueden <b>desnaturalizar las enzimas</b>, haciéndolas inoperantes. Cada especie vegetal posee un <b>rango de temperatura óptimo</b> donde sus enzimas funcionan con la máxima eficiencia. Por ejemplo, las plantas de climas templados suelen tener su pico de rendimiento fotosintético entre los 20 y 30 °C, mientras que las especies tropicales están adaptadas a rangos de temperatura más altos.
              </p>
            </Card>

            <Card title="Agua y nutrientes">
              <p className="text-sm opacity-90">
                El <b>agua</b> es un <b>reactivo directo</b> en la fotosíntesis, siendo descompuesta para liberar electrones, protones y oxígeno. Por lo tanto, una <b>sequía</b> puede reducir drásticamente la capacidad fotosintética de una planta. Del mismo modo, la disponibilidad de <b>nutrientes esenciales</b> es crítica. Elementos como el <b>nitrógeno</b> son cruciales para la síntesis de <b>clorofila</b>, la molécula responsable de captar la luz. El <b>fósforo</b> es fundamental para la formación de <b>ATP</b>, la "moneda energética" de la célula. El <b>magnesio</b> es el <b>átomo central de la molécula de clorofila</b>. La ausencia de cualquiera de estos nutrientes puede detener completamente el proceso de fotosíntesis.
              </p>
            </Card>
          </div>
        </Section>

        {/* Síntesis */}
        <Section title="Importancia de la producción fotosintética">
          <Panel subtle>
            <p className="text-sm leading-relaxed opacity-90">
              La fotosíntesis no solo es vital para la supervivencia de las plantas, sino que es el <b>cimiento de todas las cadenas alimenticias</b> terrestres. Los carbohidratos producidos por las plantas alimentan a los herbívoros, quienes a su vez son consumidos por los carnívoros. Además de ser la base de la biomasa disponible, la fotosíntesis también desempeña un <b>papel crucial en la estabilidad climática</b> al <b>liberar oxígeno</b> a la atmósfera y <b>fijar el dióxido de carbono</b>, ayudando a regular el equilibrio de gases en el planeta.
            </p>
            <p className="text-sm leading-relaxed opacity-90 mt-2">
              Sin la producción fotosintética, la biosfera tal como la conocemos colapsaría. Los niveles de oxígeno atmosférico caerían drásticamente y la mayoría de los organismos, incluidos los humanos, no tendrían una fuente de energía sostenible. En este sentido, la fotosíntesis es mucho más que un simple proceso vegetal: es el <b>motor biológico que mantiene activo y en equilibrio al planeta Tierra</b>.
            </p>
            {/* Imagen agregada aquí */}
            <div
              className="mt-4 rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(17,17,17,0.18)" }}
            >
              <img
                src="https://blogcdn.aakash.ac.in/wordpress_media/2022/03/Process-of-photosynthesis.jpg"
                alt="Diagrama del proceso de fotosíntesis"
                className="w-full h-auto object-cover"
              />
            </div>
          </Panel>
        </Section>
      </main>

      <footer className="p-4 max-w-6xl mx-auto">
        <div className="text-xs opacity-70" style={{ borderTop: "1px solid rgba(17,17,17,0.18)" }}>
          <div className="pt-3">Autor del contenido: <b>Dra. Karina Morales Ueno</b></div>
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
        <span style={{ color: THEME.accent }}>4</span> • Producción Fotosintética
      </h1>
      <p className="text-xs mt-1 opacity-80">Factores determinantes — Material educativo</p>
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