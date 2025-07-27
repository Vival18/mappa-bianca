function Project() {
  return (
    <section id="progetti" className="projects-section">
      <h2 className="section-title">Progetti attivi</h2>
      <p className="section-subtitle">
        Mappa Bianca è già operativa su due fronti: un sito culturale e una piattaforma digitale.
        Due esperienze diverse, unite da uno stesso obiettivo: valorizzare il patrimonio.
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
            Un plugin WordPress open-source per esplorare i siti archeologici italiani
            su mappa interattiva. Un database vivo per scuole, ricercatori e turisti curiosi.
          </p>
          <a
            href="https://github.com/Vival18/archaeomap"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Scopri di più
          </a>
        </div>
      </div>
    </section>
  );
}

export default Project;
