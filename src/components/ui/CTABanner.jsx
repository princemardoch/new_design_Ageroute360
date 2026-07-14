import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../hooks/useGSAP'
const buildingFutureBg = "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/BuildingtheFutureBG.png";

gsap.registerPlugin(ScrollTrigger)

const CTABanner = () => {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".cta-text > *", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
    )
    
    .fromTo(".cta-buttons > button", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
  }, { scope: containerRef })

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white px-4 sm:px-6">
      <div 
        ref={containerRef}
        className="relative w-full max-w-[1280px] mx-auto rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden min-h-[400px] sm:min-h-[450px] flex items-center px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16"
      >
        
        <img 
          src={buildingFutureBg} 
          alt="Building the Future" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br lg:bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/60 lg:to-brand-navy/40" />

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 w-full">
          
          <div className="cta-text flex flex-col items-start gap-3 sm:gap-4 lg:gap-6 w-full lg:max-w-[650px] xl:max-w-[700px]">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-sora leading-[1.2] lg:leading-[1.15]">
              Building the Future of <br className="hidden sm:block" />
              <span className="text-brand-amber">Infrastructure</span>
            </h2>
            <p className="text-white/75 text-sm sm:text-base md:text-lg lg:text-xl font-normal font-jakarta leading-relaxed max-w-[500px] lg:max-w-none">
              Join us in transforming national infrastructure. Explore ongoing projects, participate in tenders, and track progress in real-time.
            </p>
          </div>

          <div className="cta-buttons flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-5 w-full sm:w-auto shrink-0 mt-4 lg:mt-0">
            
            <button 
              onClick={() => navigate('/projects')}
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-brand-amber rounded-full text-brand-navy text-sm sm:text-base font-bold font-jakarta hover:bg-amber-400 transition-all duration-300 shadow-[0_12px_24px_-5px_rgba(242,181,43,0.3)] hover:shadow-[0_16px_32px_-5px_rgba(242,181,43,0.4)]"
            >
              Explore Projects
              <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            <button 
              onClick={() => navigate('/about')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/25 backdrop-blur-sm text-white text-sm sm:text-base font-semibold font-jakarta hover:bg-white/10 transition-colors duration-300 text-center"
            >
              Learn More
            </button>

          </div>

        </div>
      </div>
    </section>
  )
}

export default CTABanner
