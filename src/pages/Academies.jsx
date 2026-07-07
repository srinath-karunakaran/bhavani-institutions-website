import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BadgeCheck, Users, BookOpen, ClipboardCheck, Clock, ShieldCheck } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import PhotoCard from '../components/common/PhotoCard.jsx'
import AcademyModal from '../components/common/AcademyModal.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import InfoCard from '../components/common/InfoCard.jsx'
import ProcessTimeline from '../components/common/ProcessTimeline.jsx'
import FAQAccordion from '../components/common/FAQAccordion.jsx'
import CTABanner from '../components/common/CTABanner.jsx'
import Counter from '../components/common/Counter.jsx'
import SEO from '../components/common/SEO.jsx'
import { academyCards } from '../data/academies.js'

const includedFeatures = [
  { icon: <BadgeCheck size={20} />, title: 'Certified Trainers', description: 'Trained, experienced instructors in every academy.' },
  { icon: <Users size={20} />, title: 'Small Batches', description: 'Limited students, so every child gets attention.' },
  { icon: <BookOpen size={20} />, title: 'Structured Curriculum', description: 'A clear, level-based plan for every program.' },
  { icon: <ClipboardCheck size={20} />, title: 'Progress Reports', description: 'Regular assessments and parent updates.' },
  { icon: <Clock size={20} />, title: 'Flexible Timings', description: 'Weekday and weekend batches available.' },
  { icon: <ShieldCheck size={20} />, title: 'Safe Environment', description: 'CCTV-monitored, secure and caring premises.' },
]

const enrollSteps = ['Enquire', 'Free Demo Class', 'Choose Your Batch', 'Enroll', 'Start Learning']

const academyFaqs = [
  {
    question: 'Can my child join more than one academy?',
    answer:
      'Absolutely — many families mix and match (e.g. Tuition plus Abacus). Since everything runs under one group, timings can be coordinated for you.',
  },
  {
    question: 'Do you offer a free trial or demo class?',
    answer:
      'Yes. Every academy offers a free demo so your child can experience the class before you enroll.',
  },
  {
    question: 'Which academies are available online?',
    answer:
      'Tuition, Abacus & Vedic Math and Music offer online and offline modes. Dance, Art, Sports, Day Care and Van Service are in person.',
  },
  {
    question: 'How are batches and timings decided?',
    answer:
      'Batches are by age group and skill level with limited seats. Share your preferred slot during enquiry and we fit you into the best available batch.',
  },
]

export default function Academies() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <SEO
        title="Our Academies"
        description="Eight academies on one campus: Tuition, Abacus & Vedic Math, Dance, Drawing & Art, Day Care, Music, Sports and School Van Service."
      />
      <PageHero eyebrow="Our Academies" title="Eight ways we help your child grow.">
        One campus, one standard of care. Tap any academy for full details.
      </PageHero>

      {/* 1. Academy cards */}
      <section className="section">
        <div className="container">
          <div className="card-grid">
            {academyCards.map((academy) => (
              <button
                key={academy.title}
                type="button"
                className="academy-card-btn"
                onClick={() => setSelected(academy)}
                aria-label={`View details for ${academy.title}`}
              >
                <PhotoCard src={academy.image} alt={academy.alt} title={academy.title} />
                <span className="academy-card-cue">View Details →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Quick stats */}
      <section className="section navy tight">
        <div className="container">
          <div className="stat-band">
            <div className="stat">
              <strong><Counter value="8" /></strong>
              <span>Unique Academies</span>
            </div>
            <div className="stat">
              <strong><Counter value="15+" /></strong>
              <span>Years of Experience</span>
            </div>
            <div className="stat">
              <strong><Counter value="4" /></strong>
              <span>Certified Disciplines</span>
            </div>
            <div className="stat">
              <strong>On / Off</strong>
              <span>Online &amp; Offline</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What every academy includes */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="What Every Academy Includes" title="The same high standard, across the board." />
          <div className="card-grid" style={{ marginTop: 40 }}>
            {includedFeatures.map((f) => (
              <InfoCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. How to enroll */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="How to Enroll" title="Joining is simple." />
          <ProcessTimeline steps={enrollSteps} />
          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 44 }}>
            <Link className="btn btn-navy" to="/contact">
              Book a Free Demo
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Frequently Asked Questions" title="Choosing the right academy?" />
          <div style={{ marginTop: 36 }}>
            <FAQAccordion items={academyFaqs} />
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="section alt">
        <div className="container">
          <CTABanner
            title="Not sure which academy fits your child?"
            lead="Tell us your child's age and interests — we'll recommend the right program."
          >
            <Link className="btn btn-gold" to="/contact">
              Talk to Our Team
            </Link>
            <a className="btn btn-outline" href="https://wa.me/916383129475" target="_blank" rel="noopener noreferrer">
              Enquire on WhatsApp
            </a>
          </CTABanner>
        </div>
      </section>

      <AcademyModal academy={selected} onClose={() => setSelected(null)} />
    </>
  )
}
