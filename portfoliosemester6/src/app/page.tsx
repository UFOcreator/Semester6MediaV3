const Hero = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="parent flex flex-col w-full h-screen rounded-2xl bg-white shadow-md sm:h-full">
        <div className="child flex-1 p-10 grid grid-cols-2 sm:grid-cols-1">
          <TextSection />
          <ImageSection />
        </div>
      </div>
    </div>
  );
};

const TextSection = () => {
  return (
    <div className="p-5">
      <h1 className="text-5xl">Welkom</h1>
      <p className="leading-relaxed">
        op mijn portfolio website voor het 6e semester van Media Design. Dit semester heb ik me gericht op mijn ontwikkeling tot een young professional in de media- en designwereld. In de afgelopen maanden heb ik met veel enthousiasme gewerkt aan 3 bijzondere projecten:
        <br />
        <span className="font-bold">Holobox:</span> Een innovatief project waarbij ik heb gekeken naar hoe interactieve holografische technologieën kunnen worden gebruikt in onderwijs.
        <br />
        <span className="font-bold">Indicia Verzuimnavigator:</span> Een samenwerkingsproject gericht op het ontwerpen van een gebruiksvriendelijke en efficiënte verzuimtool.
        <br />
        <span className="font-bold">Persoonlijk Project voor Wildwasser:</span> Een passieproject waarbij ik mijn vaardigheden heb ingezet om een unieke en impactvolle bijdrage te leveren aan deze organisatie.
        Neem een kijkje in mijn werk en ontdek hoe ik mezelf dit semester heb uitgedaagd en ontwikkeld.
      </p>
    </div>
  );
};

const ImageSection = () => {
  return (
    <div className="hidden lg:block rounded-2xl bg-white shadow-md h-1/2">
      {/* Add your image here */}
    </div>
  );
};

export default Hero;