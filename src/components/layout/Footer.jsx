import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '../../hooks/useGSAP'
const Logo = "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/logo.png";
gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)

  const quickLinks = [
    { label: 'Projects', path: '/projects' },
    { label: 'Interactive Map', path: '/map' },
    { label: 'Tenders', path: '/tenders' },
    { label: 'Companies', path: '/companies' },
    { label: 'Reports', path: '/reports' }
  ]

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "Boulevard du 30 Juin, Kinshasa, DRC"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: "+243 815 000 000"
    },
    {
      icon: (
        <svg className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "info@ageroute360.cd"
    }
  ]

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(".footer-col", 
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power3.out" }
    )
    
    .fromTo(".footer-bottom",
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
  }, { scope: footerRef })

  return (
    <footer ref={footerRef} className="bg-brand-teal rounded-t-[40px] md:rounded-t-[50px] pt-16 md:pt-20 pb-8 mt-10">
      <div className="max-w-[1260px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24">
          
          <div className="footer-col lg:col-span-4 flex flex-col gap-6">
            <Link to="/" className="w-16 h-16 bg-white rounded-full flex items-center justify-center overflow-hidden hover:scale-105 transition-transform">
              <img src={Logo} alt="Ageroute Logo" className="w-12 h-12 object-contain" />
            </Link>
            <p className="text-white/60 text-base font-inter leading-relaxed max-w-sm">
              Building tomorrow's infrastructure today. Transparency, quality, and national progress through strategic road development.
            </p>
          </div>

          <div className="footer-col lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-white text-sm md:text-base font-bold font-inter uppercase tracking-[2.4px]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <Link 
                  key={link.label} 
                  to={link.path}
                  className="text-white/70 hover:text-brand-amber text-base font-inter transition-colors w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-col lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white text-sm md:text-base font-bold font-inter uppercase tracking-[2.4px]">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  {item.icon}
                  <span className="text-white/70 text-base font-inter leading-tight md:leading-snug">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-col lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white text-sm md:text-base font-bold font-inter uppercase tracking-[2.4px]">
              Stay Updated
            </h4>
            <p className="text-white/70 text-base font-inter leading-relaxed">
              Get the latest project updates and tender announcements.
            </p>
            
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center w-full max-w-sm mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-14 text-white placeholder:text-white/40 font-inter focus:outline-none focus:border-brand-amber/50 transition-colors"
              />
              <button 
                type="submit"
                className="absolute right-1.5 w-10 h-10 bg-brand-amber rounded-full flex items-center justify-center hover:bg-amber-500 hover:scale-105 transition-all shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>

        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm font-inter text-center md:text-left">
            © {new Date().getFullYear()} AGEROUTE360. All rights reserved.
          </p>
          <div className="flex items-center gap-6 md:gap-8">
            <Link to="/privacy" className="text-white/40 hover:text-white/70 text-sm font-inter transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/40 hover:text-white/70 text-sm font-inter transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
