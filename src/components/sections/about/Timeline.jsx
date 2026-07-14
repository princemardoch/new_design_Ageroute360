import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'
const timelineBgImage = "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/rightbgoftimeline.png";

gsap.registerPlugin(ScrollTrigger)

const Timeline = () => {
  const containerRef = useRef(null)

  const timelineData = [
    { year: "2020", desc: "AGEROUTE360 established with a mandate to modernize infrastructure monitoring." },
    { year: "2021", desc: "Launched digital tracking platform covering 15 active projects." },
    { year: "2022", desc: "Expanded to 26 provinces with real-time GPS integration." },
    { year: "2023", desc: "Introduced public transparency portal and tender management system." },
    { year: "2024", desc: "Achieved milestone of 50+ tracked projects and 86 registered companies." },
    { year: "2025", desc: "Launched interactive map and mobile application for citizen engagement." },
    { year: "2026", desc: "Expanding into regional partnerships and AI-driven analytics." }
  ]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".timeline-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".timeline-central-line",
      { scaleY: 0 },
      { scaleY: 1, duration: 1.5, ease: "power2.out", transformOrigin: "top" },
      "-=0.4"
    )
    .fromTo(".timeline-item", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power3.out" },
      "-=1.2"
    )
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-32 overflow-hidden relative">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <h2 className="timeline-header text-slate-950 text-3xl md:text-4xl lg:text-[40px] font-bold font-sora leading-tight mb-16 md:mb-24 text-center">
          Our Journey
        </h2>

        <div className="relative w-full">
          
          <div className="timeline-central-line absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-brand-amber/30 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-16">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 1;

              return (
                <div 
                  key={item.year} 
                  className={`timeline-item flex items-center w-full relative
                    ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}
                  `}
                >
                  
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-brand-amber border-4 border-amber-100 shadow-[0_0_10px_rgba(242,181,43,0.5)] -translate-x-1/2 z-10" />

                  

                  <div className={`w-full md:w-1/2 flex flex-col pl-14 md:pl-0 ${isEven ? 'md:pr-10 md:items-end md:text-right lg:-mr-10' : 'md:pl-10 md:items-start md:text-left lg:-ml-10'} lg:bg-contain lg:bg-center lg:bg-no-repeat`}
                    style={{ backgroundImage: window.innerWidth >= 1024 ? `url(${timelineBgImage})` : 'none' }}
                  >
                    
                    <span className="text-brand-amber text-xl md:text-2xl font-semibold font-sans bg-white px-1 translate-y-[-10px]">
                      {item.year}
                    </span>
                    
                    <div className=" !pt-0 p-5 md:p-6 rounded-full w-full max-w-[400px]">
                      <p className="text-gray-500 text-sm md:text-base font-normal font-jakarta leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Timeline
