import React from "react";

const values = [
  {
    title: "Enfoque integral",
    desc: "Integramos arquitectura y tecnología en cada proyecto.",
  },
  {
    title: "Calidad técnica",
    desc: "Aplicamos estándares profesionales en cada detalle.",
  },
  {
    title: "Eficiencia",
    desc: "Optimizamos recursos sin comprometer resultados.",
  },
  {
    title: "Compromiso",
    desc: "Acompañamos cada etapa hasta la entrega final.",
  },
];

export default function Value() {
  return (
    <section className="value" id="value">
      <div className="value-header">
        <h2>Por qué elegirnos</h2>
        <p>Diferenciales que garantizan resultados</p>
      </div>

      <div className="value-grid">
        {values.map((v, i) => (
          <div className="value-item" key={i}>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}