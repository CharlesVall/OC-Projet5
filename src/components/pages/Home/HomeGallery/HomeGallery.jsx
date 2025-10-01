import './HomeGallery.scss'
import HomeCard from './HomeCard/HomeCard'
import { Link } from 'react-router-dom'
import logementList from '@/logements.json'

export default function Home () {
  const array = logementList

  return (
    <div className="home__gallery">
      {array.map(iter => (
        <Link to={`/logement/${iter.id}`} key={iter.id} >
          <HomeCard cover={iter.cover}/>
        </Link> 
      ))}
    </div>
  )
}