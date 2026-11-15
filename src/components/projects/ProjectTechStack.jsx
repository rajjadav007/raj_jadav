import { Code2, CheckCircle2 } from 'lucide-react'
import { MinimalCard, OutlineTag } from '@/components/ui'

export function ProjectTechStack({ techStack }) {
  if (!techStack || !techStack.categories) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {techStack.categories.map((cat, idx) => (
        <MinimalCard
          key={cat.name || idx}
          variant="default"
          padding="lg"
          className="flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Code2 className="h-4 w-4 text-accent" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                {cat.name}
              </h3>
            </div>

            {cat.description && (
              <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                {cat.description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
            {cat.technologies.map((tech) => (
              <OutlineTag
                key={tech}
                size="md"
                variant="default"
                icon={<CheckCircle2 className="h-3 w-3 text-accent" />}
              >
                {tech}
              </OutlineTag>
            ))}
          </div>
        </MinimalCard>
      ))}
    </div>
  )
}
