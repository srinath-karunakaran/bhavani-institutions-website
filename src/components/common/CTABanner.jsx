export default function CTABanner({ title, lead, children }) {
  return (
    <div className="cta-banner">
      <h2>{title}</h2>
      <p>{lead}</p>
      <div className="cta-actions">{children}</div>
    </div>
  )
}
