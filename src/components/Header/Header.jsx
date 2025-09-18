import './Header.scss';
import Logo from '../../assets/LOGO.svg';
import Navbar from './Navbar/Navbar.jsx'


export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Logo"/>
      <Navbar />
    </header>
  );
}
