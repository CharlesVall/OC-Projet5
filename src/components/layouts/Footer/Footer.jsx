import './Footer.scss'
import Logo from '@/assets/logo.svg?react';

export default function Footer() {
  return (
    <footer className="footer">
      <Logo className="footer__logo" aria-label="Logo de l’entreprise" />
      <p className="footer__description">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}