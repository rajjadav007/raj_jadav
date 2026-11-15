import { cn } from '@/lib/utils'

const variantClasses = {
  default: 'border-border/80',
  subtle: 'border-border/40',
  strong: 'border-foreground/30',
  dashed: 'border-dashed border-border',
}

const horizontalSpacingClasses = {
  none: 'my-0',
  sm: 'my-4',
  md: 'my-8',
  lg: 'my-12',
}

const verticalSpacingClasses = {
  none: 'mx-0',
  sm: 'mx-2',
  md: 'mx-4',
  lg: 'mx-6',
}

export function Divider({
  orientation = 'horizontal',
  variant = 'default',
  spacing = 'md',
  label,
  className,
  ...props
}) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          'inline-block h-full min-h-[1.25rem] w-[1px] border-l align-middle',
          variantClasses[variant] || variantClasses.default,
          verticalSpacingClasses[spacing] || verticalSpacingClasses.md,
          className
        )}
        {...props}
      />
    )
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn(
          'relative flex w-full items-center justify-center',
          horizontalSpacingClasses[spacing] || horizontalSpacingClasses.md,
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'w-full border-t',
            variantClasses[variant] || variantClasses.default
          )}
        />
        <span className="absolute bg-background px-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
      </div>
    )
  }

  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        'w-full border-0 border-t',
        variantClasses[variant] || variantClasses.default,
        horizontalSpacingClasses[spacing] || horizontalSpacingClasses.md,
        className
      )}
      {...props}
    />
  )
}
