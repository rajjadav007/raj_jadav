import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines conditional class names with Tailwind class merging.
 * Standard utility for Shadcn UI components.
 *
 * @param {...any} inputs - Class names or expressions
 * @returns {string} Merged class string
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
