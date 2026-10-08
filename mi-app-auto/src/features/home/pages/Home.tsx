import { Link } from 'react-router-dom'
import CardCarList from '../../cars/components/CardCarList'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import  cars from '../../../../public/data/cars.json'
import './Home.css'

const featuredCars = cars.filter((car) => car.featured).slice(0, 3);

export default function Home() {
  return (
    <main>
      <Hero />
 
      <section className="featured-section">
        <p>Selección destacada</p>
 
        <h2>Conozca la colección</h2>
 
        <Link className="text-link featured-section__all" to="/cars">Ver todos los autos →</Link>
 
        <CardCarList cars={featuredCars} />
 
        <Experience />
      </section>
    </main>
  )
}
