'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import GetConsultationButton from './ui/GetConsultationButton'

const navList = {
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.07,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const navItem = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex justify-between items-center">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-[#181818] text-[15px] font-normal">
          {['Home', 'About Us', 'Expertise', 'Services', 'Contact Us'].map((item, index) => (
            <li key={index} className="hover:text-[#0D94CD] transition-colors">
              <Link href="#">{item}</Link>
            </li>
          ))}
        </ul>

        {/* Call to Action Button (Desktop) */}

        <GetConsultationButton text="Get a Consultation" className="hidden md:block" />

        {/* Mobile Menu Button (Right-Aligned) */}
        <button className="md:hidden ml-auto" onClick={() => setIsOpen(true)}>
          <GiHamburgerMenu size={32} className="text-blue-600" />
        </button>
      </div>

      {/* Mobile Menu + Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)} // 🔥 Clicking outside closes menu
        ></div>
      )}

      {/* Mobile Menu (Framer Motion) */}
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={isOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }} // 🌟 Smooth closing effect
        className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-t from-purple-700 to-blue-800 shadow-lg z-50 flex flex-col p-6`}
      >
        {/* Close Button */}
        <button className="self-end mb-6" onClick={() => setIsOpen(false)}>
          <IoMdClose size={32} className="text-white" />
        </button>

        {/* Mobile Navigation Links */}
        <motion.ul
          variants={navList}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          exit="hidden"
          className="flex flex-col space-y-6 text-white font-medium"
        >
          {['Home', 'About Us', 'Expertise', 'Services', 'Contact Us'].map((item, index) => (
            <motion.li
              key={index}
              variants={navItem}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <Link href="#">{item}</Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Call to Action Button (Mobile) */}
        <motion.button
          className="mt-10 bg-white text-blue-600 px-5 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsOpen(false)}
        >
          Get a Consultation
        </motion.button>
      </motion.div>
    </nav>
  )
}

export default Navbar
