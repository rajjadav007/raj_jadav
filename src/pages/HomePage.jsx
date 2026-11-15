import { Link } from 'react-router-dom'
import { personalData } from '@/data/personal'
import { projectsData } from '@/data/projects'
import { ArrowRight, CheckCircle2, Cpu, Compass } from 'lucide-react'

export function HomePage() {
  return (
    <div className="container py-16 md:py-24 max-w-4xl">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 rounded-md border border-border/80 bg-muted/40 px-3 py-1 text-xs font-mono uppercase tracking-wider text-muted-foreground">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Phase 1 Architecture Complete
        </div>

        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-foreground">
          {personalData.name}
        </h1>

        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          {personalData.tagline}
        </p>

        <p className="text-sm text-muted-foreground/80 max-w-2xl leading-relaxed">
          {personalData.bio}
        </p>

        <div className="pt-8 border-t border-border/60">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4 flex items-center gap-2">
            <Compass className="h-4 w-4" />
            Project Routes (Phase 1 Placeholders)
          </h2>

          <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                to={project.route}
                className="group flex flex-col justify-between p-4 rounded border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">{project.category}</span>
                  <h3 className="text-sm font-bold mt-1 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-medium text-foreground">
                  <span>View Placeholder</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-border/60">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4 flex items-center gap-2">
            <Cpu className="h-4 w-4" />
            Architectural Guarantees
          </h2>

          <ul className="grid gap-2 text-xs text-muted-foreground sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
              <span>Pure JavaScript (ES6+ & JSX) — Zero TypeScript</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
              <span>Vite + React 18 + React Router v6</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
              <span>Tailwind CSS + Shadcn UI JS configuration</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
              <span>Decoupled centralized content architecture</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
