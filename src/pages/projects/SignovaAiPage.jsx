import { Link } from 'react-router-dom'
import { ArrowLeft, Clock, Tag } from 'lucide-react'
import { projectsData } from '@/data/projects'

export function SignovaAiPage() {
  const project = projectsData.find((p) => p.id === 'signova-ai')

  return (
    <div className="container py-12 md:py-20 max-w-3xl">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Overview
      </Link>

      <div className="space-y-6">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-0.5 text-[11px] font-mono text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>Phase 1 Route Placeholder</span>
        </div>

        <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-foreground">
          {project?.title || 'Signova AI'}
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed">
          {project?.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project?.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-muted text-muted-foreground border border-border/60"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-dashed border-border p-8 bg-muted/20 text-center">
          <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
            Full Case Study Implementation Scheduled for Subsequent Phases
          </p>
          <p className="text-xs text-muted-foreground/80 mt-1 max-w-md mx-auto">
            This route is wired into the application router and verifies client-side navigation.
          </p>
        </div>
      </div>
    </div>
  )
}
