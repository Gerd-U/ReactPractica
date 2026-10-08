import './CarFeatures.css'

interface CarFeaturesProps {
  features: string[]
}

export default function CarFeatures({ features }: CarFeaturesProps) {
  return (
    <>
      <h2>Características</h2>
      <ul className="car-features">
        {features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>
    </>
  )
}
