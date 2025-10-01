import { useState } from 'react'
import './Summary.scss'
import summaryArrow from '@/assets/summary-arrow.svg'

export default function Summary({ title, content }) {
  const [isOpened, setSummaryState] = useState(false)

  return (
    <details className="summary" onToggle={event => setSummaryState(event.target.open)}>
      <summary className="summary__title">
        {title}
        <img src={summaryArrow} alt="arrow" className={isOpened ? 'summary__arrow--open' : 'summary__arrow'}/>
      </summary>
      <div className="summary__content">
        {Array.isArray(content) ? (
          <ul>
            {content.map((element, i) => <li key={i}>{element}</li>)}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </details>
  )
}
