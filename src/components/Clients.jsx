import React from "react";
import useReveal from "../useReveal";

import Lpf from "../assets/advertising/nuseed color SQ-01.png";
import Naldo from "../assets/advertising/lpf color SQ-01.png";
import Nus from "../assets/advertising/nuseed color SQ-01.png";

export default function Clients() {
  useReveal();

  const items = [
    { img: Naldo, url: "https://www.naldo.com.ar/" },
    { img: Nus, url: "https://nuseed.com/ar/" },
    { img: Lpf, url: "https://clinicalpf.com.ar/" },
  ];

  const loopItems = [...items, ...items];

  return (
    <section className="services">
      {/* HEADER IMPACTO */}
      {/* <div className="clients-header reveal">
        <h2>
          Empresas que
          <br />
          <span className="secondary">confían en nuestro trabajo</span>
        </h2>
      </div> */}

      <div className="value-left reveal">
        <h2>Empresas que</h2>
        <h2 className="secondary">confían en nuestro trabajo</h2>
      </div>

      {/* CARRUSEL */}
      <div className="clients-marquee">
        <div className="clients-track">
          {loopItems.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={item.img} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
