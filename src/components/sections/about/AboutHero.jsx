import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '../../../hooks/useGSAP'
import vectorImage from "../../../assets/images/Vector.png";


const AboutHero = () => {
  const containerRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(".about-hero-overlay",
      { opacity: 0.3 },
      { opacity: 1, duration: 1.5 }
    )
    .fromTo(".about-hero-text", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
      "-=1.2"
    )
    .fromTo(".about-stat-card", 
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
      "-=0.6"
    )

    const counters = gsap.utils.toArray('.about-counter-value')
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute('data-target'))
      gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        onUpdate: function() {
          counter.innerHTML = Math.round(this.targets()[0].innerHTML)
        }
      }, "-=0.4")
    })
  }, [])

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[65vh] flex items-center">
      
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/AboutpageBG.png" 
          alt="About Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="about-hero-overlay absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1260px] mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
        
        <div className="flex flex-col items-start gap-6 w-full lg:max-w-[700px]">
          <h1 className="text-white text-4xl md:text-5xl lg:text-[72px] font-bold font-sora leading-[1.1] tracking-tight">
            <div className="about-hero-text">About </div>
            <div className="about-hero-text text-brand-amber font-extrabold">AGEROUTE360</div>
          </h1>
          <p className="about-hero-text text-white/80 text-lg md:text-xl lg:text-3xl font-normal font-sans leading-snug lg:leading-[48px] max-w-[650px]">
            Pioneering the digital frontier of national infrastructure management through precision, transparency, and strategic foresight.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto mt-8 lg:mt-0 lg:-mr-12">
          
          <div className="about-stat-card self-end lg:translate-x-7 w-full mb-8 lg:w-[280px] p-6 bg-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20 backdrop-blur-md flex flex-col gap-3 group hover:bg-white/15 transition-colors shrink-0">
            <div className="flex justify-between items-center w-full">
              <span className="text-white/80 text-xs md:text-sm font-light font-sans uppercase tracking-widest">
                Years Active
              </span>
              <div className="w-2.5 h-2.5 bg-brand-amber rounded-full shadow-[0_0_8px_rgba(242,181,43,0.8)] group-hover:animate-pulse" />
            </div>
            <div className="text-white text-4xl md:text-5xl font-extrabold font-sora leading-none">
              +<span className="about-counter-value" data-target="6">0</span>
            </div>
          </div>

          <div className="about-stat-card self-start lg:ml-12 lg:-mt-6 w-full lg:w-[280px] p-6 bg-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20 backdrop-blur-md flex flex-col gap-3 group hover:bg-white/15 transition-colors shrink-0">
            <div className="flex justify-between items-center w-full">
              <span className="text-white/80 text-xs md:text-sm font-light font-sans uppercase tracking-widest">
                Provinces
              </span>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)] group-hover:animate-pulse" />
            </div>
            <div className="text-white text-4xl md:text-5xl font-extrabold font-sora leading-none">
              <span className="about-counter-value" data-target="26">0</span>
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

export default AboutHero
