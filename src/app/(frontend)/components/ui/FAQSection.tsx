'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import doctorImage from '../../public/assets/faqAssets/faq_image.png'
import { GoPlus } from 'react-icons/go'
import { AiOutlineMinus } from 'react-icons/ai'
import { fetchFAQs } from '../../utils/api'

interface FAQ {
  id: string
  question: string
  answer: string
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [faqs, setFaqs] = useState<FAQ[]>([])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    const getFAQs = async () => {
      try {
        const data = await fetchFAQs()
        setFaqs(data?.docs || [])
      } catch (err) {
        console.error('Failed to fetch FAQs:', err)
      }
    }

    getFAQs()
  }, [])

  return (
    <section
      className="py-16 px-6 sm:px-10"
      style={{
        background: 'linear-gradient(1deg, #FFFFFF 5.75%, #DAF4FF 94.25%)',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            FAQs
          </span>
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-[#181818] mt-4">
            Got Questions? <br /> We Have Answers!
          </h2>
          <p className="text-[#272727] font-light tracking-wide leading-7 text-[14px] sm:text-[15px] mt-2 max-w-[500px]">
            Find answers to common queries about our toxicology services, compliance support, and
            risk assessments.
          </p>
          <div className="mt-6">
            <Image
              src={doctorImage}
              alt="Doctor holding question mark"
              className="rounded-2xl w-full max-w-[590px]"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Right Side */}
        <div>
          {faqs.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-300 last:border-none">
              <button
                className="w-full flex items-center gap-4 py-6 text-left text-[#181818] font-medium text-[16px] sm:text-[17px] focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-xl font-bold">
                  {openIndex === index ? <AiOutlineMinus /> : <GoPlus />}
                </span>
                {faq.question}
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden text-gray-600 text-sm leading-6"
              >
                <p className="pb-4 pr-4">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
