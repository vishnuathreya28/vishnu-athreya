'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    id: 1,
    title: 'Market Data Pipeline',
    description: 'Ingestion and normalization of time-series data across NSE, BSE, Zerodha and Upstox. Handles latency, missing data, and schema inconsistencies.',
    tags: ['Python', 'PostgreSQL', 'Time-Series', 'Data Engineering'],
    github: '#',
  },
  {
    id: 2,
    title: 'Auth & Security Platform',
    description: 'Backend authentication system serving 3M+ active users across 1,000+ enterprise deployments. Focused on reliability and failure rate reduction.',
    tags: ['Java', 'REST APIs', 'Distributed Systems', 'CI/CD'],
    github: '#',
  },
  {
    id: 3,
    title: 'Adaptive UI for Geriatric Users',
    description: 'IEEE published research. Adaptive interface reducing cognitive load in high-stakes workflows using psychometric analysis and rule-based personalization.',
    tags: ['Research', 'HCI', 'JavaScript', 'UX'],
    github: '#',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-4 p-6 rounded-2xl"
    >
      <h3 className="text-base font-bold" style={{ color: '#1a1a1a' }}>
        {project.title}
      </h3>

      <p className="text-sm leading-relaxed" style={{ color: '#666' }}>
        {project.description}
      </p>

      <div className="flex items-center justify-between pt-2">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="flex flex-col gap-4 p-6 rounded-2xl"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium flex-shrink-0 ml-4 transition-colors duration-200"
          style={{ color: '#94a3b8' }}
          onMouseEnter={e => e.currentTarget.style.color = '#1a1a1a'}
          onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
        >
          GitHub →
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
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
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}