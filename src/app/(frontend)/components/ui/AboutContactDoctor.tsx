'use client'

import { usePathname, useRouter } from 'next/navigation'
import doctorImage from '../../public/assets/aboutusAssets/doctor_image_cropped.png'

const AboutContactDoctor = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleRedirect = () => {
    const contactSectionId = 'contact-form'

    if (pathname === '/contact') {
      // If already on contact page, scroll to the section
      const el = document.getElementById(contactSectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // If not on contact page, navigate with hash
      router.push(`/contact#${contactSectionId}`)
    }
  }

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10">
      <div className="flex flex-col lg:flex-row w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-7xl xl:max-w-full 2xl:max-w-7xl relative mx-auto">
        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center rounded-l-none md:rounded-l-[35px] bg-[#deeaf1] relative z-10">
          <p className="text-[#0D94CD] font-normal text-[18px] sm:text-[20px] tracking-wider">
            Get in Touch
          </p>
          <h2 className="text-[#181818] relative font-medium text-[22px] sm:text-[28px] md:text-[30px] lg:text-[30px] xl:text-[40px] mt-2">
            Let’s work together! Contact us today for expert toxicology solutions.
          </h2>
          <button
            onClick={handleRedirect}
            className="mt-6 bg-[#0D94CD] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-[50px] text-[14px] sm:text-[16px] transition hover:bg-[#000000] cursor-pointer font-normal self-start"
          >
            Get in Touch
          </button>
        </div>

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
