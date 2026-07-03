import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../components/common/SectionHeading.jsx'
import BranchCard from '../components/common/BranchCard.jsx'
import BranchModal from '../components/common/BranchModal.jsx'
import InfoCard from '../components/common/InfoCard.jsx'
import PhotoCard from '../components/common/PhotoCard.jsx'
import ProcessTimeline from '../components/common/ProcessTimeline.jsx'
import TestimonialCard from '../components/common/TestimonialCard.jsx'
import FAQAccordion from '../components/common/FAQAccordion.jsx'
import CTABanner from '../components/common/CTABanner.jsx'
import Counter from '../components/common/Counter.jsx'
import Reveal from '../components/common/Reveal.jsx'
import SEO from '../components/common/SEO.jsx'
import { PinIcon, ArrowRightIcon } from '../components/icons/Icons.jsx'
import { branches, googleMapsUrl } from '../data/branches.js'
import { learningAcademies } from '../data/academies.js'

// Hero entrance: children fade/slide up in a gentle stagger.
const heroContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }
const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const whyVisit = [
  {
    title: 'Modern Classrooms',
    description: 'Bright, well-equipped rooms designed for focused learning.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Certified Trainers',
    description: 'Every instructor is trained and certified in their curriculum.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <circle cx="17" cy="7" r="3" />
      </svg>
    ),
  },
  {
    title: 'Structured Curriculum',
    description: 'A consistent teaching plan followed across all centres.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Activity Based Learning',
    description: 'Hands-on activities that make lessons stick.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
      </svg>
    ),
  },
  {
    title: 'Parent Interaction',
    description: 'Regular updates and feedback sessions with parents.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Individual Attention',
    description: 'Small batch sizes so every child is seen and supported.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
]

const galleryPhotos = [
  { image: '/images/Bhavani_Abacus.png', label: 'Madhanandapuram' },
  { image: '/images/Bhavani_Dance.png', label: 'Mugalivakkam' },
  { image: '/images/Bhavani_Drawing.png', label: 'Manapakkam' },
]

const testimonials = [
  {
    quote: 'Mugalivakkam centre has excellent teachers. My son looks forward to every class.',
    name: 'Parent Review',
    source: 'Mugalivakkam Branch',
  },
  {
    quote: 'The main campus has everything under one roof — abacus, art, music. Very convenient for us.',
    name: 'Parent Review',
    source: 'Madhanandapuram Branch',
  },
  {
    quote: 'Manapakkam centre is close to home and the handwriting program made a real difference.',
    name: 'Parent Review',
    source: 'Manapakkam Branch',
  },
]

const faqs = [
  {
    question: 'Which branch is closest to me?',
    answer:
      "We have centres in Madhanandapuram, Mugalivakkam and Manapakkam — use the map links above to check distances, or contact us and we'll help you pick the nearest one.",
  },
  {
    question: 'Can I change branches later?',
    answer: 'Yes, students can transfer between branches subject to seat availability — speak to your branch coordinator.',
  },
  {
    question: 'Is parking available?',
    answer: 'Parking is available at our Madhanandapuram main campus. Please check with individual branches for local parking availability.',
  },
  {
    question: 'Do you offer weekend classes?',
    answer: 'Weekend batches are available for select programs depending on the branch — ask during your centre visit for current timings.',
  },
]

export default function Branches() {
  const [selectedBranch, setSelectedBranch] = useState(null)

  return (
    <>
      <SEO
        title="Our Branches"
        description="Find a Bhavani Group of Institutions branch near you in Madhanandapuram, Mugalivakkam or Manapakkam, Chennai."
      />
      {/* 1. Hero */}
      <div className="hero-bg-photo">
        <div className="hero-bg-media">
          <img
            className="hero-bg-img hero-bg-img-zoom"
            src="/images/Bhavani_Branch_Photo.png"
            alt="Bhavani Group of Institutions branch building with academy signage"
          />
        </div>
        <div className="hero-bg-gradient" aria-hidden="true" />
        <div className="dot-pattern" style={{ top: 24, left: 24 }} aria-hidden="true" />

        <div className="container">
          <motion.div
            className="hero-bg-content"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            <motion.span className="pill-badge" variants={heroItem}>
              <PinIcon size={14} /> Our Learning Centres
            </motion.span>
            <motion.h1 className="two-line" variants={heroItem}>
              Our Learning<span className="line-gold">Centres</span>
            </motion.h1>
            <motion.div className="hero-underline" aria-hidden="true" variants={heroItem} />
            <motion.p className="hero-lead" variants={heroItem}>
              Multiple centres across Chennai offering quality education, expert guidance, and a nurturing
              environment for every child's success.
            </motion.p>

            <motion.div className="feature-divider-row" variants={heroItem}>
              <div className="fd-item">
                <span className="icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                  </svg>
                </span>
                Modern Infrastructure
              </div>
              <div className="fd-item">
                <span className="icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </span>
                Expert Faculty
              </div>
              <div className="fd-item">
                <span className="icon-wrap">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
                  </svg>
                </span>
                Proven Results
              </div>
            </motion.div>

            <motion.div className="hero-cta" variants={heroItem}>
              <button
                className="btn btn-navy"
                onClick={() => document.getElementById('branchCards')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <PinIcon /> Find a Centre Near You
              </button>
            </motion.div>
          </motion.div>
        </div>
        <div className="dot-pattern" style={{ bottom: 28, left: 24 }} aria-hidden="true" />
      </div>

      {/* 2. Quick Statistics */}
      <section className="section navy tight">
        <div className="container">
          <div className="achieve-grid cols-4" style={{ marginTop: 0 }}>
            <div className="stat">
              <strong><Counter value="3" /></strong>
              <span>Learning Centres</span>
            </div>
            <div className="stat">
              <strong><Counter value="8" /></strong>
              <span>Academies</span>
            </div>
            <div className="stat">
              <strong><Counter value="50+" /></strong>
              <span>Active Students</span>
            </div>
            <div className="stat">
              <strong><Counter value="15+ Years" /></strong>
              <span>Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Branches */}
      <section className="section" id="branchCards">
        <div className="container">
          <SectionHeading eyebrow="Our Branches" title="Three centres across Chennai." />
          <div className="card-grid" style={{ marginTop: 40, alignItems: 'start' }}>
            {branches.map((branch) => (
              <BranchCard
                key={branch.name}
                name={branch.name}
                address={branch.address}
                itemsLabel={branch.itemsLabel}
                items={branch.items}
                mapUrl={googleMapsUrl(branch.mapQuery)}
                mapLabel={branch.mapLabel}
                onViewDetails={() => setSelectedBranch(branch)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Google Map */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Find Us On The Map" title="Get directions to any centre." />
          <div className="card-grid" style={{ marginTop: 40 }}>
            {branches.map((branch) => (
              <a
                key={branch.name}
                className="info-card"
                style={{ display: 'block', cursor: 'pointer' }}
                href={googleMapsUrl(branch.mapQuery)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-wrap">
                  <PinIcon size={20} />
                </span>
                <h3>{branch.name}</h3>
                <p>Open in Google Maps →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Academies Available */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Academies Available"
            title="Eight academies across our centres."
            lead="Different centres specialise in different academies — open any branch above to see exactly what it offers."
          />
          <div className="academy-grid" style={{ marginTop: 40 }}>
            {learningAcademies.map((academy) => (
              <Reveal as="div" className="academy-card" key={academy.title}>
                <span className="emoji">{academy.emoji}</span>
                <h3>{academy.title}</h3>
              </Reveal>
            ))}
          </div>
          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 36 }}>
            <Link className="btn btn-navy" to="/academies">
              Explore All Academies <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Gallery */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Life at each centre." />
          <div className="card-grid" style={{ marginTop: 40 }}>
            {galleryPhotos.map((photo) => (
              <PhotoCard key={photo.label} src={photo.image} alt={`${photo.label} centre`} title={photo.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Visit Our Centres */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Visit Our Centres" title="What you'll find at every branch." />
          <div className="card-grid" style={{ marginTop: 40 }}>
            {whyVisit.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Admission Process */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Admission Process" title="Five simple steps." />
          <ProcessTimeline steps={['Visit Centre', 'Assessment', 'Course Recommendation', 'Registration', 'Begin Classes']} />
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="Parents from every branch." />
          <div className="card-grid" style={{ marginTop: 40 }}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.source} quote={t.quote} name={t.name} source={t.source} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Frequently Asked Questions" title="Have a question?" />
          <div style={{ marginTop: 36 }}>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 11. CTA */}
      <section className="section">
        <div className="container">
          <CTABanner title="Ready to Visit Bhavani Group of Institutions?" lead="Schedule a free counselling session today.">
            <Link className="btn btn-gold" to="/contact">
              Book a Visit
            </Link>
            <a className="btn btn-outline" href="tel:+916383129475">
              Call Us
            </a>
          </CTABanner>
        </div>
      </section>

      <BranchModal branch={selectedBranch} onClose={() => setSelectedBranch(null)} />
    </>
  )
}
