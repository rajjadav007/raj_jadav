import { Container } from './Container'
import { cn } from '@/lib/utils'

export function NavigationSurface({
  children,
  sticky = true,
  glass = true,
  bordered = true,
  maxWidth = 'xl',
  className,
  ...props
}) {
  return (
    <header
      className={cn(
        'w-full z-40 transition-all duration-200',
        sticky && 'sticky top-0',
        glass ? 'glass-surface' : 'bg-background',
        bordered && 'border-b border-border/80',
        className
      )}
      {...props}
    >
      <Container size={maxWidth} className="flex h-16 items-center justify-between">
        {children}
      </Container>
    </header>
  )
}
