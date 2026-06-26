import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'

gsap.registerPlugin(ScrollTrigger)

const WhyPlatform = () => {
  const sectionRef = useRef(null)

  const features = [
    {
      id: "01",
      title: "Live Monitoring",
      desc: "Stream construction progress, equipment status, and field logs in real time.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3333 9.99984H16.2667C15.9025 9.99906 15.548 10.1176 15.2576 10.3373C14.9671 10.557 14.7567 10.8658 14.6583 11.2165L12.7 18.1832C12.6874 18.2264 12.6611 18.2645 12.625 18.2915C12.5889 18.3186 12.5451 18.3332 12.5 18.3332C12.4549 18.3332 12.4111 18.3186 12.375 18.2915C12.3389 18.2645 12.3126 18.2264 12.3 18.1832L7.7 1.8165C7.68738 1.77323 7.66106 1.73522 7.625 1.70817C7.58894 1.68112 7.54507 1.6665 7.5 1.6665C7.45492 1.6665 7.41106 1.68112 7.375 1.70817C7.33894 1.73522 7.31262 1.77323 7.3 1.8165L5.34166 8.78317C5.24372 9.13247 5.03448 9.44027 4.74572 9.65985C4.45695 9.87943 4.10443 9.9988 3.74166 9.99984H1.66666" stroke="#FAA628" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )
    },
    {
      id: "02",
      title: "Secure Data",
      desc: "Tamper-evident records, encrypted storage, audited access controls.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6667 10.8335C16.6667 15.0002 13.75 17.0835 10.2833 18.2919C10.1018 18.3534 9.90462 18.3505 9.72501 18.2835C6.25001 17.0835 3.33334 15.0002 3.33334 10.8335V5.00021C3.33334 4.7792 3.42114 4.56724 3.57742 4.41096C3.7337 4.25468 3.94566 4.16688 4.16668 4.16688C5.83334 4.16688 7.91668 3.16688 9.36668 1.90021C9.54322 1.74938 9.7678 1.6665 10 1.6665C10.2322 1.6665 10.4568 1.74938 10.6333 1.90021C12.0917 3.17521 14.1667 4.16688 15.8333 4.16688C16.0544 4.16688 16.2663 4.25468 16.4226 4.41096C16.5789 4.56724 16.6667 4.7792 16.6667 5.00021V10.8335Z" stroke="#FAA628" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 10.0002L9.16667 11.6668L12.5 8.3335" stroke="#FAA628" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )
    },
    {
      id: "03",
      title: "Donor Transparency",
      desc: "Every disbursement traceable to a contract, a site, and a milestone.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6.6665C14.1421 6.6665 17.5 5.54722 17.5 4.1665C17.5 2.78579 14.1421 1.6665 10 1.6665C5.85786 1.6665 2.5 2.78579 2.5 4.1665C2.5 5.54722 5.85786 6.6665 10 6.6665Z" stroke="#FAA628" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 4.1665V15.8332C2.5 16.4962 3.29018 17.1321 4.6967 17.6009C6.10322 18.0698 8.01088 18.3332 10 18.3332C11.9891 18.3332 13.8968 18.0698 15.3033 17.6009C16.7098 17.1321 17.5 16.4962 17.5 15.8332V4.1665" stroke="#FAA628" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 10C2.5 10.663 3.29018 11.2989 4.6967 11.7678C6.10322 12.2366 8.01088 12.5 10 12.5C11.9891 12.5 13.8968 12.2366 15.3033 11.7678C16.7098 11.2989 17.5 10.663 17.5 10" stroke="#FAA628" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )
    },
    {
      id: "04",
      title: "Public Access",
      desc: "Open dashboards so citizens can verify what's built, where, and when.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.71835 9.70981C1.6489 9.89691 1.6489 10.1027 1.71835 10.2898C2.39476 11.9299 3.54294 13.3323 5.01732 14.3191C6.4917 15.3058 8.22588 15.8326 10 15.8326C11.7741 15.8326 13.5083 15.3058 14.9827 14.3191C16.4571 13.3323 17.6053 11.9299 18.2817 10.2898C18.3511 10.1027 18.3511 9.89691 18.2817 9.70981C17.6053 8.06969 16.4571 6.66735 14.9827 5.68056C13.5083 4.69378 11.7741 4.16699 10 4.16699C8.22588 4.16699 6.4917 4.69378 5.01732 5.68056C3.54294 6.66735 2.39476 8.06969 1.71835 9.70981Z" stroke="#FAA628" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#FAA628" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )
    }
  ]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".wp-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    
    .fromTo(".wp-card", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-16 md:py-24 lg:py-32 bg-brand-teal overflow-hidden relative max-[500px]:py-12" style={{ backgroundImage: "url('/src/assets/images/WhythisplatformBackground.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />

      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 flex flex-col items-center">
        
        <div className="wp-header flex flex-col items-center text-center mb-12 sm:mb-16 lg:mb-20 max-w-[700px]">
          <span className="text-brand-amber text-xs sm:text-sm md:text-base font-semibold font-jakarta uppercase tracking-[2px] sm:tracking-[2.75px] mb-3 sm:mb-4">
            Why this platform
          </span>
          <h2 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-[45px] font-extrabold font-sora leading-[1.2] sm:leading-[1.15]">
            Infrastructure Intelligence <br className="hidden md:block" /> for a Modern Nation.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`wp-card flex flex-col group px-5 sm:px-6 py-8 sm:py-10 lg:py-12
                border-b border-white/10 
                last:border-b-0 lg:border-b-0
                ${index % 2 === 0 ? 'md:border-r border-white/10' : ''}
                ${index < 2 ? 'md:border-b border-white/10' : ''}
                ${index !== 3 ? 'lg:border-r border-white/10' : ''}
                hover:bg-white/5 transition-colors duration-500
              `}
            >
              <div className="flex justify-between items-center w-full mb-6 sm:mb-8">
                <span className="text-white/40 group-hover:text-white/60 transition-colors font-sora font-bold text-xs sm:text-sm tracking-wider">
                  {feature.id}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-brand-amber/10 flex items-center justify-center transition-colors">
                  {feature.icon}
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold font-sora leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm font-normal font-jakarta leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyPlatform
