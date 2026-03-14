'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const achievements = [
  {
    category: 'Research & Academic',
    items: [
      {
        title: 'IEEE Published',
        description: 'Adaptive UI/UX framework for geriatric users using psychometric analysis, speech-to-text, and rule-based personalization.',
        year: '2023',
        tag: 'Publication',
      },
      {
        title: 'Best Capstone — PES University',
        description: 'Awarded best project among 200 teams across the graduating batch.',
        year: '2023',
        tag: 'Award',
      },
    ],
  },
  {
    category: 'Social Impact',
    items: [
      {
        title: 'The Coder Factory',
        description: 'Mentored underprivileged students in digital literacy and foundational programming. Teaching others became a core part of how I learn.',
        year: '2021',
        tag: 'Mentorship',
      },
      {
        title: 'Samagic',
        description: 'Organised and led design-thinking workshops focused on human-centered problem solving for real-world challenges.',
        year: '2022',
        tag: 'Community',
      },
    ],
  },
  {
    category: 'Leadership & Events',
    items: [
      {
        title: 'Event Organisation',
        description: 'Carved out a consistent voice through organising technical and community events during and after college.',
        year: '2021 — 2024',
        tag: 'Leadership',
      },
    ],
  },
]

const tagColors = {
  Publication: '#f59e0b',
  Award: '#10b981',
  Mentorship: '#3b82f6',
  Community: '#a78bfa',
  Leadership: '#94a3b8',
}

function AchievementItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex flex-col gap-2 p-5 rounded-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-sm font-bold" style={{ color: '#1a1a1a' }}>
          {item.title}
        </h4>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs" style={{ color: '#aaa' }}>{item.year}</span>
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{
              backgroundColor: `${tagColors[item.tag]}18`,
              color: tagColors[item.tag],
            }}
          >
            {item.tag}
          </span>
        </div>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
        {item.description}
      </p>
    </motion.div>
  )
}

export default function Achievements() {
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
        Achievements
      </motion.h2>

      <div className="flex flex-col gap-10">
        {achievements.map((group) => (
          <div key={group.category} className="flex flex-col gap-4">
            <h3
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#94a3b8' }}
            >
              {group.category}
            </h3>
            <div className="flex flex-col gap-3">
              {group.items.map((item, index) => (
                <AchievementItem key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}