import { cn } from '@/lib/utils'

const spacingClasses = {
  none: 'py-0',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-24 md:py-32',
}

const surfaceClasses = {
  transparent: 'bg-transparent',
  primary: 'bg-card text-card-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
}

export function SectionWrapper({
  children,
  spacing = 'lg',
  surface = 'transparent',
  bordered = false,
  as: Component = 'section',
  id,
  className,
  ...props
}) {
  return (
    <Component
      id={id}
      className={cn(
        'relative w-full',
        spacingClasses[spacing] || spacingClasses.lg,
        surfaceClasses[surface] || surfaceClasses.transparent,
        bordered && 'border-b border-border/80',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
