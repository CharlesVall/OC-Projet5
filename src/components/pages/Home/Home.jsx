import './Home.scss'
import HomeGallery from './HomeGallery/HomeGallery'
import Hero from '@/components/commons/Hero/Hero.jsx'
import homeHeroImg from '@/assets/IMG.png'

export default function Home () {
  return (
    <section className="home">
      <Hero title={"Chez vous,\npartout et ailleurs"} imgUrl={homeHeroImg}/>
      <HomeGallery />
    </section>
  )
}