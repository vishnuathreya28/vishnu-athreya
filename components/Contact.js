'use client'

import { contact } from '@/data/content'

export default function Contact() {
  return (
    <section className="w-full max-w-4xl py-16 px-6">
      <h2 className="text-2xl font-bold mb-8 text-gray-200">
        Get In Touch
      </h2>
      <div className="flex flex-wrap gap-3">
        {contact.map((item) => (
          <a
            key={item.name}
            href={item.name === 'Email ID' ? `mailto:${item.value}` : item.value}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full text-sm border border-gray-700 text-gray-400 hover:border-gray-400 hover:text-white transition-all duration-300"
          >
            {item.name}
          </a>
        ))}
      </div>
    </section>
  )
} 