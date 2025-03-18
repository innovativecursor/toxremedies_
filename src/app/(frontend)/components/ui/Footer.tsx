import Image from 'next/image'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import footerImage from '../../public/assets/toxremedies_logo.png'
import logo from '../../public/assets/footerAssets/innocursor.svg'
const Footer = () => {
  return (
    <div className="px-6 md:px-16 py-12">
      <footer className="bg-footer-gradient rounded-3xl max-w-7xl mx-auto">
        {/* Upper Section - Separate Padding */}
        <div className="py-10 px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-12 text-gray-800">
            {/* Logo & Description */}
            <div className="space-y-4 md:w-[390px]">
              <Image
                src={footerImage}
                width={176}
                height={44}
                alt="ToxRemedies Logo"
                className="w-44"
              />
              <p className="text-sm leading-relaxed">
                Dr. Milind Deore is a seasoned toxicologist specializing in risk assessment across
                pharmaceuticals, cosmetics, medical devices, and more. With a commitment to
                advancing safety standards, he offers expert consulting services to ensure product
                compliance and consumer well-being.
              </p>
            </div>

            {/* Other Sections: Quick Links, Contact Info, and Legal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:col-span-2">
              {/* Quick Links */}
              <div className="space-y-4 md:ml-20">
                <h4 className="font-semibold">QUICK LINKS</h4>
                <ul className="space-y-3 text-sm">
                  <li>Home</li>
                  <li>About Me</li>
                  <li>Expertise</li>
                  <li>Services</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="font-semibold">CONTACT INFO</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <FaEnvelope className="text-gray-600" size={16} />
                    toxremedies@gmail.com
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhoneAlt className="text-gray-600" size={16} />
                    +91 99207 01520
                  </li>
                  <li className="flex items-start gap-2">
                    <FaMapMarkerAlt className="text-gray-600" size={16} />
                    <span className="leading-tight">
                      Tower A/53, Atlantis CHS, Kashish Park, LBS Road, Thane West, India 400604
                    </span>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-4">
                <h4 className="font-semibold">LEGAL</h4>
                <ul className="space-y-3 text-sm">
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - No Side Padding */}
        <div className="border-t border-gray-300 w-full py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 px-6 md:px-16">
          <p>© 2025 Dr. Milind D. Deore. All rights reserved.</p>

          {/* LinkedIn Icon */}
          <div className="bg-blue-500 text-white p-2 rounded-full">
            <FaLinkedin size={18} />
          </div>

          {/* Designed by Innovative Cursor */}
          <p className="flex gap-1">
            Designed by <Image src={logo} width={20} height={20} alt="innovative cursor"></Image>{' '}
            <span className="text-[#0D94CD] font-semibold">Innovative Cursor</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
