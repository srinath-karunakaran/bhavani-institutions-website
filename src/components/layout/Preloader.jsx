import { useEffect, useState } from 'react'

// Branded loading screen shown on first load: the torch logo with a 3D spin
// and glow, then fades out. Stays until the page is ready (min ~1.7s so the
// animation is seen), then unmounts.
export default function Preloader() {
  const [hiding, setHiding] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const MIN_MS = 1700
    const start = performance.now()
    const finish = () => {
      const wait = Math.max(0, MIN_MS - (performance.now() - start))
      window.setTimeout(() => setHiding(true), wait)
    }
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })
    return () => window.removeEventListener('load', finish)
  }, [])

  useEffect(() => {
    document.body.style.overflow = removed ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [removed])

  useEffect(() => {
    if (!hiding) return
    const t = window.setTimeout(() => setRemoved(true), 650)
    return () => window.clearTimeout(t)
  }, [hiding])

  if (removed) return null

  return (
    <div className={`preloader${hiding ? ' preloader-hide' : ''}`} aria-hidden={hiding}>
      <div className="preloader-stage">
        <span className="preloader-ring" aria-hidden="true" />
        <span className="preloader-badge">
          <img src="/images/Bhavani_Logo.png" alt="Bhavani Group of Institutions" />
        </span>
      </div>
      <p className="preloader-name">Bhavani Group of Institutions</p>
      <p className="preloader-tag">Sincere Guidance · Peaceful Learning</p>
    </div>
  )
}
