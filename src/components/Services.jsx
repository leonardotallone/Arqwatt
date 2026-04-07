// import React from "react";
// import useReveal from "../useReveal";

// const electric = [
//   "Proyecto eléctrico integral",
//   "Cálculo de cargas y dimensionamiento",
//   "Diseño de tableros sectorizados",
//   "Instalaciones en viviendas y edificios",
//   "Reformas y adecuaciones",
//   "Armado y montaje de tableros",
//   "Sistemas de puesta a tierra",
//   "Canalizaciones embutidas y exteriores",
//   "Preparación para crecimiento futuro y energías renovables",
// ];

// const tech = [
//   "Instalación de sistemas de cámaras (CCTV)",
//   "Sistemas de alarma cableados e inalámbricos",
//   "Infraestructura de datos y redes",
//   "Preinstalaciones para domótica",
//   "Control de accesos",
// ];

// export default function Services() {
//   useReveal();

//   return (
//     <section className="services" id="services">

//       {/* HEADER */}
//       <div className="services-header reveal">
//         <h2>Servicios</h2>
//         <p>
//           Diseño y ejecución de instalaciones eléctricas y sistemas tecnológicos
//           con criterio proyectual y precisión técnica.
//         </p>
//       </div>

//       {/* BLOQUES */}
//       <div className="services-layout">

//         {/* IZQUIERDA */}
//         <div className="service-block reveal-left">
//           <h3>Instalaciones Eléctricas</h3>

//           <div className="service-lines">
//             {electric.map((item, i) => (
//               <div key={i} className="service-line">
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* DERECHA */}
//         <div className="service-block reveal-right">
//           <h3>Sistemas Tecnológicos</h3>

//           <div className="service-lines">
//             {tech.map((item, i) => (
//               <div key={i} className="service-line">
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="services-footer reveal">
//         <h3>Modalidad</h3>

//         <div className="service-lines compact">
//           <div className="service-line">
//             <span>Mano de obra especializada</span>
//           </div>
//           <div className="service-line">
//             <span>Servicio integral con provisión de materiales</span>
//           </div>
//         </div>

//         <p>
//           Adaptamos cada proyecto a la lógica de obra y presupuesto,
//           garantizando ejecución profesional y control técnico.
//         </p>
//       </div>

//     </section>
//   );
// }

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
  "Preinstalaciones para domótica",
  "Control de accesos",
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
