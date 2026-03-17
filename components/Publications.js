'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { publications } from '@/data/content'

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
        style={{ color: 'var(--color-text-primary)' }}
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
            style={{ border: '1px solid var(--color-border)' }}
          >
            {/* Header */}
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <h3
                  className="text-base font-bold leading-snug"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {pub.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(148,163,184,0.1)',
                    color: 'var(--color-accent)',
                  }}
                >
                  {pub.journal}
                </span>
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                  {pub.year}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {pub.description}
            </p>

            {/* Footer */}
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: 'rgba(148,163,184,0.1)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors duration-200 self-start"
                style={{ color: 'var(--color-accent)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-accent)'}
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