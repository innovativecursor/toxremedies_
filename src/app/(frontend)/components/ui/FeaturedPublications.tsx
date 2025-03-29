'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetchFeaturedPublications } from '../../utils/api'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

interface Publication {
  id: number
  title: string
  publicationImage: { url: string }
  pdf: { url: string }
  createdAt: string
}

const FeaturedPublications: React.FC = () => {
  const [publications, setPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const getPublications = async () => {
      try {
        const data = await fetchFeaturedPublications()
        setPublications(data.docs) // Extract the `docs` array from response
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    getPublications()
  }, [])

  if (loading) {
    return <p className="text-center py-10">Loading publications...</p>
  }

  const nextSlide = () => {
    if (currentIndex < publications.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <section
      className="py-16 px-6 sm:px-10 relative"
      style={{
        background:
          'linear-gradient(280.06deg, rgba(255, 255, 255, 0.6) 1.47%, rgba(235, 249, 255, 0.6) 50.6%, rgba(248, 255, 233, 0.6) 98.53%)',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
          Publications
        </span>

        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#181818] mt-8">
          Featured Publications
        </h2>

        <p className="text-[#272727] font-light tracking-wide leading-7 text-[14px] sm:text-[15px] mt-4 max-w-[900px] mx-auto">
          At ToxRemedies, we prioritize scientific research and evidence-based toxicology. Our
          founder, Dr. Milind Deore, has contributed to 90+ publications, influencing global
          toxicology standards and regulatory frameworks.
        </p>

        <div className="mt-10 relative w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / Math.min(3, publications.length))}%` }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="w-full sm:w-1/2 lg:w-1/3 p-4 shrink-0 text-left transition-transform"
              >
                <Image
                  src={pub.publicationImage.url}
                  alt={pub.title}
                  width={400}
                  height={250}
                  className="rounded-lg w-full h-[350px] object-cover"
                />

                <p className="text-gray-500 text-sm mt-4">
                  Date: {new Date(pub.createdAt).toLocaleDateString()}
                </p>

                <h3 className="text-lg font-medium text-[#181818] mt-2 truncate max-w-full">
                  {pub.title.length > 10 ? `${pub.title.slice(0, 200)}...` : pub.title}
                </h3>

                <Link
                  href={pub.pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0D94CD] font-medium mt-6 inline-flex items-center"
                >
                  Read More <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>

        {publications.length > 3 && (
          <div className="relative flex justify-center items-center mt-6">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`px-4 py-2 bg-gray-800 text-white font-medium mr-4 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-700'
              }`}
            >
              <FaArrowLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex === publications.length - 3} // Ensure it stops when last set of cards is reached
              className={`px-4 py-2 bg-gray-800 text-white font-medium ${
                currentIndex === publications.length - 3
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-700'
              }`}
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturedPublications
