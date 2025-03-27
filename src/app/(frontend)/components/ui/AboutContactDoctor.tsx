'use client'

import doctorImage from '../../public/assets/aboutusAssets/doctor_image_cropped.png' // Ensure correct path

const AboutContactDoctor = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10">
      {/* Main Container Div - Flexbox for equal division */}
      <div className="flex flex-col lg:flex-row w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-7xl xl:max-w-full 2xl:max-w-7xl relative mx-auto">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center rounded-l-none md:rounded-l-[35px] bg-[#deeaf1] relative z-10">
          <p className="text-[#0D94CD] font-normal text-[18px] sm:text-[20px] tracking-wider">
            Get in Touch
          </p>
          <h2 className="text-[#181818] relative font-medium text-[22px] sm:text-[28px] md:text-[30px] lg:text-[30px] xl:text-[40px] mt-2">
            Let’s work together! Contact us today for expert toxicology solutions.
          </h2>
          <button className="mt-6 bg-[#0D94CD] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-[50px] text-[14px] sm:text-[16px] transition hover:bg-[#000000] cursor-pointer font-normal self-start">
            Get in Touch
          </button>
        </div>

        {/* Blurry Merging Effect */}
        {/* <div className="absolute w-[150px] sm:w-[180px] md:w-[200px] h-0 md:h-[350px] lg:h-[400px] top-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[40%] bg-gradient-to-r from-[#deeaf1] via-[#deeaf1]/60 to-transparent blur opacity-95 pointer-events-none z-10"></div> */}

        {/* Right Side - Image as Background */}
        <div
          className="w-full lg:w-1/2 h-[250px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] 2xl:h-[450px] bg-cover bg-center rounded-r-none md:rounded-r-[35px] relative z-10"
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
