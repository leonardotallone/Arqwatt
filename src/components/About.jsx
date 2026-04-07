import React from "react";
import useReveal from "../useReveal";

import Leo from "../assets/portraits/Leo.jpg";
import Pera from "../assets/portraits/Pera.png";
import Fede from "../assets/portraits/Fede.png";

const team = [
  {
    name: "Ezequiel Perassolo",
    role: "Arquitecto",
    desc: "Arquitecto graduado en FAU-UNLP, especializado en la integración de arquitectura e instalaciones eléctricas. Orienta su práctica a la domótica, automatización y sistemas inteligentes, desarrollando soluciones que combinan diseño, eficiencia energética y tecnología aplicada al hábitat. Actualmente miembro del CAUBA D6",
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
    desc: "Arquitecto graduado en FAU-UNLP con perfil interdisciplinario orientado a la arquitectura sustentable y la transición energética. Compone diseño arquitectónico aplicando energías renovables, automatización y sistemas inteligentes para generar edificios eficientes, sustentables y adaptados a los desafíos energéticos contemporáneos. Actualmente miembro del Tribunal de Disciplina del CAUBA - Consejo Superior",
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