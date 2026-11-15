import { personalData } from '@/data/personal'
import { socialLinks } from '@/data/social'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 bg-muted/20">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div>
          <span className="font-semibold text-foreground">{personalData.name}</span> — {personalData.title}
          <p className="text-[11px] mt-0.5 text-muted-foreground/80">{personalData.tagline}</p>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.ariaLabel}
              className="hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="text-[11px] font-mono text-muted-foreground/60">
          © {currentYear} {personalData.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
