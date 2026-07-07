import { useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading.jsx'
import BranchCard from '../components/common/BranchCard.jsx'
import BranchModal from '../components/common/BranchModal.jsx'
import ProcessTimeline from '../components/common/ProcessTimeline.jsx'
import TestimonialCard from '../components/common/TestimonialCard.jsx'
import FAQAccordion from '../components/common/FAQAccordion.jsx'
import CTABanner from '../components/common/CTABanner.jsx'
import Counter from '../components/common/Counter.jsx'
import SEO from '../components/common/SEO.jsx'
import { PinIcon } from '../components/icons/Icons.jsx'
import { branches, googleMapsUrl } from '../data/branches.js'

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
      "We have centres in Madhanandapuram, Mugalivakkam and Manapakkam — open any branch above for directions, or contact us and we'll help you pick the nearest one.",
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
      {/* 1. Hero (light, location-themed — distinct from Home) */}
      <div className="branches-hero">
        <div className="dot-pattern" style={{ top: 30, right: 30 }} aria-hidden="true" />
        <div className="dot-pattern" style={{ bottom: 30, left: 30 }} aria-hidden="true" />
        <div className="container branches-hero-content">
          <p className="eyebrow center">Our Learning Centres</p>
          <h1>
            Three centres, <span style={{ color: 'var(--gold-deep)' }}>one Chennai family.</span>
          </h1>
          <p className="branches-hero-lead">
            Quality education, expert guidance and a nurturing environment — close to home.
          </p>
          <div className="branches-pins">
            {branches.map((b) => (
              <a
                key={b.name}
                className="branch-pin"
                href={googleMapsUrl(b.mapQuery)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PinIcon size={16} />
                {b.short}
              </a>
            ))}
          </div>
          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 30 }}>
            <button
              className="btn btn-navy"
              onClick={() => document.getElementById('branchCards')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <PinIcon /> Find a Centre Near You
            </button>
            <Link className="btn btn-outline-navy" to="/contact">
              Book a Campus Tour
            </Link>
          </div>
        </div>
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

      {/* 4. Admission Process */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Admission Process" title="Five simple steps." />
          <ProcessTimeline steps={['Visit Centre', 'Assessment', 'Course Recommendation', 'Registration', 'Begin Classes']} />
        </div>
      </section>

      {/* 5. Testimonials */}
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
