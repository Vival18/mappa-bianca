export default function Home() {
  return (
    <section
      className="w-full min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black text-white"
      id="mappa-bianca"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Mappa Bianca</h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-6">
          Un’iniziativa per riscoprire e rimodernare il patrimonio culturale attraverso 
          l’uso delle tecnologie digitali.
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
          Un approccio innovativo per far scoprire e valorizzare 
          i patrimoni del territorio con mappe interattive e dati aperti.
        </p>
      </div>
    </section>
  );
}



