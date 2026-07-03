import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Reveal from './Reveal.jsx'
import 'yet-another-react-lightbox/styles.css'

// Shared by the Home page's gallery preview and the full /gallery page —
// click any tile to open it full-screen with zoom/next/prev.
export default function MasonryGallery({ items }) {
  const [index, setIndex] = useState(-1)
  const slides = items.map((item) => ({ src: item.image, alt: item.label, title: item.label }))

  return (
    <>
      <div className="masonry-gallery">
        {items.map((item, i) => (
          <Reveal
            as="button"
            type="button"
            className={`gallery-item${item.tall ? ' tall' : ''}`}
            key={item.label}
            onClick={() => setIndex(i)}
          >
            <img src={item.image} alt={item.label} loading="lazy" />
            <span className="label">{item.label}</span>
          </Reveal>
        ))}
      </div>
      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={slides} plugins={[Zoom]} />
    </>
  )
}
