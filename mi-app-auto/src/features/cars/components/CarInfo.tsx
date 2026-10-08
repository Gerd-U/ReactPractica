import './CarInfo.css'

type CarInfoProps = {
  brand?: string
  year?: number
  mileage?: string
}

export default function CarInfo({
  brand = 'BMW',
  year = 2024,
  mileage = '18.000 km',
}: CarInfoProps) {
  return (
    <section className="car-info">
      <h3>Información del vehículo</h3>
      <ul>
        <li>Marca: {brand}</li>
        <li>Año: {year}</li>
        <li>Kilometraje: {mileage}</li>
      </ul>
    </section>
  )
}
