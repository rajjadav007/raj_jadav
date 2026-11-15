import { cn } from '@/lib/utils'

const alignClasses = {
  left: 'text-left items-start',
  center: 'text-center items-center',
  right: 'text-right items-end',
}

const titleSizeClasses = {
  sm: 'text-xl sm:text-2xl',
  md: 'text-2xl sm:text-3xl',
  lg: 'text-3xl sm:text-4xl md:text-5xl',
  xl: 'text-4xl sm:text-5xl md:text-6xl',
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = 'left',
  level = 2,
  size = 'lg',
  actions,
  className,
  ...props
}) {
  const HeadingTag = `h${Math.min(Math.max(level, 1), 6)}`

  return (
    <div
      className={cn(
        'flex flex-col gap-3',
        alignClasses[align] || alignClasses.left,
        className
      )}
      {...props}
    >
      <div className="flex w-full items-center justify-between gap-4">
        <div className={cn('flex flex-col gap-2', alignClasses[align])}>
          {eyebrow && (
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{eyebrow}</span>
            </div>
          )}

          <HeadingTag
            className={cn(
              'font-black uppercase tracking-tight text-foreground leading-[1.08]',
              titleSizeClasses[size] || titleSizeClasses.lg
            )}
          >
            {title}
          </HeadingTag>
        </div>

        {actions && (
          <div className="flex flex-shrink-0 items-center gap-3">
            {actions}
          </div>
        )}
      </div>

      {subtitle && (
        <p className="max-w-3xl text-sm md:text-base font-normal text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
