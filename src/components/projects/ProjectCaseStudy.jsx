import {
  Eye,
  Compass,
  Layers,
  Volume2,
  Sliders,
  Mic,
  Activity,
  Award,
  AlertTriangle,
  Settings,
  PieChart,
  Users,
  TrendingUp,
  CheckCircle,
  ShieldAlert,
  Sparkles,
  Github,
  ExternalLink,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Target,
} from 'lucide-react'

import {
  Container,
  SectionWrapper,
  SectionHeading,
  EditorialLabel,
  MinimalCard,
  GlassSurface,
  Divider,
  PrimaryButton,
  SecondaryButton,
  TextLink,
  OutlineTag,
} from '@/components/ui'
import { motion, useReducedMotion } from 'motion/react'
import { editorialEase } from '@/lib/animations'

import { ProjectArchitecture } from './ProjectArchitecture'
import { ProjectTechStack } from './ProjectTechStack'
import { ProjectChallenges } from './ProjectChallenges'
import { ProjectResults } from './ProjectResults'
import { ProjectNavigation } from './ProjectNavigation'

const iconMap = {
  Eye,
  Compass,
  Layers,
  Volume2,
  Sliders,
  Mic,
  Activity,
  Award,
  AlertTriangle,
  Settings,
  PieChart,
  Users,
  TrendingUp,
  CheckCircle,
  ShieldAlert,
  Sparkles,
  Target,
}

export function ProjectCaseStudy({ data }) {
  const shouldReduceMotion = useReducedMotion()
  if (!data) return null

  const {
    title,
    subtitle,
    category,
    role,
    context,
    timeline,
    status,
    githubUrl,
    demoUrl,
    tags = [],
    intro,
    problem,
    objectives = [],
    solution,
    architecture,
    techStack,
    implementation,
    features = [],
    challenges = [],
    results,
    futureImprovements = [],
    navigation,
  } = data

  return (
    <article className="w-full">
      {/* =========================================================================
          01 // HEADER & INTRO: Breadcrumb, Title, Quick Facts, Repositories
         ========================================================================= */}
      <SectionWrapper spacing="md" surface="transparent" className="pt-8 sm:pt-12">
        <Container size="xl">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: editorialEase }}
          >
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <TextLink to="/" arrow="left" color="muted" className="text-xs">
                Back to Portfolio Overview
              </TextLink>
            </nav>

          {/* Header Metadata & Eyebrow */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <EditorialLabel variant="accent" size="md">
              {category}
            </EditorialLabel>
            <EditorialLabel variant="outline" size="md">
              {status}
            </EditorialLabel>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="font-black uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.08]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-base sm:text-xl text-muted-foreground leading-relaxed max-w-4xl font-normal">
              {subtitle}
            </p>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <OutlineTag key={tag} size="sm" variant="default">
                  {tag}
                </OutlineTag>
              ))}
            </div>
          )}

          {/* Meta Ribbon Panel */}
          <GlassSurface
            intensity="subtle"
            elevation="sm"
            rounded="sm"
            className="mt-8 p-5 sm:p-6 border border-border"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">
                  Engineering Role
                </span>
                <p className="text-xs sm:text-sm font-semibold text-foreground">
                  {role}
                </p>
                {context && (
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {context}
                  </p>
                )}
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">
                  Timeline & Sprint
                </span>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  <span>{timeline}</span>
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">
                  Project Status
                </span>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  <span>{status}</span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end justify-center gap-2">
                {githubUrl && (
                  <PrimaryButton
                    as="a"
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    <Github className="h-3.5 w-3.5 mr-2" />
                    GitHub Repository
                  </PrimaryButton>
                )}

                {demoUrl && (
                  <SecondaryButton
                    as="a"
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                    className="w-full sm:w-auto"
                  >
                    <ExternalLink className="h-3.5 w-3.5 mr-2" />
                    Live Interface
                  </SecondaryButton>
                )}
              </div>
            </div>
          </GlassSurface>

          {/* Intro Narrative & Quick Facts Grid */}
          {intro && (
            <div className="mt-10 space-y-6">
              <div className="border-l-2 border-accent pl-4 sm:pl-6 py-1">
                <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed">
                  {intro.headline}
                </p>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {intro.summary}
                </p>
              </div>

              {intro.quickFacts && intro.quickFacts.length > 0 && (
                <div className="space-y-3 pt-4">
                  <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Engineering Quick Facts
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                    {intro.quickFacts.map((fact) => (
                      <MinimalCard
                        key={fact.label}
                        variant="default"
                        padding="sm"
                        className="flex flex-col justify-between"
                      >
                        <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                          {fact.label}
                        </span>
                        <div className="mt-2">
                          <p className="font-mono text-xs sm:text-sm font-bold text-foreground leading-snug">
                            {fact.value}
                          </p>
                          {fact.note && (
                            <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">
                              {fact.note}
                            </p>
                          )}
                        </div>
                      </MinimalCard>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          </motion.div>
        </Container>
      </SectionWrapper>

      <Divider spacing="md" />

      {/* =========================================================================
          02 // PROBLEM STATEMENT
         ========================================================================= */}
      {problem && (
        <>
          <SectionWrapper spacing="md" surface="transparent">
            <Container size="xl">
              <SectionHeading
                eyebrow="02 // PROBLEM SPACE"
                title="The Core Challenge"
                subtitle={problem.overview}
              />

              {problem.corePainPoints && problem.corePainPoints.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  {problem.corePainPoints.map((pain, idx) => (
                    <MinimalCard
                      key={pain.title || idx}
                      variant="default"
                      padding="lg"
                      className="border-border hover:border-accent/40 transition-colors"
                    >
                      <EditorialLabel variant="muted" size="sm" className="mb-3">
                        PAIN POINT {String(idx + 1).padStart(2, '0')}
                      </EditorialLabel>
                      <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                        {pain.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {pain.description}
                      </p>
                    </MinimalCard>
                  ))}
                </div>
              )}

              {problem.whyNaiveFails && problem.whyNaiveFails.length > 0 && (
                <div className="mt-8 rounded-sm border border-border/80 bg-secondary/30 p-5 sm:p-6">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                    Why Conventional & Naive Approaches Fail
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {problem.whyNaiveFails.map((item) => (
                      <div key={item.title} className="space-y-1">
                        <span className="font-mono text-xs font-semibold text-foreground flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-amber-500" />
                          {item.title}
                        </span>
                        <p className="text-xs text-muted-foreground leading-relaxed pl-2.5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Container>
          </SectionWrapper>

          <Divider spacing="md" />
        </>
      )}

      {/* =========================================================================
          03 // OBJECTIVES
         ========================================================================= */}
      {objectives.length > 0 && (
        <>
          <SectionWrapper spacing="md" surface="transparent">
            <Container size="xl">
              <SectionHeading
                eyebrow="03 // OBJECTIVES"
                title="System Objectives & Engineering Goals"
                subtitle="Core technical targets established prior to implementation to ensure robust, real-time performance."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {objectives.map((obj) => (
                  <MinimalCard
                    key={obj.id}
                    variant="default"
                    padding="lg"
                    className="flex flex-col justify-between hover:border-accent/50 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <EditorialLabel variant="accent" size="sm">
                          {obj.id}
                        </EditorialLabel>
                        <OutlineTag size="sm" variant="default">
                          {obj.category}
                        </OutlineTag>
                      </div>

                      <h3 className="text-base font-bold text-foreground leading-snug mb-2">
                        {obj.title}
                      </h3>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {obj.description}
                      </p>
                    </div>
                  </MinimalCard>
                ))}
              </div>
            </Container>
          </SectionWrapper>

          <Divider spacing="md" />
        </>
      )}

      {/* =========================================================================
          04 // SOLUTION OVERVIEW
         ========================================================================= */}
      {solution && (
        <>
          <SectionWrapper spacing="md" surface="transparent">
            <Container size="xl">
              <SectionHeading
                eyebrow="04 // SOLUTION ARCHITECTURE"
                title="Architectural Concept & Strategy"
                subtitle={solution.concept}
              />

              {solution.keyInnovations && solution.keyInnovations.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                  {solution.keyInnovations.map((item, idx) => (
                    <MinimalCard
                      key={item.title || idx}
                      variant="default"
                      padding="lg"
                      className="border-border hover:border-accent/40 transition-colors"
                    >
                      <EditorialLabel variant="accent" size="sm" className="mb-3">
                        INNOVATION {String(idx + 1).padStart(2, '0')}
                      </EditorialLabel>
                      <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </MinimalCard>
                  ))}
                </div>
              )}
            </Container>
          </SectionWrapper>

          <Divider spacing="md" />
        </>
      )}

      {/* =========================================================================
          05 // SYSTEM ARCHITECTURE (ASCII / PIPELINE FLOW)
         ========================================================================= */}
      {architecture && (
        <>
          <SectionWrapper spacing="md" surface="transparent">
            <Container size="xl">
              <SectionHeading
                eyebrow="05 // SYSTEM DATA FLOW"
                title="End-to-End Pipeline Architecture"
                subtitle="Granular data transformations and module communication from raw ingestion to model inference."
              />

              <div className="mt-8">
                <ProjectArchitecture architecture={architecture} />
              </div>
            </Container>
          </SectionWrapper>

          <Divider spacing="md" />
        </>
      )}

      {/* =========================================================================
          06 // TECHNOLOGY STACK
         ========================================================================= */}
      {techStack && (
        <>
          <SectionWrapper spacing="md" surface="transparent">
            <Container size="xl">
              <SectionHeading
                eyebrow="06 // STACK TAXONOMY"
                title="Technology Stack & Tooling"
                subtitle="Frameworks, mathematical engines, and runtimes used across every layer of the architecture."
              />

              <div className="mt-8">
                <ProjectTechStack techStack={techStack} />
              </div>
            </Container>
          </SectionWrapper>

          <Divider spacing="md" />
        </>
      )}

      {/* =========================================================================
          07 // IMPLEMENTATION APPROACH
         ========================================================================= */}
      {implementation && implementation.phases && (
        <>
          <SectionWrapper spacing="md" surface="transparent">
            <Container size="xl">
              <SectionHeading
                eyebrow="07 // IMPLEMENTATION METHODOLOGY"
                title="Phased Engineering Execution"
                subtitle="Systematic execution milestones detailing calibration, modeling, and real-time optimization."
              />

              <div className="space-y-4 mt-8">
                {implementation.phases.map((phase) => (
                  <MinimalCard
                    key={phase.phase}
                    variant="default"
                    padding="lg"
                    className="border-border hover:border-border/90 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/60">
                      <div className="flex items-center gap-2">
                        <EditorialLabel variant="accent" size="sm">
                          {phase.phase}
                        </EditorialLabel>
                        <h3 className="text-base font-bold text-foreground">
                          {phase.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {phase.timeline}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {phase.activities.map((act, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed"
                        >
                          <ArrowRight className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </MinimalCard>
                ))}
              </div>
            </Container>
          </SectionWrapper>

          <Divider spacing="md" />
        </>
      )}

      {/* =========================================================================
          08 // KEY FEATURES
         ========================================================================= */}
      {features.length > 0 && (
        <>
          <SectionWrapper spacing="md" surface="transparent">
            <Container size="xl">
              <SectionHeading
                eyebrow="08 // SYSTEM CAPABILITIES"
                title="Key Architectural Features"
                subtitle="Engineered capabilities that provide real-time reliability, modularity, and operational accuracy."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {features.map((feat) => {
                  const IconComponent = iconMap[feat.iconName] || Sparkles

                  return (
                    <MinimalCard
                      key={feat.title}
                      variant="default"
                      padding="lg"
                      className="flex flex-col justify-between hover:border-accent/40 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-accent/10 text-accent border border-accent/20">
                            <IconComponent className="h-4 w-4" />
                          </div>
                        </div>

                        <h3 className="text-base font-bold text-foreground leading-snug mb-2">
                          {feat.title}
                        </h3>

                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feat.description}
                        </p>
                      </div>

                      {feat.technicalDetails && (
                        <div className="mt-4 pt-3 border-t border-border/60">
                          <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-foreground block mb-0.5">
                            Under the Hood
                          </span>
                          <p className="text-[11px] text-foreground/80 font-mono leading-tight">
                            {feat.technicalDetails}
                          </p>
                        </div>
                      )}
                    </MinimalCard>
                  )
                })}
              </div>
            </Container>
          </SectionWrapper>

          <Divider spacing="md" />
        </>
      )}

      {/* =========================================================================
          09 // CHALLENGES & SOLUTIONS
         ========================================================================= */}
      {challenges.length > 0 && (
        <>
          <SectionWrapper spacing="md" surface="transparent">
            <Container size="xl">
              <SectionHeading
                eyebrow="09 // PROBLEM RESOLUTION"
                title="Technical Challenges & Solutions"
                subtitle="Practical engineering hurdles encountered during development and how they were systematically resolved."
              />

              <div className="mt-8">
                <ProjectChallenges challenges={challenges} />
              </div>
            </Container>
          </SectionWrapper>

          <Divider spacing="md" />
        </>
      )}

      {/* =========================================================================
          10 // RESULTS & CURRENT STATUS
         ========================================================================= */}
      {results && (
        <>
          <SectionWrapper spacing="md" surface="transparent">
            <Container size="xl">
              <SectionHeading
                eyebrow="10 // EMPIRICAL VALIDATION"
                title="Results & Verification Status"
                subtitle="Honest benchmark measurements, execution characteristics, and prototype maturity status."
              />

              <div className="mt-8">
                <ProjectResults results={results} />
              </div>
            </Container>
          </SectionWrapper>

          <Divider spacing="md" />
        </>
      )}

      {/* =========================================================================
          11 // FUTURE IMPROVEMENTS
         ========================================================================= */}
      {futureImprovements.length > 0 && (
        <>
          <SectionWrapper spacing="md" surface="transparent">
            <Container size="xl">
              <SectionHeading
                eyebrow="11 // EVOLUTION ROADMAP"
                title="Planned Architectural Enhancements"
                subtitle="Strategic upgrades and scaling horizons to extend the prototype toward broader production deployment."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {futureImprovements.map((item) => (
                  <MinimalCard
                    key={item.title}
                    variant="default"
                    padding="lg"
                    className="flex flex-col justify-between hover:border-accent/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <EditorialLabel variant="outline" size="sm">
                          {item.horizon}
                        </EditorialLabel>
                      </div>

                      <h3 className="text-base font-bold text-foreground leading-snug mb-2">
                        {item.title}
                      </h3>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </MinimalCard>
                ))}
              </div>
            </Container>
          </SectionWrapper>

          <Divider spacing="md" />
        </>
      )}

      {/* =========================================================================
          12 // CIRCULAR NAVIGATION LOOP
         ========================================================================= */}
      {navigation && (
        <SectionWrapper spacing="md" surface="transparent" className="pb-16 sm:pb-24">
          <Container size="xl">
            <ProjectNavigation navigation={navigation} />
          </Container>
        </SectionWrapper>
      )}
    </article>
  )
}
