import { cn } from '@/lib/utils'

const intensityClasses = {
  subtle: 'glass-surface-subtle',
  medium: 'glass-surface',
  strong: 'glass-surface-elevated',
}

const elevationClasses = {
  none: 'shadow-none',
  sm: 'shadow-sm',
  md: 'shadow-md',
  lg: 'shadow-lg',
}

const roundedClasses = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}

export function GlassSurface({
  children,
  intensity = 'medium',
  elevation = 'sm',
  rounded = 'md',
  bordered = true,
  as: Component = 'div',
  className,
  ...props
}) {
  return (
    <Component
      className={cn(
        'relative transition-all duration-200',
        intensityClasses[intensity] || intensityClasses.medium,
        elevationClasses[elevation] || elevationClasses.sm,
        roundedClasses[rounded] || roundedClasses.md,
        !bordered && '!border-0',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
