import './About.scss'
import Hero from '@/components/commons/Hero/Hero'
import aboutHeroImg from '@/assets/IMG2.png'
import AboutSummaries from './AboutSummaries/AboutSummaries'

export default function About() {
  return (
    <section className="about">
      <Hero title="" imgUrl={aboutHeroImg}/>
      <AboutSummaries />
    </section>
  )
}