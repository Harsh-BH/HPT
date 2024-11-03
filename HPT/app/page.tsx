// pages/index.js

export default function Home() {
  return (
    <section
      className="relative flex flex-col items-start justify-between h-full w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/pizza.gif')" }} // Fullscreen background
    >
      {/* Main Heading */}
      <div className="mt-auto mb-24 ml-8 ">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Jump into VANTA World
        </h1>
        <div className="flex space-x-4 mt-6">
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Enter Raffle
          </button>
          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600">
            Explore Map
          </button>
        </div>
      </div>
    </section>
  );
}
