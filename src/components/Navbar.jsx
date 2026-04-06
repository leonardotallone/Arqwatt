import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">

          {/* LOGO IZQUIERDA */}
          <div className="logo">ARQWATT</div>

          {/* LINKS DERECHA */}
          <div className="nav-links">
            <a href="#about">Nosotros</a>
            <a href="#services">Servicios</a>
            <a href="#contact">Contacto</a>
          </div>

          {/* MOBILE */}
          <div className="menu-toggle" onClick={() => setOpen(!open)}>
            ☰
          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>Nosotros</a>
        <a href="#services" onClick={() => setOpen(false)}>Servicios</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contacto</a>
      </div>
    </>
  );
}