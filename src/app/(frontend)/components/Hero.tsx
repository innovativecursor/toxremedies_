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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center w-full gap-0 md:gap-10 relative h-full pb-10 md:pb-10">
        {/* Left Content - No Extra Space on Mobile */}
        <div className="relative max-w-lg mx-auto md:ml-9 text-center md:text-left mt-50 md:mt-20">
          <div className="absolute -top-[80px] md:-top-25 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-black text-white px-3 md:px-8 py-4 rounded-full text-xs md:text-[14px] shadow-md whitespace-nowrap">
            Leading Toxicology Expert
          </div>

          <div className="flex items-center justify-center md:justify-start space-x-2 mb-[10px] md:mb-6">
            <div className="w-[20rem] md:w-[70rem]">
              <Image src={logo} alt="ToxRemedies Logo" layout="responsive" />
            </div>
          </div>

          <p className="text-[#545454] text-[16px] font-light mb-6 md:text-[22px] md:whitespace-nowrap md:tracking-wider">
            IN SERVICE OF HUMAN AND ENVIRONMENTAL HEALTH
          </p>

          {/* <ScheduleMeetingButton text=" Schedule a Consultation" /> */}
        </div>

        {/* Right Image - Visible only on Desktop */}
        <div className="hidden lg:flex hero-image-container w-full justify-end items-end absolute bottom-0 right-0">
          <Image
            width={1200}
            height={1200}
            src={heroImage.src}
            alt="Doctor with Family"
            className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[626px] 2xl:max-w-[800px] h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[500px] lg:max-h-[550px] xl:max-h-[600px] 2xl:max-h-[650px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
