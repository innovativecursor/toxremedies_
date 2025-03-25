'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetchFeaturedPublications } from '../../utils/api'

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

  return (
    <section
      className="py-16 px-6 sm:px-10"
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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="p-4 rounded-lg text-left transition-transform transform hover:scale-105 duration-500 ease-in-out"
            >
              <Image
                src={pub.publicationImage.url}
                alt={pub.title}
                width={400}
                height={250}
                className="rounded-lg w-full object-cover"
              />

              <p className="text-gray-500 text-sm mt-4">
                Date: {new Date(pub.createdAt).toLocaleDateString()}
              </p>

              <h3 className="text-lg font-medium text-[#181818] mt-2">{pub.title}</h3>

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
        </div>
      </div>
    </section>
  )
}

export default FeaturedPublications
