import Image from 'next/image'
import heroImage from '../public/assets/heroAssets/doctor_hero_image.png'
import logo from '../public/assets/toxremedies_logo.png'
import ScheduleMeetingButton from './ui/ScheduleMeetingButton'

const Hero = () => {
  return (
    <section
      className="relative h-screen px-6 md:px-10 pt-32 flex items-center justify-center"
      style={{
        background: 'linear-gradient(260.13deg, #F8FFEB 20.11%, #D9F4FF 46.52%, #F4FFDC 102.3%)',
      }}
    >
      {/* Hero Wrapper - Keeps Everything Inside max-w-7xl */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full gap-0 md:gap-10">
        {/* Left Content (Aligned Below Navbar) */}
        <div className="relative max-w-lg mx-auto md:ml-9 text-center md:text-left">
          {/* Tagline - Adjusted for Single Line */}
          <div className="absolute -top-[47px] md:-top-25 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-black text-white px-3 md:px-8 py-4 rounded-full text-xs md:text-[14px] shadow-md whitespace-nowrap">
            Leading Toxicology Expert
          </div>

          {/* Logo & Title */}
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-[5px] md:mb-6">
            {/* Logo Image */}
            <div className="w-[20rem] md:w-[70rem]">
              <Image src={logo} alt="ToxRemedies Logo" layout="responsive" />
            </div>
          </div>

          {/* Description */}

          <p className="text-[#545454] text-[16px] font-light mb-6 md:text-[22px] md:whitespace-nowrap md:tracking-wider">
            IN SERVICE OF HUMAN AND ENVIRONMENTAL HEALTH
          </p>

          <ScheduleMeetingButton text=" Schedule a Consultation" />
        </div>

        {/* Right Image - Adjusted for Full Height */}
        <div className="hero-image-container w-full md:w-[60%] lg:w-[80%] flex justify-center md:justify-end items-end md:items-end mt-6 md:mt-0 self-end">
          <Image
            width={1200} // Increased size for desktop view
            height={1200}
            src={heroImage.src}
            alt="Doctor with Family"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
