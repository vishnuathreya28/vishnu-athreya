'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { experiences } from '@/data/content'

function ExperienceCard({ exp, index, defaultOpen }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col gap-4 pl-6 py-4 cursor-pointer"
    >
      {/* Header — always visible */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
            {exp.role}
          </h3>
          <span className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
            {exp.company}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{exp.period}</span>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>·</span>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{exp.location}</span>
          </div>
          <span className="text-sm" style={{ color: 'var(--color-accent)' }}>
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </div>

      {/* Stack — always visible */}
      <div className="flex flex-wrap gap-2">
        {exp.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(148,163,184,0.1)',
              color: 'var(--color-accent)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="flex flex-col gap-4 overflow-hidden"
          >
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              {exp.description}
            </p>
            <ul className="flex flex-col gap-2">
              {exp.highlights.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <span style={{ color: 'var(--color-accent)', marginTop: '2px' }}>→</span>
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Experience() {
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
        Experience
      </motion.h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.company}
            exp={exp}
            index={index}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </section>
  )
}