import NavBarOthers from '../components/ui/NavBarOthers'
import Footer from '../components/ui/Footer'
import { MdEmail } from 'react-icons/md'

export default function TermsAndConditionsPage() {
  return (
    <>
      <NavBarOthers />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-[#181818]">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-4">Effective Date: April 16, 2025</p>

        <div className="space-y-6 text-[15px] leading-7 font-light">
          <p>
            These terms govern your use of the website and any professional services offered by Dr.
            Milind Deore.
          </p>

          <div>
            <h2 className="font-medium mb-1">1. Acceptance of Terms</h2>
            <p>
              By using our website or services, you agree to comply with these Terms and Conditions.
            </p>
          </div>

          <div>
            <h2 className="font-medium mb-1">2. Services Offered</h2>
            <p>
              The platform provides educational content, toxicological consultation, professional
              insights, and information regarding Dr. Milind Deore’s work and speaking engagements.
            </p>
          </div>

          <div>
            <h2 className="font-medium mb-1">3. Intellectual Property</h2>
            <p>
              All content—including articles, graphics, and presentations—remains the intellectual
              property of Dr. Milind Deore. Use without permission is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="font-medium mb-1">4. Professional Disclaimer</h2>
            <p>
              Information provided on this site is for educational and informational purposes only.
              For official regulatory advice or clinical guidance, direct consultation or government
              agency input may be required.
            </p>
          </div>

          <div>
            <h2 className="font-medium mb-1">5. Limitation of Liability</h2>
            <p>
              While we strive for accuracy, we do not guarantee the completeness or reliability of
              content. Use of information is at your own discretion.
            </p>
          </div>

          <div>
            <h2 className="font-medium mb-1">6. Governing Law</h2>
            <p>
              These terms shall be governed by the laws of India. Any disputes will be subject to
              jurisdiction of the courts in Mumbai, Maharashtra.
            </p>
          </div>

          <div>
            <h2 className="font-medium mb-1">7. Contact</h2>
            <p className="mt-1 flex items-center space-x-2">
              For inquiries, feedback, or service questions: <br />
              <MdEmail className="ml-2 text-[#0D94CD]" />{' '}
              <a href="mailto:mdeore61@gmail.com" className="text-[#0D94CD] hover:underline">
                mdeore61@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
