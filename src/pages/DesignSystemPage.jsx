import { useState } from 'react'
import {
  Container,
  PageWrapper,
  SectionWrapper,
  SectionHeading,
  EditorialLabel,
  PrimaryButton,
  SecondaryButton,
  TextLink,
  OutlineTag,
  MinimalCard,
  GlassSurface,
  Divider,
  NavigationSurface,
  ThemeToggle,
} from '@/components/ui'
import {
  Palette,
  Type,
  Grid,
  Layers,
  Component as ComponentIcon,
  Sparkles,
  ArrowRight,
  Sliders,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react'

// Color tokens metadata per specification
const colorTokens = [
  {
    name: 'Background',
    hex: '#F8F7F3',
    cssVar: '--swiss-bg / --background',
    usage: 'Warm off-white background canvas for maximum reading comfort',
    lightPreview: '#F8F7F3',
    darkPreview: '#121211',
    textDark: true,
  },
  {
    name: 'Primary Text',
    hex: '#111111',
    cssVar: '--swiss-text-primary / --foreground',
    usage: 'High-contrast neutral primary text and architectural headings',
    lightPreview: '#111111',
    darkPreview: '#F8F7F3',
    textDark: false,
  },
  {
    name: 'Secondary Text',
    hex: '#686868',
    cssVar: '--swiss-text-secondary',
    usage: 'Editorial subheadings, secondary labels, and supporting metadata',
    lightPreview: '#686868',
    darkPreview: '#A09E96',
    textDark: false,
  },
  {
    name: 'Muted Text',
    hex: '#898989',
    cssVar: '--swiss-text-muted / --muted-foreground',
    usage: 'Technical timestamps, footnotes, and tertiary metadata tags',
    lightPreview: '#898989',
    darkPreview: '#73716A',
    textDark: false,
  },
  {
    name: 'Primary Accent',
    hex: '#0D9488',
    cssVar: '--swiss-accent / --accent',
    usage: 'Vibrant Teal 600 precision accent for links, buttons, and status dots',
    lightPreview: '#0D9488',
    darkPreview: '#14B8A6',
    textDark: false,
  },
  {
    name: 'Dark Accent',
    hex: '#0F766E',
    cssVar: '--swiss-accent-dark',
    usage: 'Teal 700 deep contrast state for hover rings and active interactions',
    lightPreview: '#0F766E',
    darkPreview: '#0D9488',
    textDark: false,
  },
  {
    name: 'Primary Surface',
    hex: '#FFFFFF',
    cssVar: '--swiss-surface-primary / --card',
    usage: 'Pure white surface wash for cards, elevated modals, and inputs',
    lightPreview: '#FFFFFF',
    darkPreview: '#191918',
    textDark: true,
  },
  {
    name: 'Secondary Surface',
    hex: '#F2F0EA',
    cssVar: '--swiss-surface-secondary / --secondary',
    usage: 'Warm tinted wash for tags, code blocks, and recessed containers',
    lightPreview: '#F2F0EA',
    darkPreview: '#222220',
    textDark: true,
  },
  {
    name: 'Border',
    hex: '#E5E2DA',
    cssVar: '--swiss-border / --border',
    usage: 'Architectural hairline separator rules and card boundary strokes',
    lightPreview: '#E5E2DA',
    darkPreview: '#2D2C28',
    textDark: true,
  },
]

export function DesignSystemPage() {
  const [btnLoading, setBtnLoading] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [tagSelection, setTagSelection] = useState(['React 18', 'Tailwind CSS'])
  const [activeGridStyle, setActiveGridStyle] = useState('bg-grid-pattern')

  const toggleTag = (tag) => {
    setTagSelection((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  return (
    <PageWrapper withGrid={activeGridStyle === 'bg-grid-pattern'}>
      {/* -------------------------------------------------------------
          1. HERO HEADER SECTION
          ------------------------------------------------------------- */}
      <SectionWrapper spacing="lg" bordered className="bg-card/40 backdrop-blur-sm">
        <Container size="xl">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <EditorialLabel variant="accent" size="md" indicator="dot" pulse>
                Swiss Editorial System // Phase 2 Foundation
              </EditorialLabel>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground hidden sm:inline">
                  Interactive Theme
                </span>
                <ThemeToggle variant="segmented" size="sm" />
              </div>
            </div>

            <div className="space-y-4 max-w-4xl">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.04]">
                Design System & Visual Foundation
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground font-medium leading-relaxed">
                The comprehensive visual language and pure React component architecture powering
                the Raj Jadav Personal Portfolio. Rooted in Swiss modernist typography, warm editorial
                substrates, modular grid rhythms, and selective liquid glass optics.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#tokens">
                <SecondaryButton size="sm" icon={<Palette className="h-3.5 w-3.5" />} iconPosition="left">
                  01 // Colors
                </SecondaryButton>
              </a>
              <a href="#typography">
                <SecondaryButton size="sm" icon={<Type className="h-3.5 w-3.5" />} iconPosition="left">
                  02 // Typography
                </SecondaryButton>
              </a>
              <a href="#grid-texture">
                <SecondaryButton size="sm" icon={<Grid className="h-3.5 w-3.5" />} iconPosition="left">
                  03 // Grid Texture
                </SecondaryButton>
              </a>
              <a href="#glass">
                <SecondaryButton size="sm" icon={<Layers className="h-3.5 w-3.5" />} iconPosition="left">
                  04 // Liquid Glass
                </SecondaryButton>
              </a>
              <a href="#primitives">
                <PrimaryButton size="sm" icon={<ComponentIcon className="h-3.5 w-3.5" />} iconPosition="left">
                  05 // 14 Primitives
                </PrimaryButton>
              </a>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* -------------------------------------------------------------
          2. COLOR TOKENS & SWATCHES (#tokens)
          ------------------------------------------------------------- */}
      <SectionWrapper id="tokens" spacing="xl" bordered>
        <Container size="xl">
          <SectionHeading
            eyebrow="01 // SPECIFICATION"
            title="Design Tokens & Color Palette"
            subtitle="The 9 canonical Swiss Editorial color tokens mapped with high precision into CSS custom properties and Tailwind CSS alpha-compatible utilities."
            actions={
              <EditorialLabel variant="muted" size="sm">
                9 Exact Hex Values
              </EditorialLabel>
            }
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {colorTokens.map((token) => (
              <MinimalCard
                key={token.name}
                variant="interactive"
                padding="none"
                rounded="sm"
                className="group flex flex-col justify-between"
              >
                <div>
                  {/* Swatch preview bar */}
                  <div
                    className="h-28 w-full border-b border-border/80 p-4 flex flex-col justify-between transition-transform duration-200 group-hover:scale-[1.01]"
                    style={{ backgroundColor: token.hex }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="font-mono text-[11px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: token.textDark ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.2)',
                          color: token.textDark ? '#111111' : '#FFFFFF',
                        }}
                      >
                        {token.hex}
                      </span>
                      <span
                        className="text-[10px] font-mono uppercase tracking-wider font-semibold opacity-75"
                        style={{ color: token.textDark ? '#111111' : '#FFFFFF' }}
                      >
                        Light Default
                      </span>
                    </div>

                    <span
                      className="font-bold text-sm uppercase tracking-tight"
                      style={{ color: token.textDark ? '#111111' : '#FFFFFF' }}
                    >
                      {token.name}
                    </span>
                  </div>

                  {/* Metadata body */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-muted-foreground uppercase">Token Variable</span>
                      <code className="bg-secondary px-1.5 py-0.5 rounded text-[11px] text-foreground font-semibold">
                        {token.cssVar}
                      </code>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {token.usage}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2.5 bg-secondary/40 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>HEX: {token.hex}</span>
                  <span className="text-accent uppercase">Verified</span>
                </div>
              </MinimalCard>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* -------------------------------------------------------------
          3. SWISS BOLD UPPERCASE TYPOGRAPHY (#typography)
          ------------------------------------------------------------- */}
      <SectionWrapper id="typography" spacing="xl" bordered surface="secondary">
        <Container size="xl">
          <SectionHeading
            eyebrow="02 // TYPOGRAPHY"
            title="Swiss Bold Uppercase Scales"
            subtitle="Anchored in modernist Swiss poster design. Characterized by stark uppercase display titles, exaggerated label letter-spacing, and high legibility monospaced kickers."
            actions={
              <div className="flex items-center gap-2">
                <OutlineTag variant="filled" size="sm">Inter</OutlineTag>
                <OutlineTag variant="filled" size="sm">JetBrains Mono</OutlineTag>
              </div>
            }
          />

          <div className="mt-10 space-y-8">
            {/* Display Hero Specimen */}
            <MinimalCard variant="default" padding="lg">
              <div className="space-y-3 border-b border-border/80 pb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-accent font-bold">
                  Scale: Display Hero (font-black uppercase tracking-tight)
                </span>
                <p className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-[1.04]">
                  ARTIFICIAL INTELLIGENCE & SYSTEMS ARCHITECTURE
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-2">
                  <span>Font: Inter Black (900)</span>
                  <span>•</span>
                  <span>Leading: 1.04</span>
                  <span>•</span>
                  <span>Tracking: -0.025em</span>
                </div>
              </div>

              {/* Headings Hierarchy */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Heading 1 — 36px/48px</span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-foreground">
                      MACHINE LEARNING SYSTEMS
                    </h1>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Heading 2 — 28px/36px</span>
                    <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-foreground">
                      AUTONOMOUS AGENT NETWORKS
                    </h2>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Heading 3 — 20px/28px</span>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground">
                      NEURAL EMBEDDING PIPELINES
                    </h3>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Heading 4 — 16px/24px</span>
                    <h4 className="text-base sm:text-lg font-bold uppercase tracking-wide text-foreground">
                      REAL-TIME INFERENCE LATENCY
                    </h4>
                  </div>
                </div>

                {/* Body & Monospace Scales */}
                <div className="space-y-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Lead Paragraph — 18px</span>
                    <p className="text-lg font-medium text-foreground leading-relaxed">
                      Engineering high-throughput, production-grade artificial intelligence systems
                      with rigorous empirical verification and mathematical precision.
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Body Prose — 14px</span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every architectural decision balances algorithmic efficiency against latency budgets.
                      Through rigorous benchmark loops and telemetry collection, models deliver reliable
                      value under real-world constraints.
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase text-muted-foreground tracking-widest">Monospace Editorial Tracking</span>
                    <div className="space-y-1.5 pt-1">
                      <div className="font-mono text-xs uppercase tracking-editorial text-foreground font-bold">
                        TRACKING-EDITORIAL: 0.15EM // KICKER SPECIMEN
                      </div>
                      <div className="font-mono text-xs uppercase tracking-ultra-wide text-accent font-bold">
                        TRACKING-ULTRA-WIDE: 0.20EM // STATUS SPECIMEN
                      </div>
                      <div className="font-mono text-xs uppercase tracking-super-wide text-muted-foreground font-semibold">
                        TRACKING-SUPER-WIDE: 0.25EM // METADATA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MinimalCard>
          </div>
        </Container>
      </SectionWrapper>

      {/* -------------------------------------------------------------
          4. GRID TEXTURE & ATMOSPHERIC EFFECTS (#grid-texture)
          ------------------------------------------------------------- */}
      <SectionWrapper id="grid-texture" spacing="xl" bordered>
        <Container size="xl">
          <SectionHeading
            eyebrow="03 // ATMOSPHERICS"
            title="Subtle CSS Square Grid Texture"
            subtitle="Pure CSS square repeating grid patterns giving physical architectural texture to the canvas. Features standard 32px editorial matrix, 16px compact grid, 48px monumental grid, and radial fade masks."
            actions={
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setActiveGridStyle('bg-grid-pattern')}
                  className={`px-2.5 py-1 text-xs font-mono uppercase rounded-sm border transition-colors ${
                    activeGridStyle === 'bg-grid-pattern'
                      ? 'border-accent bg-accent/10 text-accent font-bold'
                      : 'border-border text-muted-foreground'
                  }`}
                >
                  32px Grid
                </button>
                <button
                  type="button"
                  onClick={() => setActiveGridStyle('bg-grid-sm')}
                  className={`px-2.5 py-1 text-xs font-mono uppercase rounded-sm border transition-colors ${
                    activeGridStyle === 'bg-grid-sm'
                      ? 'border-accent bg-accent/10 text-accent font-bold'
                      : 'border-border text-muted-foreground'
                  }`}
                >
                  16px Sm
                </button>
                <button
                  type="button"
                  onClick={() => setActiveGridStyle('bg-grid-lg')}
                  className={`px-2.5 py-1 text-xs font-mono uppercase rounded-sm border transition-colors ${
                    activeGridStyle === 'bg-grid-lg'
                      ? 'border-accent bg-accent/10 text-accent font-bold'
                      : 'border-border text-muted-foreground'
                  }`}
                >
                  48px Lg
                </button>
              </div>
            }
          />

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Live Interactive Grid Canvas */}
            <div
              className={`h-64 rounded-sm border border-border ${activeGridStyle} p-6 flex flex-col justify-between relative overflow-hidden`}
            >
              <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur px-2.5 py-1 rounded border border-border text-xs font-mono uppercase">
                <Grid className="h-3.5 w-3.5 text-accent" />
                <span>Active Texture: {activeGridStyle}</span>
              </div>

              <div className="bg-card/90 backdrop-blur p-4 rounded border border-border max-w-sm">
                <p className="text-xs font-bold uppercase tracking-tight text-foreground">
                  Architectural Coordinate System
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  Hairline border opacity at 0.55 ensures subtle physical tactile depth without visual clutter or legibility interference.
                </p>
              </div>
            </div>

            {/* Radial Fade Mask Demo */}
            <div className="h-64 rounded-sm border border-border bg-grid-pattern relative overflow-hidden p-6 flex flex-col justify-between">
              <div className="absolute inset-0 bg-background mask-radial-subtle pointer-events-none" />

              <div className="relative z-10 inline-flex items-center gap-2 bg-card/90 backdrop-blur px-2.5 py-1 rounded border border-border text-xs font-mono uppercase">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span>Mask Utility: .mask-radial-subtle</span>
              </div>

              <div className="relative z-10 bg-card/90 backdrop-blur p-4 rounded border border-border max-w-sm">
                <p className="text-xs font-bold uppercase tracking-tight text-foreground">
                  Focal Reading Vignette
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  Radial gradients softly mask repeating lines around dense content zones, preserving text legibility.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* -------------------------------------------------------------
          4. SELECTIVE LIQUID GLASS SURFACES (#glass)
          ------------------------------------------------------------- */}
      <SectionWrapper id="glass" spacing="xl" bordered surface="secondary">
        <Container size="xl">
          <SectionHeading
            eyebrow="04 // OPTICS"
            title="Selective Liquid Glass Surfaces"
            subtitle="Selective frosted glass physical optics featuring backdrop blur, specular top-edge light highlights, and multi-stop elevation shadows."
            actions={
              <EditorialLabel variant="default" size="sm">
                Backdrop Filter Saturation
              </EditorialLabel>
            }
          />

          <div className="mt-10 relative rounded-md border border-border overflow-hidden p-8 sm:p-12 bg-grid-pattern">
            {/* Colorful underlying background accent shapes to reveal the glass refraction */}
            <div className="absolute top-10 left-12 h-32 w-32 rounded-full bg-accent/20 blur-2xl" />
            <div className="absolute bottom-10 right-20 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute top-1/2 left-1/3 h-24 w-60 rounded-full bg-amber-500/10 blur-xl" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Subtle Glass */}
              <GlassSurface intensity="subtle" elevation="sm" rounded="md" className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase font-bold text-foreground">
                    Subtle Glass
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">8px Blur</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Low-intensity wash with 8px backdrop blur and 45% surface alpha. Ideal for badge pills and ambient panels.
                </p>
                <div className="pt-2">
                  <code className="text-[10px] font-mono bg-background/50 px-2 py-1 rounded text-foreground">
                    .glass-surface-subtle
                  </code>
                </div>
              </GlassSurface>

              {/* Medium Glass (Standard) */}
              <GlassSurface intensity="medium" elevation="md" rounded="md" className="p-6 space-y-3 specular-highlight">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase font-bold text-foreground">
                    Medium Glass (Default)
                  </span>
                  <span className="text-[10px] font-mono text-accent uppercase font-bold">12px Blur</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Standard optical surface with 12px blur, 160% saturation boost, and an illuminated specular top hairline highlight.
                </p>
                <div className="pt-2">
                  <code className="text-[10px] font-mono bg-background/50 px-2 py-1 rounded text-foreground">
                    .glass-surface
                  </code>
                </div>
              </GlassSurface>

              {/* Elevated Glass */}
              <GlassSurface intensity="strong" elevation="lg" rounded="md" className="p-6 space-y-3 specular-highlight">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase font-bold text-foreground">
                    Elevated Glass
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">16px Blur</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-elevation frosted lens with 16px blur, 180% saturation, and an expansive multi-layer ambient shadow.
                </p>
                <div className="pt-2">
                  <code className="text-[10px] font-mono bg-background/50 px-2 py-1 rounded text-foreground">
                    .glass-surface-elevated
                  </code>
                </div>
              </GlassSurface>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* -------------------------------------------------------------
          5. 14 CORE UI COMPONENT PRIMITIVES GALLERY (#primitives)
          ------------------------------------------------------------- */}
      <SectionWrapper id="primitives" spacing="xl">
        <Container size="xl">
          <SectionHeading
            eyebrow="05 // COMPONENT LIBRARY"
            title="14 Core UI Component Primitives"
            subtitle="Pure React 18 component primitives styled exclusively with Tailwind CSS utility classes and cn(). Each primitive exposes clean polymorphic props, responsive variations, and accessible micro-interactions."
            actions={
              <EditorialLabel variant="accent" size="sm" indicator="dot">
                14 / 14 Implemented
              </EditorialLabel>
            }
          />

          <div className="mt-12 space-y-12">
            {/* 1 & 2 & 3: Layout Framing Primitives */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/80 pb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                  [01-03] Layout & Structure: Container, PageWrapper, SectionWrapper
                </span>
                <span className="font-mono text-[11px] text-muted-foreground uppercase">Structural</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <MinimalCard variant="default" padding="md" className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase text-foreground">Container</h4>
                  <p className="text-xs text-muted-foreground">
                    Responsive widths: <code>sm (max-w-3xl)</code>, <code>md (max-w-5xl)</code>, <code>lg (max-w-6xl)</code>, <code>xl (max-w-7xl)</code>, <code>full</code>.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono bg-secondary px-2 py-0.5 rounded text-foreground">
                      {'<Container size="xl" />'}
                    </span>
                  </div>
                </MinimalCard>

                <MinimalCard variant="default" padding="md" className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase text-foreground">PageWrapper</h4>
                  <p className="text-xs text-muted-foreground">
                    Canvas container with <code>min-h-screen</code>, warm off-white substrate, and optional <code>withGrid</code> toggle.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono bg-secondary px-2 py-0.5 rounded text-foreground">
                      {'<PageWrapper withGrid={true} />'}
                    </span>
                  </div>
                </MinimalCard>

                <MinimalCard variant="default" padding="md" className="space-y-2">
                  <h4 className="font-mono text-xs font-bold uppercase text-foreground">SectionWrapper</h4>
                  <p className="text-xs text-muted-foreground">
                    Architectural vertical rhythm with <code>spacing</code> (none, sm, md, lg, xl), surface washes, and boundary borders.
                  </p>
                  <div className="pt-2">
                    <span className="text-[11px] font-mono bg-secondary px-2 py-0.5 rounded text-foreground">
                      {'<SectionWrapper spacing="lg" />'}
                    </span>
                  </div>
                </MinimalCard>
              </div>
            </div>

            {/* 4 & 5: Headings & Labels */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/80 pb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                  [04 & 05] Editorial Display: SectionHeading & EditorialLabel
                </span>
                <span className="font-mono text-[11px] text-muted-foreground uppercase">Typographic</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* SectionHeading Showcase */}
                <MinimalCard variant="default" padding="md" className="space-y-4">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">SectionHeading Specimen</span>
                  <div className="p-4 bg-secondary/30 rounded border border-border/60">
                    <SectionHeading
                      eyebrow="MODULE // 04"
                      title="ARCHITECTURE OVERVIEW"
                      subtitle="Decoupled clean architecture with strict single-responsibility boundaries."
                      size="sm"
                    />
                  </div>
                </MinimalCard>

                {/* EditorialLabel Showcase */}
                <MinimalCard variant="default" padding="md" className="space-y-4">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">EditorialLabel Variants & Sizes</span>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <EditorialLabel variant="default" size="md">DEFAULT</EditorialLabel>
                    <EditorialLabel variant="accent" size="md" indicator="dot" pulse>LIVE ACCENT</EditorialLabel>
                    <EditorialLabel variant="muted" size="md">MUTED</EditorialLabel>
                    <EditorialLabel variant="outline" size="md">OUTLINE</EditorialLabel>
                    <EditorialLabel variant="solid" size="md">SOLID INVERT</EditorialLabel>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-border/60">
                    <EditorialLabel variant="accent" size="sm">SM: 10PX</EditorialLabel>
                    <EditorialLabel variant="accent" size="md">MD: 12PX</EditorialLabel>
                    <EditorialLabel variant="accent" size="lg">LG: 14PX</EditorialLabel>
                  </div>
                </MinimalCard>
              </div>
            </div>

            {/* 6 & 7: Action Buttons */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/80 pb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                  [06 & 07] Modernist Buttons: PrimaryButton & SecondaryButton
                </span>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-1.5 text-xs font-mono cursor-pointer">
                    <input
                      type="checkbox"
                      checked={btnLoading}
                      onChange={(e) => setBtnLoading(e.target.checked)}
                      className="rounded border-border text-accent focus:ring-accent"
                    />
                    <span>Loading</span>
                  </label>
                  <label className="flex items-center gap-1.5 text-xs font-mono cursor-pointer">
                    <input
                      type="checkbox"
                      checked={btnDisabled}
                      onChange={(e) => setBtnDisabled(e.target.checked)}
                      className="rounded border-border text-accent focus:ring-accent"
                    />
                    <span>Disabled</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Primary Buttons */}
                <MinimalCard variant="default" padding="md" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono text-xs font-bold uppercase text-foreground">PrimaryButton</h4>
                    <span className="font-mono text-[10px] text-muted-foreground">Solid / Accent</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <PrimaryButton
                      variant="solid"
                      size="md"
                      loading={btnLoading}
                      disabled={btnDisabled}
                      icon={<ArrowRight className="h-3.5 w-3.5" />}
                      onClick={() => setClickCount((c) => c + 1)}
                    >
                      Primary Action
                    </PrimaryButton>

                    <PrimaryButton
                      variant="accent"
                      size="md"
                      loading={btnLoading}
                      disabled={btnDisabled}
                      icon={<Zap className="h-3.5 w-3.5" />}
                      iconPosition="left"
                      onClick={() => setClickCount((c) => c + 1)}
                    >
                      Accent Action
                    </PrimaryButton>
                  </div>

                  <div className="flex items-center gap-2 pt-2 border-t border-border/60">
                    <PrimaryButton size="sm">Small</PrimaryButton>
                    <PrimaryButton size="md">Medium</PrimaryButton>
                    <PrimaryButton size="lg">Large</PrimaryButton>
                  </div>
                </MinimalCard>

                {/* Secondary Buttons */}
                <MinimalCard variant="default" padding="md" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono text-xs font-bold uppercase text-foreground">SecondaryButton</h4>
                    <span className="font-mono text-[10px] text-muted-foreground">Outline / Ghost / Subtle</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <SecondaryButton
                      variant="outline"
                      size="md"
                      loading={btnLoading}
                      disabled={btnDisabled}
                      icon={<Sliders className="h-3.5 w-3.5" />}
                      onClick={() => setClickCount((c) => c + 1)}
                    >
                      Outline
                    </SecondaryButton>

                    <SecondaryButton
                      variant="subtle"
                      size="md"
                      loading={btnLoading}
                      disabled={btnDisabled}
                      onClick={() => setClickCount((c) => c + 1)}
                    >
                      Subtle
                    </SecondaryButton>

                    <SecondaryButton
                      variant="ghost"
                      size="md"
                      loading={btnLoading}
                      disabled={btnDisabled}
                      onClick={() => setClickCount((c) => c + 1)}
                    >
                      Ghost
                    </SecondaryButton>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs font-mono text-muted-foreground">
                    <span>Interactive Click Counter:</span>
                    <span className="font-bold text-accent">{clickCount} clicks</span>
                  </div>
                </MinimalCard>
              </div>
            </div>

            {/* 8 & 9: TextLink & OutlineTag */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/80 pb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                  [08 & 09] Micro-Interactions: TextLink & OutlineTag
                </span>
                <span className="font-mono text-[11px] text-muted-foreground uppercase">Navigation & Tags</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* TextLink */}
                <MinimalCard variant="default" padding="md" className="space-y-4">
                  <h4 className="font-mono text-xs font-bold uppercase text-foreground">TextLink</h4>
                  <div className="flex flex-col gap-3">
                    <TextLink to="/" arrow="right">
                      Internal Router Link with ArrowRight
                    </TextLink>
                    <TextLink href="https://github.com" arrow="diagonal" external color="accent">
                      External Link with ArrowUpRight
                    </TextLink>
                    <TextLink to="/" arrow="left" color="muted">
                      Back Navigation with ArrowLeft
                    </TextLink>
                  </div>
                </MinimalCard>

                {/* OutlineTag */}
                <MinimalCard variant="default" padding="md" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-mono text-xs font-bold uppercase text-foreground">OutlineTag</h4>
                    <span className="font-mono text-[10px] text-muted-foreground">Interactive Filtering</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {['React 18', 'Tailwind CSS', 'Vite 6', 'Pure ES6+', 'Lucide'].map((tag) => {
                      const isSelected = tagSelection.includes(tag)
                      return (
                        <OutlineTag
                          key={tag}
                          variant={isSelected ? 'accent' : 'default'}
                          size="md"
                          onClick={() => toggleTag(tag)}
                          icon={isSelected ? <CheckCircle2 className="h-3 w-3" /> : undefined}
                        >
                          {tag}
                        </OutlineTag>
                      )
                    })}
                  </div>

                  <p className="text-[11px] text-muted-foreground pt-1">
                    Click tags above to toggle live selection states.
                  </p>
                </MinimalCard>
              </div>
            </div>

            {/* 10 & 11: MinimalCard & GlassSurface */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/80 pb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                  [10 & 11] Surface Containers: MinimalCard & GlassSurface
                </span>
                <span className="font-mono text-[11px] text-muted-foreground uppercase">Surfaces</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <MinimalCard variant="default" padding="md">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">MinimalCard</span>
                  <h5 className="font-bold text-sm text-foreground mt-1 uppercase">Default Card</h5>
                  <p className="text-xs text-muted-foreground mt-2">
                    Clean hairline border on primary surface with subtle shadow.
                  </p>
                </MinimalCard>

                <MinimalCard variant="interactive" padding="md">
                  <span className="text-[10px] font-mono uppercase text-accent font-bold">MinimalCard</span>
                  <h5 className="font-bold text-sm text-foreground mt-1 uppercase">Interactive Hover</h5>
                  <p className="text-xs text-muted-foreground mt-2">
                    Subtle lift on hover with accent border transition and active state feedback.
                  </p>
                </MinimalCard>

                <MinimalCard variant="flat" padding="md">
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">MinimalCard</span>
                  <h5 className="font-bold text-sm text-foreground mt-1 uppercase">Flat Recessed</h5>
                  <p className="text-xs text-muted-foreground mt-2">
                    Secondary surface wash without visible borders for embedded grouping.
                  </p>
                </MinimalCard>

                <GlassSurface intensity="medium" elevation="sm" rounded="sm" className="p-6">
                  <span className="text-[10px] font-mono uppercase text-accent font-bold">GlassSurface</span>
                  <h5 className="font-bold text-sm text-foreground mt-1 uppercase">Frosted Glass</h5>
                  <p className="text-xs text-muted-foreground mt-2">
                    Dynamic backdrop blur with specular highlight borders.
                  </p>
                </GlassSurface>
              </div>
            </div>

            {/* 12, 13 & 14: Dividers, NavigationSurface & ThemeToggle */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/80 pb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
                  [12-14] System Controls: Divider, NavigationSurface & ThemeToggle
                </span>
                <span className="font-mono text-[11px] text-muted-foreground uppercase">Controls</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Divider specimens */}
                <MinimalCard variant="default" padding="md" className="space-y-4">
                  <h4 className="font-mono text-xs font-bold uppercase text-foreground">Divider Options</h4>
                  <div className="space-y-3">
                    <p className="text-[11px] text-muted-foreground">Standard Rule:</p>
                    <Divider spacing="none" variant="default" />
                    <p className="text-[11px] text-muted-foreground">Dashed Rule:</p>
                    <Divider spacing="none" variant="dashed" />
                    <p className="text-[11px] text-muted-foreground">Labeled Divider:</p>
                    <Divider spacing="none" label="OR" />
                  </div>
                </MinimalCard>

                {/* NavigationSurface specimen */}
                <MinimalCard variant="default" padding="md" className="space-y-4">
                  <h4 className="font-mono text-xs font-bold uppercase text-foreground">NavigationSurface</h4>
                  <p className="text-xs text-muted-foreground">
                    Self-contained navigation bar container offering sticky glass containment.
                  </p>
                  <NavigationSurface
                    sticky={false}
                    glass={true}
                    bordered={true}
                    maxWidth="full"
                    className="rounded border border-border"
                  >
                    <span className="font-mono text-xs font-bold uppercase text-foreground">Brand</span>
                    <div className="flex items-center gap-3 text-[10px] font-mono uppercase text-muted-foreground">
                      <span>Link 1</span>
                      <span>Link 2</span>
                    </div>
                  </NavigationSurface>
                </MinimalCard>

                {/* ThemeToggle specimens */}
                <MinimalCard variant="default" padding="md" className="space-y-4">
                  <h4 className="font-mono text-xs font-bold uppercase text-foreground">ThemeToggle Variants</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground">Icon (Default):</span>
                      <ThemeToggle variant="icon" size="sm" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground">Labeled:</span>
                      <ThemeToggle variant="labeled" size="sm" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-muted-foreground">Segmented:</span>
                      <ThemeToggle variant="segmented" size="sm" />
                    </div>
                  </div>
                </MinimalCard>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* -------------------------------------------------------------
          6. ARCHITECTURAL FOOTER NOTE
          ------------------------------------------------------------- */}
      <SectionWrapper spacing="md" bordered surface="secondary">
        <Container size="xl" className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span>Pure React 18 ES6+ (Zero TypeScript, Zero Next.js)</span>
          </div>
          <div>
            <span>Raj Jadav Personal Portfolio — Phase 2 Design System</span>
          </div>
        </Container>
      </SectionWrapper>
    </PageWrapper>
  )
}
