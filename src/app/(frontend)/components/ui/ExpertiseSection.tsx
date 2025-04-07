'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fetchExpertise } from '../../utils/api'

const ExpertiseSection = () => {
  const [expertiseData, setExpertiseData] = useState<
    {
      title: string
      description: { point: string }[]
      image: { url: string }
    }[]
  >([])

  useEffect(() => {
    const getExpertise = async () => {
      try {
        const data = await fetchExpertise()
        setExpertiseData(data?.docs || [])
      } catch (error) {
        console.error('Failed to fetch expertise data:', error)
      }
    }

    getExpertise()
  }, [])

  return (
    <section className="max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-7xl xl:max-w-full 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-4 2xl:px-0 py-16">
      {/* Header Section */}
      <div className="text-left">
        <button className="bg-black text-white px-5 py-2 rounded-full font-light text-[12px] sm:text-[14px] lg:text-[15px]">
          Our Expertise
        </button>
        <h2 className="text-lg sm:text-3xl md:text-4xl lg:text-3.5xl font-medium tracking-wider text-[#181818] mt-4 leading-snug">
          Comprehensive Toxicology Expertise for <br className="hidden md:inline" /> Product Safety
          & Compliance
        </h2>
        <p className="text-[#272727] mt-4 text-[14px] sm:text-[15px] md:text-[16px] leading-7 sm:leading-8 font-light max-w-full sm:max-w-[600px] md:max-w-[750px] lg:max-w-[87%]">
          At ToxRemedies, we specialize in toxicology strategies, risk assessments, and regulatory
          compliance across multiple industries, including cosmetics, pharmaceuticals, medical
          devices, food products, and consumer goods. With decades of experience, we provide
          scientifically backed, regulatory-compliant, and innovative toxicology solutions.
        </p>
      </div>

      {/* Expertise Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            className="group p-6 border border-gray-200 rounded-2xl shadow-none flex flex-col items-center text-center transition-all duration-500 hover:bg-[#0D94CD]"
            whileHover={{
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
              scale: 1.05,
            }}
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0D94CD] transition-all duration-500 group-hover:bg-white">
              <Image
                src={item.image?.url}
                alt={item.title}
                width={40}
                height={40}
                className="transition-all duration-500 group-hover:invert group-hover:brightness-75"
              />
            </div>
            <h3 className="text-[14px] sm:text-[15px] md:text-[15px] font-semibold text-gray-900 mt-2 pb-2 transition-all duration-500 group-hover:text-white">
              {item.title}
            </h3>
            <span className="border-[0.5px] border-[#BCBDBF] w-10 transition-all duration-500 group-hover:border-white"></span>
            <ul className="text-gray-600 mt-2 text-[12px] sm:text-[13px] md:text-[14px] max-w-[250px] transition-all duration-500 group-hover:text-white list-disc list-inside space-y-1">
              {item.description.map((desc, idx) => (
                <li key={idx}>{desc.point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ExpertiseSection
