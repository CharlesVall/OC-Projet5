import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Router from './Router';
import "./styles/main.scss"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Router />
      </main>
    </BrowserRouter>
  )
}
