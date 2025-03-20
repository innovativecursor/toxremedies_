'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import doctorImage from '../../public/assets/faqAssets/faq_image.png' // Update the path if needed
import { GoPlus } from 'react-icons/go'
import { AiOutlineMinus } from 'react-icons/ai'

const faqs = [
  {
    question: 'When should I contact ToxRemedies?',
    answer:
      'You should contact us whenever you need expert toxicology assessments or regulatory compliance support.',
  },
  {
    question: 'Does ToxRemedies conduct toxicological studies?',
    answer:
      'Yes, we offer a wide range of toxicological studies to meet global safety and compliance standards.',
  },
  {
    question: 'What is the turnaround time for risk assessments?',
    answer:
      'Turnaround times vary depending on the complexity, but we strive to deliver reports within 2-4 weeks.',
  },
  {
    question: 'What kind of services are provided for qualification of Medical Devices?',
    answer:
      'We provide biocompatibility assessments, risk analysis, and regulatory documentation for medical devices.',
  },
  {
    question:
      'How does ToxRemedies provide support for AI solutions in Toxicology and risk assessment?',
    answer:
      'We integrate AI-driven models for predictive toxicology, accelerating the assessment process.',
  },
  {
    question: 'Does ToxRemedies help in risk assessment of female hygiene products?',
    answer: 'Yes, we assess ingredients, formulations, and compliance for female hygiene products.',
  },
  {
    question: 'Where can ToxRemedies help for packaging safety?',
    answer: 'We evaluate packaging materials for toxicological safety and regulatory compliance.',
  },
  {
    question: 'What kind of clinical safety support does ToxRemedies provide?',
    answer:
      'Our services include clinical trial assessments, adverse effect analysis, and safety reporting.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className="py-16 px-6 sm:px-10"
      style={{
        background: 'linear-gradient(1deg, #FFFFFF 5.75%, #DAF4FF 94.25%)',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Text + Image */}
        <div>
          {/* Tag */}
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            FAQs
          </span>

          {/* Heading */}
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-[#181818] mt-4">
            Got Questions? <br /> We Have Answers!
          </h2>

          {/* Description */}
          <p className="text-[#272727] font-light tracking-wide leading-7 text-[14px] sm:text-[15px] mt-2 max-w-[500px]">
            Find answers to common queries about our toxicology services, compliance support, and
            risk assessments.
          </p>

          {/* Image */}
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

        {/* Right Side: FAQ List */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 last:border-none">
              <button
                className="w-full flex items-center gap-4 py-6 text-left text-[#181818] font-medium text-[16px] sm:text-[17px] focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {/* Plus/Minus Sign on Left */}
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
