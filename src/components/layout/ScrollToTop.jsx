import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Mirrors the old site's behavior: every route change lands at the top of
// the page instead of preserving scroll position from the previous page.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
