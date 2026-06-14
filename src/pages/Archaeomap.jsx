import React from "react";
import demoImg from '../assets/screen-archaeomap.jpg';
import FadeInSection from "../components/FadeInSection";

function Archaeomap() {
  return (
    <div className="archaeomap-page flex flex-col items-center min-h-screen bg-white">

      {/* Hero */}
      <FadeInSection>
        <section className="w-full bg-[#f4f4f4] py-20 px-6 text-center">
          <h1 className="title-arch text-4xl md:text-5xl font-bold mb-4">Archaeomap</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Il plugin WordPress che trasforma il tuo sito in una mappa interattiva per raccontare
            il patrimonio culturale in modo coinvolgente e accessibile a tutti.
          </p>
<a
            href="mailto:contatti.mappabianca@gmail.com?subject=Info%20su%20Archaeomap"
            className="inline-block bg-[#0A122A] text-white px-6 py-3 rounded-full hover:bg-[#1c2a45] transition"
          >
            Richiedi informazioni
          </a>
        </section>
      </FadeInSection>

      {/* Descrizione */}
      <FadeInSection>
        <section className="w-full py-16 px-6 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">A chi serve Archaeomap?</h2>
          <p className="text-base md:text-lg">
            A musei, enti culturali, associazioni e tour operator che vogliono raccontare il patrimonio 
            in modo coinvolgente. I visitatori possono esplorare i punti di interesse su mappa, filtrare per tipologia, 
            e persino seguire un itinerario. E tu puoi aggiornare i contenuti in autonomia, senza sviluppatori.
          </p>
        </section>
      </FadeInSection>

      {/* Immagine */}
      <FadeInSection>
        <section className="w-full py-12 px-4 flex justify-center">
          <img
            src={demoImg}
            alt="Demo di Archaeomap"
            className="w-full max-w-2xl h-auto rounded-xl shadow-lg"
          />
        </section>
      </FadeInSection>

      {/* Funzionalità (benefici, non tecnicismi) */}
      <FadeInSection>
        <section className="w-full bg-[#f4f4f4] py-16 px-6 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-8">Cosa puoi fare con Archaeomap</h3>
          <ul className="space-y-3 text-left max-w-md mx-auto text-base md:text-lg list-none">
            <li>🗺️ Mappa interattiva chiara e adatta a tutti i dispositivi</li>
            <li>📍 Marker colorati per distinguere siti, servizi o percorsi</li>
            <li>🔍 Filtri a bottoni (es. “musei”, “aree archeologiche”, “parcheggi”)</li>
            <li>📸 Popup con foto, descrizione e link “Leggi di più”</li>
            <li>🚶 Itinerario / polyline per tracciare un percorso</li>
            <li>⚙️ Configurazione semplice: imposta altezza mappa, zoom, centro</li>
            <li>📦 Import/Export dei dati – per trasferire i tuoi siti da un sito all’altro</li>
            <li>✍️ Nessuna competenza tecnica richiesta: aggiorni i tuoi siti come normali articoli WordPress</li>
          </ul>
        </section>
      </FadeInSection>

      {/* Perché sceglierlo */}
      <FadeInSection>
        <section className="w-full py-16 px-6 text-center max-w-3xl">
          <h4 className="text-xl md:text-2xl font-semibold mb-4">Perché scegliere Archaeomap</h4>
          <p className="text-base md:text-lg mb-4">
            È un plugin <strong>professionale, autonomo e indipendente</strong> (non richiede altri plugin a pagamento).
            Lo sviluppo è curato da chi ti offre anche assistenza e personalizzazioni.
          </p>
          <p className="text-base md:text-lg">
            Già utilizzato in progetti reali. Puoi vedere un esempio funzionante su richiesta.
          </p>
        </section>
      </FadeInSection>

      {/* Call to action finale */}
      <FadeInSection>
        <section className="w-full bg-[#0A122A] text-white py-16 px-6 text-center">
          <h5 className="text-2xl md:text-3xl font-semibold mb-4">Vuoi Archaeomap per il tuo sito?</h5>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Contattami per una demo, un preventivo o per installarlo sul tuo WordPress.
          </p>
          <a
            href="mailto:contatti.mappabianca@gmail.com?subject=Info%20su%20Archaeomap"
            className="inline-block bg-white text-[#0A122A] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Scrivimi
          </a>
          <p className="text-sm mt-4 opacity-75">
            Fornisco anche formazione e supporto continuo.
          </p>
        </section>
      </FadeInSection>

    </div>
  );
}

export default Archaeomap;

