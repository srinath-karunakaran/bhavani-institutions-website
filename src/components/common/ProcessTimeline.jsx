import Reveal from './Reveal.jsx'

// Used by Branches (admission process), Franchise (franchise process), and
// About (learning methodology) — same horizontal numbered-circle timeline.
export default function ProcessTimeline({ steps }) {
  return (
    <div className="process-timeline">
      {steps.map((step, i) => (
        <Reveal as="div" className="process-step" key={step}>
          <span className="circle">{i + 1}</span>
          <p>{step}</p>
        </Reveal>
      ))}
    </div>
  )
}
