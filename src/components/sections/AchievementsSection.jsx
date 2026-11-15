import { motion, useReducedMotion } from 'motion/react'
import {
  Container,
  SectionWrapper,
  SectionHeading,
  MinimalCard,
  GlassSurface,
  EditorialLabel,
  OutlineTag,
} from '@/components/ui'
import { Trophy, Award, Layers, Medal, Sparkles } from 'lucide-react'
import { editorialEase, viewportConfig } from '@/lib/animations'
import {
  featuredHackathonAward,
  hackathonWinsData,
  technicalMilestonesData,
} from '@/data/achievements'

const milestoneIcons = {
  'AI Prototype Engineering': <Trophy className="h-5 w-5 text-accent" />,
  'Data Science & Predictive Modeling': <Award className="h-5 w-5 text-accent" />,
  'Full-Stack Model Integration': <Layers className="h-5 w-5 text-accent" />,
}

export function AchievementsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper id="achievements" spacing="xl" bordered surface="secondary">
      <Container size="xl">
        {/* Section Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: editorialEase }}
        >
          <SectionHeading
            eyebrow="05 // RECOGNITION"
            title="ACHIEVEMENTS & MILESTONES"
            subtitle="Competitive hackathon results, demonstrated prototype deployments, and applied engineering milestones."
            className="mb-10"
          />
        </motion.div>

        {/* 1 // Prominent Featured 2x Hackathon Winner Banner */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.55, ease: editorialEase, delay: 0.08 }}
          className="mb-6"
        >
          <GlassSurface
            intensity="strong"
            elevation="md"
            rounded="sm"
            className="p-6 sm:p-8 border border-accent/40 bg-secondary/60 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <EditorialLabel variant="accent" size="sm" indicator="dot" pulse={true}>
                    COMPETITIVE HACKATHONS
                  </EditorialLabel>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase">
                    {'//'} VERIFIED PODIUMS
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground flex items-center gap-3">
                  <span>{featuredHackathonAward.headline}</span>
                  <Trophy className="h-7 w-7 text-accent inline-block flex-shrink-0" />
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl font-normal">
                  {featuredHackathonAward.supportingText}
                </p>
              </div>

              {/* Graphical Badge */}
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                className="flex items-center gap-3 px-5 py-3.5 rounded border border-accent/50 bg-accent/10 flex-shrink-0 font-mono text-xs font-bold text-accent uppercase tracking-wider"
              >
                <Medal className="h-5 w-5 text-accent" />
                <div className="flex flex-col">
                  <span>Double Podium Finisher</span>
                  <span className="text-[10px] text-muted-foreground font-normal">2× 3rd Place Honors</span>
                </div>
              </motion.div>
            </div>
          </GlassSurface>
        </motion.div>

        {/* 2 // Two Hackathon Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {hackathonWinsData.map((hackathon, idx) => (
            <motion.div
              key={hackathon.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, ease: editorialEase, delay: 0.12 + idx * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="h-full flex"
            >
              <MinimalCard
                variant="default"
                padding="lg"
                className="flex flex-col justify-between w-full border-border hover:border-accent transition-colors duration-200"
              >
                <div>
                  {/* Top Bar with Trophy & 3rd Place Badge */}
                  <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-border/60">
                    <div className="flex items-center gap-2.5">
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { rotate: 8, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-9 w-9 items-center justify-center rounded border border-border bg-secondary text-accent"
                      >
                        <Trophy className="h-4 w-4" />
                      </motion.div>
                      <span className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-wider">
                        0{idx + 1} {'//'} {hackathon.category}
                      </span>
                    </div>

                    {/* Prominent 3rd Place Badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-sm border border-accent/60 bg-accent/15 text-accent font-mono text-xs font-black tracking-wider uppercase">
                      <Medal className="h-3.5 w-3.5 text-accent" />
                      <span>{hackathon.achievement}</span>
                    </div>
                  </div>

                  {/* Competition Title */}
                  <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground mb-3">
                    {hackathon.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {hackathon.description}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="pt-4 mt-6 border-t border-border/60 flex items-center justify-between font-mono text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 text-accent" />
                    <span>Competitive Prototype</span>
                  </span>
                  <span className="text-accent font-semibold">VERIFIED RESULT</span>
                </div>
              </MinimalCard>
            </motion.div>
          ))}
        </div>

        {/* 3 // Retained Three Technical Highlights Header */}
        <div className="pt-2 mb-6 flex items-center justify-between gap-4 border-t border-border/80">
          <span className="font-mono text-xs uppercase font-bold tracking-wider text-muted-foreground">
            Core Engineering Milestones
          </span>
          <span className="font-mono text-[11px] text-muted-foreground/60 hidden sm:inline">
            SYSTEM IMPLEMENTATION & EMPIRICAL RIGOR
          </span>
        </div>

        {/* 3 // Three Retained Technical Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technicalMilestonesData.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, ease: editorialEase, delay: index * 0.1 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="h-full flex"
            >
              <MinimalCard
                variant="default"
                padding="lg"
                className="flex flex-col justify-between w-full hover:border-accent/60 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-border/60">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { rotate: 8, scale: 1.08 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-9 w-9 items-center justify-center rounded border border-border bg-secondary"
                    >
                      {milestoneIcons[milestone.title] || <Trophy className="h-5 w-5 text-accent" />}
                    </motion.div>
                    <EditorialLabel variant="muted" size="sm">
                      {milestone.badge}
                    </EditorialLabel>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-foreground mb-2">
                    {milestone.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-border/60 flex flex-wrap gap-1.5">
                  {milestone.highlights.map((h) => (
                    <OutlineTag key={h} variant="default" size="sm">
                      {h}
                    </OutlineTag>
                  ))}
                </div>
              </MinimalCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
