import type { Car } from '../types/Car'
import CardCar from './CardCar'
import './CardCarList.css'

interface CardCarListProps {
  cars: Car[]
}

export default function CardCarList({ cars }: CardCarListProps) {
  return (
    <div className="card-car-list">
      {cars.map((car) => (
        <CardCar key={car.id} car={car} />
      ))}
    </div>
  )
}
