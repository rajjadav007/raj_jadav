import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight, Grid } from 'lucide-react'
import { MinimalCard, EditorialLabel, SecondaryButton } from '@/components/ui'

export function ProjectNavigation({ navigation }) {
  const shouldReduceMotion = useReducedMotion()
  if (!navigation) return null

  const { prev, next } = navigation

  return (
    <div className="space-y-8">
      {/* Top action row: Back to Portfolio */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border/80">
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Project Case Studies Index
        </span>

        <motion.div
          whileHover={shouldReduceMotion ? {} : { y: -2 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
        >
          <SecondaryButton
            as={Link}
            to="/"
            size="sm"
            className="w-full sm:w-auto"
          >
            <Grid className="h-3.5 w-3.5 mr-2" />
            Back to Portfolio Overview
          </SecondaryButton>
        </motion.div>
      </div>

      {/* Prev / Next Circular Navigation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous Project Card */}
        {prev ? (
          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <Link
              to={prev.route}
              className="group block h-full focus-visible:outline-none"
              aria-label={`Previous Project Case Study: ${prev.title}`}
            >
              <MinimalCard
                variant="interactive"
                padding="lg"
                className="h-full flex flex-col justify-between group-hover:border-accent transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowLeft className="h-3.5 w-3.5 text-accent transition-transform duration-200 group-hover:-translate-x-1" />
                    <EditorialLabel variant="muted" size="sm">
                      PREVIOUS CASE STUDY
                    </EditorialLabel>
                  </div>

                  {prev.category && (
                    <span className="font-mono text-[11px] text-muted-foreground block mb-1">
                      {prev.category}
                    </span>
                  )}

                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {prev.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>View Full Study</span>
                  <span className="text-accent">&larr;</span>
                </div>
              </MinimalCard>
            </Link>
          </motion.div>
        ) : (
          <div />
        )}

        {/* Next Project Card */}
        {next ? (
          <motion.div
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <Link
              to={next.route}
              className="group block h-full focus-visible:outline-none"
              aria-label={`Next Project Case Study: ${next.title}`}
            >
              <MinimalCard
                variant="interactive"
                padding="lg"
                className="h-full flex flex-col justify-between group-hover:border-accent transition-colors text-left md:text-right"
              >
                <div>
                  <div className="flex items-center gap-2 md:justify-end mb-2">
                    <EditorialLabel variant="accent" size="sm">
                      NEXT CASE STUDY
                    </EditorialLabel>
                    <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform duration-200 group-hover:translate-x-1" />
                  </div>

                  {next.category && (
                    <span className="font-mono text-[11px] text-muted-foreground block mb-1">
                      {next.category}
                    </span>
                  )}

                  <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {next.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="text-accent">&rarr;</span>
                  <span>View Full Study</span>
                </div>
              </MinimalCard>
            </Link>
          </motion.div>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}
