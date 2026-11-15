import { cn } from '@/lib/utils'

const variantClasses = {
  default: 'border border-border/80 bg-secondary/60 text-foreground hover:border-accent hover:text-accent',
  accent: 'border border-accent/40 bg-accent/10 text-accent hover:bg-accent/20',
  filled: 'border-transparent bg-secondary text-foreground hover:bg-secondary/80',
  interactive: 'border border-border bg-card text-foreground hover:border-accent hover:text-accent cursor-pointer active:scale-95 shadow-sm',
}

const sizeClasses = {
  sm: 'text-[10px] px-2 py-0.5 tracking-wider',
  md: 'text-[11px] px-2.5 py-1 tracking-widest',
}

export function OutlineTag({
  children,
  variant = 'default',
  size = 'md',
  icon,
  onClick,
  className,
  ...props
}) {
  const isButton = typeof onClick === 'function' || variant === 'interactive'
  const Component = isButton ? 'button' : 'span'

  return (
    <Component
      type={isButton ? 'button' : undefined}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm font-mono uppercase transition-all duration-150',
        variantClasses[variant] || variantClasses.default,
        sizeClasses[size] || sizeClasses.md,
        className
      )}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </Component>
  )
}
