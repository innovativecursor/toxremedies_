'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import pharmaImage from '../../public/assets/servicesAssets/pharma_image.png'
import tickIcon from '../../public/assets/aboutusAssets/tick_image.png' // Add your tick image
import { fetchServices } from '../../utils/api'
const services = [
  {
    title: 'Pharmaceuticals - NCE and OTC drugs',
    description: [
      'Preclinical strategies for safety qualification of Medical Devices',
      'Biological Evaluation Plan and Biological Evaluation Report (BER) for Medical Devices',
      'Toxicological risk assessment of Leachable and Extractables',
      'Biocompatibility assessments for Medical Devices',
      'Risk assessment of packaging materials of medical devices',
    ],
    image: pharmaImage.src,
  },
]

const ServicesSection = () => {
  const [services, setServices] = useState([])
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices()
        setServices(data.docs) // Ensure the correct key (depends on your API response)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    loadServices()
  }, [])
  return (
    <section className="py-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <span className="bg-black text-white px-3 py-1 rounded-full text-sm">Services</span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">Our Services</h2>
        <p className="mt-4 text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          At ToxRemedies, we provide specialized toxicology and regulatory consulting to ensure
          product safety and compliance across various industries.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:[&>:last-child]:col-span-2 sm:[&>:last-child]:mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-gradient-to-b from-[#E6F8FF] to-[#E9FFE6] p-6 rounded-2xl">
            <div className="relative w-full h-[250px] rounded-3xl overflow-hidden">
              <Image src={service.image.url} alt={service.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-800">{service.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                {service.description.slice(0, 3).map((point, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Image src={tickIcon} alt="Tick" width={12} height={12} />
                    <span>{point.point}</span>
                  </li>
                ))}
              </ul>
            </ul>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setSelectedService(service)}
                className="w-12 h-12 bg-[#0D94CD] text-white flex items-center justify-center rounded-full hover:bg-[#086d9a] transition"
              >
                <FaArrowRight className="font-normal" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-20 bg-gradient-to-b from-[#E6F8FF] to-[#E9FFE6] p-6 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg w-[90%] max-w-lg p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src={selectedService.image.url}
                  alt={selectedService.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{selectedService.title}</h3>

              <div className="mt-3 max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                <ul className="space-y-2 text-sm text-gray-700">
                  {selectedService.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span>✔</span>
                      <span>{point.point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ServicesSection
