// Shared Framer Motion variants. Reuse these instead of inlining new animation
// objects in components, so animation timing/easing stays consistent site-wide.
import type { Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer = (staggerChildren = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const easeOut = [0.16, 1, 0.3, 1] as const;
