import Reveal from './Reveal.jsx'

// Used for icon-card grids: core values, benefits, "why choose us", etc.
export default function InfoCard({ icon, title, description, centered = false }) {
  return (
    <Reveal as="div" className={`info-card${centered ? ' centered' : ''}`}>
      {icon && <span className="icon-wrap">{icon}</span>}
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </Reveal>
  )
}
