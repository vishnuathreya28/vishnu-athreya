'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/content'

export default function Skills({ persona }) {
  const filtered = skills.filter(s => s.personas.includes(persona))

  return (
    <section className="w-full max-w-4xl py-16 px-6">
      <h2 className="text-2xl font-bold mb-8 text-gray-200">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {filtered.map((skill, index) => (
          <motion.span
            key={skill.name + persona}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300 hover:border-gray-400 transition-colors duration-200"
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  )
}