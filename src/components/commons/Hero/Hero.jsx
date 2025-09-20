import './Hero.scss'

export default function Hero({ heroTitle, imgUrl }) {
  return (
    <div
      className="hero"
      style={ imgUrl ? { backgroundImage: `url(${imgUrl})` } : {} }
    >
      <h1 className="hero__title">{heroTitle}</h1>
    </div>
  )
}
