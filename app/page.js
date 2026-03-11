'use client'

import { useState } from 'react'
import PersonaSwitcher from '@/components/PersonaSwitcher'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  const [persona, setPersona] = useState('All')

  return (
    <main className="flex flex-col items-center">

      {/* Ambient background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white opacity-[0.03] rounded-full blur-[120px]" />
      </div>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 w-full flex justify-center py-6 px-6 backdrop-blur-md border-b border-white/5">
        <div className="w-full max-w-4xl flex justify-center">
          <PersonaSwitcher active={persona} onChange={setPersona} />
        </div>
      </nav>

      {/* Page content */}
      <div className="w-full max-w-4xl px-6 flex flex-col">
        <Hero persona={persona} />
        <div className="w-full h-px bg-white/5 my-2" />
        <Projects persona={persona} />
        <div className="w-full h-px bg-white/5 my-2" />
        <Skills persona={persona} />
        <div className="w-full h-px bg-white/5 my-2" />
        <Contact />
      </div>

    </main>
  )
}