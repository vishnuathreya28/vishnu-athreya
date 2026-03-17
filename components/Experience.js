'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const experiences = [
  {
    company: 'Dayforce',
    role: 'Associate Software Engineer',
    period: '2024 — Present',
    location: 'Bengaluru, India',
    description: 'Associate Software Engineer maintaining and scaling enterprise HR software at Dayforce, serving 6M+ employees across 600+ clients including Google, HPE, Deutsche Bank, and Oracle.',
    highlights: [
      'Spearheaded ESS go-live across multiple clients and almost 1M+ employees',
      'Built an in-house captcha service and configurable password module',
      'Resolved 16,000+ Veracode vulnerabilities, reinforcing platform security',
      'Drove cloud modernisation and hardware migration across product and infra',
      'Implemented CI/CD pipelines and migrated repositories to GitHub with AIDA',
      'Mentored 40+ interns and new joinees across the organisation',
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
  {
    company: 'TuteDude',
    role: 'Web Development Instructor',
    period: 'Nov 2023 — Feb 2024',
    location: 'Remote',
    description: 'Taught full-stack web development to students through an interactive online learning platform. Designed curriculum and delivered 55+ hours of original course content.',
    highlights: [
      'Taught MERN stack fundamentals to students across the platform',
      'Created and delivered 55+ hours of original course content',
      'Designed practical assignments and capstone projects',
      'Mentored learners individually on debugging and version control',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
  },
]

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
      style={{ borderLeft: '2px solid var(--color-accent)' }}
    >
      {/* Header — always visible */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>
            {exp.role}
          </h3>
          <span className="text-sm font-semibold" style={{ color: 'var(--color-accent)' }}>
            {exp.company}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{exp.period}</span>
          <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{exp.location}</span>
          <span className="text-sm mt-1" style={{ color: 'var(--color-accent)' }}>
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