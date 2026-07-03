import { useEffect, useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

// Floating bottom-right button. When you're not at the bottom it scrolls
// down to the bottom; once you're at (or near) the bottom, it flips to an
// up-arrow and scrolls back to the top.
export default function ScrollButton() {
  const [atBottom, setAtBottom] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setVisible(max > 400) // only show when the page is tall enough to scroll
      setAtBottom(max - scrolled < 80) // near the bottom
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    // Lazy-loaded pages grow after mount — re-measure when the body resizes.
    const ro = new ResizeObserver(update)
    ro.observe(document.body)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      ro.disconnect()
    }
  }, [])

  function handleClick() {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    }
  }

  if (!visible) return null

  return (
    <button
      type="button"
      className="scroll-btn"
      onClick={handleClick}
      aria-label={atBottom ? 'Scroll to top' : 'Scroll to bottom'}
      title={atBottom ? 'Back to top' : 'Go to bottom'}
    >
      {atBottom ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
    </button>
  )
}
