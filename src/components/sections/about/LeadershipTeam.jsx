import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'

gsap.registerPlugin(ScrollTrigger)

const LeadershipTeam = () => {
  const containerRef = useRef(null)

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Emmanuel Kalombo",
      role: "Director General",
      image: "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/partner01.jpg"
    },
    {
      id: 2,
      name: "Ing. Marie Tshilanda",
      role: "Chief Engineer",
      image: "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/partner02.jpg"
    },
    {
      id: 3,
      name: "Prof. Jean-Claude Mbala",
      role: "Head of Planning",
      image: "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/partner03.jpg"
    },
    {
      id: 4,
      name: "Mme. Ange Kisumba",
      role: "Finance Director",
      image: "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/partner04.jpg"
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

    tl.fromTo(".leadership-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".team-card", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-6 flex flex-col items-center gap-12 md:gap-16">
        
        <div className="leadership-header flex flex-col items-center text-center max-w-[700px] gap-4">
          <h2 className="text-slate-950 text-3xl md:text-4xl lg:text-[40px] font-bold font-sora leading-tight">
            Leadership Team
          </h2>
          <p className="text-gray-500 text-lg md:text-xl lg:text-2xl font-normal font-sans leading-relaxed">
            Experienced professionals driving infrastructure development forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="team-card flex flex-col items-center bg-white rounded-3xl shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group"
            >
              
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-50">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex flex-col items-center text-center p-6 w-full">
                <h3 className="text-slate-950 text-lg font-semibold font-sora leading-snug mb-1 truncate w-full px-2">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm md:text-base font-normal font-sans">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LeadershipTeam
