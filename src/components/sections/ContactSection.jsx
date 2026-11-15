import { motion, useReducedMotion } from 'motion/react'
import { personalData } from '@/data/personal'
import { socialLinks } from '@/data/social'
import {
  Container,
  SectionWrapper,
  SectionHeading,
  GlassSurface,
  EditorialLabel,
  PrimaryButton,
  SecondaryButton,
} from '@/components/ui'
import { Mail, Github, Linkedin, MapPin, MessageSquare } from 'lucide-react'
import { editorialEase, viewportConfig } from '@/lib/animations'

export function ContactSection() {
  const shouldReduceMotion = useReducedMotion()
  const githubLink = socialLinks.find((s) => s.name === 'GitHub')?.url || 'https://github.com/rajjadav007'
  const linkedinLink = socialLinks.find((s) => s.name === 'LinkedIn')?.url || 'https://www.linkedin.com/in/raj-jadav90/'
  const emailHref = `mailto:${personalData.email}`

  return (
    <SectionWrapper id="contact" spacing="xl">
      <Container size="xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: editorialEase }}
        >
          <SectionHeading
            eyebrow="08 // GET IN TOUCH"
            title="CONTACT & COLLABORATION"
            subtitle="Interested in discussing AI engineering roles, internships, or technical collaborations? Connect directly."
            className="mb-12"
          />
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, ease: editorialEase, delay: 0.1 }}
        >
          <GlassSurface
            intensity="strong"
            elevation="md"
            rounded="lg"
            className="p-8 sm:p-12 border-border/80"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Direct Outreach Prompt */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <EditorialLabel variant="accent" size="md" indicator="dot" pulse={true}>
                    {personalData.status}
                  </EditorialLabel>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                  Let&apos;s Build Intelligent Systems Together
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  I am actively seeking machine learning engineering opportunities, data science internships, and collaborative AI development projects. Whether you want to discuss system architectures, review code, or explore a new initiative, feel free to reach out.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-accent" />
                    <span>Location: {personalData.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-accent" />
                    <span>Response Time: &lt; 24 Hours</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Contact Actions */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.01 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                >
                  <PrimaryButton
                    size="lg"
                    href={emailHref}
                    icon={<Mail className="h-4 w-4" />}
                    iconPosition="left"
                    className="w-full text-center justify-center"
                    aria-label={`Send email to ${personalData.email}`}
                  >
                    Send Email ({personalData.email})
                  </PrimaryButton>
                </motion.div>

                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { y: -2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                  >
                    <SecondaryButton
                      size="md"
                      variant="outline"
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<Github className="h-4 w-4" />}
                      iconPosition="left"
                      className="w-full justify-center"
                      aria-label="Visit Raj Jadav on GitHub"
                    >
                      GitHub
                    </SecondaryButton>
                  </motion.div>

                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { y: -2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                  >
                    <SecondaryButton
                      size="md"
                      variant="outline"
                      href={linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      icon={<Linkedin className="h-4 w-4" />}
                      iconPosition="left"
                      className="w-full justify-center"
                      aria-label="Visit Raj Jadav on LinkedIn"
                    >
                      LinkedIn
                    </SecondaryButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </GlassSurface>
        </motion.div>
      </Container>
    </SectionWrapper>
  )
}
