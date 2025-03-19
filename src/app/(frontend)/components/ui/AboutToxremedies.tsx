import React from 'react'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'
import aboutus1 from '../../public/assets/aboutusAssets/about_us_image_1.png'
import aboutus2 from '../../public/assets/aboutusAssets/about_us_image_2.png'

const AboutToxRemedies = () => {
  return (
    <section className="container max-w-7xl mx-auto py-16 sm:py-20">
      {/* Title */}
      <div className="mb-6">
        <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
          About Us
        </span>
      </div>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">About ToxRemedies</h2>
          <p className="text-gray-700 leading-relaxed">
            ToxRemedies is a specialized Toxicology Consultancy founded by Dr Milind Deore who has
            over 35 years of experience and expertise in Toxicology field. He is American board
            certified toxicologist (DABT) and is also a European Registered Toxicologist (ERT).
            ToxRemedies is formed to carry out risk assessments on chemicals and products coming
            from industries like Pharmaceuticals, Consumer & Cosmetics, Medical Devices and Food
            /Food products’ area. Apart from human health, ToxRemedies also provides consultancy on
            Environmental through ERA (Environmental Risk Assessment) ToxRemedies can also play
            advisory role in setting up of Toxicology units in India which are not only cost
            effective but equally efficient as compared to global standards. ToxRemedies can also
            provide Toxicology strategies for end to end product development and help in regulatory
            submissions. The experts can also help in creating digital tools for Toxicology risk
            assessments which is fast growing demand.
          </p>
        </div>

        {/* Right Image */}
        <div className="">
          <Image
            src={aboutus1} // Replace with actual path
            alt="Toxicologist"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-2">
        {/* Left Image */}
        <div>
          <Image
            src={aboutus2} // Replace with actual path
            alt="Lab Testing"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>

        {/* Right Content - List Items */}
        <div>
          <p className="text-gray-700">
            With knowledge and experience about requirements from global regulatory authorities
            including USFDA, EMA, MDR, European Cosmetic Directive, ANVISA, China CSAR, TGA, India
            DCGI & BIS and other regulatory bodies, ToxRemedies offers:
          </p>
          <ul className="space-y-3">
            {[
              'End to End Toxicology strategies for product development',
              'Ingredient hazard and safety/risk assessments',
              'Product safety assessments for different product categories',
              'Regulatory compliance and submissions',
              'Environmental, Occupational and Packaging safety',
              'Digital tools for Toxicology',
              'Setting efficient Toxicology risk assessment teams in India',
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-900">
                <FaCheckCircle className="text-blue-600 w-5 h-5 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutToxRemedies
