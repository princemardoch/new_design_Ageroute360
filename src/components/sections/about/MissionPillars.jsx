import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'

gsap.registerPlugin(ScrollTrigger)

const MissionPillars = () => {
  const containerRef = useRef(null)

  const pillars = [
    {
      title: "Strategic Planning",
      desc: "Develop comprehensive road infrastructure strategies aligned with national development goals.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_155_1816)">
<path d="M11.0007 20.1668C16.0633 20.1668 20.1673 16.0628 20.1673 11.0002C20.1673 5.93755 16.0633 1.8335 11.0007 1.8335C5.93804 1.8335 1.83398 5.93755 1.83398 11.0002C1.83398 16.0628 5.93804 20.1668 11.0007 20.1668Z" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 16.5C14.0376 16.5 16.5 14.0376 16.5 11C16.5 7.96243 14.0376 5.5 11 5.5C7.96243 5.5 5.5 7.96243 5.5 11C5.5 14.0376 7.96243 16.5 11 16.5Z" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.9993 12.8332C12.0119 12.8332 12.8327 12.0124 12.8327 10.9998C12.8327 9.98732 12.0119 9.1665 10.9993 9.1665C9.98683 9.1665 9.16602 9.98732 9.16602 10.9998C9.16602 12.0124 9.98683 12.8332 10.9993 12.8332Z" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_155_1816">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>

      )
    },
    {
      title: "Quality Assurance",
      desc: "Ensure the highest standards in road construction through rigorous quality control processes.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3327 11.9168C18.3327 16.5001 15.1243 18.7918 11.311 20.1209C11.1113 20.1886 10.8944 20.1853 10.6968 20.1118C6.87435 18.7918 3.66602 16.5001 3.66602 11.9168V5.50009C3.66602 5.25697 3.76259 5.02381 3.9345 4.85191C4.10641 4.68 4.33957 4.58342 4.58268 4.58342C6.41602 4.58342 8.70768 3.48342 10.3027 2.09009C10.4969 1.92417 10.7439 1.83301 10.9993 1.83301C11.2548 1.83301 11.5018 1.92417 11.696 2.09009C13.3002 3.49259 15.5827 4.58342 17.416 4.58342C17.6591 4.58342 17.8923 4.68 18.0642 4.85191C18.2361 5.02381 18.3327 5.25697 18.3327 5.50009V11.9168Z" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )
    },
    {
      title: "Transparency",
      desc: "Provide complete visibility into project progress, budgets, and decision-making processes.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.88933 10.6811C1.81293 10.8869 1.81293 11.1133 1.88933 11.3191C2.63339 13.1232 3.89638 14.6658 5.5182 15.7513C7.14002 16.8367 9.04762 17.4162 10.9992 17.4162C12.9507 17.4162 14.8583 16.8367 16.4801 15.7513C18.1019 14.6658 19.3649 13.1232 20.109 11.3191C20.1854 11.1133 20.1854 10.8869 20.109 10.6811C19.3649 8.87695 18.1019 7.33437 16.4801 6.24891C14.8583 5.16345 12.9507 4.58398 10.9992 4.58398C9.04762 4.58398 7.14002 5.16345 5.5182 6.24891C3.89638 7.33437 2.63339 8.87695 1.88933 10.6811Z" stroke="#F2B52B" stroke-width="1.83" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 13.75C12.5188 13.75 13.75 12.5188 13.75 11C13.75 9.48122 12.5188 8.25 11 8.25C9.48122 8.25 8.25 9.48122 8.25 11C8.25 12.5188 9.48122 13.75 11 13.75Z" stroke="#F2B52B" stroke-width="1.83" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )
    },
    {
      title: "Community Impact",
      desc: "Prioritize community needs and ensure road projects deliver lasting socioeconomic benefits.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6673 19.25V17.4167C14.6673 16.4442 14.281 15.5116 13.5934 14.8239C12.9057 14.1363 11.9731 13.75 11.0007 13.75H5.50065C4.52819 13.75 3.59556 14.1363 2.90793 14.8239C2.22029 15.5116 1.83398 16.4442 1.83398 17.4167V19.25" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.666 2.86719C15.4523 3.07103 16.1486 3.53018 16.6457 4.17258C17.1428 4.81498 17.4125 5.60425 17.4125 6.41652C17.4125 7.22879 17.1428 8.01807 16.6457 8.66046C16.1486 9.30286 15.4523 9.76201 14.666 9.96585" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.166 19.25V17.4166C20.1654 16.6042 19.895 15.815 19.3973 15.1729C18.8995 14.5308 18.2026 14.0722 17.416 13.8691" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25065 10.0833C10.2757 10.0833 11.9173 8.44171 11.9173 6.41667C11.9173 4.39162 10.2757 2.75 8.25065 2.75C6.22561 2.75 4.58398 4.39162 4.58398 6.41667C4.58398 8.44171 6.22561 10.0833 8.25065 10.0833Z" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )
    }
  ]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".mission-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".mission-pillar-card", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-6 flex flex-col items-center gap-16 md:gap-20">
        
        <div className="mission-header flex flex-col items-center text-center max-w-[800px] gap-4">
          <h2 className="text-slate-950 text-3xl md:text-4xl lg:text-[40px] font-bold font-sora leading-tight">
            Our Mission
          </h2>
          <p className="text-gray-500 text-lg md:text-xl lg:text-2xl font-normal font-sans leading-relaxed">
            To drive national development through world-class road infrastructure with complete transparency and accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="mission-pillar-card p-6 lg:p-8 bg-[#F0F6FC] rounded-3xl flex flex-col items-start hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              
              <div className="w-14 h-14 bg-brand-amber/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>

              <h3 className="text-slate-950 text-xl font-semibold font-sora leading-snug mb-3">
                {pillar.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base font-normal font-sans leading-relaxed">
                {pillar.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MissionPillars
