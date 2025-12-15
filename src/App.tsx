import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carros" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
