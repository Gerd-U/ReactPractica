import CarFeatures from '../components/CarFeatures'
import CarHero from '../components/CarHero'
import CarInfo from '../components/CarInfo'
import CarPurchaseCard from '../components/CarPurchaseCard'
import './CarDetail.css'

export default function CarDetail() {
  return (
    <main className="car-detail">
      <CarHero title="BMW Serie 3" subtitle="Coupé deportivo con tecnología premium." />
      <CarInfo brand="BMW" year={2024} mileage="18.000 km" />
      <CarFeatures />
      <CarPurchaseCard price="$32.500" />
    </main>
  )
}
