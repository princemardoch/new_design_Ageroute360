import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '../../../hooks/useGSAP'
const vectorImage = "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/Vector.png";
const projectBgImage = "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/projectBannerBG.jpg";

const ProjectsHero = () => {
  const containerRef = useRef(null)

  const projectStats = [
    {
      id: "active",
      label: "Active Projects",
      value: 41,
      prefix: "+",
      valueColor: "text-white",
      dotColor: "bg-brand-amber"
    },
    {
      id: "completed",
      label: "Completed Projects",
      value: 12,
      prefix: "+",
      valueColor: "text-brand-amber",
      dotColor: "bg-brand-amber"
    },
    {
      id: "suspended",
      label: "Suspended Projects",
      value: 3,
      prefix: "",
      valueColor: "text-[#FF8779]",
      dotColor: "bg-[#FF8779]"
    }
  ]

  useGSAP(() => {
    const tl = gsap.timeline({ 
      defaults: { ease: 'power3.out' },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })

    tl.fromTo(".hero-bg-overlay",
      { opacity: 0.5 },
      { opacity: 1, duration: 1.5 }
    )
    .fromTo(".hero-text-elem", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
      "-=1.2"
    )
    .fromTo(".hero-stat-card", 
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
      "-=0.6"
    )

    const counters = gsap.utils.toArray('.stat-counter-value')
    counters.forEach((counter) => {
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
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden min-h-[80vh] flex items-center">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={projectBgImage} 
          alt="Infrastructure Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="hero-bg-overlay absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-brand-navy/40" />
      </div>

      <div className="relative z-10 w-full max-w-[1260px] mx-auto px-6 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 lg:gap-8">
        
        <div className="flex flex-col items-start gap-6 w-full lg:max-w-[700px]">
          <h1 className="hero-text-elem text-white text-4xl md:text-6xl lg:text-[72px] font-bold font-sora leading-[1.1] tracking-tight">
            Explore <br className="hidden md:block lg:hidden" />
            <span className="text-brand-amber font-extrabold">National </span>
            Road Projects
          </h1>
          <p className="hero-text-elem text-white/80 text-lg md:text-2xl lg:text-3xl font-normal font-jakarta leading-snug md:leading-[40px] max-w-[600px]">
            Track progress, budgets, and milestones of all infrastructure projects across the nation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto shrink-0">
          {projectStats.map((stat) => (
            <div 
              key={stat.id}
              className="hero-stat-card flex-1 lg:w-72 p-6 bg-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-white/20 backdrop-blur-md flex flex-col gap-3 group hover:bg-white/15 transition-colors"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-white/80 text-xs md:text-sm font-light font-inter uppercase tracking-widest">
                  {stat.label}
                </span>
                <div className={`w-2.5 h-2.5 rounded-full ${stat.dotColor} shadow-[0_0_8px_currentColor] group-hover:animate-pulse`} />
              </div>
              
              <div className={`text-4xl md:text-5xl font-extrabold font-sora leading-none ${stat.valueColor}`}>
                {stat.prefix}
                <span className="stat-counter-value" data-target={stat.value}>
                  0
                </span>
              </div>
            </div>
          ))}
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

export default ProjectsHero
