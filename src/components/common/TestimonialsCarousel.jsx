import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

// Renders the testimonial-card markup directly (rather than reusing
// TestimonialCard, which wraps itself in a scroll-triggered Reveal) since
// Swiper slides sit at shifted x-offsets — mixing the two animation systems
// makes off-screen slides reveal inconsistently. Swiper's own slide
// transition already provides the motion here.
export default function TestimonialsCarousel({ items }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        720: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="testimonial-carousel"
    >
      {items.map((t) => (
        <SwiperSlide key={t.quote}>
          <div className="testimonial-card">
            <div className="stars">★★★★★</div>
            <p className="quote">"{t.quote}"</p>
            <div className="who">
              <strong>{t.name}</strong>
              {t.source && <span>{t.source}</span>}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
