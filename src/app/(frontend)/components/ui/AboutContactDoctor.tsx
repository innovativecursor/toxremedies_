'use client'

import doctorImage from '../../public/assets/aboutusAssets/doctor_image_cropped.png' // Ensure correct path

const AboutContactDoctor = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center max-w-7xl mx-auto px-6 sm:px-10 py-10 w-full">
      {/* Main Container Div - Flexbox for equal division */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Side - Content */}
        <div
          className="w-full lg:w-1/2 p-8 flex flex-col justify-center rounded-[35px]"
          style={{
            background:
              'linear-gradient(270.88deg, rgba(188, 235, 255, 0) 0.73%, rgba(226, 246, 255, 0.8) 99.27%)',
          }}
        >
          <p className="text-[#0D94CD] font-normal text-[20px] tracking-wider">Get in Touch</p>
          <h2 className="text-[#181818] relative font-medium text-[24px] sm:text-[32px] md:text-[36px] mt-2">
            Let’s work together! Contact us today for expert toxicology solutions.
          </h2>
          <button className="mt-6 bg-[#0D94CD] text-white px-10 py-3 rounded-[50px] text-[15px] transition hover:bg-[#000000] cursor-pointer font-normal sm:px-10 sm:py-4 sm:text-[15px] self-start">
            Get in Touch
          </button>
        </div>

        {/* Right Side - Image as Background */}
        <div
          className="w-full lg:w-1/2 h-[300px] lg:h-[400px] bg-cover bg-center rounded-r-[35px]"
          style={{
            backgroundImage: `url(${doctorImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </section>
  )
}

export default AboutContactDoctor
