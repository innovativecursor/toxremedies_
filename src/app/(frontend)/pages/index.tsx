import Hero from '../components/Hero'
import Navbar from '../components/NavBar'
import WhyUs from '../components/WhyUs'
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
    </>
  )
}
