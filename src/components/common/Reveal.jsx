import { motion } from 'framer-motion'

// Single chokepoint used by every card/section across the site — swapping
// the animation engine here (Framer Motion replacing the old manual
// IntersectionObserver) upgrades every usage at once.
export default function Reveal({ as = 'div', className = '', style, children, ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
