import './Hero.scss'

export default function Hero({ title, imgUrl }) {
  return (
    <div
      className="hero"
      style={ imgUrl ? { backgroundImage: `url(${imgUrl})` } : {} }
    >
      <h1 className="hero__title">{ title }</h1>
    </div>
  )
}
