import { CheckIcon } from '../icons/Icons.jsx'

export default function CheckList({ items, cols = 1 }) {
  return (
    <ul className={`check-list${cols === 2 ? ' cols-2' : ''}`}>
      {items.map((item) => (
        <li key={item}>
          <CheckIcon />
          {item}
        </li>
      ))}
    </ul>
  )
}
