// Centered subpage hero used by Academies and Contact pages.
export default function PageHero({ eyebrow, title, children }) {
  return (
    <div className="page-hero">
      <div className="container">
        <p className="eyebrow center">{eyebrow}</p>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </div>
  )
}
