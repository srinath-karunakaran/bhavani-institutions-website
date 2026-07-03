import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { navLinks } from '../../data/navLinks.js'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  // The hamburger-to-X animation and the mobile menu's fade-in are both
  // driven by a `body.nav-open` selector in global.css (ported as-is from
  // the old site) — toggling it here keeps that CSS working unchanged.
  useEffect(() => {
    document.body.classList.toggle('nav-open', navOpen)
    return () => document.body.classList.remove('nav-open')
  }, [navOpen])

  useEffect(() => {
    setNavOpen(false)
  }, [location.pathname])

  function closeNav() {
    setNavOpen(false)
  }

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" onClick={closeNav}>
            <span className="mark logo-mark">
              <img src="/images/Bhavani_Logo.png" alt="Bhavani Group of Institutions Logo" />
            </span>
            <span className="text">
              Bhavani Group of Institutions
              <span>Sincere Guidance. Peaceful Learning.</span>
            </span>
          </Link>

          <ul className="nav-tabs">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end className={({ isActive }) => (isActive ? 'active' : '')}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="header-right">
            <a href="tel:+916383129475" className="btn-call">
              <Phone size={14} /> Call Now
            </a>
            <Link to="/contact" className="btn btn-gold">
              Admissions Open
            </Link>
            <div
              className="menu-icon"
              aria-label={navOpen ? 'Close menu' : 'Open menu'}
              role="button"
              tabIndex={0}
              onClick={() => setNavOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setNavOpen((v) => !v)
              }}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-nav">
        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} onClick={closeNav}>
            {link.label}
          </Link>
        ))}
        <div className="mobile-nav-cta">
          <a href="tel:+916383129475" className="btn btn-outline-navy" onClick={closeNav}>
            <Phone size={15} /> Call Now
          </a>
          <Link to="/contact" className="btn btn-gold" onClick={closeNav}>
            Admissions Open
          </Link>
        </div>
      </div>
    </>
  )
}
