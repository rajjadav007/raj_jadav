import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { projectsData } from '@/data/projects'
import {
  Container,
  SectionWrapper,
  SectionHeading,
  MinimalCard,
  EditorialLabel,
  OutlineTag,
  TextLink,
} from '@/components/ui'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { editorialEase, viewportConfig } from '@/lib/animations'

export function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion()
  const featuredProjects = projectsData.filter((p) => p.featured)

  return (
    <SectionWrapper id="projects" spacing="xl" bordered surface="secondary">
      <Container size="xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.5, ease: editorialEase }}
        >
          <SectionHeading
            eyebrow="03 // FEATURED WORK"
            title="FEATURED PROJECTS"
            subtitle="Selected machine learning and AI applications engineered with dedicated case studies."
            className="mb-12"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.55, ease: editorialEase, delay: index * 0.12 }}
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              className="h-full flex"
            >
              <MinimalCard
                variant="default"
                padding="lg"
                className="group flex flex-col justify-between w-full hover:border-accent transition-all duration-300"
              >
                <div>
                  {/* Project Header Bar */}
                  <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-border/60">
                    <span className="font-mono text-xs font-bold text-accent">
                      0{index + 1} {'//'}
                    </span>
                    <EditorialLabel variant="muted" size="sm">
                      {project.category}
                    </EditorialLabel>
                  </div>

                  {/* Project Title */}
                  <Link
                    to={project.route}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-accent transition-colors flex items-center justify-between gap-2">
                      <span>{project.title}</span>
                      <motion.span
                        className="flex-shrink-0"
                        whileHover={shouldReduceMotion ? {} : { x: 3, y: -3 }}
                      >
                        <ArrowUpRight className="h-5 w-5 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-accent" />
                      </motion.span>
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag) => (
                      <motion.div
                        key={tag}
                        whileHover={shouldReduceMotion ? {} : { y: -1, scale: 1.03 }}
                        transition={{ duration: 0.15 }}
                      >
                        <OutlineTag variant="filled" size="sm">
                          {tag}
                        </OutlineTag>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between">
                  <TextLink to={project.route} arrow="right" color="accent">
                    Explore Case Study
                  </TextLink>
                  <FolderGit2 className="h-4 w-4 text-muted-foreground/60 group-hover:text-accent transition-colors" />
                </div>
              </MinimalCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
