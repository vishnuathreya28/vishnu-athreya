'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '@/data/content'

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
      {project.status === 'inprogress' && (
        <span
          className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{
            backgroundColor: 'rgba(245,158,11,0.1)',
            color: '#f59e0b',
          }}
        >
          In Progress
        </span>
      )}
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