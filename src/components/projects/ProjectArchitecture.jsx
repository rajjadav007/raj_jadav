import { Terminal, Cpu } from 'lucide-react'
import { MinimalCard, EditorialLabel, OutlineTag } from '@/components/ui'

export function ProjectArchitecture({ architecture }) {
  if (!architecture) return null

  const { asciiDiagram, stages = [] } = architecture

  return (
    <div className="space-y-8">
      {/* ASCII Architectural Data Flow Terminal */}
      {asciiDiagram && (
        <div className="relative overflow-hidden rounded-md border border-border bg-card shadow-sm">
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between border-b border-border/80 bg-secondary/70 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="ml-2 font-mono text-xs uppercase tracking-wider text-muted-foreground inline-flex items-center gap-1.5">
                <Terminal className="h-3 w-3 text-accent" />
                SYSTEM_PIPELINE_ARCHITECTURE.SPEC
              </span>
            </div>
            <EditorialLabel variant="accent" size="sm">
              DATA FLOW
            </EditorialLabel>
          </div>

          {/* Terminal Code Canvas */}
          <div className="overflow-x-auto p-4 sm:p-6 bg-card/90">
            <pre className="font-mono text-[11px] sm:text-xs leading-relaxed text-foreground/90 whitespace-pre">
              {asciiDiagram.trim()}
            </pre>
          </div>
        </div>
      )}

      {/* Sequential Pipeline Stages Grid */}
      {stages.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Sequential Pipeline Stages
            </h3>
            <span className="font-mono text-xs text-muted-foreground">
              {stages.length} Verified Stages
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stages.map((stage) => (
              <MinimalCard
                key={stage.step}
                variant="default"
                padding="md"
                className="flex flex-col justify-between hover:border-accent/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <EditorialLabel variant="accent" size="sm">
                      STAGE {stage.step}
                    </EditorialLabel>
                    {stage.tech && (
                      <OutlineTag size="sm" variant="default" className="text-[10px]">
                        <Cpu className="h-2.5 w-2.5 mr-1 text-accent" />
                        {stage.tech}
                      </OutlineTag>
                    )}
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-tight text-foreground leading-snug">
                    {stage.title}
                  </h4>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </MinimalCard>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
