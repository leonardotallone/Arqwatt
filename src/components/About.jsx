import React from "react";
import useReveal from "../useReveal";

import img1 from "../assets/portraits/01.jpg";

const team = [
  {
    name: "Arq. Leonardo Tallone",
    desc: "Arquitecto recibido en la Universidad de Buenos Aires (UBA). Especializado en proyectos eléctricos y desarrollo técnico.",
    img: img1,
  },
  {
    name: "Arq. Nombre Apellido",
    desc: "Arquitecto con experiencia en diseño y planificación de sistemas tecnológicos aplicados a la construcción.",
    img: img1,
  },
  {
    name: "Arq. Nombre Apellido",
    desc: "Especialista en ejecución de obras e integración de soluciones energéticas.",
    img: img1,
  },
];

export default function About() {
  useReveal();

  return (
    <section id="about" className="about">
      
      <div className="about-header reveal">
        <h2>El equipo</h2>
        <p>Profesionales que integran arquitectura y tecnología</p>
      </div>

      <div className="about-grid">
        {team.map((member, i) => (
          <div className="about-card reveal" key={i}>

            <div className="about-img">
              <img src={member.img} alt={member.name} />
            </div>

            <h3>{member.name}</h3>
            <p>{member.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}