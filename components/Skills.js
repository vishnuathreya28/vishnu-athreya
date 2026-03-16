'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML/CSS'],
  },
  {
    category: 'Backend & Systems',
    items: ['REST APIs', 'Node.js', 'Express', 'Distributed Systems', 'System Design', 'CI/CD'],
  },
  {
    category: 'Data & Finance',
    items: ['PostgreSQL', 'MongoDB', 'Time-Series Analysis', 'Market Data Pipelines', 'pandas', 'Machine Learning'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Docker', 'Figma', 'JIRA', 'Postman'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="w-full py-12">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-2xl font-bold"
        style={{ color: '#1a1a1a', marginBottom: '10px' }}
      >
        Skills
      </motion.h2>

      <div className="flex flex-col gap-10">
        {skills.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: groupIndex * 0.08 }}
            className="flex flex-col gap-4 pl-5 py-1"
          >
            <h3
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: '#94a3b8' }}
            >
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 rounded-full transition-colors duration-200"
                  style={{
                    border: '1px solid rgba(26,26,26,0.12)',
                    color: '#666',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}