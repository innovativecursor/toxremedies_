import AboutContactDoctor from '../components/ui/AboutContactDoctor'
import Contact from '../components/ui/Contact'
import ContactHome from '../components/ui/ContactHome'
import Footer from '../components/ui/Footer'
import NavBarOthers from '../components/ui/NavBarOthers'

export default function ContactPage() {
  return (
    <>
      <NavBarOthers />
      <ContactHome />
      <Contact />
      <AboutContactDoctor />
      <Footer />
    </>
  )
}
