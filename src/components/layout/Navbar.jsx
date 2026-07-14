import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
const Logo = "https://pub-302d63e86b12413fb55492b5a13b4013.r2.dev/img_360/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Change to dark text after scrolling past hero section (typically 600-800px)
      setIsDark(scrollY < 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { path: '/projects', label: 'Projects' },
    { path: '/map', label: 'Map' },
    { path: '/tenders', label: 'Tenders' },
    { path: '/companies', label: 'Companies' },
    { path: '/reports', label: 'Reports' },
    { path: '/about', label: 'About' },
  ]

  return (
    <>
      {/* Floating Navbar Container */}
      <motion.nav 
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 z-50 w-[95%] max-w-[1260px]"
      >
        {/* Glassmorphism Pill */}
        <div className={`flex items-center justify-between px-6 py-3 backdrop-blur-md border rounded-full shadow-2xl transition-all duration-300 ${
          isDark 
            ? 'bg-white/10 border-white/20' 
            : 'bg-white/90 border-gray-200'
        }`}>
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={Logo} alt="Ageroute Logo" className="w-full h-full object-contain p-1" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-jakarta text-base font-medium transition-colors duration-300 ${
                    isDark
                      ? isActive ? 'text-white' : 'text-white/70 hover:text-white'
                      : isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* Active State Indicator Dot */}
                    {isActive && (
                      <motion.div 
                        layoutId="nav-indicator"
                        className="absolute -bottom-2 left-0 -translate-x-1/2 w-full h-1 bg-brand-amber rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/tenders')}
              className="hidden md:flex px-6 py-2.5 bg-brand-amber text-white text-base font-medium font-sans rounded-full hover:bg-amber-500 transition-colors shadow-[0_0_15px_rgba(242,181,43,0.3)]"
            >
              View Tenders
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 rounded-full transition-colors ${
                isDark ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-200'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-28 z-40 lg:hidden"
          >
            <div className="bg-brand-navy/95 backdrop-blur-xl border border-gray-700 rounded-2xl p-4 shadow-2xl flex flex-col space-y-2">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl font-jakarta text-base font-medium transition-all ${
                      isActive ? 'bg-brand-amber/10 text-brand-amber' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-700">
                <button 
                  onClick={() => {
                    navigate('/tenders')
                    setIsOpen(false)
                  }}
                  className="w-full py-3 bg-brand-amber text-white font-medium rounded-xl hover:bg-amber-500 transition-colors"
                >
                  View Tenders
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
