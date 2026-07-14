import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '../../../hooks/useGSAP'
const vectorImage = "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/Vector.png";
const companiesBgImage = "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/CompaniesHeroBackground.png";


const CompaniesHero = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    // 1. Fade in the background overlay
    tl.fromTo(".companies-hero-overlay",
      { opacity: 0.3 },
      { opacity: 1, duration: 1.5 }
    )

    // 2. Stagger the text elements up and in
    .fromTo(".companies-hero-text", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
      "-=1.2"
    )
    
    // 3. Fly the tilted card in from the right, twisting into its final rotation
    .fromTo(".companies-stat-card", 
      { x: 50, y: 50, rotation: 0, opacity: 0 },
      { x: 0, y: 0, rotation: 12, opacity: 1, duration: 1, clearProps: "rotation" },
      "-=0.6"
    )

    // 4. Animate the counter number
    const counter = document.querySelector('.companies-counter-value')
    if (counter) {
      const target = parseFloat(counter.getAttribute('data-target'))
      tl.fromTo(counter,
        { innerHTML: 0 },
        {
          innerHTML: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerHTML: 1 },
          onUpdate: function() {
            counter.innerHTML = Math.round(this.targets()[0].innerHTML)
          }
        }, "-=1.6"
      )
    }

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[65vh] flex items-center">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src={companiesBgImage} 
          alt="Companies Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay to guarantee text legibility */}
        <div className="companies-hero-overlay absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1260px] mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Side: Typography */}
        <div className="flex flex-col items-start gap-6 w-full lg:max-w-[860px]">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[72px] font-bold font-sora leading-[1.1] tracking-tight">
            <div className="companies-hero-text">Registered </div>
            <div className="companies-hero-text text-brand-amber">Infrastructure</div>
            <div className="companies-hero-text">Companies</div>
          </h1>
          <p className="companies-hero-text text-white/80 text-lg md:text-xl lg:text-[32px] font-normal font-jakarta leading-snug lg:leading-[48px] max-w-[860px]">
            Access our curated directory of certified engineering firms, logistics partners, and specialized contractors powering the nation's strategic development goals.
          </p>
        </div>

        {/* Right Side: Rotated Stat Card */}
        <div className="flex justify-start w-full lg:w-auto mt-8 lg:mt-0 pb-10 lg:pb-0">
          <div className="companies-stat-card origin-top-left md:rotate-[12deg] p-6 lg:py-10 lg:px-12 bg-white/10 rounded-[20px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20 backdrop-blur-md flex items-center gap-5 group hover:bg-white/15 transition-colors shrink-0">
            
            {/* Clean SVG Building Icon */}
            <div className="w-14 h-14 bg-brand-amber/20 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-7 h-7 text-brand-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1">
              <span className="text-white/80 text-xs  font-inter uppercase tracking-widest whitespace-nowrap lg:w-32 leading-tight">
                Certified Companies
              </span>
              <div className="text-white text-4xl md:text-5xl font-extrabold font-sora leading-none">
                +<span className="companies-counter-value" data-target="86">0</span>
              </div>
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

export default CompaniesHero