'use client'

import React from 'react'
import Image from 'next/image'
import aboutus1 from '../../public/assets/aboutusAssets/about_us_image_1.png'
import aboutus2 from '../../public/assets/aboutusAssets/about_us_image_2.png'
import tickIcon from '../../public/assets/aboutusAssets/tick_image.png'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const staggerList = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const listItemVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
}

const AboutToxRemedies = () => {
  return (
    <section className="container max-w-7xl mx-auto py-16 sm:py-20 px-6 sm:px-10">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="mb-7">
            <span className="bg-black text-white px-5 py-2 rounded-full font-light text-[12px]">
              About Us
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[50px] font-medium tracking-wider mb-4 text-[#181818]">
            About ToxRemedies
          </h2>
          <p className="text-[#272727] font-light tracking-wide mb-2 leading-7 text-[14px] sm:text-[15px]">
            ToxRemedies is a specialized Toxicology Consultancy firm founded by Dr Milind Deore who
            has over 35 years of experience and expertise in the Toxicology field. He is an American
            board-certified toxicologist (DABT) and also a European Registered Toxicologist (ERT).
            ToxRemedies is formed to carry out risk assessments on chemicals and products coming
            from industries like Pharmaceuticals, Consumer & Cosmetics, Medical Devices, and Food
            /Food products’ areas. Apart from human health, ToxRemedies also provides consultancy on
            Environmental Safety through ERA (Environmental Risk Assessment). ToxRemedies can also
            play an advisory role in setting up Toxicology units in India that are not only
            cost-effective but equally efficient as compared to global standards. ToxRemedies can
            also provide Toxicology strategies for end-to-end product development and help in
            regulatory submissions. The experts can also help in creating digital tools for
            Toxicology risk assessments, which is a fast-growing demand.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <Image
            src={aboutus1}
            alt="Toxicologist"
            width={500}
            height={500}
            className="w-full max-w-[450px] sm:max-w-[800px] h-auto"
          />
        </motion.div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-6">
        {/* Left Image */}
        <motion.div
          className="flex"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={aboutus2}
            alt="Lab Testing"
            width={500}
            height={500}
            className="w-full max-w-[450px] sm:max-w-[800px] h-auto"
          />
        </motion.div>

        {/* Right Content - List Items */}
        <motion.div
          className="relative mt-5"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-[#272727] font-light tracking-wide leading-7 text-[14px] sm:text-[15px]">
            With knowledge and experience about requirements from global regulatory authorities,
            including USFDA, EMA, MDR, European Cosmetic Directive, ANVISA, China CSAR, TGA, India
            DCGI & BIS, and other regulatory bodies, ToxRemedies offers:
          </p>

          <motion.ul
            className="space-y-3 mt-6 text-[#272727]"
            variants={staggerList}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              'End to End Toxicology strategies for product development',
              'Ingredient hazard and safety/risk assessments',
              'Product safety assessments for different product categories',
              'Regulatory compliance and submissions',
              'Environmental, Occupational and Packaging safety',
              'Digital tools for Toxicology',
              'Setting efficient Toxicology risk assessment teams in India',
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={listItemVariant}
                className="flex items-center text-gray-900 text-[14px] sm:text-[15px] pb-3 border-b border-[#D9D9D9] pt-1"
                style={{ width: 'fit-content' }}
              >
                <Image src={tickIcon} alt="Tick" width={12} height={12} className="mr-3" />
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutToxRemedies
