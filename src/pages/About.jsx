import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import InfoCard from '../components/common/InfoCard.jsx'
import PhotoCard from '../components/common/PhotoCard.jsx'
import ProcessTimeline from '../components/common/ProcessTimeline.jsx'
import TestimonialCard from '../components/common/TestimonialCard.jsx'
import FAQAccordion from '../components/common/FAQAccordion.jsx'
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

const whyParents = [
  {
    title: 'Brain Development',
    description: 'Mental math, art and music programs that build cognitive strength early.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
      </svg>
    ),
  },
  {
    title: 'Concentration',
    description: 'Structured routines and focused class sizes that improve attention span.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Confidence',
    description: 'Regular performance opportunities — recitals, showcases and competitions.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
  {
    title: 'Academic Excellence',
    description: 'A curriculum benchmarked against proven academic standards.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Global Standards',
    description: 'Teaching methods informed by international best practice.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20 15 15 0 010-20z" />
      </svg>
    ),
  },
  {
    title: 'Expert Trainers',
    description: 'Instructors who actively practice and teach their craft, not just supervise it.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <circle cx="17" cy="7" r="3" />
      </svg>
    ),
  },
]

const programs = [
  { title: 'Abacus', description: 'Mental math mastery for early learners.' },
  { title: 'Vedic Maths', description: 'Ancient techniques for rapid calculation.' },
  { title: 'Phonics', description: 'Strong reading foundations for young children.' },
  { title: 'Handwriting', description: 'Clear, confident handwriting through guided practice.' },
]

const galleryPhotos = [
  { image: '/images/Bhavani_Abacus.png', alt: 'Classroom' },
  { image: '/images/Bhavani_Dance.png', alt: 'Students' },
  { image: '/images/Bhavani_Drawing.png', alt: 'Events' },
  { image: '/images/Bhavani_Daycare.png', alt: 'Competitions' },
  { image: '/images/Bhavani_Music.png', alt: 'Parent Meeting' },
  { image: '/images/Bhavani_Sports_Frame.jpg', alt: 'Teacher Training' },
  { image: '/images/Bhavani_Vanservice.png', alt: 'Award Ceremony' },
  { image: '/images/Bhavani_Daycare.png', alt: 'Learning Activities' },
]

const testimonials = [
  {
    quote: "My daughter's confidence has grown so much since joining the Abacus program. The teachers genuinely care.",
    name: 'Parent Review',
    source: 'Chennai',
  },
  {
    quote: 'The drawing studio helped me find a skill I never knew I had. The instructors push you to improve every week.',
    name: 'Student Review',
    source: 'Drawing & Art Studio',
  },
  {
    quote: "Bhavani's curriculum and support helped us achieve over 300 admissions within our first year as a franchise.",
    name: 'Franchise Review',
    source: 'Branch Partner',
  },
]

const faqs = [
  {
    question: 'Why choose Bhavani Group of Institutions?',
    answer: 'Six academies under one roof, experienced faculty, and a structured methodology refined over 8+ years.',
  },
  {
    question: 'How are classes conducted?',
    answer: 'In small, structured groups on campus, following our seven-step learning methodology.',
  },
  {
    question: 'Are teachers certified?',
    answer: "Yes — every instructor is trained and certified in their academy's curriculum before teaching independently.",
  },
  {
    question: 'What age groups do you teach?',
    answer: 'Programs are available from early childhood through teenage years, with age-appropriate tracks in every academy.',
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

      {/* 5. Why Parents Choose Us */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Why Parents Choose Us" title="Six reasons families stay with us." />
          <div className="card-grid" style={{ marginTop: 40 }}>
            {whyParents.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Learning Methodology */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="How We Teach" title="Our Learning Methodology" />
          <ProcessTimeline
            steps={['Assessment', 'Learning Plan', 'Interactive Classes', 'Practice', 'Evaluation', 'Parent Feedback', 'Continuous Improvement']}
          />
        </div>
      </section>

      {/* 7. Founder Message */}
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
                Founder Name
              </strong>
              <span style={{ fontSize: 13.5, color: 'var(--ink-muted)' }}>Founder &amp; Director</span>
            </div>
          </div>
          <img src="/images/Bhavani_Daycare.png" alt="Founder of Bhavani Group of Institutions" loading="lazy" />
        </div>
      </section>

      {/* 8. Achievements */}
      <section className="section navy">
        <div className="container">
          <SectionHeading eyebrow="Our Achievements" title="Numbers that tell our story." />
          <div className="achieve-grid">
            <div className="stat">
              <strong><Counter value="25+" /></strong>
              <span>Learning Centres</span>
            </div>
            <div className="stat">
              <strong><Counter value="10,000+" /></strong>
              <span>Students Trained</span>
            </div>
            <div className="stat">
              <strong><Counter value="50+" /></strong>
              <span>Expert Trainers</span>
            </div>
            <div className="stat">
              <strong><Counter value="8+" /></strong>
              <span>Years Experience</span>
            </div>
            <div className="stat">
              <strong><Counter value="95%" /></strong>
              <span>Parent Satisfaction</span>
            </div>
            <div className="stat">
              <strong><Counter value="100+" /></strong>
              <span>School Partnerships</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Programs */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Programs" title="Four flagship programs." />
          <div className="card-grid cols-4" style={{ marginTop: 40 }}>
            {programs.map((program) => (
              <InfoCard key={program.title} title={program.title} description={program.description} centered />
            ))}
          </div>
          <div className="center" style={{ marginTop: 32 }}>
            <Link className="btn btn-navy" to="/academies">
              View Programs
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Gallery */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="A look inside our campus." />
          <div className="card-grid cols-4" style={{ marginTop: 40 }}>
            {galleryPhotos.map((photo, i) => (
              <PhotoCard key={`${photo.alt}-${i}`} src={photo.image} alt={photo.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. Testimonials */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Testimonials" title="What our community says." />
          <div className="card-grid" style={{ marginTop: 40 }}>
            {testimonials.map((t) => (
              <TestimonialCard key={t.source} quote={t.quote} name={t.name} source={t.source} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Frequently Asked Questions" title="Have a question?" />
          <div style={{ marginTop: 36 }}>
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 13. CTA */}
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
