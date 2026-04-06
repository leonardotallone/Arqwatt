import React from "react";
import useReveal from "../useReveal";

import Leo from "../assets/portraits/Leo.jpg";
import Pera from "../assets/portraits/Pera.png";
import Fede from "../assets/portraits/Fede.png";

const team = [
  {
    name: "Ezequiel Perassolo",
    role: "Arquitecto",
    desc: "Experiencia en diseño y planificación de sistemas tecnológicos para arquitectura.",
    img: Pera,
  },
  {
    name: "Leonardo Tallone",
    role: "Arquitecto",
    desc: "Arquitecto graduado en FADU-UBA, con enfoque integral que combina diseño arquitectónico, dirección de obra y desarrollo tecnológico como full stack developer. Posee experiencia en la implementación de instalaciones electricas en obra, incluyendo sistemas de automatización, seguridad y sonido.",
    img: Leo,
  },
  {
    name: "Federico Alzari",
    role: "Arquitecto",
    desc: "Miembro del comité de Disciplina CAPBA. Enfoque técnico y criterio profesional, amante de Horacio Guarani.",
    img: Fede,
  },
];

export default function About() {
  useReveal();

  return (
    <section id="about" className="about">

  {/* 🔥 FONDO TIPOGRÁFICO */}
  <div className="about-bg-text">
    TEAM
  </div>

  {/* HERO */}
  <div className="about-hero value-left reveal">
    <h2>
      equipo
      <br />
      <span>ARQWATT</span>
    </h2>

    <h2 className="secondary">
      Arquitectura + tecnología
    </h2>
  </div>

  {/* LISTA */}
  <div className="about-list">

    {team.map((member, i) => (
      <div
        className={`about-row reveal ${i % 2 === 0 ? "left" : "right"}`}
        key={i}
      >
        {/* FOTO */}
        <div className="about-image">
          <img src={member.img} alt={member.name} />
        </div>

        {/* INFO */}
        <div className="about-info">
          <span className="about-index">
            {String(i + 1).padStart(2, "0")}
          </span>

          <h3>{member.name}</h3>
          <h4>{member.role}</h4>

          <p>{member.desc}</p>
        </div>
      </div>
    ))}

  </div>

</section>
  );
}