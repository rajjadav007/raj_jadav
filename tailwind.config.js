import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"SF Mono"',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
        display: [
          '"Inter"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          dark: "hsl(var(--accent-dark) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "hsl(var(--surface-primary) / <alpha-value>)",
          primary: "hsl(var(--surface-primary) / <alpha-value>)",
          secondary: "hsl(var(--surface-secondary) / <alpha-value>)",
        },
        text: {
          primary: "hsl(var(--text-primary) / <alpha-value>)",
          secondary: "hsl(var(--text-secondary) / <alpha-value>)",
          muted: "hsl(var(--text-muted) / <alpha-value>)",
        },
        swiss: {
          bg: "hsl(var(--background) / <alpha-value>)",
          'text-primary': "hsl(var(--text-primary) / <alpha-value>)",
          'text-secondary': "hsl(var(--text-secondary) / <alpha-value>)",
          'text-muted': "hsl(var(--text-muted) / <alpha-value>)",
          accent: "hsl(var(--accent) / <alpha-value>)",
          'accent-dark': "hsl(var(--accent-dark) / <alpha-value>)",
          'surface-primary': "hsl(var(--surface-primary) / <alpha-value>)",
          'surface-secondary': "hsl(var(--surface-secondary) / <alpha-value>)",
          border: "hsl(var(--border) / <alpha-value>)",
        },
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
        editorial: "0.15em",
        "ultra-wide": "0.2em",
        "super-wide": "0.25em",
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, hsl(var(--border) / 0.55) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.55) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(hsl(var(--border) / 0.8) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-sm": "16px 16px",
        grid: "32px 32px",
        "grid-lg": "48px 48px",
      },
      boxShadow: {
        "glass-sm": "inset 0 1px 0 0 rgba(255, 255, 255, 0.4), 0 2px 8px -1px rgba(0, 0, 0, 0.04)",
        glass: "inset 0 1px 0 0 rgba(255, 255, 255, 0.5), 0 8px 24px -4px rgba(0, 0, 0, 0.06)",
        "glass-elevated": "inset 0 1px 0 0 rgba(255, 255, 255, 0.6), 0 12px 32px -4px rgba(0, 0, 0, 0.08)",
        "glass-dark": "inset 0 1px 0 0 rgba(255, 255, 255, 0.08), 0 12px 32px -4px rgba(0, 0, 0, 0.4)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
