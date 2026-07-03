import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ShieldCheck, FileText } from 'lucide-react'

// Animated popup for Privacy Policy / Terms & Conditions. Pass a `content`
// object ({ title, updated, intro, sections }) to open; null to close.
export default function LegalModal({ content, onClose }) {
  useEffect(() => {
    if (!content) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [content, onClose])

  const Icon = content?.title?.startsWith('Privacy') ? ShieldCheck : FileText

  return (
    <AnimatePresence>
      {content && (
        <motion.div
          className="academy-modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="legal-modal"
            role="dialog"
            aria-modal="true"
            aria-label={content.title}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          >
            <button className="academy-modal-close" onClick={onClose} aria-label="Close">
              <X size={20} />
            </button>

            <div className="legal-modal-head">
              <span className="legal-modal-icon">
                <Icon size={22} />
              </span>
              <div>
                <h2>{content.title}</h2>
                <p>{content.updated}</p>
              </div>
            </div>

            <div className="legal-modal-body">
              <p className="legal-intro">{content.intro}</p>
              {content.sections.map((s, i) => (
                <motion.div
                  className="legal-section"
                  key={s.heading}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 + i * 0.05 }}
                >
                  <h4>
                    <span className="legal-section-num">{i + 1}</span>
                    {s.heading}
                  </h4>
                  <p>{s.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="legal-modal-foot">
              <button className="btn btn-navy" onClick={onClose}>
                I Understand
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
