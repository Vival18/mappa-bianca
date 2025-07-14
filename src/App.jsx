import Home from './components/Home';
import Manifesto from './components/Manifesto';
import Contatti from './components/Contatti';
import Header from './components/Header';
import './index.css';
import FadeInSection from './components/FadeInSection';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <FadeInSection><Home /></FadeInSection>
        <FadeInSection><Manifesto /></FadeInSection>
        <FadeInSection><Contatti /></FadeInSection>
        <footer>
          <p>&copy; 2025 Fabio Vivaldi · Progetto Mappa Bianca</p>
        </footer>
      </main>
      <ScrollToTop />
    </>
  );
}

export default App;


