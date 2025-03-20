import AboutHome from '../components/ui/AboutHome'
import AboutToxRemedies from '../components/ui/AboutToxremedies'
import Footer from '../components/ui/Footer'
import FounderJourney from '../components/ui/FounderJourney'
import MissionVisionSection from '../components/ui/MissionVisionSection'
import NavBarOthers from '../components/ui/NavBarOthers'
import StatsNumberAbout from '../components/ui/StatsNumberAbout'

export default function AboutUsPage() {
  return (
    <>
      <NavBarOthers />
      <AboutHome />
      <AboutToxRemedies />
      <StatsNumberAbout />
      <MissionVisionSection />
      <FounderJourney />
      <Footer />
    </>
  )
}
