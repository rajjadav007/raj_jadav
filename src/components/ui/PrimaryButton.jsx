import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const variantClasses = {
  solid: 'bg-primary text-primary-foreground hover:bg-accent hover:text-white',
  accent: 'bg-accent text-white hover:bg-accent-dark',
}

const sizeClasses = {
  sm: 'h-8 px-3 text-xs tracking-wider',
  md: 'h-10 px-4 text-xs tracking-editorial font-bold',
  lg: 'h-12 px-6 text-sm tracking-ultra-wide font-bold',
}

export function PrimaryButton({
  children,
  variant = 'solid',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  to,
  href,
  onClick,
  className,
  ...props
}) {
  const commonClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-sm font-mono uppercase transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
    variantClasses[variant] || variantClasses.solid,
    sizeClasses[size] || sizeClasses.md,
    (disabled || loading) && 'pointer-events-none opacity-50 cursor-not-allowed',
    className
  )

  const content = (
    <>
      {loading ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      ) : (
        icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  )

  if (to && !disabled) {
    return (
      <Link to={to} className={commonClasses} {...props}>
        {content}
      </Link>
    )
  }

  if (href && !disabled) {
    return (
      <a href={href} className={commonClasses} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      disabled={disabled || loading}
      onClick={onClick}
      className={commonClasses}
      {...props}
    >
      {content}
    </button>
  )
}
