import { NavLink } from 'react-router-dom'
import './NotFound.scss'

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__description">Oups! La page que vous avez demander n'existe pas</p>
      <NavLink to="/home" className="not-found__link">Retourner sur la page d'acceuil</NavLink>
    </div>
  )
}