'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { IoMdClose, IoMdMenu } from 'react-icons/io'
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
      <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[100%] lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-6 sm:py-7 md:py-8 lg:py-9 xl:py-10 flex justify-between items-center">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-[#181818] text-[15px] font-normal">
          {[
            { name: 'Home', link: '/' },
            { name: 'About Us', link: '/about-us' },
            { name: 'Expertise', link: '/expertise' },
            { name: 'Services', link: '/services' },
            { name: 'Contact Us', link: '/contact' },
          ].map((item, index) => (
            <li key={index} className="hover:text-[#0D94CD] transition-colors">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Call to Action Button (Desktop) */}

        <GetConsultationButton
          text="Get a Consultation"
          scrollToId="contact"
          className="hidden md:block"
        />

        {/* Mobile Menu Button (Right-Aligned) */}
        <button className="md:hidden ml-auto" onClick={() => setIsOpen(true)}>
          <IoMdMenu size={28} className="text-[#0D94CD]" />
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
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6`}
      >
        {/* Close Button */}
        <button className="self-end mb-6" onClick={() => setIsOpen(false)}>
          <IoMdClose size={32} className="text-[#0D94CD]" />
        </button>

        {/* Mobile Navigation Links */}
        <motion.ul
          variants={navList}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          exit="hidden"
          className="flex flex-col space-y-6 text-white font-medium"
        >
          {[
            { name: 'Home', link: '/' },
            { name: 'About Us', link: '/about-us' },
            { name: 'Expertise', link: '/expertise' },
            { name: 'Services', link: '/services' },
            { name: 'Contact Us', link: '/contact' },
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={navItem}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer text-[#0D94CD] hover:text-[#0D94CD]"
              onClick={() => setIsOpen(false)}
            >
              <Link href={item.link}>{item.name}</Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Call to Action Button (Mobile) */}
        <motion.button
          className="mt-8 bg-[#0D94CD] text-white px-4 py-4 rounded-full shadow-md hover:bg-[#0978a3] transition"
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
