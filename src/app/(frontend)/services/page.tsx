import AboutContactDoctor from '../components/ui/AboutContactDoctor'
import Footer from '../components/ui/Footer'
import NavBarOthers from '../components/ui/NavBarOthers'
import ServicesHome from '../components/ui/ServicesHome'
import ServicesSection from '../components/ui/ServicesSection'

export default function ServicesPage() {
  return (
    <>
      <NavBarOthers />
      <ServicesHome />
      <ServicesSection />
      <AboutContactDoctor />
      <Footer />
    </>
  )
}
