import './CarPurchaseCard.css'

type CarPurchaseCardProps = {
  price?: string
}

export default function CarPurchaseCard({ price = '$32.500' }: CarPurchaseCardProps) {
  return (
    <aside className="car-purchase-card">
      <h3>Compra ahora</h3>
      <p>Precio estimado: {price}</p>
      <button type="button">Solicitar información</button>
    </aside>
  )
}
