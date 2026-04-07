import React from "react";

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {/* HERO FOOTER */}
      <div className="footer-hero">
        <h2>
          Energía pensada.
          <br />
          <span>Arquitectura aplicada.</span>
        </h2>
      </div>

      {/* MAIN */}
      <div className="footer-main">
        {/* MARCA */}
        <div className="footer-brand">
          <h3>ARQWATT</h3>
          <p>
            Diseño, ingeniería y ejecución de instalaciones eléctricas con
            criterio de obra.
          </p>
        </div>

        {/* NAV */}
        <div className="footer-nav">
          <button onClick={() => scrollTo("about")}>Equipo</button>
          <button onClick={() => scrollTo("services")}>Servicios</button>
          <button onClick={() => scrollTo("process")}>Proceso</button>
          <button onClick={() => scrollTo("contact")}>Contacto</button>
        </div>

        {/* CONTACTO */}
        <div className="footer-contact">
          <p>Junín · Buenos Aires</p>
          <p>+54 236 4321985</p>
          <p>info@arqwatt.com</p>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p className="footer-credit">
          Diseño & desarrollo - <span>Arq. Leonardo Tallone</span>
        </p>
      </div>
    </footer>
  );
}
