import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import About from './components/About';
import UseCases from './components/UseCases';
import Archaeomap from './pages/Archaeomap';
import ServicePackages from './components/ServicePackages';
import Contatti from './components/Contatti';
import './index.css';

function App() {
  return (
    <Router basename="/mappa-bianca">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/archaeomap" element={<Archaeomap />} />
        <Route path="/service-packages" element={<ServicePackages />} />
      </Routes>
      
      {/* Contatti presente in tutte le pagine, sopra al footer */}
      <Contatti />

      <footer className="text-center p-4">
        <p>&copy; 2025 Fabio Vivaldi · Progetto Mappa Bianca</p>
      </footer>

      <ScrollToTop />
    </Router>
  );
}

export default App;




