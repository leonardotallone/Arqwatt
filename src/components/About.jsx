// import React from "react";
// import useReveal from "../useReveal";

// import Leo from "../assets/portraits/Leo.jpg";
// import Pera from "../assets/portraits/Pera.png";
// import Fede from "../assets/portraits/Fede.jpg";

// const team = [
//   {
//     name: "Arq. Leonardo Tallone",
//     desc: "Arquitecto recibido en la Universidad de Buenos Aires (UBA). Especializado en proyectos eléctricos y desarrollo técnico.",
//     img: Leo,
//   },
//   {
//     name: "Arq. Ezequiel Perassoolo",
//     desc: "Arquitecto con experiencia en diseño y planificación de sistemas tecnológicos aplicados a la construcción.",
//     img: Pera,
//   },
//   {
//     name: "Arq. Federico Alzari",
//     desc: "Miembro del comite de disciplina CAPBA, amante de Horacio Guanani",
//     img: Fede,
//   },
// ];

// export default function About() {
//   useReveal();

//   return (
//     <section id="about" className="about">
      
//       <div className="about-header reveal-left">
//         <h2>El equipo</h2>
//         <p>Profesionales que integran arquitectura y tecnología</p>
//       </div>

//       <div className="about-grid">
//         {team.map((member, i) => (
//           <div className="about-card reveal" key={i}>

//             <div className="about-img">
//               <img src={member.img} alt={member.name} />
//             </div>

//             <h3>{member.name}</h3>
//             <p>{member.desc}</p>

//           </div>
//         ))}
//       </div>

//     </section>
//   );
// }


import React from "react";
import useReveal from "../useReveal";

import Leo from "../assets/portraits/Leo.jpg";
import Pera from "../assets/portraits/Pera.png";
import Fede from "../assets/portraits/Fede.jpg";

const team = [
  {
    name: "Leonardo Tallone",
    role: "Arquitecto",
    desc: "Especializado en proyectos eléctricos y desarrollo técnico aplicado a obra.",
    img: Leo,
  },
  {
    name: "Ezequiel Perassoolo",
    role: "Arquitecto",
    desc: "Experiencia en diseño y planificación de sistemas tecnológicos para arquitectura.",
    img: Pera,
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

      {/* HERO (MISMO LENGUAJE QUE VALUE) */}
      <div className="about-hero value-left reveal">
        <h2>
          El equipo
          <br />
          <span>ARQWATT</span>
        </h2>

        <h2 className="secondary">
          Arquitectura + tecnología
        </h2>
      </div>

      {/* LISTA EDITORIAL */}
      <div className="about-list">

        {team.map((member, i) => (
          <div className={`about-row reveal ${i % 2 === 0 ? "left" : "right"}`} key={i}>

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