import React from "react";

const steps = [
  {
    title: "Análisis",
    desc: "Evaluamos necesidades técnicas y contexto del proyecto.",
  },
  {
    title: "Diseño",
    desc: "Desarrollamos la solución con enfoque arquitectónico.",
  },
  {
    title: "Ejecución",
    desc: "Implementamos con precisión y estándares de calidad.",
  },
  {
    title: "Entrega",
    desc: "Validación final y puesta en marcha del sistema.",
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-header">
        <h2>Proceso de trabajo</h2>
        <p>Metodología clara, resultados predecibles</p>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div className="process-step" key={i}>
            <div className="process-circle">
              {String(i + 1).padStart(2, "0")}
            </div>

            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}