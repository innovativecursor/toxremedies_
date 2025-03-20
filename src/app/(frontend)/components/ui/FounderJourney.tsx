import React from 'react'
import Image from 'next/image'
import founderImage from '../../public/assets/aboutusAssets/founder_image_1.png' // Replace with actual image path
import awardImage from '../../public/assets/aboutusAssets/founder_image_2.png' // Replace with actual image path

const FounderJourney: React.FC = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(280deg, #FFFFFF 5.75%, #DAF4FF 94.25%)',
      }}
    >
      <section className="container max-w-7xl mx-auto py-16 px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div>
            {/* Story Tag */}
            <div className="mb-4">
              <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-[#181818]">
              Our Founder’s Journey – Dr. Milind Deore
            </h2>

            {/* Description */}
            <p className="text-[#272727] font-light tracking-wide leading-8 text-[14px] sm:text-[15px] mt-4">
              Dr. Milind Deore, a veterinarian with a Ph.D. in Pharmacology & Toxicology, is a
              globally recognized expert with 35+ years of experience in academia and the
              pharmaceutical industry. Apart from Ph.D. in Toxicology, he is also Diplomate of
              American Board of Toxicology (DABT) since 2010 and also a European Registered
              Toxicologist (ERT).  His journey began with a passion for science and safety, leading
              him to work with industry giants like Ranbaxy, Johnson & Johnson, and Kenvue, where he
              played a key role in global safety assessments, regulatory compliance, and
              toxicological risk evaluations. Prior, he was in academics for over 15 years where he
              was instrumental in teaching and research in Toxicology which enabled to present is
              work in over 25 national/international conferences along with being recognized as best
              Teacher in the university and a National award for his Ph.D. Recently he was
              recognized as Distinguished Pharmacologist and Toxicologist in India by Indian Society
              of Pharmacology & Toxicology.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex ">
            <Image
              src={founderImage}
              alt="Dr. Milind Deore"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full max-w-[450px] sm:max-w-[600px] h-auto"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-10">
          {/* Left Image */}
          <div className="flex flex-col">
            <Image
              src={awardImage}
              alt="Award Ceremony"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full max-w-[450px] sm:max-w-[600px] h-auto"
            />
            {/* CTA Link */}
            <p className="mt-6 text-[#272727] text-[16px] font-light tracking-wide">
              Want to learn more?{' '}
              <a href="#" className="text-[#0D94CD] hover:text-blue-600">
                Connect with us at ToxRemedies!
              </a>
            </p>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-[#272727] font-light tracking-wide leading-7 text-[14px] sm:text-[15px]">
              Driven by the mission to provide scientifically sound and regulatory-compliant
              toxicology solutions, Dr. Deore founded ToxRemedies. His deep expertise spans
              pharmaceuticals, cosmetics, medical devices, food, and general chemicals, making him a
              trusted authority in global toxicology regulations (US FDA, EU Cosmetics, EMA, ANVISA,
              China CSAR, ASEAN, MDR, TGA).
            </p>
            <p className="text-[#272727] font-light tracking-wide leading-7 text-[14px] sm:text-[15px] mt-4">
              With 90+ scientific publications, multiple industry awards, and international
              collaborations, Dr. Deore continues to lead the field, helping businesses ensure
              product safety, compliance, and innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FounderJourney
