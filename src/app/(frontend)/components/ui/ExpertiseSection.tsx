'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import expertise1 from '../../public/assets/expertiseAssets/image_1_expertise.png'
import expertise2 from '../../public/assets/expertiseAssets/image_2_expertise.png'
import expertise3 from '../../public/assets/expertiseAssets/image_3_expertise.png'
import expertise4 from '../../public/assets/expertiseAssets/image_4_expertise.png'
import expertise5 from '../../public/assets/expertiseAssets/image_5_expertise.png'
import expertise6 from '../../public/assets/expertiseAssets/image_6_expertise.png'
import expertise7 from '../../public/assets/expertiseAssets/image_7_expertise.png'
import expertise8 from '../../public/assets/expertiseAssets/image_8_expertise.png'

const expertiseData = [
  {
    title: 'Toxicology Strategies',
    description:
      '• Toxicology strategies for end-to-end product development\n• Establishment of Toxicology Risk Assessor units for organizations\n• Strategies for safety claim support for cosmetic products',
    imageSrc: expertise1.src,
  },
  {
    title: 'Ingredient hazard and Product Risk /Safety assessments',
    description:
      'Hazard profiles of chemical constituents and impurities. Ingredient and Product risk and safety assessment for cosmetic and consumer products, Medical Devices, OTC Products, and Food Products.',
    imageSrc: expertise2.src,
  },
  {
    title: 'Impurities',
    description:
      'Qualification of Leachables and Extractables. Impurity qualification of OTC products. Nitrosamine assessments',
    imageSrc: expertise3.src,
  },
  {
    title: 'Regulatory compliance and dossiers',
    description:
      'Regulatory dossiers as US FDA, EMA, EU Directive, MDR, ANVISA, ISO, China CSAR, India CDSCO. Product stewardship and ingredient safety opinions.',
    imageSrc: expertise4.src,
  },
  {
    title: 'Occupational & Environmental Safety',
    description:
      'Derivation of Occupational Exposure Limits (OELs) of chemicals at manufacturing plants. Environmental Risk Assessment (ERA) for chemicals.',
    imageSrc: expertise5.src,
  },
  {
    title: 'Packaging Safety',
    description: 'Safety assessments of virgin plastics and PCRs.',
    imageSrc: expertise6.src,
  },
  {
    title: 'Digital Tools, NAMs',
    description: 'QSAR modeling. Use of NGRA. Creation of Digital tools for risk assessment.',
    imageSrc: expertise7.src,
  },
  {
    title: 'Others',
    description:
      'Fragrance and Flavor safety assessments. Dermatology safety for cosmetics and consumer products.',
    imageSrc: expertise8.src,
  },
]

const ExpertiseSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-0 py-16">
      {/* Header Section */}
      <div className="text-left">
        <button className="px-5 py-2 bg-black text-white text-sm rounded-full font-medium">
          Our Expertise
        </button>
        <h2 className="text-md sm:text-4xl font-medium tracking-wider text-[#181818] mt-4">
          Comprehensive Toxicology Expertise for <br className="hidden md:inline" /> Product Safety
          & Compliance
        </h2>
        <p className="text-[#272727] mt-4 text-[15px] leading-8 font-light max-w-full sm:max-w-[600px] md:max-w-[750px] lg:max-w-[87%]">
          At ToxRemedies, we specialize in toxicology strategies, risk assessments, and regulatory
          compliance across multiple industries, including cosmetics, pharmaceuticals, medical
          devices, food products, and consumer goods. With decades of experience, we provide
          scientifically backed, regulatory-compliant, and innovative toxicology solutions.
        </p>
      </div>

      {/* Expertise Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 border border-gray-200 rounded-2xl shadow-none flex flex-col items-center text-center transition-all duration-500"
            whileHover={{
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
              scale: 1.05,
            }}
          >
            <motion.div
              className="w-15 h-15 flex items-center justify-center rounded-full bg-[#0D94CD] transition-all duration-500"
              whileHover={{ backgroundColor: '#000' }}
            >
              <motion.div whileHover={{ filter: 'brightness(0)' }}>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={30}
                  height={30}
                  className="rounded-full"
                />
              </motion.div>
            </motion.div>
            <h3 className="text-[15px] font-semibold text-gray-900 mt-2 pb-2">{item.title}</h3>
            <span className="border-[0.5px] border-[#BCBDBF] w-10"></span>
            <p className="text-gray-600 mt-2 text-[12px] max-w-[250px]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ExpertiseSection
