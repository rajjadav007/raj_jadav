import { cn } from '@/lib/utils'

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
}

export function Container({
  children,
  size = 'xl',
  className,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size] || sizeClasses.xl,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
