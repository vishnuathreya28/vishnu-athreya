'use client'

import { motion } from 'framer-motion'
import { bio } from '@/data/content'

export default function Hero() {
  return (
    <section className="w-full flex flex-col gap-16">

      <div className="flex flex-row items-center justify-between gap-16">

        {/* Left */}
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#94a3b8' }}
            >
              Software Engineer · Bengaluru, India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-6xl font-extrabold tracking-tight leading-none"
              style={{ color: '#1a1a1a' }}
            >
              Vishnu<br />Athreya
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-base max-w-sm"
            style={{ color: '#666', lineHeight: '1.8' }}
          >
            {bio.tagline}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-px w-16 origin-left"
            style={{ backgroundColor: '#94a3b8' }}
          />
        </div>

        {/* Right — photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-56 h-72 rounded-2xl flex-shrink-0 overflow-hidden"
          style={{ border: '1px solid rgba(26,26,26,0.06)' }}
        >
          <img
            src="/photo.jpeg"
            alt="Vishnu Athreya"
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}