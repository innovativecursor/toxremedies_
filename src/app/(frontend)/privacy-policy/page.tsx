import NavBarOthers from '../components/ui/NavBarOthers'
import Footer from '../components/ui/Footer'
import { MdEmail } from 'react-icons/md'

export default function PrivacyPolicyPage() {
  return (
    <>
      <NavBarOthers />
      <div>
        <main className="max-w-7xl  mx-auto px-6 py-16 text-[#181818]">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-8">Effective Date: April 16, 2025</p>

          <section className="space-y-6 text-[15px] leading-7">
            <p>
              At Dr. Milind Deore’s consultancy platform, your privacy is important to us. This
              Privacy Policy outlines how we collect, use, and safeguard your information.
            </p>

            <div>
              <h2 className="font-semibold text-lg mb-2">1. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Name, email address, contact number</li>
                <li>Organization or institution name</li>
                <li>Professional interests and questions submitted via forms</li>
              </ul>
              <p className="mt-2">
                We do not collect or store sensitive data unless explicitly required for
                professional communication or service delivery.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>To respond to inquiries and consultation requests</li>
                <li>
                  To provide updates about publications, services, or upcoming educational events
                </li>
                <li>To enhance user experience and improve our offerings</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">3. Data Sharing and Security</h2>
              <p>
                We do not sell or share your personal data with third parties unless required by law
                or for service fulfillment with your consent. We implement standard industry
                security practices to protect your data.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">4. Third-Party Links</h2>
              <p>
                Our website may contain links to external sites. We are not responsible for the
                privacy practices or content of such websites.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">5. Your Rights</h2>
              <p>You may contact us to:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Request access to or deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">6. Contact</h2>
              <p>For privacy-related inquiries, contact:</p>
              <p className="mt-1 flex items-center space-x-2">
                <MdEmail className="text-[#0D94CD]" />
                <a href="mailto:mdeore61@gmail.com" className="text-[#0D94CD] hover:underline">
                  mdeore61@gmail.com
                </a>
              </p>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}
