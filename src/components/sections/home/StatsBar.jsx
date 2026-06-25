import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'

// Register ScrollTrigger plugin
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

  // Scroll-triggered GSAP Animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%", // Triggers when the top of the container hits 85% of the viewport height
        toggleActions: "play none none reverse"
      }
    })

    // Animate the section title
    tl.fromTo(".partner-title", 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )
    // Stagger the entrance of the partner logos/text
    .fromTo(".partner-logo", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "back.out(1.5)" }, 
      "-=0.4"
    )
  }, { scope: containerRef })

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-[#FFFFFF] border-b border-[#E0E4EB] py-12 md:py-16 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-6 flex flex-col items-center justify-center gap-10">
        
        {/* Section Heading */}
        <h3 className="partner-title text-[#586474] text-sm md:text-base font-semibold font-jakarta uppercase tracking-widest text-center">
          Supported by National & Global Development Partners
        </h3>

        {/* Partners Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-16 w-full">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-logo flex items-center justify-center group cursor-default"
            >
              {/* Keep space here if you swap text for actual <img> tags later */}
              <span className="text-brand-dark/50 text-lg md:text-lg font-bold font-sora leading-tight text-center transition-all duration-300 group-hover:text-brand-dark group-hover:scale-105">
                {partner}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default StatsBar
