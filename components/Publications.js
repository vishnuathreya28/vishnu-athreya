'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const publications = [
  {
    title: 'Adaptive UI/UX for Smart Geriatric Users',
    journal: 'IEEE',
    year: '2023',
    description: 'Proposed and implemented an adaptive UI/UX framework reducing cognitive load for older adults through psychometric profiling, speech-to-text integration, and rule-based interface personalization.',
    tags: ['HCI', 'Accessibility', 'Adaptive Systems', 'JavaScript'],
    link: 'https://ieeexplore.ieee.org/document/10585592/',
  },
]

export default function Publications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="w-full py-12">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold mb-10"
        style={{ color: '#1a1a1a' }}
      >
        Publications
      </motion.h2>

      <div className="flex flex-col gap-6">
        {publications.map((pub, index) => (
          <motion.div
            key={pub.title}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-4 p-6 rounded-2xl"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-6">
              <h3
                className="text-base font-bold leading-snug"
                style={{ color: '#1a1a1a' }}
              >
                {pub.title}
              </h3>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                >
                  {pub.journal}
                </span>
                <span className="text-xs" style={{ color: '#aaa' }}>
                  {pub.year}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
              {pub.description}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex flex-col gap-4 p-6 rounded-2xl"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: '#94a3b8' }}
                onMouseEnter={e => e.target.style.color = '#1a1a1a'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >
                View paper →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}