// Premium animation configuration and variants for Paradigm Schools
// Designed with GPU-accelerated transforms, subtle distances (15-30px),
// refined easing curves, and slowed-down durations for a luxurious, sleek feel.

// Ultra-smooth luxury deceleration curve (inspired by high-end design systems like Apple & Stripe)
export const smoothEase = [0.16, 1, 0.3, 1];
// Gentle curve for larger reveals and layered elements
export const gentleEase = [0.22, 1, 0.36, 1];
export const springConfig = { type: "spring", stiffness: 180, damping: 26 };

/**
 * Standard viewport configuration for scroll animations
 * Slightly increased amount & offset so elements glide into view naturally while scrolling
 */
export const defaultViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -50px 0px",
};

/**
 * Fade up variant with configurable delay, distance, and duration
 */
export const fadeInUp = (delay = 0, distance = 24, duration = 0.95) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: smoothEase,
    },
  },
});

/**
 * Fade down variant
 */
export const fadeInDown = (delay = 0, distance = 20, duration = 0.9) => ({
  hidden: {
    opacity: 0,
    y: -distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: smoothEase,
    },
  },
});

/**
 * Slide and fade in from left (clamped distance for zero horizontal overflow)
 */
export const fadeInLeft = (delay = 0, distance = 28, duration = 1.05) => ({
  hidden: {
    opacity: 0,
    x: -distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: smoothEase,
    },
  },
});

/**
 * Slide and fade in from right (clamped distance for zero horizontal overflow)
 */
export const fadeInRight = (delay = 0, distance = 28, duration = 1.05) => ({
  hidden: {
    opacity: 0,
    x: distance,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: smoothEase,
    },
  },
});

/**
 * Subtle scale and fade reveal for photos and featured elements
 */
export const fadeInScale = (delay = 0, initialScale = 0.95, duration = 1.1) => ({
  hidden: {
    opacity: 0,
    scale: initialScale,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: smoothEase,
    },
  },
});

/**
 * Gentle pure fade
 */
export const fadeIn = (delay = 0, duration = 0.9) => ({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: smoothEase,
    },
  },
});

/**
 * Stagger container for lists, grids, and cards
 * Deliberate, graceful pacing between sibling items
 */
export const staggerContainer = (staggerChildren = 0.14, delayChildren = 0.08) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Card entrance item for staggered containers
 */
export const staggerItem = (distance = 20, duration = 0.85) => ({
  hidden: {
    opacity: 0,
    y: distance,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: smoothEase,
    },
  },
});
