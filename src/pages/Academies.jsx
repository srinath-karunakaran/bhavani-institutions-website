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
  {
    icon: <BadgeCheck size={20} />,
    title: 'Certified Trainers',
    description: 'Every academy is led by trained, certified instructors with real teaching experience.',
  },
  {
    icon: <Users size={20} />,
    title: 'Small Batch Sizes',
    description: 'Limited students per batch so every child gets genuine individual attention.',
  },
  {
    icon: <BookOpen size={20} />,
    title: 'Structured Curriculum',
    description: 'A clear, level-based syllabus for every program — no improvising, no guesswork.',
  },
  {
    icon: <ClipboardCheck size={20} />,
    title: 'Progress Reports',
    description: 'Regular assessments and parent updates so you always know how your child is growing.',
  },
  {
    icon: <Clock size={20} />,
    title: 'Flexible Timings',
    description: 'Weekday and weekend batches across academies to fit around school and family life.',
  },
  {
    icon: <ShieldCheck size={20} />,
    title: 'Safe Environment',
    description: 'CCTV-monitored, secure premises with a caring, encouraging atmosphere.',
  },
]

const enrollSteps = ['Enquire', 'Free Demo Class', 'Choose Your Batch', 'Enroll', 'Start Learning']

const academyFaqs = [
  {
    question: 'Can my child join more than one academy?',
    answer:
      'Absolutely. Many families mix and match — for example Tuition plus Abacus, or Dance plus Music. Since everything runs under one group, timings can be coordinated for you.',
  },
  {
    question: 'Do you offer a free trial or demo class?',
    answer:
      'Yes. Every academy offers a free demo session so your child can experience the class and our team can recommend the right batch and level before you enroll.',
  },
  {
    question: 'Which academies are available online?',
    answer:
      'Our Tuition Centre, Abacus & Vedic Math and Music Academy offer both online and offline modes. Dance, Art, Sports, Day Care and Van Service are offered in person.',
  },
  {
    question: 'How are batches and timings decided?',
    answer:
      'Batches are formed by age group and skill level with limited seats each. We offer weekday evening and weekend slots — share your preference during enquiry and we will fit you into the best available batch.',
  },
  {
    question: 'Are there discounts for siblings or multiple academies?',
    answer:
      'We keep our fees affordable with no hidden charges, and we are happy to discuss family-friendly plans for siblings or multiple-academy enrollments. Please ask during your enquiry.',
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
        Every academy runs under the same standards of care — so families can mix and match programs without
        juggling different schools. Tap any academy to see full course details, timings and batch info.
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
                <PhotoCard
                  src={academy.image}
                  alt={academy.alt}
                  title={academy.title}
                  description={academy.description}
                />
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
          <SectionHeading
            eyebrow="What Every Academy Includes"
            title="The same high standard, across the board."
            lead="Whichever program your child joins, these are the things we promise every single time."
          />
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
            lead="Tell us your child's age and interests — our team will recommend the right program and batch."
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
