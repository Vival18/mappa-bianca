import React from "react";
import FadeInSection from "./FadeInSection";

function About() {
  return (
    <section id="chi-sono" className="about-section py-20 px-6 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto">
        
        {/* Titolo */}
        <FadeInSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A122A] mb-4">
              Chi c'è dietro Mappa Bianca
            </h2>
            <div className="w-20 h-1 bg-[#0A122A] mx-auto rounded-full"></div>
          </div>
        </FadeInSection>

        {/* Avatar + Testo di presentazione */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          
          {/* Avatar */}
          <FadeInSection>
            <div className="md:col-span-1 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#0A122A] flex items-center justify-center text-white text-4xl font-light">
                FV
              </div>
            </div>
          </FadeInSection>

          {/* Testo di presentazione */}
          <FadeInSection>
            <div className="md:col-span-4 space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ciao, sono <span className="font-semibold text-[#0A122A]">Fabio</span>.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Alle spalle ho una solida formazione in Beni Culturali (triennale + magistrale specialistica in archeologia) 
                e un corso in Web Developer. 
                La mia missione è fondere queste competenze per sviluppare 
                soluzioni digitali che mettano la tecnologia al servizio del patrimonio culturale.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ho creato Mappa Bianca per trasformare i dati del territorio in 
                mappe interattive, semplici da usare e pensate per chi non ha 
                competenze tecniche.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ho già collaborato con BALDOFestival
                per realizzare la mappa di "Sentieri nell'Arte".
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-[#0A122A]/10 text-[#0A122A] text-sm px-4 py-2 rounded-full">
                  🏛️ Laurea magistrale in Beni Culturali
                </span>
                <span className="bg-[#0A122A]/10 text-[#0A122A] text-sm px-4 py-2 rounded-full">
                  💻 Corso Web Developer
                </span>
                <span className="bg-[#0A122A]/10 text-[#0A122A] text-sm px-4 py-2 rounded-full">
                  🗺️ Mappe interattive
                </span>
                <span className="bg-[#0A122A]/10 text-[#0A122A] text-sm px-4 py-2 rounded-full">
                  📱 PWA
                </span>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Perché scegliermi */}
        <FadeInSection>
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#0A122A] mb-10">
              Perché scegliermi
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Punto 1 – Competenza distintiva */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">🎓</div>
                <h4 className="text-xl font-bold text-[#0A122A] mb-2">Competenza distintiva</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Doppia laurea in Beni Culturali + corso di Web Developer. 
                  Conosco il settore culturale ho le competenze tecniche 
                  per trasformare le idee in strumenti digitali efficaci e belli da vedere.
                </p>
              </div>

              {/* Punto 2 – Velocità */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-[#0A122A] mb-2">Velocità</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ho già costruito la base tecnica. Questo significa che posso 
                  adattarla al tuo territorio in poco tempo.
                </p>
              </div>

              {/* Punto 3 – Trasparenza */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h4 className="text-xl font-bold text-[#0A122A] mb-2">Trasparenza</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Prezzi chiari, nessuna sorpresa. Ti fornisco un preventivo dettagliato e 
                  concordiamo insieme le funzionalità della mappa.
                </p>
              </div>

            </div>
          </div>
        </FadeInSection>

        {/* Call to action */}
        <FadeInSection>
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              Vuoi raccontarmi il tuo progetto? Scrivimi, ne parliamo senza impegno.
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

export default About;