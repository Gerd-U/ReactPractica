import './CarFeatures.css'

const features = ['Automatico', 'GPS', 'Bluetooth', 'Aire acondicionado']

export default function CarFeatures() {
  return (
    <section className="car-features">
      <h3>Características</h3>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </section>
  )
}
