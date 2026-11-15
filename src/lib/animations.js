/**
 * Centralized Animation Presets & Utilities for Raj Jadav Portfolio.
 * Built on Motion for React (motion/react).
 * Strictly respects prefers-reduced-motion with instant fallback transitions.
 */

// Smooth editorial easing curve
export const editorialEase = [0.22, 1, 0.36, 1]
export const gentleSpring = { type: 'spring', stiffness: 350, damping: 25 }

export const viewportConfig = {
  once: true,
  amount: 0.15,
}

// Fade In
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: editorialEase } },
}

// Fade Up (used for sections, cards, and editorial paragraphs)
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: editorialEase } },
}

// Slide in from left
export const slideLeft = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: editorialEase } },
}

// Stagger Container for lists and card grids
export const staggerContainer = (staggerTime = 0.08, delayChildren = 0.05) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerTime,
      delayChildren,
    },
  },
})

// Stagger Child Item
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: editorialEase },
  },
}

// Interactive card hover presets
export const cardHoverProps = {
  whileHover: {
    y: -4,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  whileTap: { scale: 0.99 },
}

// Interactive button hover/tap presets
export const buttonHoverProps = {
  whileHover: {
    y: -2,
    scale: 1.02,
    transition: { duration: 0.18, ease: 'easeOut' },
  },
  whileTap: { scale: 0.97 },
}

// Micro tag hover
export const tagHoverProps = {
  whileHover: {
    y: -1,
    scale: 1.04,
    transition: { duration: 0.15 },
  },
}
