import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <Logo />
 
          <p>Catálogo académico de autos para aprender React y Capacitor.</p>
        </div>
 
        <nav aria-label="Enlaces del pie de página">
          <h3>Explorar</h3>
 
          <Link to="/cars">Autos</Link>
 
          <Link to="/contact">Contacto</Link>
        </nav>
 
        <div>
          <h3>Proyecto</h3>
          <p>Ejemplo de enseñanza</p>
          <p>Costa Rica</p>
        </div>
      </div>
 
      <p className="container footer__copyright">
        © {new Date().getFullYear()} Gerald Motors · Proyecto académico
      </p>
    </footer>
  )
}
