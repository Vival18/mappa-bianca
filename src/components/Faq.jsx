import React, { useState } from "react";
import FadeInSection from "./FadeInSection";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      domanda: "Cosa succede dopo aver scelto un pacchetto?",
      risposta: "Dopo il primo contatto, fissiamo una call per definire i dettagli del tuo progetto: punti di interesse, tracciato, immagini, colori e funzionalità specifiche. In base a questo, ti invio un preventivo dettagliato e, una volta approvato, parto con lo sviluppo. In 5-10 giorni la mappa è online e pronta per essere condivisa."
    },
    {
      domanda: "Quanto tempo ci vuole per realizzare la mappa?",
      risposta: "Dipende dalla complessità del progetto. In generale, per i pacchetti Light e Standard parliamo di 5-7 giorni lavorativi. Per il pacchetto Premium, che include personalizzazioni avanzate, possiamo concordare tempistiche specifiche in base alle tue esigenze."
    },
    {
      domanda: "La mappa funziona anche senza connessione?",
      risposta: "Sì, nel pacchetto Standard è inclusa la modalità offline. La mappa si installa sul telefono come una app (PWA) e i marker, i filtri e la geolocalizzazione funzionano anche senza rete. Le mappe di base (tile) richiedono invece connessione per il caricamento iniziale."
    },
    {
      domanda: "Ci sono costi di manutenzione o rinnovo?",
      risposta: "No, la mappa è tua e non ci sono canoni annuali. I pacchetti includono assistenza tecnica per 6 mesi (Light e Standard) o 12 mesi (Premium). Dopo questo periodo, se hai bisogno di assistenza o aggiornamenti, possiamo concordare un supporto a ore o un contratto di manutenzione."
    },
    {
      domanda: "I dati della mappa sono miei o tuoi?",
      risposta: "I dati sono tuoi. Ti fornisco il file JSON con tutti i punti di interesse e il tracciato, così puoi conservarli, modificarli o usarli per altri progetti. La piattaforma tecnica (il codice) è mia, ma i contenuti sono interamente di tua proprietà."
    },
    {
      domanda: "Posso vedere una demo prima di decidere?",
      risposta: "Certo. Posso mostrarti esempi di mappe già realizzate (come quella del Baldo Festival) e, se necessario, preparare un prototipo ridotto del tuo progetto per darti un'idea concreta del risultato finale."
    },
    {
      domanda: "Cosa succede se voglio aggiungere altre funzionalità in futuro?",
      risposta: "Nessun problema. I pacchetti sono modulari: puoi partire dal Light e successivamente passare allo Standard pagando solo la differenza. Oppure possiamo sviluppare funzionalità personalizzate su richiesta, con un preventivo dedicato."
    }
  ];

  return (
    <section className="faq-section py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A122A] mb-4">
            Domande frequenti
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Tutto quello che vuoi sapere prima di scegliere il pacchetto giusto per te.
          </p>
        </FadeInSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeInSection key={index}>
              <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 bg-white hover:bg-gray-50 transition flex justify-between items-center gap-4"
                >
                  <span className="text-lg font-semibold text-[#0A122A]">
                    {faq.domanda}
                  </span>
                  <span className="text-2xl flex-shrink-0 text-[#0A122A]">
                    {openIndex === index ? "−" : "+"}
        </span>
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.risposta}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Call to action finale */}
        <FadeInSection>
          <div className="text-center mt-12 p-8 bg-[#f8f9fa] rounded-2xl">
            <p className="text-lg text-gray-700 mb-4">
              Non hai trovato la risposta che cercavi?
            </p>
            <a
              href="mailto:contatti.mappabianca@gmail.com?subject=Domanda%20su%20Mappa%20Bianca"
              className="inline-block bg-[#0A122A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#1c2a45] transition"
            >
              Contattami direttamente
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}

export default Faq;