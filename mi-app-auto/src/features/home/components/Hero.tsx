import { Link } from "react-router-dom";
import './Hero.css'

export default function Hero() {
  return (
    <section className="home-hero">
      <div className="container home-hero__content">
        <p className="eyebrow">Gerald Motors · Costa Rica</p>
 
        <h1>El auto que mueve sus planes</h1>
 
        <p>
          Una colección de vehículos para explorar a su ritmo, comparar
          características y elegir su favorito.
        </p>
 
        <div className="home-hero__actions">
          <Link className="button button--light" to="/cars">Explorar autos</Link>
 
          <Link className="button button--outline" to="/contact">Hablar con un asesor</Link>
        </div>
      </div>
    </section>
  )
}
