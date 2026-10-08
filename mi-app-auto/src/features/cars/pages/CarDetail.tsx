import { Link, useParams } from 'react-router-dom'
import CarFeatures from '../components/CarFeatures'
import CarHero from '../components/CarHero'
import CarInfo from '../components/CarInfo'
import CarPurchaseCard from '../components/CarPurchaseCard'
import { useFetch } from '../hooks/useFetch'
import type { Car } from '../types/Car'
import './CarDetail.css'

export default function CarDetail() {
  const { id } = useParams<{ id: string }>()
  const { data: cars, isLoading, error } = useFetch<Car[]>('/data/cars.json')
  const car = cars?.find((item) => item.id === Number(id))

  if (isLoading) {
    return (
      <p className="status-message page-section container">
        Cargando vehículo...
      </p>
    )
  }

  if (error) {
    return (
      <p
        role="alert"
        className="status-message status-message--error page-section container"
      >
        {error}
      </p>
    )
  }

  if (!car) {
    return (
      <section className="empty-state page-section container">
        <h1>Vehículo no encontrado</h1>
        <Link className="text-link" to="/cars">
          Volver al catálogo
        </Link>
      </section>
    )
  }

  return (
    <article className="detail-page">
      <CarHero car={car} />
      <div className="container detail-grid">
        <CarInfo car={car} />
        <section className="detail-features">
          <CarFeatures features={car.features} />
        </section>
      </div>
      <CarPurchaseCard car={car} />
    </article>
  )
}
