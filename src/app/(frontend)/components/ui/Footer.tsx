import Image from 'next/image'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import footerImage from '../../public/assets/toxremedies_logo.png'
import logo from '../../public/assets/footerAssets/innocursor.svg'

const Footer = () => {
  return (
    <div className="px-6 md:px-16 py-12">
      <footer className="bg-footer-gradient rounded-3xl max-w-7xl mx-auto">
        <div className="py-10 px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-12 text-gray-800">
            <div className="space-y-4 md:w-[390px]">
              <Image
                src={footerImage}
                width={176}
                height={44}
                alt="ToxRemedies Logo"
                className="w-44"
              />
              <p className="text-sm text-[#404040] font-light leading-relaxed">
                Dr. Milind Deore is a seasoned toxicologist specialised in risk assessment across
                pharmaceuticals, cosmetics, medical devices, and more. With a commitment to
                advancing safety standards, he offers expert consulting services to ensure product
                compliance and consumer well-being.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:col-span-2">
              <div className="space-y-4 md:ml-20">
                <h4 className="font-medium text-[#181818] tracking-wider text-[16px]">
                  QUICK LINKS
                </h4>
                <ul className="space-y-3 text-sm text-[#181818] font-light">
                  <li className="hover:text-[#0D94CD] cursor-pointer">Home</li>
                  <li className="hover:text-[#0D94CD] cursor-pointer">About Us</li>
                  <li className="hover:text-[#0D94CD] cursor-pointer">Expertise</li>
                  <li className="hover:text-[#0D94CD] cursor-pointer">Services</li>
                  <li className="hover:text-[#0D94CD] cursor-pointer">Contact</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-[#181818] tracking-wider text-[16px]">
                  CONTACT INFO
                </h4>
                <ul className="space-y-3 text-sm font-light">
                  <li className="flex items-center gap-3">
                    <div className="p-1">
                      <FaEnvelope className="text-[#0D94CD]" size={15} />
                    </div>
                    <span className="hover:text-[#0D94CD] cursor-pointer">
                      toxremedies@gmail.com
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="p-1">
                      <FaPhoneAlt className="text-[#0D94CD]" size={15} />
                    </div>
                    <span className="hover:text-[#0D94CD] cursor-pointer">+91 99207 01520</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1">
                      <FaMapMarkerAlt className="text-[#0D94CD]" size={15} />
                    </div>
                    <span className="leading-tight hover:text-[#0D94CD] cursor-pointer">
                      Tower A/53, Atlantis CHS, Kashish Park, LBS Road, Thane West, India 400604
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-[16px] text-[#181818] tracking-wider">LEGAL</h4>
                <ul className="space-y-3 text-sm font-light">
                  <li className="hover:text-[#0D94CD] cursor-pointer">Privacy Policy</li>
                  <li className="hover:text-[#0D94CD] cursor-pointer">Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 font-light w-full py-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-sm text-gray-600 px-4 sm:px-8 md:px-16 gap-4 md:gap-0 text-center md:text-left">
          <p>© 2025 Dr. Milind D. Deore. All rights reserved.</p>
          <div className="bg-blue-500 text-white p-2 rounded-full hover:bg-[#0D94CD] cursor-pointer">
            <FaLinkedin size={18} />
          </div>
          <p className="flex items-center gap-2">
            Designed by
            <Image src={logo} width={20} height={20} alt="innovative cursor" />
            <span className="font-light hover:text-[#0D94CD] cursor-pointer">
              Innovative Cursor
            </span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
