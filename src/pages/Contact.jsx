import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import SectionHeading from '../components/common/SectionHeading.jsx'
import Reveal from '../components/common/Reveal.jsx'
import SuccessModal from '../components/common/SuccessModal.jsx'
import SEO from '../components/common/SEO.jsx'
import { contactSchema } from '../data/schemas.js'
import { branches, googleMapsUrl } from '../data/branches.js'
import { submitToNetlify } from '../utils/submitForm.js'

const PHONE = '+91 63831 29475'
const PHONE_LINK = 'tel:+916383129475'
const WHATSAPP = 'https://wa.me/916383129475'
const EMAIL = 'contact@bhavaniedutech.com'

const contactMethods = [
  { icon: Phone, label: 'Call Us', value: PHONE, href: PHONE_LINK },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with our team', href: WHATSAPP, external: true },
  { icon: Mail, label: 'Email Us', value: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: MapPin,
    label: 'Visit Campus',
    value: 'Madhanandapuram, Chennai',
    href: googleMapsUrl(branches[0].mapQuery),
    external: true,
  },
]

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(contactSchema) })

  async function onSubmit(data) {
    await submitToNetlify('contact', data)
    setShowSuccess(true)
    reset()
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Bhavani Group of Institutions — phone, WhatsApp, email, campus address and branch locations in Chennai."
      />
      <PageHero eyebrow="Get In Touch" title="We'd love to hear from you.">
        Reach us by phone, WhatsApp or the form below — we respond promptly.
      </PageHero>

      {/* 1. Quick contact method cards */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="contact-methods">
            {contactMethods.map((m) => (
              <Reveal
                as="a"
                key={m.label}
                className="contact-method-card"
                href={m.href}
                {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="cm-icon">
                  <m.icon size={22} />
                </span>
                <span className="cm-label">{m.label}</span>
                <span className="cm-value">{m.value}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Info + form */}
      <section className="section">
        <div className="container two-col">
          <div className="contact-info">
            <span className="label">Campus Address</span>
            <p>
              Annai Velankanni Nagar, Phase 1,
              <br />
              Madhanandapuram, Chennai,
              <br />
              Tamil Nadu 600125
            </p>

            <span className="label">
              <Clock size={13} style={{ verticalAlign: '-2px', marginRight: 5 }} />
              Working Hours
            </span>
            <p>
              Monday – Saturday
              <br />
              9:00 AM – 7:00 PM
            </p>

            <span className="label">Our Academies</span>
            <p>
              Tuition · Abacus &amp; Vedic Math · Dance · Drawing &amp; Art · Day Care · Music · Sports · School Van
              Service
            </p>

            <span className="label">Reach Us Directly</span>
            <p style={{ marginBottom: 0 }}>
              <a href={PHONE_LINK}>{PHONE}</a>
              <br />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>

          <form id="enquiry" className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate style={{ scrollMarginTop: 90 }}>
            <input
              type="text"
              placeholder="Your name"
              className={errors.name ? 'invalid' : ''}
              {...register('name')}
            />
            {errors.name && <p className="field-error">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Email address"
              className={errors.email ? 'invalid' : ''}
              {...register('email')}
            />
            {errors.email && <p className="field-error">{errors.email.message}</p>}

            <input
              type="tel"
              placeholder="Phone number"
              className={errors.phone ? 'invalid' : ''}
              {...register('phone')}
            />
            {errors.phone && <p className="field-error">{errors.phone.message}</p>}

            <textarea
              rows={5}
              placeholder="Your message"
              className={errors.message ? 'invalid' : ''}
              {...register('message')}
            />
            {errors.message && <p className="field-error">{errors.message.message}</p>}

            <button type="submit" className="btn btn-navy" disabled={isSubmitting}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* 3. Map + branch directions */}
      <section className="section alt">
        <div className="container">
          <SectionHeading eyebrow="Find Us" title="Visit any of our Chennai centres." />
          <div className="contact-map-grid" style={{ marginTop: 40 }}>
            <Reveal as="div" className="contact-map">
              <iframe
                title="Bhavani Group of Institutions — Main Campus map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(branches[0].mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
            <div className="contact-branch-list">
              {branches.map((branch) => (
                <Reveal
                  as="a"
                  key={branch.name}
                  className="contact-branch-item"
                  href={googleMapsUrl(branch.mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="cb-pin">
                    <MapPin size={18} />
                  </span>
                  <span className="cb-text">
                    <strong>{branch.short}</strong>
                    <span>{branch.address}</span>
                    <span className="cb-dir">Get Directions →</span>
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Message Sent!"
        message="Thanks for reaching out — our team will get back to you shortly."
      />
    </>
  )
}
