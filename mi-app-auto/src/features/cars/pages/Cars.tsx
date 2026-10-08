import { useEffect, useState } from 'react'
import CardCarList from '../components/CardCarList'
import type { Car } from '../types/Car'
import './Cars.css'

export default function Cars() {
  const [cars, setCars] = useState<Car[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    fetch('/data/cars.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudieron cargar los vehículos')
        }

        return response.json() as Promise<Car[]>
      })
      .then(setCars)
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <main className="cars-page">
      <h1>Catálogo de coches</h1>
      {isLoading && <p>Cargando vehículos...</p>}
      {hasError && <p>No se pudieron cargar los vehículos.</p>}
      {!isLoading && !hasError && <CardCarList cars={cars} />}
    </main>
  )
}
