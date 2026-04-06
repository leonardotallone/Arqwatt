import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        
        <div className="contact-left">
          <h2>Hablemos de tu proyecto</h2>
          <p>
            Contanos qué necesitás y te respondemos a la brevedad.
          </p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Nombre" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensaje" rows="4"></textarea>

          <button type="submit">Enviar mensaje</button>
        </form>

      </div>
    </section>
  );
}