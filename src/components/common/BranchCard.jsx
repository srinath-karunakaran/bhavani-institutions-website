import { Link } from 'react-router-dom'
import { CheckIcon, PinIcon } from '../icons/Icons.jsx'
import Reveal from './Reveal.jsx'

// items: list of strings (academies/checklist or programs, depending on
// the branch). itemsLabel: optional small heading above the list (e.g.
// "Programs") — omitted for the main campus card which has no label.
export default function BranchCard({ name, address, itemsLabel, items, mapUrl, mapLabel = 'View Map', onViewDetails }) {
  return (
    <Reveal as="article" className="branch-card">
      <span className="branch-index">
        <PinIcon />
      </span>
      <h3>{name}</h3>
      <p>{address}</p>
      {itemsLabel && <p className="branch-note">{itemsLabel}</p>}
      <ul className="check-list" style={{ marginTop: itemsLabel ? 8 : 16, marginBottom: 8 }}>
        {items.map((item) => (
          <li key={item}>
            <CheckIcon size={15} />
            {item}
          </li>
        ))}
      </ul>
      <div className="branch-actions">
        {onViewDetails ? (
          <button type="button" className="btn btn-navy" onClick={onViewDetails}>
            View Details
          </button>
        ) : (
          <Link className="btn btn-navy" to="/contact">
            Contact Branch
          </Link>
        )}
        <a className="btn btn-outline-navy" href={mapUrl} target="_blank" rel="noopener noreferrer">
          {mapLabel}
        </a>
      </div>
    </Reveal>
  )
}
