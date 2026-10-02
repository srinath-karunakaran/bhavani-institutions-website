import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { ArrowRightIcon } from '../icons/Icons.jsx'

// ---------------------------------------------------------------------------
// EDIT ME — each object is one auto-rotating hero slide. Add/remove freely.
// Use wide, high-quality images. Keep every claim TRUE.
// ---------------------------------------------------------------------------
const SLIDES = [
  {
    image: '/images/Bhavani_Branch_Photo.png',
    welcome: 'Welcome to',
    title: 'Bhavani Group of Institutions',
    tagline: 'One campus. All academies.',
    script: 'Infinite possibilities.',
    primary: { label: 'Explore Academies', to: '/academies' },
    secondary: { label: 'Book a Campus Tour', to: '/contact' },
  },
  {
    image: '/images/Bhavani_About_us.png',
    welcome: 'Admissions Open · 2026-27',
    title: 'Give your child a head start',
    tagline: 'Free Assessment Test',
    script: 'worth ₹999.',
    primary: { label: 'Claim Free Assessment', to: '/contact' },
    secondary: { label: 'View Academies', to: '/academies' },
  },
  {
    image: '/images/Bhavani_Trust.png',
    welcome: 'Trusted since 2005',
    title: 'Two decades of guidance',
    tagline: 'Sincere guidance.',
    script: 'Peaceful learning.',
    primary: { label: 'Our Story', to: '/about' },
    secondary: { label: 'Contact Us', to: '/contact' },
  },
]

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5500, disableOnInteraction: false }}
      rewind
      speed={900}
      slidesPerView={1}
      className="hero-carousel"
    >
      {SLIDES.map((s) => (
        <SwiperSlide key={s.title} className="hero-slide">
          <div className="hero-immersive">
            <img className="hero-immersive-bg" src={s.image} alt={s.title} />
            <div className="hero-immersive-overlay" aria-hidden="true" />
            <div className="container hero-immersive-content">
              <p className="hero-welcome">{s.welcome}</p>
              <h1>{s.title}</h1>
              <p className="hero-tagline">
                {s.tagline}
                <span className="hero-script">{s.script}</span>
              </p>
              <div className="hero-immersive-cta">
                <Link className="btn btn-gold" to={s.primary.to}>
                  {s.primary.label} <ArrowRightIcon />
                </Link>
                <Link className="btn btn-hero-outline" to={s.secondary.to}>
                  {s.secondary.label}
                </Link>
              </div>
              <div className="hero-immersive-trust">
                <span className="hero-stars">★★★★★</span>
                <span>Sincere Guidance · Peaceful Learning · Trusted since 2005</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
