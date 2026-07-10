import Hero from "../components/Home/Hero/Hero"
import Features from "../components/Home/Features/Features"
import Security from "../components/Home/Security/Security"
import OpenSourceStrip from "../components/Home/OpenSourceStrip/OpenSourceStrip"
import Faq from "../components/Home/Faq/Faq"
import FinalCta from "../components/Home/FinalCta/FinalCta"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Security />
      <OpenSourceStrip />
      <Faq />
      <FinalCta />
    </>
  )
}
