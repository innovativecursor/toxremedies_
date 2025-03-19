'use client'

import Image from 'next/image'
import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

import contact from '../public/assets/contactAssets/contact_image.png'

const ContactSection = () => {
  return (
    <div className="flex justify-center w-full px-4 sm:px-6 md:px-8">
      <section className="max-w-7xl py-16 sm:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-stretch w-full gap-8 lg:gap-4">
          {/* Left Side - Contact Form & Info */}
          <div className="flex-1 lg:pr-6">
            {/* Contact Form */}
            <div className="bg-white shadow-xl rounded-[36px] p-6 sm:p-8 md:p-10 w-full h-auto lg:h-[565px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="py-3 px-4 rounded-lg bg-[#EFFBFF] w-full placeholder-[#494949] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D94CD] transition-all duration-300 ease-in-out"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="py-3 px-4 rounded-lg bg-[#EFFBFF] w-full placeholder-[#494949] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D94CD] transition-all duration-300 ease-in-out"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="py-3 px-4 rounded-lg bg-[#EFFBFF] w-full placeholder-[#494949] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D94CD] transition-all duration-300 ease-in-out"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="py-3 px-4 rounded-lg bg-[#EFFBFF] w-full placeholder-[#494949] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D94CD] transition-all duration-300 ease-in-out"
                />
              </div>
              <textarea
                placeholder="Message..."
                className="py-3 px-4 rounded-lg bg-[#EFFBFF] w-full mt-6 h-[250px] placeholder-[#494949] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-[#0D94CD] transition-all duration-300 ease-in-out resize-none"
              />

              <button className="bg-[#0D94CD] text-[13px] text-white py-3 px-8 rounded-[35px] mt-8 w-full md:w-auto transition-all duration-300 ease-in-out hover:bg-[#000000]">
                Send Message
              </button>
            </div>

            {/* Contact Info Section */}
            <div className="bg-[#0D94CD] text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-4 p-6 rounded-lg mt-8 w-full h-auto md:h-[160px]">
              <div className="flex flex-col items-start">
                <div className="bg-white p-2 rounded-full">
                  <FaEnvelope size={15} className="text-[#0D94CD]" />
                </div>
                <p className="text-xs text-[#C3EDFF] mb-2 font-medium mt-2">Email</p>
                <p className="text-xs break-all">toxremedies@gmail.com</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="bg-white p-2 rounded-full">
                  <FaPhoneAlt size={15} className="text-[#0D94CD]" />
                </div>
                <p className="text-xs text-[#C3EDFF] mb-2 font-medium mt-2">Phone</p>
                <p className="text-xs">+91 99207 01520</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="bg-white p-2 rounded-full">
                  <FaMapMarkerAlt size={15} className="text-[#0D94CD]" />
                </div>
                <p className="text-xs text-[#C3EDFF] mb-2 font-medium mt-2">Office Address</p>
                <p className="text-xs">
                  Tower A/53, Atlantis CHS, Kashish Park, LBS Road, Thane West, India 400604
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Info & Image */}
          <div className="w-full lg:w-[550px] flex flex-col items-start">
            <button className="bg-black text-white px-6 py-3 rounded-full font-light tracking-wider text-sm shadow-md mb-4 sm:text-[14px] sm:px-8">
              Make Appointment
            </button>
            <h2 className="text-2xl sm:text-3xl md:text-[48px] mt-2 font-medium tracking-wide whitespace-nowrap">
              Get in Touch with Us
            </h2>
            <p className="text-[#272727] text-[15px] sm:text-[17px] leading-6 sm:leading-7 font-light mt-4 mb-4">
              Reach out to us for regulatory guidance, safety assessments, and toxicology
              consulting.
            </p>
            <Image
              width={500}
              height={500}
              src={contact}
              alt="Consultation"
              className="mt-4 rounded-lg w-full sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection
