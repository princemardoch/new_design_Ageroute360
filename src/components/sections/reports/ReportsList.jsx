import { useState, useRef, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'
import ReportFilters from './ReportFilters'
import ReportItem from './ReportItem'

gsap.registerPlugin(ScrollTrigger)

const ReportsList = () => {
  const containerRef = useRef(null)
  
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data - In a real app, this comes from src/data/reports.js
  const reportsData = [
    { id: 1, title: "Annual Infrastructure Report 2025", category: "Annual", date: "Jan 2026", size: "12.4 MB", downloads: "1,245" },
    { id: 2, title: "Q4 2025 Progress Summary", category: "Quarterly", date: "Dec 2025", size: "8.2 MB", downloads: "890" },
    { id: 3, title: "Financial Audit Report 2025", category: "Financial", date: "Jan 2026", size: "15.1 MB", downloads: "2,100" },
    { id: 4, title: "Environmental Impact Assessment — RNI", category: "Environmental", date: "Nov 2025", size: "6.7 MB", downloads: "430" },
    { id: 5, title: "Contractor Performance Report 2025", category: "Performance", date: "Jan 2026", size: "4.2 MB", downloads: "560" },
    { id: 6, title: "Road Safety Statistics 2025", category: "Safety", date: "Jan 2026", size: "3.1 MB", downloads: "340" },
    { id: 7, title: "Community Engagement Report", category: "Social", date: "Nov 2025", size: "5.3 MB", downloads: "280" },
  ]

  // Filtering Logic
  const filteredReports = useMemo(() => {
    return reportsData.filter(report => {
      const matchesTab = activeTab === 'All' || report.category === activeTab;
      const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    })
  }, [activeTab, searchQuery])

  // GSAP Scroll Animation
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })

    // Fade in the filter bar
    tl.fromTo(".reports-filters-bar", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    )
    
    // Stagger the report rows
    .fromTo(".report-card", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" },
      "-=0.2"
    )

    // Fade in the bottom archive link
    .fromTo(".reports-archive-link",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
  }, { scope: containerRef })

  return (
    <section className="py-20 bg-gray-50/50 min-h-screen">
      <div ref={containerRef} className="max-w-[1260px] mx-auto px-4 md:px-6 flex flex-col gap-8">
        
        {/* Filters Top Bar */}
        <div className="reports-filters-bar z-20">
          <ReportFilters 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        {/* List Area */}
        <div className="flex flex-col gap-4">
          {filteredReports.length > 0 ? (
            filteredReports.map((report) => (
              <ReportItem key={report.id} report={report} />
            ))
          ) : (
            <div className="w-full py-24 flex flex-col items-center justify-center text-center bg-white rounded-[32px] border border-gray-100 shadow-sm">
               <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold font-sora text-slate-900 mb-2">No reports found</h3>
              <p className="text-gray-500 font-inter">We couldn't find any reports matching your search or filter criteria.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {filteredReports.length > 0 && (
          <div className="reports-archive-link mt-6 flex justify-center items-center w-full">
            <button className="group flex items-center gap-2 text-brand-amber text-lg md:text-xl font-semibold font-inter hover:text-amber-500 transition-colors">
              View Complete Archive
              <svg className="w-5 h-5 mt-1 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  )
}

export default ReportsList
