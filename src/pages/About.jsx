import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import InfoCard from '../components/common/InfoCard.jsx'
import CTABanner from '../components/common/CTABanner.jsx'
import Reveal from '../components/common/Reveal.jsx'
import Counter from '../components/common/Counter.jsx'
import { ArrowRightIcon } from '../components/icons/Icons.jsx'

const coreValues = [
  {
    title: 'Student First',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.5 2a4.5 4.5 0 00-4.5 4.5v.5A4 4 0 003 10.5 4 4 0 005.5 14a4.5 4.5 0 004 4.5v1a2 2 0 104 0v-15A2.5 2.5 0 009.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Quality Education',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
  {
    title: 'Passion for Learning',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Bhavani Group of Institutions — our mission, founder, achievements and the academies we run across Chennai."
      />
      {/* 1. Hero */}
      <div className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">About Us</p>
            <h1>
              Empowering Young Minds.
              <br />
              Building Bright Futures.
            </h1>
            <p className="hero-lead">
              Bhavani Group of Institutions is committed to providing structured academic excellence through
              innovative learning programs, experienced educators, and proven teaching methodologies.
            </p>
            <div className="hero-cta">
              <Link className="btn btn-navy" to="/academies">
                Explore Programs <ArrowRightIcon />
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/Bhavani_Music.png" alt="Happy teacher with students at Bhavani Group of Institutions" loading="lazy" />
          </div>
        </div>
      </div>

      {/* 2. Who We Are */}
      <section className="section">
        <div className="container two-col">
          <img src="/images/Bhavani_Abacus.png" alt="Founder and teacher with students" loading="lazy" />
          <div>
            <p className="eyebrow">Who We Are</p>
            <h2 className="section-title">A premier learning institution.</h2>
            <p className="section-lead">
              Bhavani Group of Institutions is a premier learning institution dedicated to helping children achieve
              academic excellence through structured and engaging educational programs. Our focus is on developing
              confidence, creativity, logical thinking, and lifelong learning skills.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="section alt">
        <div className="container">
          <div className="card-grid cols-2">
            <Reveal as="div" className="mv-card">
              <span className="icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <h3>Mission</h3>
              <p>To inspire every child through quality education and innovative learning methods.</p>
            </Reveal>
            <Reveal as="div" className="mv-card alt">
              <span className="icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.5 9.5l5 5L12 22l-7.5-7.5 5-5L12 7l2.5 2.5z" />
                  <path d="M9 9l6 6" />
                </svg>
              </span>
              <h3>Vision</h3>
              <p>To become a globally trusted education brand that nurtures confident and future-ready learners.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What Drives Us" title="Our Core Values" />
          <div className="card-grid cols-6" style={{ marginTop: 40 }}>
            {coreValues.map((value) => (
              <InfoCard key={value.title} icon={value.icon} title={value.title} centered />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Founder Message */}
      <section className="section alt">
        <div className="container two-col reverse">
          <div>
            <p className="eyebrow">Leadership</p>
            <h2 className="section-title">Message from the Founder</h2>
            <p className="section-lead" style={{ fontStyle: 'italic' }}>
              "Every child deserves the opportunity to discover their potential. At Bhavani Group of Institutions, we
              combine passion, innovation, and structured learning to help students succeed academically and
              personally."
            </p>
            <div style={{ marginTop: 20 }}>
              <strong style={{ display: 'block', color: 'var(--navy)', fontFamily: "'Playfair Display',serif", fontSize: 18 }}>
                Bhavani
              </strong>
              <span style={{ fontSize: 13.5, color: 'var(--ink-muted)' }}>Founder &amp; Academic Director</span>
            </div>
          </div>
          <img src="/images/Bhavani_Founder.png" alt="Bhavani — Founder of Bhavani Group of Institutions" loading="lazy" />
        </div>
      </section>

      {/* 6. Achievements */}
      <section className="section navy">
        <div className="container">
          <SectionHeading eyebrow="Our Achievements" title="Numbers that tell our story." />
          <div className="achieve-grid cols-4">
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

      {/* 7. CTA */}
      <section className="section">
        <div className="container">
          <CTABanner title="Ready to Shape Your Child's Future?" lead="Join thousands of parents who trust Bhavani Group of Institutions for quality education.">
            <Link className="btn btn-gold" to="/academies">
              Explore Programs
            </Link>
            <Link className="btn btn-outline" to="/contact">
              Contact Us
            </Link>
          </CTABanner>
        </div>
      </section>
    </>
  )
}
