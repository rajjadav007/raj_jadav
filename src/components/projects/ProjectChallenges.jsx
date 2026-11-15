import { AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
import { MinimalCard, EditorialLabel } from '@/components/ui'

export function ProjectChallenges({ challenges = [] }) {
  if (!challenges || challenges.length === 0) return null

  return (
    <div className="space-y-6">
      {challenges.map((item, idx) => (
        <MinimalCard
          key={item.challenge || idx}
          variant="default"
          padding="lg"
          className="border-border hover:border-border/90 transition-colors"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* The Challenge Column */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <EditorialLabel variant="muted" size="sm">
                  CHALLENGE {String(idx + 1).padStart(2, '0')}
                </EditorialLabel>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 mt-1 flex-shrink-0" />
                <span>{item.challenge}</span>
              </h3>

              <div className="rounded-sm border border-border/80 bg-secondary/50 p-3.5">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-foreground block mb-1">
                  Root Issue & Bottleneck
                </span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.impact}
                </p>
              </div>
            </div>

            {/* The Solution Column */}
            <div className="space-y-3 lg:border-l lg:border-border/80 lg:pl-8">
              <div className="flex items-center gap-2">
                <EditorialLabel variant="accent" size="sm">
                  ENGINEERED SOLUTION
                </EditorialLabel>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-foreground leading-relaxed flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{item.solution}</span>
                </p>
              </div>

              {item.outcome && (
                <div className="rounded-sm border border-accent/20 bg-accent/5 p-3.5">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-accent block mb-1 flex items-center gap-1">
                    <ArrowRight className="h-2.5 w-2.5" />
                    Verified Technical Outcome
                  </span>
                  <p className="text-xs text-foreground/90 leading-relaxed font-medium">
                    {item.outcome}
                  </p>
                </div>
              )}
            </div>
          </div>
        </MinimalCard>
      ))}
    </div>
  )
}
