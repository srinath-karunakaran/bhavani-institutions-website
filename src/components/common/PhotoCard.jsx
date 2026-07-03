import Reveal from './Reveal.jsx'

// Used for academy cards (Academies page) and gallery grids (Branches,
// About). title/description are optional so it also works as a plain
// gallery tile.
export default function PhotoCard({ src, alt, title, description }) {
  return (
    <Reveal as="article" className="photo-card">
      <img src={src} alt={alt} loading="lazy" />
      {(title || description) && (
        <div className="body">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      )}
    </Reveal>
  )
}
