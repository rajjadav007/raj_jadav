import { motion, useReducedMotion } from 'motion/react'
import { educationData } from '@/data/education'
import {
  Container,
  SectionWrapper,
  SectionHeading,
  MinimalCard,
  EditorialLabel,
  OutlineTag,
} from '@/components/ui'
import { GraduationCap, BookOpen } from 'lucide-react'
import { editorialEase, viewportConfig } from '@/lib/animations'

export function EducationSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper id="education" spacing="xl" bordered>
      <Container size="xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: editorialEase }}
        >
          <SectionHeading
            eyebrow="06 // ACADEMIC BACKGROUND"
            title="EDUCATION"
            subtitle="Formal academic credentials in Data Science, Machine Learning, and Computer Applications."
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, ease: editorialEase, delay: index * 0.12 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="h-full flex"
            >
              <MinimalCard
                variant="default"
                padding="lg"
                className="flex flex-col justify-between w-full hover:border-accent/60 transition-colors duration-200"
              >
                <div>
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-border/60">
                    <div className="flex items-center gap-2.5">
                      <motion.div
                        whileHover={shouldReduceMotion ? {} : { rotate: 8, scale: 1.08 }}
                        transition={{ duration: 0.2 }}
                        className="flex h-9 w-9 items-center justify-center rounded border border-border bg-secondary text-accent"
                      >
                        <GraduationCap className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <span className="font-mono text-xs font-bold text-accent">
                          0{index + 1} {'//'} {edu.period.toUpperCase()}
                        </span>
                        <h4 className="text-sm font-mono uppercase text-muted-foreground">
                          {edu.institution}
                        </h4>
                      </div>
                    </div>

                    <EditorialLabel variant="outline" size="sm">
                      {edu.shortDegree || 'DEGREE'}
                    </EditorialLabel>
                  </div>

                  {/* Degree Name */}
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground mb-2">
                    {edu.degree}
                  </h3>

                  {/* Location & Context */}
                  <p className="text-xs font-mono text-muted-foreground mb-4">
                    {edu.location}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {edu.description}
                  </p>
                </div>

                {/* Focus Areas */}
                <div className="pt-4 border-t border-border/60">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs text-foreground font-semibold">
                    <BookOpen className="h-3.5 w-3.5 text-accent" />
                    <span>Core Focus Areas:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.focusAreas.map((area) => (
                      <OutlineTag key={area} variant="default" size="sm">
                        {area}
                      </OutlineTag>
                    ))}
                  </div>
                </div>
              </MinimalCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
