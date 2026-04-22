import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import Features from '../components/Features'
import OccupationalTherapy from '../components/OccupationalTherapy'
import SpeechTherapy from '../components/SpeechTherapy'
import InfoForYou from '../components/InfoForYou'
import CTABanner from '../components/CTABanner'
import Testimonials from '../components/Testimonials'
import Locations from '../components/Locations'

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Features />
      <OccupationalTherapy />
      <SpeechTherapy />
      <InfoForYou />
      <CTABanner />
      <Testimonials />
      <Locations />
    </>
  )
}
