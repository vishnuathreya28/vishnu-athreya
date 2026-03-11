'use client'

import { motion } from 'framer-motion'
import { projects, personaColors } from '@/data/content'

export default function Projects({ persona }) {
  const filtered = projects.filter(p => p.personas.includes(persona))
  const color = personaColors[persona]

  return (
    <section className="w-full py-16">
      <h2 className="text-2xl font-bold mb-8 text-gray-200">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project, index) => (
          <motion.div
            key={project.id + persona}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="rounded-xl p-6 flex flex-col gap-4 transition-colors duration-300"
            style={{
              border: `1px solid ${color.border}`,
              backgroundColor: color.tag,
            }}
          >
            <h3 className="text-lg font-semibold text-gray-100">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full text-gray-400"
                  style={{ border: `1px solid ${color.border}` }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              className="text-sm hover:text-white transition-colors duration-200 mt-auto"
              style={{ color: color.accent }}
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}