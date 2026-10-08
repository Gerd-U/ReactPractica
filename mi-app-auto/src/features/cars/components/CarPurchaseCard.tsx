import { Link } from 'react-router-dom'
import type { Car } from '../types/Car'
import './CarPurchaseCard.css'

type CarPurchaseCardProps = {
  car: Car
}

export default function CarPurchaseCard({ car }: CarPurchaseCardProps) {
  return (
    <aside className="purchase-card">
      <p className="purchase-card__label">Precio de venta</p>

      <h2 className="purchase-card__price">
        USD {car.price.toLocaleString('es-CR')}
      </h2>

      <p className="purchase-card__description">
        Precio ilustrativo para este ejercicio académico.
      </p>

      <Link
        className="purchase-card__button purchase-card__button--primary"
        to={`/contact?car=${encodeURIComponent(car.name)}`}
      >
        Solicitar información
      </Link>
    </aside>
  )
}
