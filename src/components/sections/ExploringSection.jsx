import { motion, useReducedMotion } from 'motion/react'
import { exploringData } from '@/data/exploring'
import {
  Container,
  SectionWrapper,
  SectionHeading,
  MinimalCard,
  EditorialLabel,
  OutlineTag,
} from '@/components/ui'
import { Bot, Eye, Search, Zap } from 'lucide-react'
import { editorialEase, viewportConfig } from '@/lib/animations'

const topicIcons = {
  'autonomous-agents': <Bot className="h-4 w-4 text-accent" />,
  'multimodal-architectures': <Eye className="h-4 w-4 text-accent" />,
  'rag-context-engineering': <Search className="h-4 w-4 text-accent" />,
  'edge-ai-optimization': <Zap className="h-4 w-4 text-accent" />,
}

export function ExploringSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper id="exploring" spacing="xl" bordered surface="secondary">
      <Container size="xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: editorialEase }}
        >
          <SectionHeading
            eyebrow="07 // CONTINUOUS LEARNING"
            title="CURRENTLY EXPLORING"
            subtitle="Active research directions, emerging AI paradigms, and technical frontiers."
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {exploringData.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.5, ease: editorialEase, delay: index * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -4 }}
              className="h-full flex"
            >
              <MinimalCard
                variant="default"
                padding="md"
                className="flex flex-col justify-between w-full hover:border-accent/60 transition-colors duration-200"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-border/60">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { rotate: 8, scale: 1.08 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-7 w-7 items-center justify-center rounded border border-border bg-secondary flex-shrink-0"
                    >
                      {topicIcons[topic.id] || <Zap className="h-3.5 w-3.5 text-accent" />}
                    </motion.div>
                    <EditorialLabel variant="accent" size="sm" indicator="dot" pulse={true}>
                      ACTIVE
                    </EditorialLabel>
                  </div>

                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block mb-1">
                    0{index + 1} {'//'} {topic.category}
                  </span>

                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-foreground mb-3">
                    {topic.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {topic.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/40 flex flex-wrap gap-1.5">
                  {topic.tags.map((tag) => (
                    <OutlineTag key={tag} variant="default" size="sm">
                      {tag}
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
