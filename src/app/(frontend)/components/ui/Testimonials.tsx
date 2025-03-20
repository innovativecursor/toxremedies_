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
    image: testimonial1.src, // Replace with actual path
  },
  {
    id: 2,
    name: 'Cosmetics Brand Owner',
    text: 'With ToxRemedies, we ensured our skincare line met all EU and ASEAN compliance standards. Their team made the toxicology assessment process smooth and efficient.',
    image: testimonial2.src, // Replace with actual path
  },
]

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 9000) // Auto-change every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-6 sm:px-10 text-center">
      <div className="max-w-6xl mx-auto">
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

        {/* Animated Testimonial Card */}
        <div className="relative mt-10 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl shadow-md text-center w-full max-w-lg"
              style={{
                background:
                  'linear-gradient(301.99deg, #FFFFFF -25.98%, #F7FFE6 12.73%, #C1EDFF 42.11%, #EFFFCD 104.15%)',
              }}
            >
              {/* Client Image */}
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
                <Image
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-[#181818] font-light leading-7 mt-4">{testimonials[index].text}</p>

              {/* Client Name */}
              <p className="text-gray-600 text-sm font-medium mt-4">{testimonials[index].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                index === i ? 'bg-black w-4' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
