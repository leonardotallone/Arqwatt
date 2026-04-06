import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        {/* MARCA */}
        <div className="footer-brand">
          <h2>ARQWATT</h2>
          <p>
            Arquitectura aplicada a la energía. <br />
            Diseño, ingeniería y ejecución de soluciones eléctricas.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div className="footer-links">
          <h4>Navegación</h4>
          <a href="#about">Nosotros</a>
          <a href="#services">Servicios</a>
          <a href="#process">Proceso</a>
          <a href="#contact">Contacto</a>
        </div>

        {/* CONTACTO */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Junín, Buenos Aires</p>
          <p>+54 236 000 0000</p>
          <p>info@arqwatt.com</p>
        </div>

      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ARQWATT</p>
        <p>Desarrollado por ARQWATT</p>
      </div>
    </footer>
  );
}