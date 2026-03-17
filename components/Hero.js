'use client'

import { motion } from 'framer-motion'
import TypingQuote from './Tagline'
import { bio } from '@/data/content'

export default function Hero() {
  return (
    <section className="w-full flex flex-col gap-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-16">

        {/* Left */}
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-accent)' }}
            >
              {bio.role} . {bio.location}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {bio.name}
            </motion.h1>
          </div>
          <TypingQuote />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-px w-16 origin-left"
            style={{ backgroundColor: 'var(--color-accent)' }}
          />
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-48 h-60 md:w-64 md:h-80 rounded-3xl flex-shrink-0 overflow-hidden mx-auto md:mx-0"
        >
          <img
            src="/photo.jpeg"
            alt="Vishnu Athreya"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 20%' }}
          />
        </motion.div>

      </div>
    </section>
  )
}