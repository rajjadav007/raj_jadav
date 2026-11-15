import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

const colorClasses = {
  foreground: 'text-foreground hover:text-accent',
  accent: 'text-accent hover:text-accent-dark',
  muted: 'text-muted-foreground hover:text-foreground',
}

const underlineClasses = {
  hover: 'underline-offset-4 hover:underline',
  always: 'underline underline-offset-4',
  none: 'no-underline',
}

export function TextLink({
  children,
  to,
  href,
  arrow = 'none',
  underline = 'hover',
  color = 'foreground',
  external = false,
  className,
  ...props
}) {
  const commonClasses = cn(
    'group inline-flex items-center gap-1.5 font-mono text-xs md:text-sm font-semibold uppercase tracking-wider transition-colors duration-150',
    colorClasses[color] || colorClasses.foreground,
    underlineClasses[underline] || underlineClasses.hover,
    className
  )

  const renderArrow = () => {
    switch (arrow) {
      case 'right':
        return (
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        )
      case 'diagonal':
        return (
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )
      case 'left':
        return (
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
        )
      case 'none':
      default:
        return null
    }
  }

  const content = (
    <>
      {arrow === 'left' && renderArrow()}
      <span>{children}</span>
      {arrow !== 'left' && renderArrow()}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={commonClasses} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={commonClasses}
      {...props}
    >
      {content}
    </a>
  )
}
