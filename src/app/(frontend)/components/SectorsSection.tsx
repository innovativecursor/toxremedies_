'use client'

import React from 'react'
import { motion } from 'framer-motion'
import cosmetics from '../public/assets/sectorsAssets/icon_image_1.png'
import consumer from '../public/assets/sectorsAssets/icon_image_2.png'
import medical from '../public/assets/sectorsAssets/icon_image_3.png'
import pharma from '../public/assets/sectorsAssets/icon_image_4.png'
import foodProducts from '../public/assets/sectorsAssets/icon_image_5.png'
import general from '../public/assets/sectorsAssets/icon_image_6.png'
import Image from 'next/image'

const sectors = [
  { image: cosmetics.src, label: 'Cosmetics' },
  { image: consumer.src, label: 'Consumer Products' },
  { image: medical.src, label: 'Medical Devices' },
  { image: pharma.src, label: 'Pharmaceuticals' },
  { image: foodProducts.src, label: 'Food Products' },
  { image: general.src, label: 'General Chemicals' },
]

const SectorsSection = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-white/20 to-[#F0FFD0]/20 text-center">
      <div className="max-w-7xl mx-auto">
        <span className="px-4 py-1 text-sm font-medium bg-black text-white rounded-full">
          Sectors
        </span>
        <div className="mt-5 max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto text-center">
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-[40px] lg:text-[45px] font-medium tracking-wide leading-snug">
            Comprehensive Toxicology & Safety Consulting
          </h2>
        </div>
        <div className="max-w-[90%] sm:max-w-[60%] md:max-w-[40%] lg:max-w-[30%] mt-4 text-center mx-auto">
          <p className="mt-2 text-[14px] sm:text-[13px] md:text-[12px] text-[#272727] tracking-wide leading-6 md:leading-5">
            Ensuring global safety and regulatory compliance across multiple industries.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
        {sectors.map((sector, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 border-[0.5px] border-[#CECECE] rounded-2xl shadow cursor-pointer h-[255px] 
            bg-transparent text-[#181818] transition-all duration-75 ease-in-out"
            whileHover={{
              backgroundColor: '#0D94CD',
              color: '#FFFFFF',
              transition: { duration: 0.15 },
            }}
          >
            <Image
              width={20}
              height={20}
              src={sector.image}
              alt={sector.label}
              className="w-[50px] h-[50px] object-contain transition-all duration-75 ease-in-out"
            />
            <p className="mt-6 font-medium text-[20px] transition-all duration-75 ease-in-out">
              {sector.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SectorsSection
