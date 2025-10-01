import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import "./styles/main.scss"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
