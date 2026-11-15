import { cn } from '@/lib/utils'

const variantClasses = {
  default: 'border border-border bg-card text-card-foreground shadow-sm',
  interactive: 'border border-border bg-card text-card-foreground shadow-sm hover:border-accent/60 hover:shadow-md cursor-pointer transition-all duration-200 active:scale-[0.99]',
  flat: 'border-transparent bg-secondary text-secondary-foreground',
  ghost: 'border border-border/60 bg-transparent text-foreground',
}

const paddingClasses = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
}

export function MinimalCard({
  children,
  variant = 'default',
  padding = 'md',
  rounded = 'sm',
  as: Component = 'div',
  className,
  ...props
}) {
  return (
    <Component
      className={cn(
        'relative overflow-hidden transition-colors',
        variantClasses[variant] || variantClasses.default,
        paddingClasses[padding] || paddingClasses.md,
        roundedClasses[rounded] || roundedClasses.sm,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
