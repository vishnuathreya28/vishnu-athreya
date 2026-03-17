'use client'

import { motion } from 'framer-motion'

export default function Tagline() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      className="text-base tracking-wide"
      style={{ color: 'var(--color-text-secondary)' }}
    >
      Systems thinker. People first.
    </motion.p>
  )
}