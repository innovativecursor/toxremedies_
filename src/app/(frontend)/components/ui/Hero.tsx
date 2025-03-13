const Hero = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row justify-between items-center text-left h-screen px-10 md:px-20 pt-20"
      style={{
        background: 'linear-gradient(260.13deg, #F8FFEB 20.11%, #D9F4FF 46.52%, #F4FFDC 102.3%)',
      }}
    >
      <div className="absolute top-28 left-10 bg-black text-white px-4 py-2 rounded-full text-sm shadow-md">
        Leading Toxicology Expert
      </div>
      <div className="max-w-lg">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-xl font-bold text-blue-600">TR</span>
          </div>
          <h1 className="text-4xl font-bold text-blue-600">ToxRemedies</h1>
        </div>
        <p className="text-gray-700 text-lg font-medium">
          IN SERVICE OF HUMAN AND ENVIRONMENTAL HEALTH
        </p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition">
          Schedule a Consultation
        </button>
      </div>
      <div className="md:absolute bottom-10 right-10 md:w-1/2 flex justify-center items-center">
        <img
          src="/doctor-family.png"
          alt="Doctor with Family"
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </section>
  )
}

export default Hero
