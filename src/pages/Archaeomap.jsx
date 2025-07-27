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
            Un plugin WordPress per visualizzare siti archeologici su una mappa interattiva.
          </p>
          <a
            href="https://github.com/Vival18/archaeomap"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0A122A] text-white px-6 py-3 rounded-full hover:bg-[#1c2a45] transition"
          >
            Guarda su GitHub
          </a>
        </section>
      </FadeInSection>

      {/* Descrizione */}
      <FadeInSection>
        <section className="w-full py-16 px-6 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Cos'è Archaeomap?</h2>
          <p className="text-base md:text-lg">
            Archaeomap è un plugin leggero pensato per musei, enti culturali e progetti locali.
            Consente di inserire una mappa interattiva con marker personalizzati per ogni sito archeologico.
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

      {/* Funzionalità */}
      <FadeInSection>
        <section className="w-full bg-[#f4f4f4] py-16 px-6 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-8">Funzionalità principali</h3>
          <ul className="space-y-3 text-left max-w-md mx-auto text-base md:text-lg list-none">
            <li>✅ Mappa interattiva con Leaflet.js</li>
            <li>✅ Marker con titolo, descrizione e immagine</li>
            <li>✅ Inserimento dei siti tramite custom post type</li>
            <li>✅ Responsive e leggero</li>
          </ul>
        </section>
      </FadeInSection>

      {/* Istruzioni */}
      <FadeInSection>
        <section className="istructionam w-full py-16 px-6 text-center">
          <h4 className="text-xl md:text-2xl font-semibold mb-4">Come installarlo</h4>
          <ol className="list-decimal list-inside space-y-2 text-left max-w-md mx-auto 
          text-base md:text-lg">
            <li>Scarica il plugin da GitHub.</li>
            <li>Caricalo nella sezione “Plugin” di WordPress.</li>
            <li>Attiva il plugin.</li>
            <li>Vai nella voce “Siti Archeologici” e inserisci i dati.</li>
            <li>Usa lo shortcode <code>[archaeomap]</code> nella pagina desiderata.</li>
          </ol>
        </section>
      </FadeInSection>

    </div>
  );
}

export default Archaeomap;

