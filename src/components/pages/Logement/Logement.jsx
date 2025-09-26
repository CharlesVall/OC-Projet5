import { useParams } from 'react-router-dom'
import './Logement.scss'
import LogementCarousel from './LogementCarousel/LogementCarousel'
import StarRating from './StarRating/StarRating'
import HostDisplay from './HostDisplay/HostDisplay'
import TagDisplay from './TagDisplay/TagDisplay'
import Summary from '@/components/commons/Summary/Summary'
import logementList from '@/logements.json'

export default function Logement() {
  const {id} = useParams()
  const logement = logementList.find(logement => logement.id === id)

  return (
    <section className="logement">
      <LogementCarousel pictureList={ logement.pictures }/>
      <div className="logement__wrapper">
        <div className="logement__title-tags">
          <h1>{ logement.title }</h1>
          <h2>{ logement.location }</h2>
          <TagDisplay tagList={ logement.tags }/>
        </div>
        <div className="logement__host-stars">
          <HostDisplay hostInfo={ logement.host }/>
          <StarRating rating={ logement.rating } />
        </div>
      </div>
      <div className="logement__summaries">
        <Summary title="Description" content={ logement.description }/>
        <Summary title="Équipements" content={ logement.equipments }/>
      </div>
    </section>
  )
}
