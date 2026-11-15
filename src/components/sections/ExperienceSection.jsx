import { motion, useReducedMotion } from 'motion/react'
import { hackathonsData } from '@/data/hackathons'
import {
  Container,
  SectionWrapper,
  SectionHeading,
  MinimalCard,
  EditorialLabel,
  OutlineTag,
} from '@/components/ui'
import { Trophy, Clock, Cpu, CheckCircle2 } from 'lucide-react'
import { editorialEase, viewportConfig } from '@/lib/animations'

export function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion()
  const hackathon = hackathonsData[0] || {
    title: 'AI & Innovation Hackathons',
    role: 'Participant / AI Developer',
    summary: 'Active participation in technical hackathons prototyping practical AI solutions.',
    highlightProjects: ['Signova AI'],
  }

  return (
    <SectionWrapper id="experience" spacing="xl" bordered>
      <Container size="xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: editorialEase }}
        >
          <SectionHeading
            eyebrow="04 // TRACK RECORD"
            title="EXPERIENCE & HACKATHONS"
            subtitle="Technical prototyping sprints, competitive hackathons, and collaborative system development."
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Experience Card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.55, ease: editorialEase, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <MinimalCard variant="default" padding="lg" className="border-border hover:border-accent/60 transition-colors">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-border/60">
                <div className="flex items-center gap-2.5">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { rotate: 8, scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 items-center justify-center rounded border border-border bg-secondary text-accent"
                  >
                    <Trophy className="h-4 w-4" />
                  </motion.div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-foreground">
                      {hackathon.title}
                    </h3>
                    <p className="text-xs font-mono text-muted-foreground">
                      {hackathon.role}
                    </p>
                  </div>
                </div>

                <EditorialLabel variant="accent" size="sm" indicator="dot" pulse={true}>
                  SPRINT TRACK
                </EditorialLabel>
              </div>

              {/* Narrative Content */}
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Engaged in high-intensity AI hackathon sprints focusing on building functional, proof-of-concept machine learning systems from scratch within a strict 24-hour timeframe.
                </p>

                <p>
                  Spearheaded the technical development of <strong className="text-foreground font-semibold">Signova AI</strong>, an assistive vision system designed for real-time sign language interpretation. Responsible for integrating camera input streams, extracting 21 hand landmarks via MediaPipe, and feeding spatial vectors into a custom PyTorch classification pipeline.
                </p>

                <p>
                  Confronted real-time hardware latency limits, camera distortion variations, and temporal smoothing challenges. Demonstrated practical problem-solving by decoupling landmark inference from UI rendering to sustain smooth 30+ FPS feedback.
                </p>
              </div>

              {/* Highlight Projects & Tags */}
              <div className="pt-6 mt-6 border-t border-border/60 flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-semibold text-foreground mr-2">
                  Featured Highlights:
                </span>
                {hackathon.highlightProjects.map((proj) => (
                  <motion.div
                    key={proj}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                  >
                    <OutlineTag variant="accent" size="md">
                      {proj}
                    </OutlineTag>
                  </motion.div>
                ))}
                <OutlineTag variant="default" size="md">
                  Real-Time Computer Vision
                </OutlineTag>
                <OutlineTag variant="default" size="md">
                  Rapid Prototyping
                </OutlineTag>
              </div>
            </MinimalCard>
          </motion.div>

          {/* Side Sprints Summary */}
          <div className="lg:col-span-4 space-y-4">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, ease: editorialEase, delay: 0.15 }}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
            >
              <MinimalCard variant="flat" padding="md" className="border-border/80">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-foreground mb-3">
                  <Clock className="h-4 w-4 text-accent" />
                  <span>Sprint Engineering Metrics</span>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Rapid end-to-end prototyping within a 24-hour hackathon sprint.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Cross-functional sprint collaboration with frontend & ML contributors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Live product demonstrations delivered to judging panels and peers.</span>
                  </li>
                </ul>
              </MinimalCard>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, ease: editorialEase, delay: 0.25 }}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
            >
              <MinimalCard variant="flat" padding="md" className="border-border/80">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-foreground mb-3">
                  <Cpu className="h-4 w-4 text-accent" />
                  <span>Verified Implementations</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Focus on demonstrable codebases with working inference loops, clean exception handling, and documented engineering trade-offs over static presentations.
                </p>
              </MinimalCard>
            </motion.div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
