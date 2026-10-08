import './CarHero.css'

type CarHeroProps = {
  title?: string
  subtitle?: string
}

export default function CarHero({
  title = 'Tu próximo coche',
  subtitle = 'Descubre opciones premium con tecnología y estilo.',
}: CarHeroProps) {
  return (
    <header className="car-hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  )
}
