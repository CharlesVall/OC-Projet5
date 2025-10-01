import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
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
