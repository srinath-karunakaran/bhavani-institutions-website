import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import CheckList from '../components/common/CheckList.jsx'
import BranchCard from '../components/common/BranchCard.jsx'
import TestimonialsCarousel from '../components/common/TestimonialsCarousel.jsx'
import HeroCarousel from '../components/common/HeroCarousel.jsx'
import MasonryGallery from '../components/common/MasonryGallery.jsx'
import Reveal from '../components/common/Reveal.jsx'
import Counter from '../components/common/Counter.jsx'
import { ArrowRightIcon, PinIcon } from '../components/icons/Icons.jsx'
import { learningAcademies } from '../data/academies.js'
import { homeTestimonials } from '../data/testimonials.js'
import { homeGallery } from '../data/gallery.js'
import { branches, googleMapsUrl } from '../data/branches.js'
import { founder, centumFormula } from '../data/founder.js'

const featureStripItems = [
  {
    label: 'Holistic Learning',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2zM9 21h6M10 18v3M14 18v3" />
      </svg>
    ),
  },
  {
    label: 'Experienced Faculty',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <circle cx="17" cy="7" r="3" />
      </svg>
    ),
  },
  {
    label: 'Smart Classrooms',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
      </svg>
    ),
  },
  {
    label: 'Safe & Secure Campus',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    label: 'Values & Life Skills',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 10-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 000-7.8z" />
      </svg>
    ),
  },
  {
    label: 'Future-Ready Education',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
]

const whyParents = [
  'Certified, experienced trainers',
  'Small batches — individual attention',
  'Weekly assessments & parent reports',
  'Affordable, with no hidden fees',
]

const franchisePoints = ['Complete Training', 'Proven Curriculum', 'Branding & Marketing', 'Ongoing Support']

export default function Home() {
  return (
    <>
      <SEO
        title="Sincere Guidance. Peaceful Learning."
        description="Bhavani Group of Institutions — all academies across Chennai. Tuition, Abacus, Vedic Maths, NEET, Dance, Music, Art, Sports and Day Care. Founded 2005."
      />

      {/* ── 1. Immersive Hero (auto-rotating carousel) ── */}
      <HeroCarousel />

      {/* ── Feature strip ── */}
      <div className="feature-band">
        <div className="container">
          {featureStripItems.map((f) => (
            <div className="fb-item" key={f.label}>
              <span className="fb-icon">{f.icon}</span>
              {f.label}
            </div>
          ))}
        </div>
      </div>

      {/* ── 2. Certification Trust Strip ── */}
      <div className="cert-strip">
        <div className="container">
          {founder.certifications.map((cert) => (
            <Reveal key={cert} as="div" className="cert-badge">
              <span className="icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M9 16l-4 6h14l-4-6" />
                </svg>
              </span>
              <span className="text">
                <strong>{cert}</strong>
                <span>Bhavani Group of Institutions</span>
              </span>
            </Reveal>
          ))}
          <Reveal as="div" className="cert-badge iso-badge">
            <span className="iso-medallion">
              <img src="/images/Bhavani_ISO.png" alt="ISO 9001:2015 Certified" />
            </span>
            <span className="text">
              <strong>ISO 9001:2015</strong>
              <span>Quality Certified</span>
            </span>
          </Reveal>
        </div>
      </div>

      {/* ── 3. Quick Statistics ── */}
      <section className="section navy tight">
        <div className="container">
          <div className="stat-band">
            <div className="stat">
              <strong><Counter value="15+" /></strong>
              <span>Years Experience</span>
            </div>
            <div className="stat">
              <strong><Counter value="50+" /></strong>
              <span>Active Students</span>
            </div>
            <div className="stat">
              <strong><Counter value="8" /></strong>
              <span>Academies</span>
            </div>
            <div className="stat">
              <strong><Counter value="3" /></strong>
              <span>Chennai Branches</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Real Results (emotional proof) ── */}
      <section className="section results-feature">
        <div className="container">
          <Reveal as="div" className="results-card">
            <span className="results-stars">★★★★★</span>
            <p className="results-quote">
              "My son improved his Maths from <strong>65% to 94%</strong> in one year. The teachers genuinely care —
              he actually looks forward to every class."
            </p>
            <div className="results-who">
              <span className="results-avatar">P</span>
              <div>
                <strong>Viji</strong>
                <span>Mugalivakkam Branch</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. Why Parents Choose Bhavani ── */}
      <section className="section">
        <div className="container two-col">
          <img src="/images/Bhavani_Trust.png" alt="Students learning at Bhavani Group of Institutions" loading="lazy" />
          <div>
            <p className="eyebrow">Why Parents Trust Bhavani</p>
            <h2 className="section-title">Not just teaching.<br />A legacy of guidance.</h2>
            <p className="section-lead" style={{ maxWidth: '100%' }}>
              Since 2005, built not on advertisements — but on trust, discipline and real results.
            </p>
            <CheckList cols={1} items={whyParents} />
          </div>
        </div>
      </section>

      {/* ── 5. Our Learning Academies (clean, title-only) ── */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Our Learning Academies" title="All academies. One mission." />
          <div className="academy-grid" style={{ marginTop: 44 }}>
            {learningAcademies.map((academy) => (
              <Reveal as="div" className="academy-card compact" key={academy.title}>
                <span className="emoji">{academy.emoji}</span>
                <h3>{academy.title}</h3>
              </Reveal>
            ))}
          </div>
          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 40 }}>
            <Link className="btn btn-navy" to="/academies">
              View All Academies <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. 5X Centum Precision Formula ── */}
      <section className="centum-section">
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--gold)', textAlign: 'center', display: 'block' }}>
            Our Flagship Methodology
          </p>
          <h2 className="section-title center" style={{ color: '#fff', marginTop: 8 }}>
            The 5X Centum Precision Formula
          </h2>
          <div className="centum-grid">
            {centumFormula.map((step) => (
              <Reveal key={step.number} as="div" className="centum-card">
                <div className="step-num">{step.number}</div>
                <h4>{step.label}</h4>
                <p>{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Founder (light) ── */}
      <section className="section founder-section">
        <div className="container">
          <SectionHeading eyebrow="Meet Our Founder" title="The person behind every result." />
          <Reveal as="div" className="founder-card" style={{ marginTop: 44 }}>
            <div className="founder-img-col">
              <div className="badge">15+ Years of Excellence</div>
              <img src="/images/Bhavani_Founder.png" alt="Bhavani — Founder & Academic Director" />
            </div>
            <div className="founder-content">
              <p className="founder-name">{founder.name}</p>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-quote">
                "Every child has unique potential — with the right guidance, they can achieve beyond their
                imagination."
              </p>
              <Link className="btn btn-navy" to="/about">
                Read Our Full Story <ArrowRightIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8. Branches ── */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Branches" title="Three centres across Chennai." />
          <div className="card-grid" style={{ marginTop: 44, alignItems: 'start' }}>
            {branches.map((branch) => (
              <BranchCard
                key={branch.name}
                name={branch.name}
                address={branch.address}
                itemsLabel={branch.itemsLabel}
                items={branch.items}
                mapUrl={googleMapsUrl(branch.mapQuery)}
                mapLabel={branch.mapLabel}
              />
            ))}
          </div>
          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 40 }}>
            <Link className="btn btn-outline-navy" to="/branches">
              Explore All Branches
            </Link>
          </div>
        </div>
      </section>

      {/* ── 9. Success Stories ── */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Success Stories" title="What parents are saying." />
          <div style={{ marginTop: 44 }}>
            <TestimonialsCarousel items={homeTestimonials} />
          </div>
        </div>
      </section>

      {/* ── 10. Franchise Opportunity ── */}
      <section className="section">
        <div className="container">
          <Reveal as="div" className="franchise-banner">
            <div>
              <h2>Build Your Own Bhavani Learning Centre</h2>
              <p>Partner with one of Chennai's most trusted education brands.</p>
              <div className="hero-cta" style={{ marginTop: 28 }}>
                <Link className="btn btn-gold" to="/franchise">
                  Become a Partner <ArrowRightIcon />
                </Link>
              </div>
            </div>
            <CheckList cols={1} items={franchisePoints} />
          </Reveal>
        </div>
      </section>

      {/* ── 11. Gallery ── */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Life across our academies." />
          <div style={{ marginTop: 44 }}>
            <MasonryGallery items={homeGallery} />
          </div>
          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 40 }}>
            <Link className="btn btn-outline-navy" to="/gallery">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12. Contact ── */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Get In Touch" title="We'd love to hear from you." />
          <div className="two-col contact-block" style={{ marginTop: 44 }}>
            <div className="contact-info contact-panel">
              <span className="label">Phone</span>
              <p>
                <a href="tel:+916383129475">+91 63831 29475</a>
              </p>
              <span className="label">Email</span>
              <p>
                <a href="mailto:contact@bhavaniedutech.com">contact@bhavaniedutech.com</a>
              </p>
              <span className="label">Working Hours</span>
              <p style={{ marginBottom: 0 }}>
                Monday – Saturday · 9 AM – 7 PM
              </p>
              <div className="hero-cta">
                <Link className="btn btn-navy" to="/contact">
                  Send Message
                </Link>
              </div>
            </div>

            <a
              className="info-card contact-panel"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', cursor: 'pointer' }}
              href={googleMapsUrl(branches[0].mapQuery)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon-wrap">
                <PinIcon size={20} />
              </span>
              <h3>Main Campus — Madhanandapuram</h3>
              <p style={{ marginTop: 8 }}>
                Annai Velankanni Nagar Phase 1,<br />
                Madhanandapuram, Chennai — 600125
              </p>
              <p style={{ marginTop: 12, color: 'var(--gold-deep)', fontWeight: 600 }}>Open in Google Maps →</p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
