import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '../../../hooks/useGSAP'
import vectorImage from "../../../assets/images/Vector.png";

const ReportsHero = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Fade in background overlay
    tl.fromTo(".reports-hero-overlay",
      { opacity: 0.3 },
      { opacity: 1, duration: 1.5 }
    )

    // Stagger text elements
    .fromTo(".reports-hero-text", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
      "-=1.2"
    )
    
    // Fly the tilted card in from the right, twisting into its final rotation
    .fromTo(".reports-featured-card", 
      { x: 50, y: 50, rotation: 0, opacity: 0 },
      // clearProps ensures Tailwind's responsive md:rotate-[11deg] takes over after the animation
      { x: 0, y: 0, rotation: 11, opacity: 1, duration: 1, clearProps: "rotation" },
      "-=0.6"
    )

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[65vh] flex items-center">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/ReportpagebannerBG.png" 
          alt="Reports Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for text contrast */}
        <div className="reports-hero-overlay absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1260px] mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col items-start gap-6 w-full lg:max-w-[700px]">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[72px] font-bold font-sora leading-[1.1] tracking-tight">
            <div className="reports-hero-text text-brand-amber">Transparency</div>
            <div className="reports-hero-text">& Reports</div>
          </h1>
          <p className="reports-hero-text text-white/80 text-lg md:text-xl lg:text-3xl font-normal font-inter leading-snug lg:leading-[48px] max-w-[600px]">
            Tracking the heartbeat of national development through verified data and strategic oversight.
          </p>
        </div>

        {/* Right Side: Rotated Featured Card */}
        <div className="flex justify-start w-full lg:w-auto mt-8 lg:mt-0 pb-10 lg:pb-0">
          <div className="reports-featured-card origin-top-left md:rotate-[11deg] p-8 lg:p-12 bg-white/10 rounded-[20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20 backdrop-blur-md flex flex-col items-center gap-6 w-full max-w-[420px] shrink-0">
            
            {/* Card Typography */}
            <div className="flex flex-col items-center gap-3 text-center w-full">
              <span className="text-brand-amber text-xs font-bold font-inter uppercase tracking-wider">
                Featured Publication
              </span>
              <h3 className="text-white text-xl md:text-2xl font-semibold font-inter leading-tight">
                Latest Report – {new Date().getFullYear()}
              </h3>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full pt-2">
              
              <button className="w-full sm:w-auto px-6 py-3 bg-brand-amber hover:bg-amber-500 rounded-lg text-[#261A00] text-sm md:text-base font-medium font-inter transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(242,181,43,0.3)] hover:shadow-[0_15px_25px_-5px_rgba(242,181,43,0.4)] flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </button>
              
              <button className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-white/10 rounded-lg border border-white/20 text-white text-sm md:text-base font-medium font-inter transition-colors duration-300 flex items-center justify-center gap-2">
                Read Online
              </button>

            </div>
          </div>
        </div>

      </div>
      {/* Bottom Vector Mask */}
            <img
              src={vectorImage}
              alt="bottom vector"
              className="absolute bottom-0 left-0 w-full object-cover z-20 pointer-events-none"
            />
    </section>
  )
}

export default ReportsHero
