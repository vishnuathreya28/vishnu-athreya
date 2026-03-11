'use client'

import { personas, personaColors } from '@/data/content'

export default function PersonaSwitcher({ active, onChange }) {
  const color = personaColors[active]

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {personas.map((persona) => (
        <button
          key={persona}
          onClick={() => onChange(persona)}
          style={active === persona ? {
            backgroundColor: color.accent,
            color: '#080808',
            borderColor: color.accent,
          } : {
            borderColor: 'rgba(255,255,255,0.1)',
          }}
          className="px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 text-gray-400 hover:text-white"
        >
          {persona}
        </button>
      ))}
    </div>
  )
}