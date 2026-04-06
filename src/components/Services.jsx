import React from "react";
import useReveal from "../useReveal";

const services = [
  {
    title: "Ingeniería Eléctrica",
    desc: "Diseño y ejecución de instalaciones eléctricas seguras y eficientes.",
  },
  {
    title: "Automatización",
    desc: "Implementación de sistemas inteligentes para optimizar procesos.",
  },
  {
    title: "Energía Solar",
    desc: "Soluciones sustentables para generación de energía renovable.",
  },
  {
    title: "Mantenimiento",
    desc: "Servicio técnico especializado para instalaciones existentes.",
  },
];

export default function Services() {
  useReveal();

  return (
    <section className="services" id="services">
      
      {/* HEADER */}
      <div className="services-header reveal">
        <h2>Servicios</h2>
        <p>Soluciones técnicas con enfoque arquitectónico</p>
      </div>

      {/* GRID */}
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card reveal" key={i}>
            <div className="service-number">
              {String(i + 1).padStart(2, "0")}
            </div>

            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}