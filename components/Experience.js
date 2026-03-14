'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: 'Dayforce',
    role: 'Associate Software Engineer',
    period: '2024 — Present',
    location: 'Bengaluru, India',
    description: 'Maintaining and scaling large enterprise software systems serving 3M+ users across 1000+ clients. Drove consistency across distributed systems and led security upgrades across APAC.',
    highlights: [
      'Shipped ESS rollout across APAC region',
      'Reduced failure rates through security upgrades',
      'Mentored 40+ interns and new joinees',
      'Enabled developer productivity through tooling improvements',
    ],
    stack: ['Java', 'REST APIs', 'CI/CD', 'Distributed Systems'],
  },
  {
    company: 'QuantBlu',
    role: 'Founding Engineer',
    period: '2024',
    location: 'Remote',
    description: 'One of two engineers building a fintech product from scratch. Owned backend architecture, authentication systems, and API design end to end.',
    highlights: [
      'Designed secure authentication flows from scratch',
      'Built scalable APIs under tight timelines',
      'Made high-stakes architecture decisions in a 2-person team',
      'Delivered under ambiguity with full ownership',
    ],
    stack: ['Python', 'PostgreSQL', 'REST APIs', 'System Design'],
  },
]

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-4 pl-6 py-2"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold" style={{ color: '#1a1a1a' }}>
            {exp.role}
          </h3>
          <span className="text-sm font-semibold" style={{ color: '#94a3b8' }}>
            {exp.company}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs" style={{ color: '#aaa' }}>{exp.period}</span>
          <span className="text-xs" style={{ color: '#aaa' }}>{exp.location}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
        {exp.description}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-2">
        {exp.highlights.map((point) => (
          <li key={point} className="flex items-start gap-2 text-sm" style={{ color: '#666' }}>
            <span style={{ color: '#94a3b8', marginTop: '2px' }}>→</span>
            {point}
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 pt-2">
        {exp.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: 'rgba(148,163,184,0.1)',
              color: '#94a3b8',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
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
        style={{ color: '#1a1a1a' }}
      >
        Experience
      </motion.h2>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.company} exp={exp} index={index} />
        ))}
      </div>
    </section>
  )
}