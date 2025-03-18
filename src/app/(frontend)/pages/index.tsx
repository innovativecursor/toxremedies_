import ContactSection from '../components/ContactSection'
import Hero from '../components/Hero'
import Navbar from '../components/NavBar'
import SectorsSection from '../components/SectorsSection'
import WhyUs from '../components/WhyUs'
import Footer from '../components/ui/Footer'
import StatsNumber from '../components/ui/StatsNumber'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="bg-[linear-gradient(180deg,#FFFFFF_0%,#EBF9FF_100%)]">
        <WhyUs />
        <StatsNumber />
      </section>
      <SectorsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
