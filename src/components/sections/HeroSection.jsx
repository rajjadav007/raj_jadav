import { motion, useReducedMotion } from 'motion/react'
import { personalData } from '@/data/personal'
import { socialLinks } from '@/data/social'
import {
  Container,
  SectionWrapper,
  EditorialLabel,
  PrimaryButton,
  SecondaryButton,
} from '@/components/ui'
import { ArrowDown, Mail, Github, Linkedin, Terminal, Sparkles, Brain } from 'lucide-react'
import { editorialEase } from '@/lib/animations'

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  const githubLink = socialLinks.find((s) => s.name === 'GitHub')?.url || 'https://github.com/rajjadav007'
  const linkedinLink = socialLinks.find((s) => s.name === 'LinkedIn')?.url || 'https://www.linkedin.com/in/raj-jadav90/'

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', `/#${id}`)
    }
  }

  // Animation variants
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const childFadeUp = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: editorialEase },
    },
  }

  return (
    <SectionWrapper id="hero" spacing="none" className="pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden">
      {/* Decorative background grid micro-animation */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"
        />
      )}

      <Container size="xl">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col items-start gap-6 max-w-4xl"
        >
          {/* Status Kicker */}
          <motion.div variants={childFadeUp} className="flex flex-wrap items-center gap-3">
            <EditorialLabel variant="accent" size="md" indicator="dot" pulse={true}>
              AI ENGINEER // DATA SCIENCE
            </EditorialLabel>
            <span className="hidden sm:inline text-xs font-mono text-muted-foreground/60">
              {'//'} REVA UNIVERSITY (MSC DS)
            </span>
          </motion.div>

          {/* Display Name with subtle letter/line reveal */}
          <motion.h1
            variants={childFadeUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-foreground leading-[1.02]"
          >
            {personalData.name}
          </motion.h1>

          {/* Verified Tagline */}
          <motion.p
            variants={childFadeUp}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-foreground leading-snug"
          >
            {personalData.tagline}
          </motion.p>

          {/* Secondary Narrative */}
          <motion.p
            variants={childFadeUp}
            className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed"
          >
            Specializing in data science, computer vision, and NLP systems. Focused on developing production-grade machine learning pipelines with rigorous empirical evaluation, rapid prototyping, and end-to-end delivery.
          </motion.p>

          {/* Primary Action Row */}
          <motion.div variants={childFadeUp} className="flex flex-wrap items-center gap-3 pt-2">
            <motion.div whileHover={shouldReduceMotion ? {} : { y: -2 }} whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}>
              <PrimaryButton
                size="lg"
                onClick={() => handleScroll('projects')}
                icon={<ArrowDown className="h-4 w-4" />}
                iconPosition="right"
                aria-label="Explore featured projects"
              >
                Explore Projects
              </PrimaryButton>
            </motion.div>

            <motion.div whileHover={shouldReduceMotion ? {} : { y: -2 }} whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}>
              <SecondaryButton
                size="lg"
                variant="outline"
                onClick={() => handleScroll('contact')}
                icon={<Mail className="h-4 w-4" />}
                iconPosition="left"
                aria-label="Contact Raj Jadav"
              >
                Contact Me
              </SecondaryButton>
            </motion.div>

            <div className="flex items-center gap-2 sm:ml-2">
              <motion.div whileHover={shouldReduceMotion ? {} : { y: -2 }} whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}>
                <SecondaryButton
                  size="md"
                  variant="subtle"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Github className="h-4 w-4" />}
                  iconPosition="left"
                  aria-label="Raj Jadav's GitHub profile"
                >
                  GitHub
                </SecondaryButton>
              </motion.div>

              <motion.div whileHover={shouldReduceMotion ? {} : { y: -2 }} whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}>
                <SecondaryButton
                  size="md"
                  variant="subtle"
                  href={linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Linkedin className="h-4 w-4" />}
                  iconPosition="left"
                  aria-label="Raj Jadav's LinkedIn profile"
                >
                  LinkedIn
                </SecondaryButton>
              </motion.div>
            </div>
          </motion.div>

          {/* Highlights Ribbon */}
          <motion.div
            variants={childFadeUp}
            className="w-full mt-8 pt-8 border-t border-border/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -3, borderColor: 'var(--accent)' }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2.5 p-3 rounded-sm border border-border/60 bg-secondary/30 transition-colors"
            >
              <Terminal className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground block uppercase">Core Domains</span>
                <span className="text-muted-foreground text-[11px]">Computer Vision, NLP, Predictive Modeling</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -3, borderColor: 'var(--accent)' }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2.5 p-3 rounded-sm border border-border/60 bg-secondary/30 transition-colors"
            >
              <Sparkles className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground block uppercase">Academic Track</span>
                <span className="text-muted-foreground text-[11px]">MSc Data Science (REVA) // BCA (Atmiya)</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -3, borderColor: 'var(--accent)' }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2.5 p-3 rounded-sm border border-border/60 bg-secondary/30 transition-colors"
            >
              <Brain className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-foreground block uppercase">Engineering Mindset</span>
                <span className="text-muted-foreground text-[11px]">Empirical Rigor // Production Delivery</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
