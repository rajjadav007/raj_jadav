import { Link, useLocation } from 'react-router-dom'
import { personalData } from '@/data/personal'
import { projectsData } from '@/data/projects'
import { Terminal, Code2 } from 'lucide-react'

export function Header() {
  const location = useLocation()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded border bg-muted text-foreground transition-colors group-hover:border-primary">
            <Terminal className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight uppercase">{personalData.name}</span>
            <span className="text-[10px] text-muted-foreground tracking-wider uppercase">{personalData.title}</span>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-xs uppercase tracking-wider font-medium">
          <Link
            to="/"
            className={`transition-colors hover:text-foreground ${
              location.pathname === '/' ? 'text-foreground font-semibold' : 'text-muted-foreground'
            }`}
          >
            Overview
          </Link>

          <div className="hidden md:flex items-center gap-4 border-l pl-4 border-border/80">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                to={project.route}
                className={`transition-colors hover:text-foreground text-[11px] ${
                  location.pathname === project.route ? 'text-foreground font-semibold' : 'text-muted-foreground'
                }`}
              >
                {project.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-border bg-muted/40 text-[10px] text-muted-foreground font-mono">
            <Code2 className="h-3 w-3 text-emerald-600" />
            <span>Phase 1 Architecture</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
