import type { Car } from '../types/Car'
import './CarHero.css'

interface CarHeroProps {
  car: Car
}

export default function CarHero({ car }: CarHeroProps) {
  return (
    <div className="car-hero">
      <img
        src={car.image}
        alt={`Foto referencial de ${car.type} para ${car.name}`}
      />
    </div>
  )
}
