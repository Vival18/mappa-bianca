import { Link } from "react-router-dom";

function Project() {
  return (
    <section id="progetti" className="projects-section">
      <h2 className="section-title">Cosa offriamo</h2>
      <p className="section-subtitle">
        Soluzioni pronte per il tuo territorio:
        Mappa interattiva installabile – una mappa chiavi in mano, personalizzata con i tuoi contenuti, pronta da pubblicare.
        Gestione punti di interesse su WordPress – un plugin per gestire facilmente i tuoi punti di interesse, 
        con supporto per immagini e descrizioni dettagliate.
        Progetto su misura – se hai esigenze specifiche, possiamo creare una soluzione personalizzata per te,
        con funzionalità avanzate e design su misura.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Forte di Rivoli Veronese</h3>
          <p>
            Un sito rinnovato per raccontare la storia del Forte in chiave moderna,
            accessibile e visivamente coinvolgente. Un ponte tra tradizione e innovazione.
          </p>
          <a
            href="https://vival18.github.io/forte-rivoli"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visita il progetto
          </a>
        </div>

        <div className="project-card">
          <h3>Archaeomap</h3>
          <p>
            Plugin WordPress per mappe interattive. Gestisci i tuoi siti,
            mostrali al pubblico, aggiornali con facilità. Ideale per enti e professionisti.
          </p>
          <Link to="/archaeomap" className="project-link">
            Scopri di più
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project;
