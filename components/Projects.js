'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    id: 1,
    title: 'ESS AI Assistant',
    description: 'LLM-powered chatbot built as a prototype for enterprise HR software. Lets employees interact with the application in plain language — navigate to screens, generate payslips, update details — without touching the UI directly.',
    tags: ['LLM', 'AI', 'Python', 'Enterprise Software'],
  },
  {
    id: 2,
    title: 'Market Data Pipeline',
    description: 'Ingestion and normalisation of time-series market data across NSE, BSE, Zerodha and Upstox. Built to handle latency, missing data, and schema inconsistencies across sources.',
    tags: ['Python', 'PostgreSQL', 'Time-Series', 'Data Engineering'],
  },
  {
    id: 3,
    title: 'Auth & Security Platform',
    description: 'Backend authentication system serving 3M+ active users across 1,000+ enterprise deployments. Focused on reliability, failure rate reduction, and security hardening.',
    tags: ['Java', 'REST APIs', 'Distributed Systems', 'CI/CD'],
  },
  {
    id: 4,
    title: 'This Portfolio',
    description: 'Designed and built from scratch. Next.js app router, Tailwind v4, Framer Motion animations, deployed on Vercel. Every line typed by hand.',
    tags: ['Next.js', 'Tailwind v4', 'Framer Motion', 'Vercel'],
  },
  {
    id: 5,
    title: 'Adaptive UI for Geriatric Users',
    description: 'IEEE published research on adaptive interfaces that reduce cognitive load in high-stakes workflows using psychometric analysis and rule-based personalisation.',
    tags: ['Research', 'HCI', 'JavaScript', 'UX'],
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
      style={{ border: '1px solid var(--color-border)' }}
    >
      <h3 className="text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>
        {project.title}
      </h3>

      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {project.description}
      </p>

      <div className="flex items-center justify-between pt-2">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
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
        style={{ color: 'var(--color-text-primary)' }}
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