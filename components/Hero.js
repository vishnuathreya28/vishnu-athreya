'use client'

import { motion } from 'framer-motion'
import { bio, personaColors } from '@/data/content'

export default function Hero({ persona }) {
  const color = personaColors[persona]

  return (
    <section className="w-full py-24 flex flex-col gap-16">

      {/* Two column layout */}
      <div className="flex flex-row items-center justify-between gap-12">

        {/* Left — text */}
        <div className="flex flex-col gap-6 flex-1">
          <motion.h1
            key={persona}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-7xl font-extrabold tracking-tight leading-none"
          >
            {bio.name}
          </motion.h1>

          <motion.p
            key={persona + 'tag'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg text-gray-400 max-w-md leading-relaxed"
          >
            {bio.taglines[persona]}
          </motion.p>

          {/* Accent line — shifts color with persona */}
          <motion.div
            key={persona + 'line'}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ backgroundColor: color.accent }}
            className="h-px w-24 origin-left"
          />
        </div>
      {/* Stat row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap gap-6 pt-2"
        >
          {[
            { value: '3M+', label: 'users served' },
            { value: 'IEEE', label: 'published' },
            { value: '2', label: 'grad admits' },
            { value: 'Dayforce', label: 'current role' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className="text-2xl font-bold"
                style={{ color: color.accent }}
              >
                {stat.value}
              </span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
        {/* Right — photo placeholder */}
        <div
          className="w-64 h-80 rounded-2xl flex-shrink-0 flex items-center justify-center"
          style={{
            border: `1px solid ${color.border}`,
            backgroundColor: color.tag,
          }}
        >
          <span className="text-sm text-gray-600">photo</span>
        </div>

      </div>
    </section>
  )
}