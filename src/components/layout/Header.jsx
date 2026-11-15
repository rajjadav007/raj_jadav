import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from 'motion/react'
import { personalData } from '@/data/personal'
import { socialLinks } from '@/data/social'
import { NavigationSurface, GlassSurface, ThemeToggle } from '@/components/ui'
import { Terminal, Github, Linkedin, Menu, X, Mail } from 'lucide-react'
import { editorialEase } from '@/lib/animations'

const navLinks = [
  { label: 'About', href: '/#about', hash: '#about', id: 'about' },
  { label: 'Skills', href: '/#skills', hash: '#skills', id: 'skills' },
  { label: 'Projects', href: '/#projects', hash: '#projects', id: 'projects' },
  { label: 'Experience', href: '/#experience', hash: '#experience', id: 'experience' },
  { label: 'Contact', href: '/#contact', hash: '#contact', id: 'contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const shouldReduceMotion = useReducedMotion()

  // Scroll Progress Tracking
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Find verified social links
  const githubLink = socialLinks.find((s) => s.name === 'GitHub')
  const linkedinLink = socialLinks.find((s) => s.name === 'LinkedIn')
  const emailLink = socialLinks.find((s) => s.name === 'Email')

  // Close mobile drawer on route/hash change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname, location.hash])

  // Track active section on scroll
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('')
      return
    }

    const sectionElements = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    if (sectionElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    sectionElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [location.pathname])

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Smooth scroll handler for anchor links
  const handleNavClick = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault()
      setMobileMenuOpen(false)
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', `/${hash}`)
        setActiveSection(hash.replace('#', ''))
      }
    } else {
      setMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: editorialEase }}
      className="sticky top-0 z-40 w-full"
    >
      <NavigationSurface sticky={false} glass={true} maxWidth="xl" className="relative">
        {/* Top Scroll Progress Indicator */}
        <motion.div
          style={{ scaleX: shouldReduceMotion ? 1 : scaleX, transformOrigin: '0%' }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent z-50 pointer-events-none"
        />

        {/* Brand Identification */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm"
          aria-label="Raj Jadav - Homepage"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { rotate: 5, scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            className="flex h-8 w-8 items-center justify-center rounded border border-border bg-secondary text-foreground transition-colors group-hover:border-accent group-hover:text-accent"
          >
            <Terminal className="h-4 w-4" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight uppercase text-foreground group-hover:text-accent transition-colors leading-none">
              {personalData.name}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase mt-1">
              {personalData.title}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wider font-mono font-medium"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <Link
                key={link.label}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.hash)}
                className={`relative py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm ${
                  isActive ? 'text-foreground font-semibold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}

          {/* External Social Profiles */}
          <div className="flex items-center gap-2 border-l pl-4 border-border/80">
            {githubLink && (
              <motion.a
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={githubLink.ariaLabel}
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-border/60 bg-secondary/50 text-foreground hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Github className="h-4 w-4" />
              </motion.a>
            )}
            {linkedinLink && (
              <motion.a
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                href={linkedinLink.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={linkedinLink.ariaLabel}
                className="flex h-8 w-8 items-center justify-center rounded-sm border border-border/60 bg-secondary/50 text-foreground hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            )}
          </div>

          {/* Theme Controller */}
          <div className="flex items-center pl-2 border-l border-border/80">
            <ThemeToggle variant="icon" size="sm" />
          </div>
        </nav>

        {/* Mobile Controls (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle variant="icon" size="sm" />
          <motion.button
            whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-secondary text-foreground hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </motion.button>
        </div>

        {/* Accessible Mobile Menu Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation-drawer"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: editorialEase }}
              className="absolute top-16 left-0 right-0 w-full z-50 md:hidden"
            >
              <GlassSurface
                intensity="strong"
                elevation="lg"
                rounded="none"
                className="border-b border-border/80 bg-background/95 backdrop-blur-md p-6 shadow-2xl"
              >
                <nav className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wider" aria-label="Mobile Navigation Menu">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.label}
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.25 }}
                    >
                      <Link
                        to={link.href}
                        onClick={(e) => handleNavClick(e, link.hash)}
                        className={`flex items-center justify-between py-2.5 px-3 rounded-sm border border-transparent hover:border-border/60 hover:bg-secondary/60 text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          activeSection === link.id ? 'bg-secondary/80 text-accent font-semibold border-border/50' : ''
                        }`}
                      >
                        <span>{link.label}</span>
                        <span className="text-[10px] text-muted-foreground">{link.hash}</span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Social & Contact Actions in Mobile Drawer */}
                  <div className="pt-4 mt-2 border-t border-border/80 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {githubLink && (
                        <a
                          href={githubLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={githubLink.ariaLabel}
                          className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-secondary text-foreground hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {linkedinLink && (
                        <a
                          href={linkedinLink.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={linkedinLink.ariaLabel}
                          className="flex h-9 w-9 items-center justify-center rounded-sm border border-border bg-secondary text-foreground hover:border-accent hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    {emailLink && (
                      <a
                        href={emailLink.url}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-accent/50 bg-accent/10 text-accent font-semibold hover:bg-accent/20 transition-colors text-[11px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                      >
                        <Mail className="h-3.5 w-3.5" />
                        <span>Email Raj</span>
                      </a>
                    )}
                  </div>
                </nav>
              </GlassSurface>
            </motion.div>
          )}
        </AnimatePresence>
      </NavigationSurface>
    </motion.header>
  )
}
