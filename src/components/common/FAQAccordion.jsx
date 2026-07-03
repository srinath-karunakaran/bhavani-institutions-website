import { useRef, useState } from 'react'
import { PlusIcon } from '../icons/Icons.jsx'
import Reveal from './Reveal.jsx'

function FAQItem({ question, answer, isOpen, onToggle }) {
  const answerRef = useRef(null)

  return (
    <Reveal as="div" className={`faq-item${isOpen ? ' open' : ''}`}>
      <button className="faq-q" onClick={onToggle}>
        {question}
        <PlusIcon />
      </button>
      <div className="faq-a" style={{ maxHeight: isOpen ? answerRef.current?.scrollHeight : 0 }}>
        <p ref={answerRef}>{answer}</p>
      </div>
    </Reveal>
  )
}

// Single-open accordion — same behavior as the old vanilla JS version
// (opening one closes whichever was previously open).
export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <FAQItem
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  )
}
