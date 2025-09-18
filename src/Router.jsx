import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.jsx';
import About from './components/pages/About/About.jsx';
import Contact from './components/pages/Contact/Contact.jsx';
import NotFound from './components/pages/NotFound/NotFound.jsx'

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}