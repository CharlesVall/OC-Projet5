import { NavLink } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import './Navbar.scss';

export default function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className="navbar">
      <NavLink to="/home" className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}>
        { isMobile ? 'ACCUEIL' : 'Accueil' }
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}>
        { isMobile ? 'A PROPOS' : 'À propos' }
      </NavLink>
    </nav>
  );
}
