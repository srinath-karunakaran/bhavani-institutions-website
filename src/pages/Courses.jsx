import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Monitor, ArrowRight } from 'lucide-react'
import SEO from '../components/common/SEO.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Reveal from '../components/common/Reveal.jsx'
import FAQAccordion from '../components/common/FAQAccordion.jsx'
import CTABanner from '../components/common/CTABanner.jsx'
import { courseCategories, courseMethod } from '../data/courses.js'

// Floating tags for the hero — position + gentle float delay per tag.
const floatTags = [
  { label: 'CBSE Maths', top: '8%', left: '6%', delay: 0 },
  { label: 'Abacus', top: '2%', left: '58%', delay: 0.6 },
  { label: 'NEET Foundation', top: '34%', left: '68%', delay: 1.1 },
  { label: 'Vedic Maths', top: '58%', left: '4%', delay: 0.3 },
  { label: 'Olympiad', top: '74%', left: '52%', delay: 0.9 },
  { label: 'Phonics', top: '46%', left: '30%', delay: 1.4 },
  { label: 'Cambridge', top: '84%', left: '20%', delay: 0.5 },
]

const courseFaqs = [
  {
    question: 'How do I choose the right course for my child?',
    answer:
      'Start with a free assessment — we understand your child\'s current level and goals, then recommend the course and batch that fits best. You are never locked in before a demo class.',
  },
  {
    question: 'Which courses are available online?',
    answer:
      'Our academic subjects (CBSE/ICSE Maths & Science), Abacus and Vedic Maths are offered in both online and offline modes. Olympiad, Phonics, Handwriting and Creative Writing are conducted in person.',
  },
  {
    question: 'What is the 5X Centum Precision Formula?',
    answer:
      'It is our flagship teaching method: Concept Clarity, Regular Practice, Weekly Assessment, Parent Updates and Personalised Attention — the same structure applied across every academic course.',
  },
  {
    question: 'Can my child take more than one course?',
    answer:
      'Yes. Many students combine an academic course with Abacus or Olympiad prep. Since all courses run under one group, we coordinate timings so it stays manageable.',
  },
  {
    question: 'Do you follow the school syllabus exactly?',
    answer:
      'Our academic courses are mapped to your child\'s board (CBSE, State, ICSE or Cambridge), so classroom learning and our coaching reinforce each other.',
  },
]

export default function Courses() {
  return (
    <>
      <SEO
        title="Our Courses"
        description="CBSE, ICSE, Cambridge, NEET Foundation, Abacus, Vedic Maths, Olympiad, Phonics and more at Bhavani Group of Institutions, Chennai."
      />

      {/* ── Hero (designed, animated — no photo) ── */}
      <div className="courses-hero">
        <div className="dot-pattern" style={{ top: 28, left: 28 }} aria-hidden="true" />
        <div className="dot-pattern" style={{ bottom: 28, right: 28 }} aria-hidden="true" />
        <div className="container courses-hero-grid">
          <div className="courses-hero-content">
            <p className="eyebrow">Our Courses</p>
            <h1>Courses for every stage of learning.</h1>
            <p className="hero-lead">
              From school subjects to Olympiad practice — taught with the same structured, concept-first method.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-navy" to="/contact">
                Book a Free Demo <ArrowRight size={16} />
              </Link>
              <Link className="btn btn-outline-navy" to="/academies">
                Explore Academies
              </Link>
            </div>
          </div>

          <div className="courses-hero-visual" aria-hidden="true">
            {floatTags.map((t) => (
              <motion.span
                key={t.label}
                className="float-tag"
                style={{ top: t.top, left: t.left }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: t.delay * 0.4 },
                  scale: { duration: 0.5, delay: t.delay * 0.4 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: t.delay },
                }}
              >
                {t.label}
              </motion.span>
            ))}
            <div className="courses-hero-orb" />
          </div>
        </div>
      </div>

      {/* ── Course categories with rich cards ── */}
      {courseCategories.map((category, i) => (
        <section className={`section${i % 2 ? ' alt' : ''}`} key={category.title}>
          <div className="container">
            <SectionHeading
              eyebrow={
                <>
                  <span style={{ marginRight: 6 }}>{category.emoji}</span> Course Category
                </>
              }
              title={category.title}
              lead={category.description}
            />
            <div className="course-card-grid" style={{ marginTop: 40 }}>
              {category.courses.map((course) => (
                <Reveal as="article" className="course-detail-card" key={course.name}>
                  <div className="course-detail-head">
                    <h3>{course.name}</h3>
                    <span className="course-emoji">{category.emoji}</span>
                  </div>
                  <div className="course-meta">
                    <span className="course-meta-item">
                      <GraduationCap size={15} /> {course.level}
                    </span>
                    <span className="course-meta-item">
                      <Monitor size={15} /> {course.mode}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── How our courses work (method band) ── */}
      <section className="centum-section">
        <div className="container">
          <p className="eyebrow" style={{ color: 'var(--gold)', textAlign: 'center', display: 'block' }}>
            How Every Course Works
          </p>
          <h2 className="section-title center" style={{ color: '#fff', marginTop: 8 }}>
            The same proven method, every time.
          </h2>
          <div className="centum-grid">
            {courseMethod.map((m) => (
              <Reveal key={m.step} as="div" className="centum-card">
                <div className="step-num">{m.step}</div>
                <h4>{m.label}</h4>
                <p>{m.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Frequently Asked Questions" title="Choosing the right course?" />
          <div style={{ marginTop: 36 }}>
            <FAQAccordion items={courseFaqs} />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section alt">
        <div className="container">
          <CTABanner
            title="Not sure which course fits your child?"
            lead="Book a free demo and we'll recommend the right course and batch."
          >
            <Link className="btn btn-gold" to="/contact">
              Book Free Demo
            </Link>
            <a className="btn btn-outline" href="https://wa.me/916383129475" target="_blank" rel="noopener noreferrer">
              Enquire on WhatsApp
            </a>
          </CTABanner>
        </div>
      </section>
    </>
  )
}
