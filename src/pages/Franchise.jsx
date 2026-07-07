import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../components/common/SectionHeading.jsx'
import InfoCard from '../components/common/InfoCard.jsx'
import CheckList from '../components/common/CheckList.jsx'
import PricingCard from '../components/common/PricingCard.jsx'
import ProcessTimeline from '../components/common/ProcessTimeline.jsx'
import TestimonialCard from '../components/common/TestimonialCard.jsx'
import FAQAccordion from '../components/common/FAQAccordion.jsx'
import CTABanner from '../components/common/CTABanner.jsx'
import SEO from '../components/common/SEO.jsx'
import { franchiseSchema } from '../data/schemas.js'
import { submitToNetlify } from '../utils/submitForm.js'

// Hero entrance stagger.
const heroContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }
const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

// Floating benefit chips for the hero visual.
const heroChips = [
  { label: 'Proven Curriculum', top: '6%', left: '10%', delay: 0 },
  { label: 'Full Training', top: '0%', left: '58%', delay: 0.6 },
  { label: 'Marketing Support', top: '40%', left: '62%', delay: 1.1 },
  { label: 'ERP & Technology', top: '68%', left: '48%', delay: 0.4 },
  { label: 'Brand License', top: '58%', left: '6%', delay: 0.9 },
  { label: 'Ongoing Guidance', top: '30%', left: '24%', delay: 1.3 },
]

const heroStats = [
  { value: '15+', label: 'Years of Trust' },
  { value: '8', label: 'Academies' },
  { value: '3', label: 'Chennai Branches' },
]

const whyPartner = [
  {
    title: 'Proven Curriculum',
    description: 'Tested curriculum across all eight academies.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.5 2a4.5 4.5 0 00-4.5 4.5v.5A4 4 0 003 10.5 4 4 0 005.5 14a4.5 4.5 0 004 4.5v1a2 2 0 104 0v-15A2.5 2.5 0 009.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Expert Training',
    description: 'Hands-on onboarding for you and your staff.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: 'High Business Potential',
    description: 'Education is recession-resilient and always in demand.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: 'Marketing Support',
    description: 'Launch campaigns and creatives provided centrally.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Ready Teaching Materials',
    description: 'Lesson plans and worksheets for every academy.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </svg>
    ),
  },
  {
    title: 'Continuous Guidance',
    description: 'Ongoing support for curriculum and operations.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zM8 13c-2.67 0-8 1.34-8 4v3h9.5M16 13c-.29 0-.62.02-.97.05A4.99 4.99 0 0118 17v3h6v-3c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
]

const pricingPlans = [
  { tier: 'Basic', price: '₹2 Lakhs', featured: false },
  { tier: 'Standard', price: '₹3 Lakhs', featured: true },
  { tier: 'Premium', price: '₹5 Lakhs', featured: false },
]
const pricingFeatures = ['Center Setup', 'Training', 'Marketing Kit', 'Curriculum', 'Support']

const franchiseFaqs = [
  {
    question: 'How much investment is required?',
    answer: 'Plans start at ₹2 Lakhs (Basic) and go up to ₹5 Lakhs (Premium), depending on centre size and the package you choose.',
  },
  {
    question: 'Do I need teaching experience?',
    answer: "No. We provide complete teacher training and ongoing guidance, so prior teaching experience isn't required to run a centre.",
  },
  {
    question: 'What support will I receive?',
    answer: 'Curriculum, teacher training, marketing materials, ERP access, and a direct WhatsApp support line for day-to-day questions.',
  },
  {
    question: 'Can I open multiple centres?',
    answer: 'Yes — many partners expand to more locations once their first centre is established.',
  },
]

function scrollToForm() {
  document.getElementById('franchiseForm')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Franchise() {
  const [status, setStatus] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(franchiseSchema) })

  async function onSubmit(data) {
    await submitToNetlify('franchise', data)
    setStatus('Thanks — our franchise team will reach out shortly.')
    reset()
  }

  return (
    <>
      <SEO
        title="Franchise Opportunity"
        description="Start your own Bhavani Group of Institutions centre. Complete training, curriculum, branding and marketing support included."
      />
      {/* 1. Hero */}
      <div className="franchise-hero">
        <div className="dot-pattern" style={{ top: 28, left: 28 }} aria-hidden="true" />
        <div className="dot-pattern" style={{ bottom: 28, right: 28 }} aria-hidden="true" />
        <div className="container franchise-hero-grid">
          <motion.div
            className="franchise-hero-content"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            <motion.p className="eyebrow" variants={heroItem}>
              Become a Partner
            </motion.p>
            <motion.h1 variants={heroItem}>
              Build Your Own <span className="line-gold">Bhavani Learning Centre</span>
            </motion.h1>
            <motion.p className="franchise-hero-lead" variants={heroItem}>
              Partner with one of Chennai's most trusted education brands. Bring structured, results-driven
              learning to your city — with our proven curriculum, full training and end-to-end support.
            </motion.p>
            <motion.div className="hero-cta" variants={heroItem}>
              <button className="btn btn-gold" onClick={scrollToForm}>
                Become a Franchise Partner <ArrowRight size={16} />
              </button>
              <Link className="btn btn-outline" to="/contact">
                Talk to Our Team
              </Link>
            </motion.div>
            <motion.div className="franchise-hero-stats" variants={heroItem}>
              {heroStats.map((s) => (
                <div className="fh-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className="franchise-hero-visual" aria-hidden="true">
            {heroChips.map((c) => (
              <motion.span
                key={c.label}
                className="float-tag float-tag-dark"
                style={{ top: c.top, left: c.left }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: c.delay * 0.4 },
                  scale: { duration: 0.5, delay: c.delay * 0.4 },
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: c.delay },
                }}
              >
                {c.label}
              </motion.span>
            ))}
            <div className="franchise-hero-medallion">
              <strong>8</strong>
              <span>Academies,<br />One Brand</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Why Partner */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Partner With Us" title="Why Partner With Bhavani Group of Institutions?" />
          <div className="card-grid" style={{ marginTop: 40 }}>
            {whyPartner.map((item) => (
              <InfoCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Franchise Benefits */}
      <section className="section alt">
        <div className="container two-col">
          <img src="/images/Bhavani_Drawing.png" alt="Bhavani Drawing and Art Studio classroom" loading="lazy" />
          <div>
            <p className="eyebrow">Franchise Benefits</p>
            <h2 className="section-title">What You'll Receive</h2>
            <CheckList
              cols={2}
              items={[
                'Brand License',
                'Teacher Training',
                'Admission Support',
                'Marketing Materials',
                'Website Listing',
                'Curriculum',
                'ERP Access',
                'WhatsApp Support',
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4. Franchise Investment */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Franchise Investment" title="Pick the plan that fits your market." />
          <div className="card-grid" style={{ marginTop: 40 }}>
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.tier}
                tier={plan.tier}
                price={plan.price}
                features={pricingFeatures}
                featured={plan.featured}
                onApply={scrollToForm}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Franchise Process */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Our Franchise Process" title="From enquiry to launch." />
          <ProcessTimeline
            steps={['Enquiry', 'Discussion', 'Business Plan', 'Agreement', 'Training', 'Centre Setup', 'Launch', 'Ongoing Support']}
          />
        </div>
      </section>

      {/* 6. Earnings Potential */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Earnings Potential" title="An illustrative example." />
          <div className="earnings-section">
            <div className="stat">
              <p className="label">Investment</p>
              <p className="value">₹2 Lakhs</p>
            </div>
            <div className="arrow">→</div>
            <div className="stat">
              <p className="label">Average Monthly Revenue</p>
              <p className="value">₹1.2 Lakhs</p>
            </div>
            <div className="arrow">→</div>
            <div className="stat">
              <p className="label">Expected Profit</p>
              <p className="value">₹40,000+</p>
            </div>
          </div>
          <p className="earnings-disclaimer">Actual earnings depend on centre performance. Figures above are illustrative, not guaranteed.</p>
        </div>
      </section>

      {/* 7. Testimonial */}
      <section className="section alt">
        <div className="container center" style={{ maxWidth: 640 }}>
          <TestimonialCard
            quote="Bhavani's curriculum and support helped us achieve over 300 admissions within our first year."
            name="A Bhavani Franchise Partner"
          />
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Frequently Asked Questions" title="Have a question?" />
          <div style={{ marginTop: 36 }}>
            <FAQAccordion items={franchiseFaqs} />
          </div>
        </div>
      </section>

      {/* 9. Franchise Enquiry Form */}
      <section className="section alt">
        <div className="container">
          <p className="eyebrow center" id="franchiseForm">
            Franchise Enquiry
          </p>
          <h2 className="section-title center">Tell us about your plans.</h2>
          <form
            className="contact-form"
            style={{ margin: '32px auto 0', maxWidth: 560 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <input type="text" placeholder="Your name" className={errors.name ? 'invalid' : ''} {...register('name')} />
            {errors.name && <p className="field-error">{errors.name.message}</p>}

            <input type="tel" placeholder="Phone number" className={errors.phone ? 'invalid' : ''} {...register('phone')} />
            {errors.phone && <p className="field-error">{errors.phone.message}</p>}

            <input type="email" placeholder="Email address" className={errors.email ? 'invalid' : ''} {...register('email')} />
            {errors.email && <p className="field-error">{errors.email.message}</p>}

            <input type="text" placeholder="City" {...register('city')} />
            <input type="text" placeholder="Investment budget" {...register('budget')} />
            <input type="text" placeholder="Preferred location" {...register('location')} />
            <textarea rows={4} placeholder="Tell us a bit more" {...register('message')} />
            <button type="submit" className="btn btn-navy" disabled={isSubmitting}>
              Become a Franchise Partner
            </button>
            <p className="form-status">{status}</p>
          </form>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="section">
        <div className="container">
          <CTABanner title="Ready to Build Your Own Education Business?" lead="Become part of the Bhavani Group of Institutions family today.">
            <button className="btn btn-gold" onClick={scrollToForm}>
              Apply for Franchise
            </button>
            <Link className="btn btn-outline" to="/contact">
              Contact Us
            </Link>
          </CTABanner>
        </div>
      </section>
    </>
  )
}
