import './TagDisplay.scss'

export default function TagDisplay({ tagList }) {
  return (
    <div className="tags-wrapper">
      {
        tagList.map((tag, iter) => { return <p key={`${iter}-${tag}`} className="tag">{tag}</p> })
      }
    </div>
  )
}
