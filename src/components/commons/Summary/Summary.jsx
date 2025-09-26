import { useState } from 'react'
import './Summary.scss'
import summaryArrow from '@/assets/summary-arrow.svg'

export default function Summary({ title, content }) {
  const [isOpened, setSummaryState] = useState(false)

  return (
    <details className="summary" onClick={() => setSummaryState(!isOpened)}>
      <summary className="summary__title">
        {title}
        <img src={summaryArrow} alt="arrow" className={isOpened ? 'summary__arrow--open' : 'summary_arrow'}/>
      </summary>
      <p className="summary__content">
        {Array.isArray(content) ? content.join('\n') : content}
      </p>
    </details>
  )
}
