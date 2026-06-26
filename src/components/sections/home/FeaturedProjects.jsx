import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'

gsap.registerPlugin(ScrollTrigger)

const FeaturedProjects = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    // Header Animation
    tl.fromTo(".fp-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    
    // Cards Staggered Animation
    tl.fromTo(".fp-card", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="fp-header flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 md:mb-12">
          <div>
            <span className="text-brand-amber text-xs sm:text-sm md:text-base font-semibold font-jakarta uppercase tracking-[2px] sm:tracking-[2.75px]">
              Featured Projects
            </span>
            <h2 className="mt-2 sm:mt-3 text-gray-950 text-[32px] sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold font-sora leading-[1.15]">
              National roads in <br className="hidden md:block" /> motion.
            </h2>
          </div>
          
          <Link 
            to="/projects" 
            className="group flex items-center gap-2 text-brand-amber text-sm sm:text-base font-semibold font-jakarta hover:text-amber-500 transition-colors w-max"
          >
            View all 41 projects
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3.33 8h9.34M8 3.33L12.67 8 8 12.67" />
            </svg>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8">
          
          {/* Main Card (Left) */}
          <div className="fp-card lg:col-span-7 relative group rounded-[24px] lg:rounded-3xl overflow-hidden h-[420px] sm:h-[500px] lg:h-[648px] cursor-pointer">
            <img 
              src="/src/assets/images/Featured Projects01.png" 
              alt="Conakry-Mamou Expressway" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent/10" />
            
            {/* Status Badge */}
            <div className="absolute top-5 left-5 sm:top-6 sm:left-6 px-3 sm:px-4 py-1.5 bg-brand-amber/95 backdrop-blur-sm rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-brand-navy rounded-full animate-pulse shrink-0" />
              <span className="text-brand-navy text-[10px] font-bold font-jakarta uppercase tracking-widest shrink-0">Ongoing</span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-3.5 h-3.5 text-white/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80 text-[11px] sm:text-xs font-medium font-jakarta uppercase tracking-widest truncate">
                  Conakry · Kindia · Mamou
                </span>
              </div>
              
              <h3 className="text-white text-[28px] sm:text-3xl md:text-4xl font-bold font-sora leading-[1.2] mb-4 sm:mb-6">
                Conakry–Mamou<br />Expressway Corridor
              </h3>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/20 pt-4 mb-4 sm:mb-5">
                <div>
                  <span className="block text-white/60 text-[10px] sm:text-xs font-normal font-jakarta uppercase tracking-wide mb-1">Length</span>
                  <span className="text-white text-base sm:text-lg md:text-xl font-bold font-sora">312 KM</span>
                </div>
                <div className="border-l border-white/20 pl-3 sm:pl-4">
                  <span className="block text-white/60 text-[10px] sm:text-xs font-normal font-jakarta uppercase tracking-wide mb-1">Budget</span>
                  <span className="text-white text-base sm:text-lg md:text-xl font-bold font-sora">$184M</span>
                </div>
                <div className="border-l border-white/20 pl-3 sm:pl-4">
                  <span className="block text-white/60 text-[10px] sm:text-xs font-normal font-jakarta uppercase tracking-wide mb-1">Progress</span>
                  <span className="text-white text-base sm:text-lg md:text-xl font-bold font-sora">62%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-brand-amber rounded-full" style={{ width: '62%' }} />
              </div>
            </div>
          </div>

          {/* Secondary Cards (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 lg:gap-8">
            
            {/* Top Minor Card */}
            <div className="fp-card relative group rounded-[24px] lg:rounded-3xl overflow-hidden h-[240px] sm:h-[280px] lg:h-[308px] cursor-pointer">
              <img 
                src="/src/assets/images/Featured Projects02.png" 
                alt="N'Zérékoré Resurfacing" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent/10" />
              
              <div className="absolute top-5 left-5 px-3 py-1.5 bg-brand-amber/95 backdrop-blur-sm rounded-full flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-navy rounded-full animate-pulse shrink-0" />
                <span className="text-brand-navy text-[10px] font-bold font-jakarta uppercase tracking-widest">Ongoing</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3 h-3 text-white/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-white/80 text-[11px] sm:text-xs font-medium font-jakarta uppercase tracking-widest truncate">N'Zérékoré</span>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-bold font-sora leading-snug mb-4">N'Zérékoré Urban Resurfacing</h3>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-amber rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
            </div>

            {/* Bottom Minor Card */}
            <div className="fp-card relative group rounded-[24px] lg:rounded-3xl overflow-hidden h-[240px] sm:h-[280px] lg:h-[308px] cursor-pointer">
              <img 
                src="/src/assets/images/Featured Projects03.png" 
                alt="Konkouré Bridge" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent/10" />
              
              <div className="absolute top-5 left-5 px-3 py-1.5 bg-brand-emerald/90 backdrop-blur-sm rounded-full flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0" />
                <span className="text-white text-[10px] font-bold font-jakarta uppercase tracking-widest">Completed</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-3 h-3 text-white/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-white/80 text-[11px] sm:text-xs font-medium font-jakarta uppercase tracking-widest truncate">Boffa Prefecture</span>
                </div>
                <h3 className="text-white text-lg sm:text-xl font-bold font-sora leading-snug mb-4">Konkouré River Bridge Expansion</h3>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-emerald rounded-full" style={{ width: '100%' }} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default FeaturedProjects
