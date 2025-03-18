'use client'

import Image from 'next/image'
import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

import contact from '../public/assets/contactAssets/contact_image.png'

const ContactSection = () => {
  return (
    <div className="flex justify-center w-full">
      <section className="max-w-7xl py-20">
        <div className="flex flex-col lg:flex-row items-stretch w-full">
          {/* Left Side - Contact Form & Info */}
          <div className="flex-1 pr-6 lg:pr-">
            {/* Contact Form */}
            <div className="bg-white shadow-md rounded-lg p-6 md:p-10 w-full h-[520px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 border rounded bg-blue-50 w-full"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="p-3 border rounded bg-blue-50 w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border rounded bg-blue-50 w-full"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="p-3 border rounded bg-blue-50 w-full"
                />
              </div>
              <textarea
                placeholder="Message...."
                className="p-3 border rounded bg-blue-50 w-full mt-4 h-[250px]"
              />
              <button className="bg-blue-500 text-white py-2 px-6 rounded mt-4 w-full md:w-auto">
                Send Message
              </button>
            </div>

            {/* Contact Info Section */}
            <div className="bg-[#0D94CD] text-white grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-lg mt-8 w-full h-[160px]">
              <div className="flex flex-col items-start">
                <FaEnvelope size={24} />
                <p className="font-medium mt-2">Email</p>
                <p className="text-sm">toxremedies@gmail.com</p>
              </div>
              <div className="flex flex-col items-start">
                <FaPhoneAlt size={24} />
                <p className="font-medium mt-2">Phone</p>
                <p className="text-sm">+91 99207 01520</p>
              </div>
              <div className="flex flex-col items-start">
                <FaMapMarkerAlt size={24} />
                <p className="font-medium mt-2">Office Address</p>
                <p className="text-sm">
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
            <h2 className="text-2xl md:text-[52px] mt-2 font-medium tracking-wide whitespace-nowrap">
              Get in Touch with Us
            </h2>
            <p className="text-[#272727] text-[17px] leading-7 font-light mt-4 mb-4">
              Reach out to us for regulatory guidance, safety assessments, and toxicology
              consulting.
            </p>
            <Image
              width={500}
              height={500} // Adjusted to match your height requirement
              src={contact}
              alt="Consultation"
              className="mt-4 rounded-lg w-full h-fit"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection
