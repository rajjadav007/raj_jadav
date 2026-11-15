import { cn } from '@/lib/utils'

export function PageWrapper({
  children,
  withGrid = true,
  className,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={cn(
        'relative min-h-screen w-full bg-background text-foreground selection:bg-accent/20 selection:text-accent',
        withGrid && 'bg-grid-pattern',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
