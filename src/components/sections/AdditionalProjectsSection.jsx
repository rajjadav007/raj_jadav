import { motion, useReducedMotion } from 'motion/react'
import { additionalProjectsData } from '@/data/projects'
import {
  Container,
  SectionWrapper,
  SectionHeading,
  MinimalCard,
  EditorialLabel,
  OutlineTag,
} from '@/components/ui'
import { editorialEase, viewportConfig } from '@/lib/animations'

export function AdditionalProjectsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper id="additional-projects" spacing="xl" bordered surface="default">
      <Container size="xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: editorialEase }}
        >
          <SectionHeading
            eyebrow="03B // APPLIED SHOWCASES"
            title="ADDITIONAL PROJECTS"
            subtitle="Focused engineering explorations and machine learning prototypes."
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalProjectsData.map((project, index) => (
            <motion.div
              key={project.id}
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
                className="flex flex-col justify-between w-full border-border/80 hover:border-accent transition-colors duration-200"
              >
                <div>
                  {/* Header Metadata */}
                  <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-border/60">
                    <span className="font-mono text-xs font-bold text-accent">
                      0{index + 1} {'//'}
                    </span>
                    {project.category && (
                      <EditorialLabel variant="muted" size="sm">
                        {project.category}
                      </EditorialLabel>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tag Pills */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-border/60">
                    {project.tags.map((tag) => (
                      <motion.div
                        key={tag}
                        whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.04 }}
                        transition={{ duration: 0.15 }}
                      >
                        <OutlineTag variant="default" size="sm">
                          {tag}
                        </OutlineTag>
                      </motion.div>
                    ))}
                  </div>
                )}
              </MinimalCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
