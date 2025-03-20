import AboutHome from '../components/ui/AboutHome'
import AboutToxRemedies from '../components/ui/AboutToxremedies'
import Footer from '../components/ui/Footer'
import MissionVisionSection from '../components/ui/MissionVisionSection'
import NavBarOthers from '../components/ui/NavBarOthers'

export default function AboutUsPage() {
  return (
    <>
      <NavBarOthers />
      <AboutHome />
      <AboutToxRemedies />
      <MissionVisionSection />
      <Footer />
    </>
  )
}
