import AboutContactDoctor from '../components/ui/AboutContactDoctor'
import AboutHome from '../components/ui/AboutHome'
import ExpertiseHome from '../components/ui/ExpertiseHome'
import ExpertiseSection from '../components/ui/ExpertiseSection'
import Footer from '../components/ui/Footer'
import NavBarOthers from '../components/ui/NavBarOthers'

export default function ExpertisePage() {
  return (
    <>
      <NavBarOthers />
      <ExpertiseHome />
      <ExpertiseSection />
      <AboutContactDoctor />
      <Footer />
    </>
  )
}
