import SEOHelmet from '../components/seo/SEOHelmet'
import { seoConfig } from '../data/seoConfig'
import SectionHero from '../components/sections/shared/SectionHero'
import FeaturedReport from '../components/sections/reports/FeaturedReport'
import ReportsList from '../components/sections/reports/ReportsList'
import CTABanner from '../components/ui/CTABanner'
import ReportsHero from '../components/sections/reports/ReportsHero'

const ReportsPage = () => {
  return (
    <>
      <SEOHelmet {...seoConfig.reports} />
      <ReportsHero />
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* <FeaturedReport /> */}
        <ReportsList />
      </div>
      <CTABanner />
    </>
  )
}

export default ReportsPage
