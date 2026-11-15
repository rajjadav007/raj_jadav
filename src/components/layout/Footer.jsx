import { motion, useReducedMotion } from 'motion/react'
import { personalData } from '@/data/personal'
import { socialLinks } from '@/data/social'
import { Container } from '@/components/ui'
import { Terminal, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

export function Footer() {
  const shouldReduceMotion = useReducedMotion()
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getSocialIcon = (name) => {
    switch (name) {
      case 'GitHub':
        return <Github className="h-3.5 w-3.5" />
      case 'LinkedIn':
        return <Linkedin className="h-3.5 w-3.5" />
      case 'Email':
        return <Mail className="h-3.5 w-3.5" />
      default:
        return null
    }
  }

  return (
    <footer className="border-t border-border/80 bg-background/50 py-12 relative">
      <Container size="xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Identity & Tagline */}
          <div className="space-y-1.5 max-w-md">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded border border-border bg-secondary text-foreground">
                <Terminal className="h-3 w-3" />
              </div>
              <span className="font-bold text-sm uppercase tracking-tight text-foreground">
                {personalData.name}
              </span>
              <span className="font-mono text-[10px] text-muted-foreground uppercase">
                {'//'} {personalData.title}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {personalData.tagline}
            </p>
          </div>

          {/* Social & Contact Actions */}
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => (
              <motion.a
                key={item.name}
                whileHover={shouldReduceMotion ? {} : { y: -2, borderColor: 'var(--accent)' }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                href={item.url}
                target={item.url.startsWith('http') ? '_blank' : undefined}
                rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={item.ariaLabel}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm border border-border/60 bg-secondary/40 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {getSocialIcon(item.name)}
                <span>{item.name}</span>
              </motion.a>
            ))}

            {/* Back to top button */}
            <motion.button
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-border/60 bg-secondary/40 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-accent hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Top</span>
            </motion.button>
          </div>

          {/* Copyright & Technical Stamp */}
          <div className="font-mono text-[11px] text-muted-foreground/60 flex flex-col md:items-end gap-1">
            <span>© {currentYear} {personalData.name}. All rights reserved.</span>
            <span className="text-[10px] tracking-wider text-muted-foreground/40">
              BUILT WITH REACT 18 {'//'} TAILWIND CSS {'//'} MOTION
            </span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
