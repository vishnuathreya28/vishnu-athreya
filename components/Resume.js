'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="w-full py-12">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold uppercase tracking-widest mb-12"
        style={{ color: '#94a3b8' }}
      >
        Resume
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between pl-6 py-5"
      >
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-bold" style={{ color: '#1a1a1a' }}>
            Vishnu Athreya
          </h3>
          <p className="text-xs uppercase tracking-widest" style={{ color: '#aaa' }}>
            Last updated — 2025
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
            style={{ color: '#94a3b8' }}
            onMouseEnter={e => e.currentTarget.style.color = '#1a1a1a'}
            onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
          >
            View PDF →
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
            style={{ color: '#94a3b8' }}
            onMouseEnter={e => e.currentTarget.style.color = '#1a1a1a'}
            onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
          >
            Download
          </a>
        </div>
      </motion.div>
    </section>
  )
}