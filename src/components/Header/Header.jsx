import './Header.scss';
import Logo from '@/assets/logo.svg?react';
import Navbar from './Navbar/Navbar.jsx'


export default function Header() {
  return (
    <header className="header">
      <Logo className="header__logo" aria-label="Logo de l’entreprise"/>
      <Navbar />
    </header>
  );
}
