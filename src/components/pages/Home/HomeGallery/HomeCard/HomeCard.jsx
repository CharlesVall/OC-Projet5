import './HomeCard.scss'

export default function Home({ cover }) {
  return (
    <article className="home__card" style={{ backgroundImage: `url(${cover})` }}>
      <p>Titre de la location</p>
    </article>
  )
}