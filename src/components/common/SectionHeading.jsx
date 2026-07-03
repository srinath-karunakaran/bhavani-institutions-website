// Repeated "eyebrow + title (+ optional lead)" pattern that opens almost
// every section across every page.
export default function SectionHeading({ eyebrow, title, lead, centered = true, style }) {
  return (
    <div style={style}>
      <p className={`eyebrow${centered ? ' center' : ''}`}>{eyebrow}</p>
      <h2 className={`section-title${centered ? ' center' : ''}`}>{title}</h2>
      {lead && <p className={`section-lead${centered ? ' center' : ''}`}>{lead}</p>}
    </div>
  )
}
