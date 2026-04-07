import React from "react";
import useReveal from "../useReveal";

const electric = [
  "Proyecto eléctrico integral",
  "Cálculo de cargas y dimensionamiento",
  "Diseño de tableros sectorizados",
  "Instalaciones en viviendas y edificios",
  "Reformas y adecuaciones",
  "Armado y montaje de tableros",
  "Sistemas de puesta a tierra",
  "Canalizaciones embutidas y exteriores",
  "Preparación para crecimiento futuro y energías renovables",
];

const tech = [
  "Instalación de sistemas de cámaras (CCTV)",
  "Sistemas de alarma cableados e inalámbricos",
  "Infraestructura de datos y redes",
  "Sistemas de sonido",
  "Preinstalaciones para domótica",
  "Control de accesos",
];
const documentación = [
  "Documentación de proyecto eléctrico conforme a normativa",
  "Planos eléctricos (plantas, unifilares y detalles)",
  "Memorias técnicas y descriptivas",
  "Cálculo de cargas y balance de circuitos",
  "Especificaciones técnicas de materiales",
  "Legajos para presentación municipal o técnica",
  "Entrega de documentación digital y física",
  "Actualización de planos conforme a obra (as-built)",
];

export default function Services() {
  useReveal();

  return (
    <section className="services" id="services">
      {/* HERO */}
      {/* <div className="services-hero reveal">
        <h2>
          Servicios
        </h2>
        <p>
          Diseño, planificación y ejecución técnica con criterio de obra.
        </p>
      </div> */}
      <div className="services-hero value-left reveal">
        <h2>
          Servicios
          <br />
          <span>ARQWATT</span>
        </h2>

        <h2 className="secondary">Diseño técnico aplicado a obra</h2>
      </div>

      {/* BLOQUES PRINCIPALES */}
      <div className="services-main">
        {/* ELECTRICO */}
        <div className="service-big reveal-left">
          <div className="service-big-header">
            <span>01</span>
            <h3>Instalaciones Eléctricas</h3>
          </div>

          <div className="service-big-grid">
            {electric.map((item, i) => (
              <div key={i} className="service-chip light">
                <span className="chip-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="chip-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TECNOLOGIA */}
        <div className="service-big reveal-right dark">
          <div className="service-big-header">
            <span>02</span>
            <h3>Sistemas Tecnológicos</h3>
          </div>

          <div className="service-big-grid">
            {tech.map((item, i) => (
              <div key={i} className="service-chip">
                <span className="chip-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="chip-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

            <div className="service-big reveal-left">
          <div className="service-big-header">
            <span>03</span>
            <h3>Documetación</h3>
          </div>

          <div className="service-big-grid">
            {documentación.map((item, i) => (
              <div key={i} className="service-chip light">
                <span className="chip-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="chip-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

















      </div>

      {/* MODALIDAD */}
      <div className="services-mode reveal">
        <h3>Modalidad de contratación</h3>

        <div className="mode-cards">
          <div className="mode-card">
            <h4>Mano de obra</h4>
            <p>Ejecución técnica especializada sobre proyecto existente.</p>
          </div>

          <div className="mode-card highlight">
            <h4>Servicio integral</h4>
            <p>Proyecto + materiales + ejecución completa.</p>
          </div>
        </div>

        <p className="mode-footer">
          Adaptamos cada obra a su lógica constructiva y presupuesto,
          manteniendo control técnico en todo el proceso.
        </p>
      </div>
    </section>
  );
}
