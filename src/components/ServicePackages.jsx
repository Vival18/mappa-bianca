import React from "react";
import FadeInSection from "./FadeInSection";

function ServicePackages() {
  return (
    <section className="services-section py-20 px-6 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Scegli la mappa per il tuo territorio
          </h2>
          <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Due soluzioni per valorizzare il patrimonio culturale, i percorsi e le eccellenze locali.
            Ogni progetto è personalizzabile in base alle tue esigenze.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Pacchetto Light */}
          <FadeInSection>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-green-500 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-[#0A122A] mb-2">Light</h3>
              <div className="text-4xl font-bold text-[#0A122A] mb-4">1.500 €</div>
              <p className="text-gray-600 mb-6">
                Mappa essenziale per iniziare a raccontare il tuo territorio.
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Fino a 15 punti di interesse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Mappa interattiva con Leaflet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Popup con immagini e descrizioni</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Filtri per categorie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>PWA installabile su smartphone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>QR code per accesso immediato</span>
                </li>
              </ul>
              <a
                href="mailto:contatti.mappabianca@gmail.com?subject=Richiesta%20pacchetto%20Light"
                className="block text-center bg-[#0A122A] text-white py-3 rounded-full hover:bg-[#1c2a45] transition font-semibold"
              >
                Richiedi preventivo
              </a>
            </div>
          </FadeInSection>

          {/* Pacchetto Standard */}
          <FadeInSection>
            <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#0A122A] h-full flex flex-col relative">
              <span className="absolute top-4 right-4 bg-[#0A122A] text-white text-xs px-3 py-1 rounded-full font-bold">
                PIÙ SCELTO
              </span>
              <h3 className="text-2xl font-bold text-[#0A122A] mb-2">Standard</h3>
              <div className="text-4xl font-bold text-[#0A122A] mb-4">4.000 €</div>
              <p className="text-gray-600 mb-6">
                La soluzione completa per eventi, percorsi turistici e progetti culturali.
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Fino a 30 punti di interesse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Tutto il pacchetto Light</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Tracciato del percorso (sentiero/polyline)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Modalità offline: la mappa funziona senza connessione</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Geolocalizzazione con indicatore di posizione</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Legenda automatica e contatore marker visibili</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Assistenza tecnica per 6 mesi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Formazione per l'aggiornamento dei contenuti</span>
                </li>
              </ul>
              <a
                href="mailto:contatti.mappabianca@gmail.com?subject=Richiesta%20pacchetto%20Standard"
                className="block text-center bg-[#0A122A] text-white py-3 rounded-full hover:bg-[#1c2a45] transition font-semibold"
              >
                Richiedi preventivo
              </a>
            </div>
          </FadeInSection>
        </div>

        {/* Footer sezione */}
        <FadeInSection>
          <div className="text-center mt-16 p-8 bg-[#0A122A] text-white rounded-2xl max-w-3xl mx-auto">
            <p className="text-xl font-semibold mb-2">
              Hai un progetto su misura?
            </p>
            <p className="text-gray-300 mb-6">
              Ogni territorio è unico. Se hai esigenze particolari, possiamo costruire
              insieme la soluzione perfetta.
            </p>
            <a
              href="mailto:contatti.mappabianca@gmail.com?subject=Richiesta%20soluzione%20personalizzata"
              className="inline-block bg-white text-[#0A122A] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
            >
              Contattami per un preventivo personalizzato
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default ServicePackages;