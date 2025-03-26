'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaGlobe, FaPhoneAlt } from 'react-icons/fa'
import Image from 'next/image'
import contact from '../../public/assets/contactAssets/contact_image.png'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const [loading, setLoading] = useState(false)

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="bg-white p-6 sm:p-10 rounded-xl shadow-lg w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-[35px] text-[#181818] font-medium">Contact Form</h2>
          <p className="text-[#6b6a6a] leading-6 tracking-wider mt-2 text-sm">
            Have a question or need a consultation? Fill out the form below, and our team will get
            back to you as soon as possible.
          </p>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="py-3 px-4 rounded-lg bg-[#EFFBFF] w-full placeholder-[#494949] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D94CD] transition-all duration-300 ease-in-out"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              required
              onChange={handleChange}
              className="py-3 px-4 rounded-lg bg-[#EFFBFF] w-full placeholder-[#494949] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D94CD] transition-all duration-300 ease-in-out"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="py-3 px-4 rounded-lg bg-[#EFFBFF] w-full placeholder-[#494949] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D94CD] transition-all duration-300 ease-in-out"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="py-3 px-4 rounded-lg bg-[#EFFBFF] w-full placeholder-[#494949] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D94CD] transition-all duration-300 ease-in-out"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message..."
              required
              className="py-3 px-4 rounded-lg bg-[#EFFBFF] w-full mt-2 h-[150px] placeholder-[#494949] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D94CD] transition-all duration-300 ease-in-out resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-[#0D94CD] text-[13px] text-white py-3 px-8 rounded-[35px] mt-2 w-full md:w-auto transition-all duration-300 ease-in-out hover:bg-[#000000]"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <div>
          <span className="bg-black text-white px-5 py-2 rounded-full font-light text-[12px]">
            Make Appointment
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-[48px] mt-4 font-medium tracking-wide">
            Get in Touch with ToxRemedies
          </h2>
          <p className="text-[#272727] text-[15px] sm:text-[15px] leading-6 sm:leading-7 font-light mt-4 mb-4">
            Need expert toxicology consulting, regulatory guidance, or risk assessment services? Our
            team is here to help!
          </p>
          {/* <div className="mt-6 relative w-full h-full rounded-xl overflow-hidden"> */}
          <Image
            width={500}
            height={500}
            src={contact}
            alt="Consultation"
            className="mt-4 w-full sm:h-[400px] md:h-full rounded-4xl object-cover"
          />
          {/* </div> */}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 text-center sm:text-left">
        <ContactInfo icon={FaEnvelope} text="toxremedies@gmail.com" label="Email" />
        <ContactInfo icon={FaPhoneAlt} text="+91 99207 01520" label="Phone" />
        <ContactInfo
          icon={FaMapMarkerAlt}
          text="Tower A/53, Atlantis CHS, Kashish Park, LBS road, Thane West, India 400604"
          label="Office Address"
        />
        <ContactInfo icon={FaGlobe} text="www.toxremedies.com" label="Website" />
      </div>
    </section>
  )
}

const ContactInfo = ({
  icon: Icon,
  text,
  label,
}: {
  icon: React.ElementType
  text: string
  label: string
}) => (
  <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
    <div className="w-12 h-12 flex items-center justify-center bg-[#000000] rounded-full">
      <Icon className="text-lg text-white" />
    </div>
    <p className="font-normal text-[#18181899]">{label}</p>
    <p className="text-sm font-normal text-gray-600 max-w-[300px]">{text}</p>
  </div>
)

export default Contact
