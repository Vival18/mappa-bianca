import React from "react";
import FadeInSection from "./FadeInSection";

function UseCases() {
  return (
    <section id="casi-uso" className="use-cases-section py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Casi d'uso
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Ecco cosa abbiamo già realizzato. Progetti concreti che mostrano come 
            una mappa interattiva possa valorizzare il territorio.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Caso 1 – Baldo Festival */}
          <FadeInSection>
            <div className="bg-[#f8f9fa] rounded-2xl shadow-lg p-8 h-full flex flex-col hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏔️</div>
              <h3 className="text-2xl font-bold text-[#0A122A] mb-2">BALDOFestival</h3>
              <p className="text-sm text-gray-500 mb-3">Sentieri nell'Arte – L'ordine delle cose</p>
              <p className="text-gray-600 mb-6 flex-grow">
                Mappa interattiva del percorso artistico con punti di interesse 
                (opere, fontane, lavatoi, chiese). Geolocalizzazione, filtri e 
                funzionamento offline per gli escursionisti.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">PWA installabile</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Offline</span>
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Geolocalizzazione</span>
              </div>
              <a
                href="https://vival18.github.io/sentieri-nellarte-map/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A122A] font-semibold hover:underline inline-flex items-center gap-1"
              >
                Vedi la mappa →
              </a>
            </div>
          </FadeInSection>

          {/* Caso 2 – Forte di Rivoli */}
          <FadeInSection>
            <div className="bg-[#f8f9fa] rounded-2xl shadow-lg p-8 h-full flex flex-col hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-2xl font-bold text-[#0A122A] mb-2">Forte di Rivoli</h3>
              <p className="text-sm text-gray-500 mb-3">Sito culturale</p>
              <p className="text-gray-600 mb-6 flex-grow">
                Sito web rinnovato per raccontare la storia del Forte in chiave moderna. 
                Mappa interattiva integrata per esplorare il forte e i suoi punti di interesse.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">Sito web</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Mappa integrata</span>
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Valorizzazione storica</span>
              </div>
              <a
                href="https://vival18.github.io/forte-rivoli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A122A] font-semibold hover:underline inline-flex items-center gap-1"
              >
                Visita il sito →
              </a>
            </div>
          </FadeInSection>

          {/* Caso 3 – Archaeomap */}
          <FadeInSection>
            <div className="bg-[#f8f9fa] rounded-2xl shadow-lg p-8 h-full flex flex-col hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-[#0A122A] mb-2">Archaeomap</h3>
              <p className="text-sm text-gray-500 mb-3">Plugin WordPress</p>
              <p className="text-gray-600 mb-6 flex-grow">
                Plugin professionale per visualizzare e gestire siti archeologici 
                su mappa interattiva. Ideale per musei, enti culturali e progetti di ricerca.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">WordPress</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Import/Export</span>
                <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Filtri avanzati</span>
              </div>
              <a
                href="/archaeomap"
                className="text-[#0A122A] font-semibold hover:underline inline-flex items-center gap-1"
              >
                Scopri di più →
              </a>
            </div>
          </FadeInSection>
        </div>

        {/* Call to action della sezione */}
        <FadeInSection>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-4">
              <span className="font-semibold">Il tuo territorio è il prossimo caso d'uso.</span>
              {" "}Raccontaci il tuo progetto.
            </p>
            <a
              href="mailto:contatti.mappabianca@gmail.com?subject=Richiesta%20informazioni%20Mappa%20Bianca"
              className="inline-block bg-[#0A122A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1c2a45] transition"
            >
              Contattami
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default UseCases;