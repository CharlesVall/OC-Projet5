import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/home" className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}>
        Accueil
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}>
        À propos
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}>
        Contact
      </NavLink>
    </nav>
  );
}
