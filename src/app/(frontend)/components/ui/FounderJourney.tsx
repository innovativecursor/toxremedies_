'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import founderImage from '../../public/assets/aboutusAssets/founder_image_1.png'
import { motion, AnimatePresence } from 'framer-motion'
import { fetchFounderImages, fetchFounderTexts } from '../../utils/api'

interface FounderImage {
  id: number
  image: { url: string }
  alt: string
}

interface ApiResponse {
  docs: { images: FounderImage[] }[]
}

const FounderJourney: React.FC = () => {
  const [awardImages, setAwardImages] = useState<FounderImage[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [founderTexts, setFounderTexts] = useState<string[]>([])

  useEffect(() => {
    const getAwardImages = async () => {
      try {
        const awardData: ApiResponse = await fetchFounderImages()
        if (awardData?.docs) {
          setAwardImages(awardData.docs.flatMap((doc) => doc.images))
        }
      } catch (error) {
        console.error('Error fetching award images:', error)
      }
    }
    getAwardImages()
  }, [])

  useEffect(() => {
    if (awardImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % awardImages.length)
      }, 3000) // Auto-slide every 3 seconds
      return () => clearInterval(interval)
    }
  }, [awardImages])

  useEffect(() => {
    const getFounderTexts = async () => {
      try {
        const textData = await fetchFounderTexts()
        if (textData?.docs?.length) {
          const texts = textData.docs.map((doc: { paragraph: string }) => doc.paragraph)
          setFounderTexts(texts)
        }
      } catch (error) {
        console.error('Error fetching founder texts:', error)
      }
    }

    getFounderTexts()
  }, [])

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
            <div className="mb-4">
              <span className="bg-black text-white px-8 py-2 rounded-full text-sm font-light tracking-wider">
                Story
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium tracking-wide text-[#181818]">
              Our Founder’s Journey – Dr. Milind Deore
            </h2>

            {founderTexts[0] && (
              <p className="text-[#272727] font-light tracking-wide leading-8 text-[14px] sm:text-[15px] mt-4">
                {founderTexts[0]}
              </p>
            )}
          </div>

          {/* Right Image - Static Image */}
          <div>
            <Image
              src={founderImage}
              alt="Dr. Milind Deore"
              width={500}
              height={500}
              className="w-full max-w-[450px] sm:max-w-[600px] h-auto"
            />
          </div>
        </div>

        {/* Second Row - Award Image Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mt-10">
          <div className="flex flex-col w-full max-w-[450px] sm:max-w-[600px] overflow-hidden">
            <div className="relative w-full h-[320px] rounded-3xl">
              {' '}
              {/* Set a fixed height */}
              <AnimatePresence>
                {awardImages.length > 0 && (
                  <motion.div
                    key={awardImages[currentIndex]?.image.url}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute w-full h-full rounded-3xl"
                  >
                    <Image
                      src={awardImages[currentIndex].image.url}
                      alt="Award Ceremony"
                      width={500}
                      height={500}
                      className="w-full h-full object-cover rounded-3xl" /* Ensure consistent image display */
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Ensure the text is below the image */}
            <p className="mt-4 text-[#272727] text-[16px] font-light tracking-wide">
              Want to learn more?{' '}
              <a href="#" className="text-[#0D94CD] hover:text-blue-600">
                Connect with us at ToxRemedies!
              </a>
            </p>
          </div>

          <div>
            {founderTexts[1] && (
              <p className="text-[#272727] font-light tracking-wide leading-8 text-[14px] sm:text-[15px]">
                {founderTexts[1]}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FounderJourney
