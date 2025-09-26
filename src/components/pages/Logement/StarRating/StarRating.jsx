import "./StarRating.scss"

export default function StarRating({ rating }) {
  const starRating = [
    ...Array(parseInt(rating)).fill(true),
    ...Array(5 - parseInt(rating)).fill(false)];

  return (
    <div className="star-rating">
      {starRating.map((star, iter) => {
        if (star === true) { 
          return <i key={iter} className="fa-solid fa-star fa-star--colored"></i>
        } else {
          return <i key={iter} className="fa-solid fa-star fa-star--empty"></i>
        }
      })}
    </div>
  )
}
