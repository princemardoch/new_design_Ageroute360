import SEOHelmet from '../components/seo/SEOHelmet'
import { seoConfig } from '../data/seoConfig'
import SectionHero from '../components/sections/shared/SectionHero'
import MissionPillars from '../components/sections/about/MissionPillars'
import CoreValues from '../components/sections/about/CoreValues'
import Timeline from '../components/sections/about/Timeline'
import CTABanner from '../components/ui/CTABanner'
import AboutHero from '../components/sections/about/AboutHero'

const AboutPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.about} />
      <AboutHero/>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <MissionPillars />
        <CoreValues />
        <Timeline />
      </div>
      <CTABanner />
    </>
  )
}

export default AboutPage
