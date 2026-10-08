import { Link } from 'react-router-dom'
import type { Car } from '../types/Car'
import './CarInfo.css'

interface CarInfoProps {
  car: Car
}

export default function CarInfo({ car }: CarInfoProps) {
  return (
    <section className="car-info">
      <Link to="/cars">← Volver a autos</Link>
      <h3>Información del vehículo</h3>
      <ul>
        <li>Modelo: {car.name}</li>
        <li>Tipo: {car.type}</li>
        <li>Año: {car.year}</li>
        <li>Kilometraje: {car.mileage.toLocaleString('es-CR')} km</li>
      </ul>
    </section>
  )
}
