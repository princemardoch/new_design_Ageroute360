import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../../hooks/useGSAP'
import whyPlatformBg from '../../../assets/images/WhythisplatformBackground.png'

gsap.registerPlugin(ScrollTrigger)

const CoreValues = () => {
  const containerRef = useRef(null)

  const coreValues = [
    {
      id: "01",
      title: "Innovation",
      desc: "Embracing cutting-edge technology in road construction and monitoring.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 12.8335C13.9333 11.9168 14.3917 11.2752 15.125 10.5418C16.0417 9.71683 16.5 8.52516 16.5 7.3335C16.5 5.87481 15.9205 4.47586 14.8891 3.44441C13.8576 2.41296 12.4587 1.8335 11 1.8335C9.54131 1.8335 8.14236 2.41296 7.11091 3.44441C6.07946 4.47586 5.5 5.87481 5.5 7.3335C5.5 8.25016 5.68333 9.35016 6.875 10.5418C7.51667 11.1835 8.06667 11.9168 8.25 12.8335" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.25 16.5H13.75" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16602 20.1665H12.8327" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )
    },
    {
      id: "02",
      title: "Integrity",
      desc: "Operating with complete honesty and ethical standards at every level.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.83398 8.70833C1.834 7.68826 2.14345 6.6922 2.72144 5.85169C3.29943 5.01118 4.11879 4.36577 5.07129 4.0007C6.02379 3.63562 7.06463 3.56807 8.05633 3.80695C9.04803 4.04584 9.94394 4.57992 10.6257 5.33866C10.6738 5.39001 10.7318 5.43094 10.7963 5.45893C10.8608 5.48692 10.9303 5.50136 11.0007 5.50136C11.071 5.50136 11.1405 5.48692 11.205 5.45893C11.2695 5.43094 11.3275 5.39001 11.3756 5.33866C12.0552 4.57499 12.9513 4.03642 13.9446 3.79463C14.938 3.55285 15.9814 3.61931 16.936 3.98519C17.8906 4.35106 18.7111 4.99899 19.2883 5.84274C19.8656 6.68648 20.1722 7.68603 20.1673 8.70833C20.1673 10.8075 18.7923 12.375 17.4173 13.75L12.383 18.6202C12.2122 18.8164 12.0016 18.974 11.7652 19.0825C11.5288 19.191 11.272 19.248 11.0119 19.2497C10.7518 19.2513 10.4943 19.1976 10.2566 19.0921C10.0188 18.9866 9.80626 18.8317 9.63298 18.6377L4.58398 13.75C3.20898 12.375 1.83398 10.8167 1.83398 8.70833Z" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )
    },
    {
      id: "03",
      title: "Efficiency",
      desc: "Delivering projects on time and within budget through smart management.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.66589 12.8334C3.49242 12.834 3.32235 12.7854 3.17543 12.6932C3.02851 12.601 2.91077 12.4689 2.83589 12.3125C2.76101 12.156 2.73207 11.9815 2.75243 11.8092C2.77278 11.6369 2.8416 11.474 2.95089 11.3393L12.0259 1.98928C12.094 1.9107 12.1867 1.8576 12.289 1.8387C12.3912 1.81979 12.4968 1.8362 12.5885 1.88524C12.6801 1.93427 12.7524 2.01301 12.7934 2.10854C12.8345 2.20407 12.8418 2.3107 12.8142 2.41094L11.0542 7.92928C11.0023 8.06817 10.9849 8.21759 11.0034 8.3647C11.022 8.51181 11.0759 8.65223 11.1606 8.77392C11.2454 8.8956 11.3583 8.99491 11.4899 9.06334C11.6214 9.13176 11.7676 9.16726 11.9159 9.16678H18.3326C18.506 9.16618 18.6761 9.21482 18.823 9.30705C18.9699 9.39927 19.0877 9.53128 19.1626 9.68776C19.2374 9.84423 19.2664 10.0187 19.246 10.191C19.2257 10.3633 19.1568 10.5262 19.0476 10.6609L9.97255 20.0109C9.90448 20.0895 9.81172 20.1426 9.70949 20.1615C9.60726 20.1804 9.50164 20.164 9.40997 20.115C9.3183 20.0659 9.24602 19.9872 9.205 19.8917C9.16397 19.7961 9.15665 19.6895 9.18422 19.5893L10.9442 14.0709C10.9961 13.932 11.0135 13.7826 10.995 13.6355C10.9765 13.4884 10.9225 13.348 10.8378 13.2263C10.7531 13.1046 10.6401 13.0053 10.5086 12.9369C10.377 12.8685 10.2308 12.833 10.0826 12.8334H3.66589Z" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      )
    },
    {
      id: "04",
      title: "Sustainability",
      desc: "Building roads that are environmentally responsible and sustainable.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_155_1894)">
<path d="M11.0007 20.1668C16.0633 20.1668 20.1673 16.0628 20.1673 11.0002C20.1673 5.93755 16.0633 1.8335 11.0007 1.8335C5.93804 1.8335 1.83398 5.93755 1.83398 11.0002C1.83398 16.0628 5.93804 20.1668 11.0007 20.1668Z" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.33398 11.0002C7.33398 7.58717 8.64687 4.30497 11.0007 1.8335C13.3544 4.30497 14.6673 7.58717 14.6673 11.0002C14.6673 14.4132 13.3544 17.6954 11.0007 20.1668C8.64687 17.6954 7.33398 14.4132 7.33398 11.0002Z" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.83398 11H20.1673" stroke="#F2B52B" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_155_1894">
<rect width="22" height="22" fill="white"/>
</clipPath>
</defs>
</svg>

      )
    }
  ]

  const stats = [
    { value: 56, suffix: "+", label: "Projects Managed" },
    { prefix: "$", value: 2.4, suffix: "B", label: "Total Investment", isDecimal: true },
    { value: 2400, suffix: "+", label: "KM of Roads", useCommas: true },
    { value: 15000, suffix: "+", label: "Jobs Created", useCommas: true }
  ]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".cv-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".cv-card", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(".cv-stat",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )

    const counters = gsap.utils.toArray('.cv-counter-value')
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute('data-target'))
      const isDecimal = counter.getAttribute('data-decimal') === 'true'
      const useCommas = counter.getAttribute('data-commas') === 'true'
      
      gsap.to(counter, {
        innerHTML: target,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerHTML: isDecimal ? 0.1 : 1 },
        onUpdate: function() {
          let val = this.targets()[0].innerHTML
          if (isDecimal) {
            counter.innerHTML = Number(val).toFixed(1)
          } else if (useCommas) {
            counter.innerHTML = Math.round(val).toLocaleString('en-US')
          } else {
            counter.innerHTML = Math.round(val)
          }
        },
        scrollTrigger: {
          trigger: ".cv-stat",
          start: "top 85%",
        }
      })
    })
  }, [])

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-brand-navy overflow-hidden" style={{backgroundImage: `url(${whyPlatformBg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-[1260px] mx-auto px-6 flex flex-col items-center">
        
        <div className="cv-header flex flex-col items-center text-center gap-4 mb-16 md:mb-20">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[40px] font-bold font-sora leading-tight">
            Core Values
          </h2>
          <p className="text-white/60 text-lg md:text-xl lg:text-2xl font-normal font-sans leading-relaxed max-w-[700px]">
            The principles that guide every decision and action at AGEROUTE360.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full mb-24 md:mb-32">
          {coreValues.map((value, index) => (
            <div 
              key={value.id} 
              className={`cv-card flex flex-col group
                px-6 py-10 lg:p-10
                ${index !== 0 ? 'lg:border-l border-white/10' : ''} 
                ${index > 0 && index < 2 ? 'md:border-l border-white/10' : ''}
                ${index > 1 ? 'md:border-t lg:border-t-0 border-white/10' : ''}
                hover:bg-white/5 transition-colors duration-500
              `}
            >
              <div className="flex justify-between items-center w-full mb-8">
                <span className="text-white/40 group-hover:text-white/60 transition-colors font-sora font-bold text-sm tracking-wider">
                  {value.id}
                </span>
                <div className="flex items-center justify-center transition-colors">
                  {value.icon}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-white text-xl md:text-2xl font-bold font-sora leading-tight">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base font-normal font-jakarta leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full pt-12 border-t border-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="cv-stat flex flex-col items-center justify-center text-center gap-2">
              <div className="flex items-baseline justify-center text-brand-amber text-4xl md:text-5xl lg:text-[52px] font-medium font-sans leading-none">
                {stat.prefix && <span>{stat.prefix}</span>}
                <span 
                  className="cv-counter-value" 
                  data-target={stat.value}
                  data-decimal={stat.isDecimal}
                  data-commas={stat.useCommas}
                >
                  0
                </span>
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <span className="text-white text-sm md:text-base font-medium font-sans tracking-widest mt-2 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default CoreValues
