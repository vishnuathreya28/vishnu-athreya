'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const events = [
  {
    year: '2020',
    title: 'Entered PES University',
    description: 'Started CS during COVID. Learned to learn independently.',
    type: 'education',
  },
  {
    year: '2021',
    title: 'The Coder Factory',
    description: 'Mentored underprivileged students in digital literacy. Teaching shaped how I think.',
    type: 'impact',
  },
  {
    year: '2022',
    title: 'Samagic',
    description: 'Led design-thinking workshops. First taste of human-centered problem solving at scale.',
    type: 'impact',
  },
  {
    year: '2023',
    title: 'IEEE Published · Best Capstone',
    description: 'Built adaptive UI for geriatric users using psychometric analysis. Published. Awarded best among 200 teams.',
    type: 'achievement',
  },
  {
    year: '2023',
    title: 'QuantBlu — Founding Engineer',
    description: 'Two-person founding team. Designed auth systems and scalable APIs from scratch under pressure.',
    type: 'work',
  },
  {
    year: '2024',
    title: 'Dayforce — Associate SWE',
    description: 'Shipped for 3M+ users across 1000+ enterprise clients. Mentored 40+ interns across APAC.',
    type: 'work',
  },
  {
    year: '2025',
    title: "What's Next",
    description: 'Graduate school. Bigger systems. More impact.',
    type: 'future',
  },
]

const typeColors = {
  education: '#94a3b8',
  impact: '#10b981',
  achievement: '#f59e0b',
  work: '#3b82f6',
  future: '#a78bfa',
}

function TimelineNode({ event, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const isLeft = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="grid w-full items-center"
      style={{ gridTemplateColumns: '1fr 24px 1fr' }}
    >
      {/* Left side */}
      {isLeft ? (
        <div className="flex flex-col gap-3 pr-8 py-1">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-bold px-2 py-1 rounded-full"
              style={{
                backgroundColor: `${typeColors[event.type]}18`,
                color: typeColors[event.type],
              }}
            >
              {event.year}
            </span>
            <h3 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>
              {event.title}
            </h3>
          </div>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
            {event.description}
          </p>
        </div>
      ) : (
        <div />
      )}

      {/* Center dot */}
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-3 h-3 rounded-full z-10"
          style={{ backgroundColor: typeColors[event.type] }}
        />
      </div>

      {/* Right side */}
      {!isLeft ? (
        <div className="flex flex-col gap-3 pl-8 py-1">
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-bold px-2 py-1 rounded-full"
              style={{
                backgroundColor: `${typeColors[event.type]}18`,
                color: typeColors[event.type],
              }}
            >
              {event.year}
            </span>
            <h3 className="text-sm font-bold" style={{ color: 'var(--color-text-primary)' }}>
              {event.title}
            </h3>
          </div>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
            {event.description}
          </p>
        </div>
      ) : (
        <div />
      )}
    </motion.div>
  )
}

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="w-full">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-xs font-semibold uppercase tracking-widest mb-12"
        style={{ color: 'var(--color-accent)' }}
      >
        The Path Here
      </motion.h2>

      <div className="relative flex flex-col gap-4">
        {/* Vertical line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
          style={{ backgroundColor: 'var(--color-border)' }}
        />

        {events.map((event, index) => (
          <TimelineNode key={event.title} event={event} index={index} />
        ))}
      </div>
    </section>
  )
}