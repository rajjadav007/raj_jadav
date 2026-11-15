import { motion, useReducedMotion } from 'motion/react'
import { skillsData } from '@/data/skills'
import {
  Container,
  SectionWrapper,
  SectionHeading,
  MinimalCard,
  OutlineTag,
} from '@/components/ui'
import { Brain, Code2, Layers, Terminal } from 'lucide-react'
import { editorialEase, viewportConfig } from '@/lib/animations'

const categoryIcons = {
  'ai-ml': <Brain className="h-4 w-4 text-accent" />,
  programming: <Code2 className="h-4 w-4 text-accent" />,
  'frameworks-libraries': <Layers className="h-4 w-4 text-accent" />,
  'tools-platforms': <Terminal className="h-4 w-4 text-accent" />,
}

export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper id="skills" spacing="xl" bordered>
      <Container size="xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: editorialEase }}
        >
          <SectionHeading
            eyebrow="02 // CAPABILITIES"
            title="TECHNICAL SKILLS"
            subtitle="Categorized taxonomy of verified artificial intelligence, machine learning, and engineering competencies."
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, ease: editorialEase, delay: index * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="h-full"
            >
              <MinimalCard
                variant="default"
                padding="md"
                className="h-full flex flex-col justify-between hover:border-accent transition-colors duration-200"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-border/60">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded border border-border bg-secondary flex-shrink-0">
                        {categoryIcons[category.id] || <Brain className="h-3.5 w-3.5 text-accent" />}
                      </div>
                      <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                        0{index + 1} {'//'}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground font-semibold px-2 py-0.5 rounded bg-secondary/80 border border-border/50">
                      {category.skills.length} SKILLS
                    </span>
                  </div>

                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-foreground mb-4">
                    {category.title}
                  </h3>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill}
                        whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.04 }}
                        transition={{ duration: 0.15 }}
                      >
                        <OutlineTag variant="default" size="sm">
                          {skill}
                        </OutlineTag>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-border/40 text-[11px] font-mono text-muted-foreground/60 flex items-center justify-between">
                  <span>PRODUCTION READY</span>
                  <span className="text-accent">●</span>
                </div>
              </MinimalCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
