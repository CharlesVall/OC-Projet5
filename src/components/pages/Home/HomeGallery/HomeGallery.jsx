import './HomeGallery.scss'
import HomeCard from './HomeCard/HomeCard'
import { Link } from 'react-router-dom'
import logementList from '@/logements.json'

export default function Home () {
  const array = logementList

  return (
    <div className="home__gallery">
      {array.map(logement => (
        <Link to={`/logement/${logement.id}`} key={logement.id} >
          <HomeCard title={logement.title} cover={logement.cover}/>
        </Link> 
      ))}
    </div>
  )
}