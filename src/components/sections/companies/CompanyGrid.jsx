import { useState, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'
import CompanyFilters from './CompanyFilters'
import CompanyCard from './CompanyCard'

gsap.registerPlugin(ScrollTrigger)

const CompanyGrid = () => {
  const gridRef = useRef(null)
  
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - Replace with actual data from src/data/companies.js
  const companiesData = [
    { id: 1, initials: "CR", name: "CongoRoute Infrastructures", location: "Kinshasa", type: "Construction", projectCount: 12, rating: 4.8 },
    { id: 2, initials: "AE", name: "AfriPave Engineering", location: "Lubumbashi", type: "Engineering", projectCount: 8, rating: 4.5 },
    { id: 3, initials: "TC", name: "TransAfrica Construction", location: "Goma", type: "Construction", projectCount: 15, rating: 4.9 },
    { id: 4, initials: "ES", name: "EcoRoad Solutions", location: "Kisangani", type: "Environmental", projectCount: 6, rating: 4.3 },
    { id: 5, initials: "BD", name: "BridgeTech DRC", location: "Matadi", type: "Engineering", projectCount: 9, rating: 4.7 },
    { id: 6, initials: "SC", name: "SteelFrame Constructions", location: "Mbuji-Mayi", type: "Construction", projectCount: 4, rating: 4.1 },
    { id: 7, initials: "GI", name: "GeoSurvey International", location: "Kananga", type: "Survey", projectCount: 7, rating: 4.6 },
    { id: 8, initials: "MP", name: "MegaBuild Partners", location: "Kolwezi", type: "Construction", projectCount: 11, rating: 4.4 },
  ]

  // Filtering Logic
  const filteredCompanies = useMemo(() => {
    return companiesData.filter(company => {
      const matchesCategory = activeCategory === 'All' || company.type === activeCategory;
      const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            company.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
  }, [activeCategory, searchQuery])

  // GSAP Scroll Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".company-filter-bar", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )
    .fromTo(".company-card", 
      { y: 40, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
      "-=0.2"
    )
  }, { scope: gridRef })

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div ref={gridRef} className="max-w-[1260px] mx-auto px-6 flex flex-col gap-10">
        
        {/* Filters Top Bar */}
        <div className="company-filter-bar z-20">
          <CompanyFilters 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {/* Grid Area */}
        {filteredCompanies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        ) : (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center">
             <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold font-sora text-slate-900 mb-2">No companies found</h3>
            <p className="text-gray-500 font-jakarta">Try adjusting your filters or search query.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {filteredCompanies.length > 0 && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-cyan-950 text-white flex items-center justify-center font-bold font-inter">1</button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-cyan-950 font-medium hover:bg-gray-100 transition-colors font-inter">2</button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-cyan-950 font-medium hover:bg-gray-100 transition-colors font-inter">3</button>
            <button className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-slate-900 hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default CompanyGrid
