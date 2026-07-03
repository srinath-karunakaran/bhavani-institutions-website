import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, MapPin, Clock, Phone } from 'lucide-react'
import { CheckIcon } from '../icons/Icons.jsx'
import { googleMapsUrl } from '../../data/branches.js'

// Animated detail modal for a single branch. Pass `branch` to open, null to
// close. Uses a navy header (no photo) so it never relies on stock imagery.
export default function BranchModal({ branch, onClose }) {
  useEffect(() => {
    if (!branch) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [branch, onClose])

  return (
    <AnimatePresence>
      {branch && (
        <motion.div
          className="academy-modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="academy-modal"
            role="dialog"
            aria-modal="true"
            aria-label={branch.name}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          >
            <button className="academy-modal-close" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>

            <div className="branch-modal-head">
              <span className="branch-modal-pin">
                <MapPin size={22} />
              </span>
              <h2>{branch.name}</h2>
              <p>{branch.address}</p>
            </div>

            <div className="academy-modal-body">
              <div className="academy-facts" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div className="academy-fact">
                  <span className="fact-icon">
                    <Clock size={18} />
                  </span>
                  <div>
                    <span className="fact-label">Timings</span>
                    <span className="fact-value">{branch.timing}</span>
                  </div>
                </div>
                <div className="academy-fact">
                  <span className="fact-icon">
                    <Phone size={18} />
                  </span>
                  <div>
                    <span className="fact-label">Phone</span>
                    <span className="fact-value">
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`}>{branch.phone}</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="academy-modal-cols">
                <div>
                  <h4 className="academy-modal-subhead">Academies at This Centre</h4>
                  <div className="academy-course-chips">
                    {branch.academies.map((a) => (
                      <span className="academy-course-chip" key={a}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="academy-modal-subhead">Centre Highlights</h4>
                  <ul className="academy-highlights">
                    {branch.highlights.map((h) => (
                      <li key={h}>
                        <CheckIcon size={15} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="academy-modal-actions">
                <a
                  className="btn btn-navy"
                  href={googleMapsUrl(branch.mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin size={16} /> Get Directions
                </a>
                <Link className="btn btn-outline-navy" to="/contact" onClick={onClose}>
                  Contact This Branch
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
