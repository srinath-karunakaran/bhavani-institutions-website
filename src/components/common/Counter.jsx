import CountUp from 'react-countup'

// Splits "10,000+", "98%", "8+ Years" into a numeric part CountUp can
// animate plus whatever trailing text follows it. Falls back to plain text
// for non-numeric values (e.g. "Certified").
export default function Counter({ value, duration = 2.2 }) {
  const match = String(value).match(/^([\d,]+)(.*)$/)
  if (!match) return value

  const end = parseInt(match[1].replace(/,/g, ''), 10)
  const suffix = match[2]

  return (
    <CountUp end={end} duration={duration} separator="," suffix={suffix} enableScrollSpy scrollSpyOnce />
  )
}
