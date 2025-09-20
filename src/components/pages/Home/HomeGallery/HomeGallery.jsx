import './HomeGallery.scss'
import HomeCard from './HomeCard/HomeCard'

export default function Home () {
  const array = [1, 2, 3, 4, 5, 6]

  return (
    <div className="home__gallery">
      {array.map(iter => (
        <HomeCard key={iter} />
      ))}
    </div>
  )
}
