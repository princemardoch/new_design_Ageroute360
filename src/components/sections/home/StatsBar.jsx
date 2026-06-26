import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'

gsap.registerPlugin(ScrollTrigger)

const StatsBar = () => {
  const containerRef = useRef(null)

  const partners = [
    "WORLD BANK",
    "AFRICAN DEV. BANK",
    "MINISTÈRE TRAVAUX",
    "EUROPEAN UNION",
    "UNDP",
    "USAID"
  ]

  // Duplicate for seamless infinite marquee scrolling
  const marqueePartners = [...partners, ...partners]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%", 
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".partner-title", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    ).fromTo(".partner-logo", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "back.out(1.5)" }, 
      "-=0.4"
    )
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-[#FFFFFF] border-b border-[#E0E4EB] py-10 md:py-16 overflow-hidden"
    >
      {/* Inline styles for the marquee animation */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>

      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-8 md:gap-10">
        
        {/* Section Heading */}
        <h3 className="partner-title text-[#586474] text-xs sm:text-sm md:text-base font-semibold font-jakarta uppercase tracking-[2px] sm:tracking-widest text-center px-4">
          Supported by National & Global Development Partners
        </h3>

        {/* Desktop View: Static Grid */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-10 lg:gap-16 w-full">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-logo flex items-center justify-center group cursor-default"
            >
              <span className="text-brand-dark/50 text-base lg:text-lg font-bold font-sora leading-tight text-center transition-all duration-300 group-hover:text-brand-dark group-hover:scale-105">
                {partner}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile View: Seamless Marquee with Gradient Fade */}
        <div className="flex md:hidden w-full relative partner-logo [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex items-center gap-10 w-max animate-infinite-scroll py-2">
            {marqueePartners.map((partner, index) => (
              <span 
                key={index} 
                className="text-brand-dark/50 text-sm font-bold font-sora leading-tight shrink-0 whitespace-nowrap"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default StatsBar
