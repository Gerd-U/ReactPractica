import './ContactForm.css'

export default function ContactForm() {
  return (
    <form className="contact-form">
      <h3>Contacto</h3>
      <div className="contact-form__field">
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" type="text" placeholder="Tu nombre" />
      </div>
      <div className="contact-form__field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="tu@email.com" />
      </div>
      <div className="contact-form__field">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" placeholder="Escribe tu mensaje" />
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}
