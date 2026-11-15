import { motion, useReducedMotion } from 'motion/react'
import { Container, SectionWrapper, SectionHeading, MinimalCard } from '@/components/ui'
import { Cpu, Scale, Workflow, Compass } from 'lucide-react'
import { editorialEase, viewportConfig } from '@/lib/animations'

const engineeringTenets = [
  {
    icon: <Cpu className="h-4 w-4 text-accent" />,
    title: 'Practical AI Systems',
    description:
      'Translating complex neural architectures and statistical models into accessible, production-ready tools that solve tangible problems.',
  },
  {
    icon: <Scale className="h-4 w-4 text-accent" />,
    title: 'Empirical Rigor',
    description:
      'Benchmark-driven evaluation, validation metrics, baseline comparisons, and reproducible pipelines over ungrounded claims.',
  },
  {
    icon: <Workflow className="h-4 w-4 text-accent" />,
    title: 'End-to-End Delivery',
    description:
      'Owning the full system lifecycle: from data preprocessing and model training to API integration, responsive interfaces, and monitoring.',
  },
  {
    icon: <Compass className="h-4 w-4 text-accent" />,
    title: 'Continuous Growth',
    description:
      'Iterative prototyping cycles, competitive hackathon sprints, and active exploration of autonomous agent networks and multimodal models.',
  },
]

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper id="about" spacing="xl" bordered surface="secondary">
      <Container size="xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: editorialEase }}
        >
          <SectionHeading
            eyebrow="01 // BACKGROUND"
            title="ABOUT RAJ JADAV"
            subtitle="Engineering foundation, research focus, and core technical philosophy."
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Narrative Column */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 0.6, ease: editorialEase, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed"
          >
            <p>
              I am an <strong className="text-foreground font-semibold">AI Engineer</strong> currently pursuing my{' '}
              <strong className="text-foreground font-semibold">Master of Science in Data Science</strong> at{' '}
              <strong className="text-foreground font-semibold">REVA University</strong>, building upon a strong undergraduate foundation in Computer Applications (<strong className="text-foreground font-semibold">BCA</strong>) from{' '}
              <strong className="text-foreground font-semibold">Atmiya University</strong>.
            </p>

            <p>
              My engineering approach centers on bridging the gap between theoretical machine learning research and real-world deployment. Rather than confining models to experimental notebooks, I focus on constructing resilient end-to-end applications—integrating computer vision pipelines, natural language processing models, and predictive analytics into responsive, user-facing systems.
            </p>

            <p>
              Through active participation in technical hackathons and independent engineering sprints, I focus on building functional machine learning systems, reliable data pipelines, and responsive intelligent applications with rigorous empirical evaluation.
            </p>

            <p>
              I prioritize clean system design, observable data pipelines, and verified model behaviors. I am actively seeking an AI/ML engineering internship or junior role where I can contribute to mission-critical intelligent applications.
            </p>
          </motion.div>

          {/* Tenets Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {engineeringTenets.map((tenet, idx) => (
              <motion.div
                key={tenet.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.45, ease: editorialEase, delay: idx * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.18 } }}
              >
                <MinimalCard
                  variant="default"
                  padding="md"
                  className="h-full border-border/80 hover:border-accent transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded border border-border bg-secondary flex-shrink-0 mt-0.5">
                      {tenet.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-tight text-foreground mb-1">
                        {tenet.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {tenet.description}
                      </p>
                    </div>
                  </div>
                </MinimalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}
