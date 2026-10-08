import ContactForm from '../components/ContactForm'
import ContactInfo from '../components/ContactInfo'
import './Contact.css'

export default function Contact() {
  return (
    <main className="contact-page">
      <h1>Contacto</h1>
      <ContactInfo />
      <ContactForm />
    </main>
  )
}
