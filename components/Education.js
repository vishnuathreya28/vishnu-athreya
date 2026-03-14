'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const education = [
  {
    institution: 'PES University',
    degree: 'B.Tech, Computer Science & Engineering',
    period: '2020 — 2024',
    location: 'Bengaluru, India',
    highlights: [
      'IEEE published research — Best Capstone among 200 teams',
      'Led design-thinking workshops through Samagic',
      'Mentored underprivileged students at The Coder Factory',
    ],
  },
  {
    institution: 'Graduate School',
    degree: 'Masters — Coming Soon',
    period: '2026 —',
    location: 'TBD',
    highlights: [
      'Details to be updated shortly.',
    ],
    placeholder: true,
  },
]

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
            style={{ color: edu.placeholder ? '#aaa' : '#1a1a1a' }}
          >
            {edu.degree}
          </h3>
          <span className="text-sm font-semibold" style={{ color: '#94a3b8' }}>
            {edu.institution}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs" style={{ color: '#aaa' }}>{edu.period}</span>
          <span className="text-xs" style={{ color: '#aaa' }}>{edu.location}</span>
        </div>
      </div>

      {/* Highlights */}
      <ul className="flex flex-col gap-2">
        {edu.highlights.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-sm"
            style={{ color: edu.placeholder ? '#bbb' : '#666' }}
          >
            <span style={{ color: '#94a3b8', marginTop: '2px' }}>→</span>
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
        style={{ color: '#1a1a1a' }}
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