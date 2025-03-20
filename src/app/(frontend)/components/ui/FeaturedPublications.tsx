import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Import Images (Replace with actual paths)
import publication1 from '../../public/assets/publicationAssets/publication_image_1.png'
import publication2 from '../../public/assets/publicationAssets/publication_image_2.png'
import publication3 from '../../public/assets/publicationAssets/publication_image_3.png'

// Publication Data
const publications = [
  {
    id: 1,
    date: 'April 2024',
    title: 'Safety Evaluation of 8 Degradants in OTC Cough and Cold Medications',
    image: publication1,
  },
  {
    id: 2,
    date: 'March 2021',
    title: 'Regulatory Toxicology and Pharmacology',
    image: publication2,
  },
  {
    id: 3,
    date: 'July 2007',
    title: 'Environmental Toxicology and Pharmacology',
    image: publication3,
  },
]

const FeaturedPublications: React.FC = () => {
  return (
    <section
      className="py-16 px-6 sm:px-10"
      style={{
        background:
          'linear-gradient(280.06deg, rgba(255, 255, 255, 0.6) 1.47%, rgba(235, 249, 255, 0.6) 50.6%, rgba(248, 255, 233, 0.6) 98.53%)',
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Tag */}
        <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
          Publications
        </span>

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-medium text-[#181818] mt-8">
          Featured Publications
        </h2>

        {/* Description */}
        <p className="text-[#272727] font-light tracking-wide leading-7 text-[14px] sm:text-[15px] mt-4 max-w-[900px] mx-auto">
          At ToxRemedies, we prioritize scientific research and evidence-based toxicology. Our
          founder, Dr. Milind Deore, has contributed to 90+ publications, influencing global
          toxicology standards and regulatory frameworks.
        </p>

        {/* Publication Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="p-4 rounded-lg text-left transition-transform transform hover:scale-105 duration-500 ease-in-out"
            >
              {/* Image */}
              <Image
                src={pub.image}
                alt={pub.title}
                width={400}
                height={250}
                className="rounded-lg w-full object-cover"
              />

              {/* Date */}
              <p className="text-gray-500 text-sm mt-4">Date: {pub.date}</p>

              {/* Title */}
              <h3 className="text-lg font-medium text-[#181818] mt-2">{pub.title}</h3>

              {/* Read More */}
              <Link href="#" className="text-[#0D94CD] font-medium mt-6 inline-flex items-center">
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
