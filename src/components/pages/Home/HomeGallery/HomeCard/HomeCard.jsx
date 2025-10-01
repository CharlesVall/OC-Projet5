import './HomeCard.scss'

export default function Home({ title, cover }) {
  return (
    <>
    <article className="home__card" style={{  backgroundImage: `url(${cover})` }}>
      <p className="card__title">{ title }</p>
    </article>
    </>
  )
}