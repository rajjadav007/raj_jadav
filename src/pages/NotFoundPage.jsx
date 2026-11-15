import { Link } from 'react-router-dom'
import { ArrowLeft, AlertCircle } from 'lucide-react'

export function NotFoundPage() {
  return (
    <div className="container py-24 text-center max-w-md">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive mb-4">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h1 className="text-4xl font-black font-mono tracking-tight text-foreground">404</h1>
      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mt-2">
        Page Not Found
      </p>
      <p className="text-xs text-muted-foreground/80 mt-2">
        The requested URL was not found on this server.
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Return to Home
        </Link>
      </div>
    </div>
  )
}
