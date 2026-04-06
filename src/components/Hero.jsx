import React from "react";
import useReveal from "../useReveal";
import videoBg from "../assets/videos/05.mp4"; // 👈 IMPORT

export default function Hero() {
  useReveal();

  return (
    <section className="hero">

      {/* VIDEO */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
      <source src={videoBg} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay" />

      {/* CONTENT */}
      <div className="hero-content">

        <h1 className="hero-title reveal">ARQWATT</h1>

        <h2 className="hero-subtitle reveal">
          Arquitectura aplicada a la energía
        </h2>

        <p className="hero-text reveal">
          Diseño y ejecución de instalaciones eléctricas y sistemas tecnológicos
          con criterio arquitectónico.
        </p>

      </div>
    </section>
  );
}