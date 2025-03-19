'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import logo from '../../public/assets/tox_remedies_nav.png'

const NavBarOthers = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about-us' },
    { name: 'Expertise', link: '/expertise' },
    { name: 'Services', link: '/services' },
    { name: 'Contact Us', link: '/contact' },
  ]

  return (
    <nav
      className="w-full  shadow-md"
      style={{
        background:
          'linear-gradient(260.13deg, #FFFFFF -14.7%, #F8FFEB 20.11%, #D9F4FF 46.52%, #F4FFDC 102.3%)',
      }}
    >
      <div className="container max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 cursor-pointer">
          <Image
            width={200}
            height={200}
            src={logo}
            alt="Logo"
            className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[290px] h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-[#181818] text-[15px] font-normal">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className={`${
                  pathname === item.link ? 'text-[#0D94CD]' : 'hover:text-[#0D94CD]'
                } transition-colors`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button (Desktop) */}
        <button className="hidden md:block bg-[#0D94CD] text-white px-6 py-2 rounded-full hover:bg-[#0978a3] transition">
          Get a Consultation
        </button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <IoMdMenu size={32} className="text-[#0D94CD]" />
        </button>
      </div>

      {/* Overlay for Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ x: '100%', opacity: 0 }}
        animate={isOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6"
      >
        {/* Close Button */}
        <button className="self-end mb-6" onClick={() => setIsOpen(false)}>
          <IoMdClose size={32} className="text-[#0D94CD]" />
        </button>

        {/* Mobile Navigation Links */}
        <motion.ul className="flex flex-col space-y-6 text-[#181818] font-medium">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <Link
                href={item.link}
                className={`${
                  pathname === item.link ? 'text-[#0D94CD]' : 'hover:text-[#0D94CD]'
                } transition-colors`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button (Mobile) */}
        <motion.button
          className="mt-10 bg-[#0D94CD] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#0978a3] transition"
          whileHover={{ scale: 1.05 }}
          onClick={() => setIsOpen(false)}
        >
          Get a Consultation
        </motion.button>
      </motion.div>
    </nav>
  )
}

export default NavBarOthers
