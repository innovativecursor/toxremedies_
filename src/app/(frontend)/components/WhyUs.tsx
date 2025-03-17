import Image from 'next/image'
import whyus from '../public/assets/whyUsAssets/why_us_image.png'
import checkIcon from '../public/assets/whyUsAssets/tick_mark.png' // Import the checkmark image

const WhyUs = () => {
  return (
    <section className="py-20 px-6 md:px-10 text-center sm:py-12 sm:px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center w-full gap-10 sm:gap-6">
        {/* Right Image - Adjusted for smaller screens */}
        <div className="w-full md:w-[40%] lg:w-[47%] flex justify-center md:justify-start items-center">
          <Image
            width={500}
            height={500}
            src={whyus}
            alt="Doctor with Family"
            className="w-[80%] md:w-full sm:w-[70%] h-auto object-cover"
          />
        </div>

        {/* Left Content - Fully Responsive */}
        <div className="max-w-lg mx-auto text-center md:text-left md:w-[55%] flex flex-col items-center md:items-start">
          <div className="bg-black text-white px-6 py-2 rounded-full text-sm shadow-md mb-4 sm:text-xs sm:px-4">
            Why Us
          </div>

          <h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4 sm:text-2xl">
            Why ToxRemedies?
          </h2>

          <p className="text-[#272727] leading-[20px] text-[13px] font-light mb-6 md:text-[15px] md:leading-[1.5] w-auto max-w-[500px] sm:text-sm sm:leading-[1.4]">
            Expert toxicology solutions backed by 35+ years of global experience and cutting-edge
            technology.
          </p>

          {/* Checkpoints - Maintained whitespace-nowrap */}
          <ul className="space-y-3 text-gray-700 text-lg w-full sm:text-sm">
            <li className="flex items-center space-x-2 pb-1.5">
              <Image
                src={checkIcon}
                width={15}
                height={15}
                alt="Checkmark Icon"
                className="flex-shrink-0"
              />
              <span className="text-[16px] text-left md:whitespace-nowrap sm:text-[14px]">
                Unmatched Expertise "In Toxicology (PhD, DABT, and ERT credentials)"
              </span>
            </li>
            <hr className="border-gray-300" />
            <li className="flex items-center space-x-2 pt-1.5 pb-1.5">
              <Image
                src={checkIcon}
                width={15}
                height={15}
                alt="Checkmark Icon"
                className="flex-shrink-0"
              />
              <span className="text-[16px] md:whitespace-nowrap sm:text-[14px]">
                Regulatory Compliance
              </span>
            </li>
            <hr className="border-gray-300" />
            <li className="flex items-center space-x-2 pb-1.5">
              <Image
                src={checkIcon}
                width={15}
                height={15}
                alt="Checkmark Icon"
                className="flex-shrink-0"
              />
              <span className="text-[16px] md:whitespace-nowrap sm:text-[14px]">
                Scientific Excellence
              </span>
            </li>
          </ul>

          {/* Button - Responsive size */}
          <button className="mt-6 bg-[#0D94CD] text-white px-10 py-3 rounded-[50px] text-[15px] transition hover:bg-[#000000] cursor-pointer font-normal sm:px-6 sm:py-2 sm:text-[13px]">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
