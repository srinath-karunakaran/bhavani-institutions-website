import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { X, Clock, CalendarDays, Users, Monitor, GraduationCap, Wallet } from 'lucide-react'
import { CheckIcon } from '../icons/Icons.jsx'

// Animated detail modal for a single academy. Pass `academy` (one entry from
// academyCards) to open; pass null to close.
export default function AcademyModal({ academy, onClose }) {
  // Lock body scroll + close on Escape while the modal is open.
  useEffect(() => {
    if (!academy) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [academy, onClose])

  const facts = academy
    ? [
        { icon: GraduationCap, label: 'Age Group', value: academy.ageGroup },
        { icon: Clock, label: 'Timing', value: academy.timing },
        { icon: CalendarDays, label: 'Duration', value: academy.duration },
        { icon: Monitor, label: 'Mode', value: academy.mode },
        { icon: Users, label: 'Batch Size', value: academy.batchSize },
        { icon: Wallet, label: 'Fees', value: academy.fees },
      ]
    : []

  return (
    <AnimatePresence>
      {academy && (
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
            aria-label={academy.title}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          >
            <button className="academy-modal-close" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>

            <div className="academy-modal-media">
              <img src={academy.image} alt={academy.alt} />
              <div className="academy-modal-media-overlay">
                <h2>{academy.title}</h2>
                {academy.tagline && <p>{academy.tagline}</p>}
              </div>
            </div>

            <div className="academy-modal-body">
              <p className="academy-modal-intro">{academy.description}</p>

              <div className="academy-facts">
                {facts.map((f) => (
                  <div className="academy-fact" key={f.label}>
                    <span className="fact-icon">
                      <f.icon size={18} />
                    </span>
                    <div>
                      <span className="fact-label">{f.label}</span>
                      <span className="fact-value">{f.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="academy-modal-cols">
                <div>
                  <h4 className="academy-modal-subhead">
                    {academy.title === 'School Van Service' ? 'What We Offer' : 'Courses Offered'}
                  </h4>
                  <div className="academy-course-chips">
                    {academy.courses.map((c) => (
                      <span className="academy-course-chip" key={c}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="academy-modal-subhead">Why Choose This</h4>
                  <ul className="academy-highlights">
                    {academy.highlights.map((h) => (
                      <li key={h}>
                        <CheckIcon size={15} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="academy-modal-actions">
                <Link className="btn btn-navy" to="/contact" onClick={onClose}>
                  Book a Free Demo
                </Link>
                <a
                  className="btn btn-outline-navy"
                  href="https://wa.me/916383129475"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
