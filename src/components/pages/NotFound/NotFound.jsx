import { NavLink } from 'react-router-dom'
import './NotFound.scss'

export default function NotFound() {
  return (
    <div className="error-404-wrapper">
      <h1 className="error-404-title">404</h1>
      <p className="error-404-description">Oups! La page que vous avez demander n'existe pas</p>
      <NavLink to="/home" className="error-404-link">Retourner sur la page d'acceuil</NavLink>
    </div>
  )
}