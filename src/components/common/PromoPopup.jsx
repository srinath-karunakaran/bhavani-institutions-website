import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, GraduationCap, ShieldCheck, ArrowRight } from 'lucide-react'

// ---------------------------------------------------------------------------
// EDIT ME — the client controls the whole offer from here.
// Keep every claim TRUE. Only keep the ₹999 / "Free Assessment" wording if the
// centre genuinely runs that offer; otherwise change it to the real promotion.
// ---------------------------------------------------------------------------
const PROMO = {
  ribbon: 'ADMISSIONS OPEN',
  year: '2026-27',
  offerTop: 'FREE',
  offerMain: 'ASSESSMENT TEST',
  offerWorth: 'WORTH ₹999!',
  ctaLabel: 'CLAIM YOUR FREE ASSESSMENT',
  ctaTo: '/contact',
  footnote: 'Limited Seats Available!',
  image: '/images/bhavani_student.png',
  imageAlt: 'Bhavani student holding books',
}

// Show it once per browser session so returning visitors aren't nagged.
// TEST MODE: set SHOW_EVERY_LOAD = true to make the popup appear on every page
// load/refresh while testing. Set it back to false before going live.
const SHOW_EVERY_LOAD = false
const SESSION_KEY = 'bhavani_promo_seen'
const SHOW_DELAY_MS = 1600 // let the preloader finish first

export default function PromoPopup() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!SHOW_EVERY_LOAD && sessionStorage.getItem(SESSION_KEY)) return
    const t = setTimeout(() => setOpen(true), SHOW_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  const close = () => {
    setOpen(false)
    try {
      sessionStorage.setItem(SESSION_KEY, '1')
    } catch {
      /* private mode — ignore */
    }
  }

  const claim = () => {
    close()
    navigate(PROMO.ctaTo)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="promo-backdrop"
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="promo-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Admissions offer"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          >
            <button className="promo-close" onClick={close} aria-label="Close offer">
              <X size={18} />
            </button>

            {/* Left — offer content */}
            <div className="promo-content">
              <div className="promo-brand">
                <img src="/images/Bhavani_Logo.png" alt="" className="promo-brand-logo" />
                <div className="promo-brand-text">
                  <strong>Bhavani</strong>
                  <span>Group of Institutions</span>
                  <em>Learn • Grow • Achieve</em>
                </div>
              </div>

              <div className="promo-ribbon">
                <GraduationCap size={18} strokeWidth={2.5} />
                {PROMO.ribbon}
              </div>

              <p className="promo-year">{PROMO.year}</p>

              <div className="promo-offer-card">
                <span className="promo-offer-ico">
                  <Gift size={26} strokeWidth={2.2} />
                </span>
                <span className="promo-offer-text">
                  <b className="promo-offer-top">{PROMO.offerTop}</b>
                  <b className="promo-offer-main">{PROMO.offerMain}</b>
                  <b className="promo-offer-worth">{PROMO.offerWorth}</b>
                </span>
              </div>

              <button className="promo-cta" onClick={claim}>
                {PROMO.ctaLabel}
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>

              <p className="promo-foot">
                <ShieldCheck size={16} strokeWidth={2.5} />
                {PROMO.footnote}
              </p>
            </div>

            {/* Right — student image (decorations are baked into the image) */}
            <div className="promo-figure">
              <img src={PROMO.image} alt={PROMO.imageAlt} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
