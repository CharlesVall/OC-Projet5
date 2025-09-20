import './Summary.scss'

export default function Summary ({ summaryTitle }) {
  return (
    <details className="summary__wrapper">
      <summary>
        { summaryTitle }
      </summary>
      A keyboard.
    </details>
  )
}

