
import React from "react";
import useReveal from "../useReveal";

const benefits = [
  "Reduce desperdicio de materiales",
  "Evita modificaciones posteriores",
  "Minimiza fallas futuras",
  "Mejora la seguridad y eficiencia energética",
  "Aumenta el valor del inmueble",
];

export default function Value() {
  useReveal();

  return (
    <section className="value" id="value">

      <div className="value-container">

        {/* IZQUIERDA → IMPACTO */}
        <div className="value-left reveal-left">
          <h2>
            No encarecemos
            <br />
            <span>la obra.</span>
          </h2>

          <h2 className="secondary">
            La optimizamos.
          </h2>
        </div>

        {/* DERECHA → CONTENIDO */}
        <div className="value-right">

          <p className="value-intro reveal">
            Una instalación correctamente proyectada no es un gasto,
            es una decisión técnica que impacta directamente en la calidad
            y el valor final del proyecto.
          </p>

          <div className="value-benefits">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="value-item reveal"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <span>{b}</span>
              </div>
            ))}
          </div>

          <p className="value-closing reveal">
            Nuestro diferencial está en la planificación técnica aplicada a la ejecución.
          </p>

        </div>
      </div>

    </section>
  );
}