import React from "react";
import useReveal from "../useReveal";

export default function Contact() {
  useReveal();

  return (
    <section className="contact" id="contact">

      {/* TITULO IMPACTO */}
      <div className="contact-hero value-left reveal">
        <h2>
          Contacto
          <br />
          <span>ARQWATT</span>
        </h2>

        <h2 className="secondary">
          Contanos tu proyecto
        </h2>
      </div>

      {/* DATOS */}
      <div className="contact-data-block">

        <a
          href="mailto:info@arqwatt.com"
          className="contact-item reveal-left"
        >
          info@arqwatt.com
        </a>

        <a
          href="tel:+542364321985"
          className="contact-item reveal-left"
        >
          +54 2364 321985
        </a>

        <div className="contact-social reveal-right">
          <a
            href="https://wa.me/542364321985"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

      </div>

    </section>
  );
}