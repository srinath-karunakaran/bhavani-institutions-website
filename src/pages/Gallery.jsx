import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero.jsx'
import MasonryGallery from '../components/common/MasonryGallery.jsx'
import SEO from '../components/common/SEO.jsx'
import { homeGallery, galleryCategories } from '../data/gallery.js'

const filters = ['All', ...galleryCategories]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const items = active === 'All' ? homeGallery : homeGallery.filter((g) => g.category === active)

  return (
    <>
      <SEO
        title="Gallery"
        description="Photos from Bhavani Group of Institutions — Abacus, Dance, Drawing, Music, Day Care, Sports and campus life across our Chennai centres."
      />
      <PageHero eyebrow="Gallery" title="Life across our academies.">
        A look at our classrooms, performances and everyday moments across Abacus, Dance, Drawing, Music, Day Care,
        Sports and our campus. Tap any photo to view it full-screen.
      </PageHero>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          {/* Filter tabs */}
          <div className="gallery-filters">
            {filters.map((f) => (
              <motion.button
                key={f}
                type="button"
                className={`gallery-filter${active === f ? ' active' : ''}`}
                onClick={() => setActive(f)}
                whileTap={{ scale: 0.95 }}
              >
                {f}
              </motion.button>
            ))}
          </div>

          {/* Re-keying on the active filter replays the fade-in reveal */}
          <div style={{ marginTop: 36 }}>
            <MasonryGallery key={active} items={items} />
          </div>

          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 44 }}>
            <Link className="btn btn-navy" to="/contact">
              Book a Campus Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
