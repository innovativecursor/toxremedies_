'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import testimonial1 from '../../public/assets/testimonialsAssets/testimonials_1.png'
import testimonial2 from '../../public/assets/testimonialsAssets/testimonials_2.png'

const testimonials = [
  {
    id: 1,
    name: 'Pharma Industry Client',
    text: 'ToxRemedies’ expertise in regulatory toxicology helped us navigate complex FDA and EMA requirements seamlessly. Their insights were invaluable in getting our product approved.',
    image: testimonial1.src,
  },
  {
    id: 2,
    name: 'Cosmetics Brand Owner',
    text: 'With ToxRemedies, we ensured our skincare line met all EU and ASEAN compliance standards. Their team made the toxicology assessment process smooth and efficient.',
    image: testimonial2.src,
  },
  {
    id: 3,
    name: 'Nutraceuticals Company CEO',
    text: 'ToxRemedies provided thorough toxicology reports, allowing us to meet global safety standards and gain consumer trust.',
    image: testimonial1.src,
  },
  {
    id: 4,
    name: 'Medical Device Manufacturer',
    text: 'Thanks to ToxRemedies, our regulatory submissions were accepted without delays. Their expertise is unmatched.',
    image: testimonial2.src,
  },
  {
    id: 5,
    name: 'Medical Device Manufacturer',
    text: 'Thanks to ToxRemedies, our regulatory submissions were accepted without delays. Their expertise is unmatched.',
    image: testimonial2.src,
  },
]

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % testimonials.length)
    }, 9000) // Auto-change every 9 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-6 sm:px-10 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Tag */}
        <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
          Testimonials
        </span>

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-[#181818] mt-4">
          What Our Clients Say
        </h2>

        {/* Description */}
        <p className="text-[#272727] font-light tracking-wide leading-7 text-[14px] sm:text-[15px] mt-2 max-w-[700px] mx-auto">
          Hear from our clients about how ToxRemedies has helped them achieve safety and regulatory
          excellence.
        </p>

        {/* Animated Testimonial Cards */}
        <div className="relative mt-10 flex flex-col sm:flex-row justify-center items-center gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-8 w-full max-w-7xl"
            >
              {[0, 1].map((offset) => {
                const testimonialIndex = (index + offset) % testimonials.length
                return (
                  <div
                    key={testimonials[testimonialIndex].id}
                    className="p-6 sm:p-8 rounded-3xl shadow-md text-center flex-1 w-full sm:w-1/2"
                    style={{
                      background:
                        'linear-gradient(301.99deg, #FFFFFF -25.98%, #F7FFE6 12.73%, #C1EDFF 42.11%, #EFFFCD 104.15%)',
                    }}
                  >
                    {/* Client Image */}
                    <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                      <Image
                        src={testimonials[testimonialIndex].image}
                        alt={testimonials[testimonialIndex].name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[#181818] font-light leading-7 mt-4">
                      {testimonials[testimonialIndex].text}
                    </p>

                    {/* Client Name */}
                    <p className="text-gray-600 text-sm font-medium mt-4">
                      {testimonials[testimonialIndex].name}
                    </p>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i * 2)}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                index / 2 === i ? 'bg-[#0D94CD] w-4' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
