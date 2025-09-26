import './HomeGallery.scss'
import HomeCard from './HomeCard/HomeCard'
import { Link } from 'react-router-dom'
import logementList from '@/logements.json'

export default function Home () {
  const array = [logementList[0],logementList[1],logementList[2],logementList[3],logementList[4],logementList[5]]

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