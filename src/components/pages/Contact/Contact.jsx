import './Contact.scss'
import Hero from '@/components/commons/Hero/Hero'
import contactHeroImg from '@/assets/IMG2.png'
import ContactSummaries from './ContactSummaries/ContactSummaries'

export default function Contact() {
  return (
    <section className="contact">
      <Hero imgUrl={contactHeroImg}/>
      <ContactSummaries />
    </section>
  )
}