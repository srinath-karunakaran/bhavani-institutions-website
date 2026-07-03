import Reveal from './Reveal.jsx'

export default function PricingCard({ tier, price, features, featured = false, onApply }) {
  return (
    <Reveal as="div" className={`pricing-card${featured ? ' featured' : ''}`}>
      <p className="tier">{tier}</p>
      <p className="price">{price}</p>
      <ul>
        {features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <button className={`btn ${featured ? 'btn-gold' : 'btn-outline-navy'}`} onClick={onApply}>
        Apply Now
      </button>
    </Reveal>
  )
}
