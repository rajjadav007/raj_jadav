import { cn } from '@/lib/utils'

const variantClasses = {
  default: 'border border-border bg-secondary/80 text-foreground',
  accent: 'border border-accent/40 bg-accent/10 text-accent dark:bg-accent/20',
  muted: 'border border-border/60 bg-muted/40 text-muted-foreground',
  outline: 'border border-border bg-transparent text-foreground',
  solid: 'border-transparent bg-foreground text-background',
}

const sizeClasses = {
  sm: 'text-[10px] px-2 py-0.5 tracking-wider',
  md: 'text-xs px-2.5 py-1 tracking-editorial',
  lg: 'text-sm px-3 py-1.5 tracking-ultra-wide',
}

export function EditorialLabel({
  children,
  variant = 'default',
  size = 'md',
  indicator = 'none',
  dotColor = 'bg-accent',
  pulse = false,
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-sm font-mono font-bold uppercase transition-colors',
        variantClasses[variant] || variantClasses.default,
        sizeClasses[size] || sizeClasses.md,
        className
      )}
      {...props}
    >
      {indicator === 'dot' && (
        <span className="relative flex h-2 w-2">
          {pulse && (
            <span
              className={cn(
                'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                dotColor
              )}
            />
          )}
          <span className={cn('relative inline-flex h-2 w-2 rounded-full', dotColor)} />
        </span>
      )}
      <span>{children}</span>
    </span>
  )
}
