import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react'
import { MinimalCard, EditorialLabel, GlassSurface } from '@/components/ui'

export function ProjectResults({ results }) {
  if (!results) return null

  const {
    statusBadge = 'Verified Prototype',
    statusDescription,
    metrics = [],
    benchmarkNote,
  } = results

  return (
    <div className="space-y-8">
      {/* Current Maturity & Status Banner */}
      <GlassSurface
        intensity="subtle"
        elevation="none"
        rounded="sm"
        className="p-5 border border-border"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
              Current Deployment Maturity
            </span>
          </div>
          <EditorialLabel
            variant="accent"
            size="sm"
            indicator="dot"
            pulse={true}
          >
            {statusBadge}
          </EditorialLabel>
        </div>

        {statusDescription && (
          <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {statusDescription}
          </p>
        )}
      </GlassSurface>

      {/* Verified Performance Metrics Grid */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <MinimalCard
              key={metric.label}
              variant="default"
              padding="md"
              className="flex flex-col justify-between hover:border-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                    {metric.label}
                  </span>
                  {metric.verified && (
                    <span
                      title="Empirically verified on local testbed"
                      className="inline-flex items-center text-accent"
                    >
                      <CheckCircle2 className="h-3 w-3" />
                    </span>
                  )}
                </div>

                <div className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground font-mono">
                  {metric.value}
                </div>
              </div>

              {metric.note && (
                <p className="mt-3 text-[11px] text-muted-foreground leading-relaxed pt-3 border-t border-border/60">
                  {metric.note}
                </p>
              )}
            </MinimalCard>
          ))}
        </div>
      )}

      {/* Honest Verification & Benchmark Notice */}
      {benchmarkNote && (
        <div className="flex items-start gap-3 rounded-sm border border-border/80 bg-secondary/40 p-4 text-xs text-muted-foreground">
          <Info className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-foreground block">
              Integrity & Benchmark Clarification
            </span>
            <p className="leading-relaxed">
              {benchmarkNote}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
