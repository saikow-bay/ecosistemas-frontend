import React from "react";

/**
 * PageInfoFotosintesis5 — Página informativa (punto 5)
 * Estilo y colores idénticos al archivo base (gris cálido, tinta negra y acento coral).
 * Contenido: La energía solar como base de la vida y el flujo energético en los ecosistemas.
 */

const THEME = { bg: "#CFCFCF", ink: "#111111", accent: "#FF4B36" };

export default function EnergiaSolar() {
  return (
    <div className="min-h-screen" style={{ background: THEME.bg, color: THEME.ink }}>
      <Header />

      <main className="p-4 grid gap-4 max-w-6xl mx-auto">
        {/* Introducción */}
        <Section title="La Energía Solar como Base de la Vida">
          <Panel subtle>
            <p className="text-sm leading-relaxed opacity-90">
              La <b>energía solar</b> es el origen de casi toda la vida en la Tierra. Sin la radiación proveniente del Sol, los ecosistemas no tendrían la capacidad de generar materia orgánica que alimente a los organismos vivos. Es, en esencia, la “moneda energética” que sostiene todos los procesos biológicos.
            </p>
          </Panel>
        </Section>

        {/* Productores y la Fotosíntesis */}
        <Section title="Productores y el inicio de la cadena" kicker="Del Sol a la Cadena Alimenticia">
          <Card title="Los Productores y la Fotosíntesis">
            <p className="text-sm opacity-90">
              Los organismos <b>productores</b>, como plantas, algas y algunas bacterias, captan la energía solar mediante pigmentos como la <b>clorofila</b>. Gracias a la <b>fotosíntesis</b>, convierten la luz en energía química almacenada en carbohidratos. Estos compuestos no solo son fuente de energía, sino también la base del alimento para los niveles tróficos superiores.
            </p>
          </Card>
          <Card title="La Dinámica del Flujo Energético">
            <p className="text-sm opacity-90">
              Este flujo no es un proceso lineal, sino una red compleja de interacciones. La energía se va dispersando a medida que los organismos realizan funciones vitales como el movimiento, la reproducción o la respiración. El resultado es que nunca toda la energía disponible en un nivel trófico pasa íntegramente al siguiente.
            </p>
          </Card>
        </Section>

        {/* Pirámide de Energía */}
        <Section title="La Pirámide de Energía">
          <Panel subtle>
            <p className="text-sm leading-relaxed opacity-90">
              En cada transferencia, aproximadamente el <b>90% de la energía se pierde</b> en forma de calor metabólico. Solo un <b>10%</b> se conserva y se transfiere. Por ello, las pirámides de energía muestran bases muy amplias en los productores y cúspides estrechas en los depredadores tope. Esta estructura limita el número de organismos que pueden sobrevivir en los niveles superiores.
            </p>
          </Panel>
        </Section>
        
        {/* Ejemplo e Implicaciones */}
        <Section title="Implicaciones en los Ecosistemas" kicker="Ejemplo en los Bosques de Kelp">
          <div className="grid md:grid-cols-2 gap-4">
            <Card title="Implicaciones Generales" accent>
              <p className="text-sm opacity-90">
                La pérdida energética determina la organización y estabilidad de los ecosistemas. Explica, por ejemplo, por qué existen más herbívoros que carnívoros, o por qué los depredadores tope suelen ser escasos. Además, condiciona la diversidad y abundancia de especies dentro de un hábitat.
              </p>
            </Card>
            <Card title="Ejemplo en los Bosques de Kelp" accent>
              <p className="text-sm opacity-90">
                En Ensenada, Baja California, los bosques de kelp son un ejemplo claro de este sistema. Estas algas gigantes realizan fotosíntesis en aguas costeras y frías, produciendo biomasa que sostiene a gran cantidad de organismos. Peces, erizos y moluscos dependen directamente del kelp, mientras que mamíferos marinos como nutrias y lobos marinos se benefician al alimentarse de esos herbívoros o de los peces que habitan en el bosque submarino.
              </p>
            </Card>
          </div>
        </Section>
        
        {/* Conclusión */}
        <Section title="Conclusión: El Motor de la Vida">
          <Panel subtle>
            <p className="text-sm leading-relaxed opacity-90">
              La energía solar no solo ilumina y calienta el planeta: también es el motor invisible que impulsa las cadenas alimenticias. Desde un bosque terrestre hasta un ecosistema marino, la historia siempre es la misma: la luz se convierte en vida, y esa vida alimenta a otras, en un ciclo interminable que sostiene la biodiversidad.
            </p>
            <div
              className="mt-4 rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(17,17,17,0.18)" }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/16/Diagram_of_Trophic_Layers_%26_Energy_Transfer_in_an_Ecosystem.svg"
                alt="Diagrama de las capas tróficas y la transferencia de energía en un ecosistema"
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

/* =================== UI Components =================== */

function Header() {
  return (
    <header className="p-4" style={{ borderBottom: "1px solid rgba(17,17,17,0.18)" }}>
      <h1 className="text-xl font-bold tracking-tight">
        <span style={{ color: THEME.accent }}>5</span> • Energía Solar
      </h1>
      <p className="text-xs mt-1 opacity-80">De la energía solar a las cadenas alimenticias</p>
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