import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

const sizeClasses = {
  sm: 'h-8 px-2.5 text-xs',
  md: 'h-9 px-3 text-xs',
  lg: 'h-10 px-4 text-sm',
}

const iconSizes = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-4.5 w-4.5',
}

export function ThemeToggle({
  variant = 'icon',
  size = 'md',
  className,
  ...props
}) {
  const { toggleTheme, setTheme, isDark } = useTheme()

  if (variant === 'segmented') {
    return (
      <div
        className={cn(
          'inline-flex items-center rounded-sm border border-border bg-secondary/60 p-0.5 font-mono text-xs uppercase tracking-wider',
          className
        )}
        role="group"
        aria-label="Theme selection"
        {...props}
      >
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={cn(
            'flex items-center gap-1.5 rounded-[2px] px-2.5 py-1 font-semibold transition-all duration-150',
            !isDark
              ? 'bg-card text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Sun className="h-3 w-3" />
          <span>Light</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={cn(
            'flex items-center gap-1.5 rounded-[2px] px-2.5 py-1 font-semibold transition-all duration-150',
            isDark
              ? 'bg-card text-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Moon className="h-3 w-3" />
          <span>Dark</span>
        </button>
      </div>
    )
  }

  if (variant === 'labeled') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        className={cn(
          'inline-flex items-center gap-2 rounded-sm border border-border bg-card/80 font-mono font-semibold uppercase tracking-wider text-foreground hover:border-accent hover:text-accent transition-all duration-150 active:scale-95',
          sizeClasses[size] || sizeClasses.md,
          className
        )}
        {...props}
      >
        {isDark ? (
          <>
            <Sun className={iconSizes[size] || iconSizes.md} />
            <span>Light</span>
          </>
        ) : (
          <>
            <Moon className={iconSizes[size] || iconSizes.md} />
            <span>Dark</span>
          </>
        )}
      </button>
    )
  }

  // Default 'icon' variant
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={cn(
        'inline-flex items-center justify-center rounded-sm border border-border bg-card/80 text-foreground hover:border-accent hover:text-accent transition-all duration-150 active:scale-95 aspect-square',
        sizeClasses[size] || sizeClasses.md,
        className
      )}
      {...props}
    >
      {isDark ? (
        <Sun className={iconSizes[size] || iconSizes.md} />
      ) : (
        <Moon className={iconSizes[size] || iconSizes.md} />
      )}
    </button>
  )
}
