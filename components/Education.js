'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '@/data/content'

function EducationCard({ edu, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-4 p-6 rounded-2xl"
      style={{
        border: edu.placeholder
          ? '1px dashed rgba(148,163,184,0.2)'
          : 'none',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h3
            className="text-lg font-bold"
            style={{ color: edu.placeholder ? '#bbb' : 'var(--color-text-primary)' }}
          >
            {edu.degree}
          </h3>
          <span className="text-sm font-semibold" style={{ color: edu.placeholder ? '#bbb' : 'var(--color-text-primary)' }}>
            {edu.institution}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{edu.period}</span>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{edu.location}</span>
        </div>
      </div>

      {/* Highlights */}
      <ul className="flex flex-col gap-2">
        {edu.highlights.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-sm"
            style={{ color: edu.placeholder ? '#bbb' : 'var(--color-text-secondary)' }}
          >
            <span style={{ color: 'var(--color-accent)', marginTop: '2px' }}>→</span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Education() {
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
        Education
      </motion.h2>

      <div className="flex flex-col gap-6">
        {education.map((edu, index) => (
          <EducationCard key={edu.institution} edu={edu} index={index} />
        ))}
      </div>
    </section>
  )
}