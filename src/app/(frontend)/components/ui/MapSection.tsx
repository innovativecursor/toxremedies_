import { FaLinkedin } from 'react-icons/fa'

const MapSection = () => {
  return (
    <section className="py-18 px-5 sm:px-10 bg-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <button className="bg-black text-white mb-4 px-5 py-2 rounded-full font-light text-[12px]">
          Find Us
        </button>
        <h2 className="text-2xl sm:text-3xl md:text-[30px] mt-2 mb-6 font-medium tracking-wide">
          Maps location of ToxRemedies
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          {/* Google Map Embed */}
          <div className="w-full lg:w-2/3 relative">
            <iframe
              className="w-full h-full min-h-[300px] sm:min-h-[320px] lg:min-h-[320px] rounded-3xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.936947377184!2d72.9700003151668!3d19.115400755910055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9102f5a2ffb%3A0x5678a53c12345678!2sAtlantis%20Tower%20B%2C%20Thane%2C%20India!5e0!3m2!1sen!2sin!4v1648152234567"
              allowFullScreen
              loading="lazy"
            ></iframe>

            {/* View Larger Map Button */}
            <a
              href="https://www.google.com/maps/place/Atlantis+Tower+B,+Thane,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 left-4 bg-white text-black text-sm font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-100 transition"
            >
              View Large Map
            </a>
          </div>

          {/* Address and Social Links */}
          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-4xl p-6 flex flex-col gap-12 h-full min-h-[320px] text-left">
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-sm text-gray-600 mb-4">
                Tower A/53, Atlantis CHS, Kashish Park, LBS Road, Thane West, India 400604
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us on Social Media</h3>
              <div className="flex items-center gap-2 text-gray-700">
                <FaLinkedin className="text-xl" />
                <span className="text-sm">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
