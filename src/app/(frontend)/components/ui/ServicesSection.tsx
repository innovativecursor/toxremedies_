'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import tickIcon from '../../public/assets/aboutusAssets/tick_image.png'
import { fetchServices } from '../../utils/api'

// Define the type for services

interface SubPoint {
  subPoint: string
}
interface DescriptionPoint {
  point: string
  subPoints?: SubPoint[]
}
interface Service {
  title: string
  image: { url: string }
  description: DescriptionPoint[]
}

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]) // Specify type for services array
  const [selectedService, setSelectedService] = useState<Service | null>(null) // Ensure selectedService has correct type

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await fetchServices()
        setServices(data.docs as Service[]) // Type assertion to enforce correct structure
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    loadServices()
  }, [])

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 md:px-6">
      <div className="text-left mb-10">
        <span className="bg-black text-white px-5 py-2 rounded-full font-light text-[12px]">
          Services
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mt-4">Our Services</h2>
        <p className="mt-4 text-[#272727] text-sm md:text-[15px] max-w-4xl leading-7 md:leading-8 tracking-wider font-light">
          At ToxRemedies, we provide specialized toxicology and regulatory consulting to ensure
          product safety and compliance across various industries. Our expert-driven solutions help
          businesses navigate global regulations while maintaining the highest safety standards.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:[&>:last-child]:col-span-2 sm:[&>:last-child]:mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#E6F8FF] to-[#E9FFE6] p-5 sm:p-6 rounded-3xl"
          >
            <div className="relative w-full h-[200px] sm:h-[250px] rounded-2xl overflow-hidden">
              <Image src={service.image.url} alt={service.title} layout="fill" objectFit="cover" />
            </div>
            <h3 className="mt-3 sm:mt-4 text-lg sm:text-[22px] font-medium text-[#181818] border-b-2 border-[#FFFFFF] tracking-wider pb-2">
              {service.title}
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              {service.description.slice(0, 3).map((point, i) => (
                <li key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Image src={tickIcon} alt="Tick" width={12} height={12} />
                    <span className="tracking-wide text-[13px]">{point.point}</span>
                  </div>

                  {/* {point.subPoints && point.subPoints.length > 0 && (
                    <ul className="ml-5 space-y-1 text-gray-600">
                      {point.subPoints.map((sub, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <Image src={tickIcon} alt="Tick" width={10} height={10} />
                          <span className="tracking-wide text-[12px]">{sub.subPoint}</span>
                      
                        </li>
                      ))}
                    </ul>
                  )} */}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setSelectedService(service)}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0D94CD] text-white flex items-center justify-center rounded-full hover:bg-[#086d9a] transition"
              >
                <FaArrowRight className="font-normal" size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-20 bg-amber-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-gradient-to-b from-[#E6F8FF] to-[#E9FFE6] rounded-xl shadow-lg w-[95%] sm:w-[90%] max-w-lg p-5 sm:p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-40 sm:h-48 rounded-lg overflow-hidden">
                <Image
                  src={selectedService.image.url}
                  alt={selectedService.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="mt-3 sm:mt-4 text-lg sm:text-[22px] font-medium text-[#181818] border-b-2 border-[#FFFFFF] tracking-wider pb-2">
                {selectedService.title}
              </h3>

              <div className="mt-3 max-h-40 sm:max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                <ul className="space-y-2 text-sm text-gray-700">
                  {selectedService.description.map((point, i) => (
                    <li key={i} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <Image src={tickIcon} alt="Tick" width={12} height={12} />
                        <span className="tracking-wide text-[13px]">{point.point}</span>
                      </div>

                      {point.subPoints && point.subPoints.length > 0 && (
                        <ul className="ml-5 space-y-1 text-gray-600">
                          {point.subPoints.map((subpoint, j) => (
                            <li key={j} className="flex items-center gap-2">
                              {/* <Image src={tickIcon} alt="Tick" width={10} height={10} /> */}
                              <span>-</span>
                              <span className="tracking-wide text-[12px]">{subpoint.subPoint}</span>
                            </li>
                          ))}
                        </ul>
                      )}
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
