import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.jsx';
import About from './components/pages/About/About.jsx';
import NotFound from './components/pages/NotFound/NotFound.jsx'
import Logement from './components/pages/Logement/Logement.jsx';

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}