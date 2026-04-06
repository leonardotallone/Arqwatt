import React, { useEffect, useState } from "react";
import logo from "../assets/logo/logo.png";

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

  // 🔒 BLOQUEAR SCROLL CUANDO MENU ABIERTO
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          {/* LOGO */}
          <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src={logo}
              alt="ARQWATT logo"
              className={scrolled ? "logo-img scrolled" : "logo-img"}
            />
          </div>

          {/* DESKTOP */}
          <div className="nav-links">
            <a onClick={() => scrollTo("about")}>Equipo</a>
            <a onClick={() => scrollTo("services")}>Servicios</a>
            <a onClick={() => scrollTo("contact")}>Contacto</a>
          </div>

          {/* HAMBURGER */}
          <div className="menu-toggle" onClick={() => setOpen(true)}>
            ☰
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {/* ❌ BOTON CERRAR (AHORA SÍ VISIBLE) */}
        <div className="mobile-close" onClick={() => setOpen(false)}>
          ✕
        </div>

        <a onClick={() => scrollTo("about")}>Equipo</a>
        <a onClick={() => scrollTo("services")}>Servicios</a>
        <a onClick={() => scrollTo("contact")}>Contacto</a>
      </div>
    </>
  );
}
