import { Link } from "react-router-dom";
import type { Car } from "../types/Car";
import './CardCar.css'

interface CardCarProps {
  car: Car;
}

export default function CardCar({ car }: CardCarProps) {
  return (
    <article className="card-car">
      <div className="card-car__media">
        <img
          src={car.image}
          alt={`Foto referencial de ${car.type} para ${car.name}`}
          loading="lazy"
          decoding="async"
        />
        <span className="card-car__type">{car.type}</span>
        <span className="card-car__favorite" aria-hidden="true">♡</span>
      </div>

      <div className="card-car__body">
        <p className="card-car__location">{car.location}</p>
        <h3 className="card-car__name">{car.name}</h3>

        <div className="card-car__specs">
          <span>{car.year}</span>
          <span>{car.mileage.toLocaleString("es-CR")} km</span>
          <span>{car.seats} pasajeros</span>
        </div>

        <div className="card-car__footer">
          <strong>USD {car.price.toLocaleString("es-CR")}</strong>
          <Link to={`/cars/${car.id}`}>Ver detalle →</Link>
        </div>
      </div>
    </article>
  );
}
