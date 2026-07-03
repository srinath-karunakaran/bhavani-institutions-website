import Reveal from './Reveal.jsx'

export default function TestimonialCard({ quote, name, source }) {
  return (
    <Reveal as="div" className="testimonial-card">
      <div className="stars">★★★★★</div>
      <p className="quote">"{quote}"</p>
      <div className="who">
        <strong>{name}</strong>
        {source && <span>{source}</span>}
      </div>
    </Reveal>
  )
}
