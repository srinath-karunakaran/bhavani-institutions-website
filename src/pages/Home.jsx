import { Link } from 'react-router-dom'
import SEO from '../components/common/SEO.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import CheckList from '../components/common/CheckList.jsx'
import ProcessTimeline from '../components/common/ProcessTimeline.jsx'
import BranchCard from '../components/common/BranchCard.jsx'
import TestimonialsCarousel from '../components/common/TestimonialsCarousel.jsx'
import MasonryGallery from '../components/common/MasonryGallery.jsx'
import FAQAccordion from '../components/common/FAQAccordion.jsx'
import Reveal from '../components/common/Reveal.jsx'
import Counter from '../components/common/Counter.jsx'
import { CheckIcon, ArrowRightIcon, PinIcon } from '../components/icons/Icons.jsx'
import { learningAcademies } from '../data/academies.js'
import { popularCourses } from '../data/courses.js'
import { homeTestimonials } from '../data/testimonials.js'
import { homeGallery } from '../data/gallery.js'
import { branches, googleMapsUrl } from '../data/branches.js'
import { founder, coreValues, centumFormula } from '../data/founder.js'

// ── static data ────────────────────────────────────────────────────────────

const heroSyllabi = [
  'Abacus & Vedic Maths',
  'CBSE · ICSE · Cambridge',
  'Olympiad Coaching',
  'NEET Foundation',
  'Phonics & Handwriting',
  'Sports & Arts',
]

const whyParents = [
  'Bhavani 5X Centum Precision Formula',
  'Certified Trainers in 4 Disciplines',
  'Small Batch — Individual Attention',
  'Weekly Assessments & Reports',
  'Olympiad & NEET Preparation',
  'Affordable, No Hidden Fees',
  'CCTV-Safe Campus',
  'Online & Offline Modes',
]

const journeySteps = [
  'Free Assessment',
  'Course Selection',
  'Weekly Learning',
  'Monthly Assessment',
  'Performance Improvement',
]

const franchisePoints = [
  'Complete Training Provided',
  'Proven Curriculum',
  'Branding & Marketing',
  'Technology & ERP Access',
  'Ongoing Support',
]

const homeFaqs = [
  {
    question: 'Which syllabus do you follow?',
    answer:
      'We support CBSE, State Board, ICSE and Cambridge syllabi across our Tuition Centre, alongside Abacus, Vedic Maths, NEET Foundation and Olympiad programs.',
  },
  {
    question: 'What is the age limit for joining?',
    answer:
      'We welcome students from pre-school enrichment age through to Olympiad and NEET-preparation levels. Our Sports Academy accepts children aged 6–15. Speak to a branch coordinator for the right fit.',
  },
  {
    question: 'What is the 5X Centum Precision Formula?',
    answer:
      'It is our flagship tuition methodology with 5 pillars: Concept Clarity, Regular Practice, Weekly Assessment, Parent Updates and Personalised Attention — designed to take every student to centum-level performance.',
  },
  {
    question: 'Do you provide transport?',
    answer:
      'Yes — our School Van Service offers safe, tracked doorstep pick-up and drop with live camera access for parents and backup vehicle support.',
  },
  {
    question: 'Do you have online classes?',
    answer:
      'Our Tuition Centre offers both offline and online modes with the same structured curriculum. Other academies are currently in-person for the best hands-on experience.',
  },
  {
    question: 'Do you have a trial class?',
    answer:
      'Yes — book a free demo session and our team will assess the right course, batch and timing for your child before you commit.',
  },
]

// ── component ──────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <SEO
        title="Sincere Guidance. Peaceful Learning."
        description="Bhavani Group of Institutions — 8 academies across Chennai. Tuition, Abacus, Vedic Maths, NEET, Dance, Music, Art, Sports and Day Care. Founded 2005."
      />

      {/* ── 1. Hero ── */}
      <div className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Bhavani Group of Institutions · Est. 2005</p>
            <h1>
              Sincere Guidance.{' '}
              <span style={{ color: 'var(--gold-deep)' }}>Peaceful Learning.</span>
            </h1>
            <p className="hero-lead">
              One group. Eight academies. Three Chennai branches. From Maths centum coaching
              to Bharatanatyam, from Abacus to Sports — every program built around your
              child's unique potential.
            </p>
            <CheckList cols={2} items={heroSyllabi} />
            <div className="hero-cta">
              <Link className="btn btn-navy" to="/courses">
                Explore Courses <ArrowRightIcon />
              </Link>
              <Link className="btn btn-outline-navy" to="/contact">
                Book Free Demo
              </Link>
            </div>
          </div>

          <div style={{ position: 'relative', marginBottom: 56 }}>
            <div className="hero-visual">
              <img
                src="/images/Bhavani_Daycare.png"
                alt="Students learning at Bhavani Group of Institutions"
              />
            </div>
            <div className="glass-stats">
              <div className="glass-card">
                <strong><Counter value="15+" /> Years</strong>
                <span>Teaching Excellence</span>
              </div>
              <div className="glass-card">
                <strong><Counter value="8" /></strong>
                <span>Learning Academies</span>
              </div>
              <div className="glass-card">
                <strong><Counter value="3" /></strong>
                <span>Chennai Branches</span>
              </div>
              <div className="glass-card">
                <strong>4 Certified</strong>
                <span>Training Disciplines</span>
              </div>
            </div>
          </div>
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
          {/* ISO badge — placed at the end of the trust strip */}
          <Reveal as="div" className="cert-badge iso-badge">
            <span className="iso-medallion">
              <img src="/images/Bhavani_ISO.png" alt="ISO 9001:2015 Certified" />
            </span>
            <span className="text">
              <strong>ISO 9001:2015</strong>
              <span>Quality Certified Institution</span>
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
              <span>Unique Academies</span>
            </div>
            <div className="stat">
              <strong><Counter value="100%" /></strong>
              <span>Dedication to Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Why Parents Choose Bhavani ── */}
      <section className="section">
        <div className="container two-col">
          <img
            src="/images/Bhavani_Drawing.png"
            alt="Students at Bhavani Group of Institutions"
            loading="lazy"
          />
          <div>
            <p className="eyebrow">Why Parents Trust Bhavani</p>
            <h2 className="section-title">Not Just Teaching.<br />A Legacy of Guidance.</h2>
            <p className="section-lead" style={{ maxWidth: '100%' }}>
              Founded in 2005, Bhavani Group of Institutions has quietly shaped students across
              Chennai for two decades — built not on advertisements, but on trust, discipline
              and real results.
            </p>
            <CheckList cols={2} items={whyParents} />
          </div>
        </div>
      </section>

      {/* ── 5. Our Learning Academies ── */}
      <section className="section alt">
        <div className="container">
          <SectionHeading
            eyebrow="Our Learning Academies"
            title="Eight academies. One mission."
            lead="Every program is structured, every teacher is certified — and every child gets the individual attention they deserve."
          />
          <div className="academy-grid" style={{ marginTop: 40 }}>
            {learningAcademies.map((academy) => (
              <Reveal as="div" className="academy-card" key={academy.title}>
                <span className="emoji">{academy.emoji}</span>
                <h3>{academy.title}</h3>
                {academy.description && (
                  <p style={{ fontSize: 12.5, color: 'var(--ink-muted)', marginTop: 8, marginBottom: 8 }}>
                    {academy.description}
                  </p>
                )}
                {academy.items && (
                  <ul>
                    {academy.items.map((item) => (
                      <li key={item}>
                        <ArrowRightIcon size={12} /> {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 36 }}>
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
            The Bhavani 5X Centum Precision Formula
          </h2>
          <p className="section-lead center" style={{ color: 'rgba(255,255,255,0.72)', margin: '12px auto 0' }}>
            A proven 5-step system that has taken students from average marks to centum scores
            — structured, concept-first and consistently effective since 2005.
          </p>
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

      {/* ── 7. Popular Courses ── */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Popular Courses" title="Courses families ask for most." />
          <div className="course-grid" style={{ marginTop: 40 }}>
            {popularCourses.map((course) => (
              <span className="course-chip" key={course}>
                {course}
              </span>
            ))}
          </div>
          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link className="btn btn-navy" to="/courses">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. Learning Journey ── */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Learning Journey" title="From first assessment to real results." />
          <ProcessTimeline steps={journeySteps} />
        </div>
      </section>

      {/* ── 9. Founder Profile ── */}
      <section className="section founder-section">
        <div className="container">
          <SectionHeading eyebrow="Meet Our Founder" title="The Person Behind Every Result." />
          <Reveal as="div" className="founder-card" style={{ marginTop: 44 }}>
            <div className="founder-img-col">
              <div className="badge">15+ Years of Teaching Excellence</div>
              <img
                src="/images/Bhavani_Founder.png"
                alt="Bhavani — Founder & Academic Director, Bhavani Group of Institutions"
              />
            </div>
            <div className="founder-content">
              <p className="founder-name">{founder.name}</p>
              <p className="founder-role">{founder.role}</p>
              <p className="founder-quote">
                "{founder.mission}"
              </p>
              <div className="founder-certs">
                {founder.certifications.map((cert) => (
                  <div key={cert} className="cert-item">
                    <CheckIcon size={15} />
                    {cert}
                  </div>
                ))}
              </div>
              <Link className="btn btn-navy" to="/about">
                Read Our Full Story <ArrowRightIcon />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 10. Core Values ── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Core Values"
            title="What drives every class, every day."
          />
          <div className="values-grid">
            {coreValues.map((val) => (
              <Reveal key={val.title} as="div" className="value-card">
                <span className="val-icon">{val.emoji}</span>
                <div>
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. Branches ── */}
      <section className="section alt">
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
              />
            ))}
          </div>
          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link className="btn btn-outline-navy" to="/branches">
              Explore All Branches
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12. Success Stories ── */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Success Stories" title="What parents are saying." />
          <div style={{ marginTop: 40 }}>
            <TestimonialsCarousel items={homeTestimonials} />
          </div>
        </div>
      </section>

      {/* ── 13. Franchise Opportunity ── */}
      <section className="section alt">
        <div className="container">
          <Reveal as="div" className="franchise-banner">
            <div>
              <h2>Build Your Own Bhavani Learning Centre</h2>
              <p>
                Partner with one of Chennai's most trusted education brands. We provide
                everything you need to launch and grow a successful learning centre.
              </p>
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

      {/* ── 14. Gallery ── */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Life across our academies." />
          <div style={{ marginTop: 40 }}>
            <MasonryGallery items={homeGallery} />
          </div>
          <div className="hero-cta center" style={{ justifyContent: 'center', marginTop: 32 }}>
            <Link className="btn btn-outline-navy" to="/gallery">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── 15. FAQ ── */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Frequently Asked Questions" title="Have a question?" />
          <div style={{ marginTop: 36 }}>
            <FAQAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* ── 16. Contact ── */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Get In Touch" title="We'd love to hear from you." />
          <div className="two-col contact-block" style={{ marginTop: 40 }}>
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
                Monday – Saturday
                <br />
                9 AM – 7 PM
              </p>

              <div className="hero-cta">
                <a
                  className="btn btn-navy"
                  href="https://wa.me/916383129475"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CheckIcon size={15} /> Chat on WhatsApp
                </a>
                <Link className="btn btn-outline-navy" to="/contact">
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
              <p style={{ marginTop: 12, color: 'var(--gold-deep)', fontWeight: 600 }}>
                Open in Google Maps →
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
