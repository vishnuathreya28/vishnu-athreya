'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion' 
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

const navItems = ['About', 'Experience', 'Education', 'Achievements', 'Projects', 'Publications', 'Resume']

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="flex flex-col items-center">

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[160px]"
          style={{ backgroundColor: 'rgba(148,163,184,0.08)' }}
        />
      </div>

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 w-full flex flex-col items-center"
        style={{
          backgroundColor: 'rgba(240,239,233,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(26,26,26,0.06)',
        }}
      >
        {/* Main nav row */}
        <div className="w-full max-w-4xl flex items-center justify-between px-8 py-5">
          <span className="text-sm font-bold tracking-tight" style={{ color: '#1a1a1a' }}>
            VA
          </span>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-widest transition-colors duration-200"
                style={{ color: '#999' }}
                onMouseEnter={e => e.target.style.color = '#1a1a1a'}
                onMouseLeave={e => e.target.style.color = '#999'}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px"
              style={{ backgroundColor: '#1a1a1a' }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px"
              style={{ backgroundColor: '#1a1a1a' }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              transition={{ duration: 0.2 }}
              className="block w-5 h-px"
              style={{ backgroundColor: '#1a1a1a' }}
            />
          </button>
        </div>

          {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="w-full md:hidden flex flex-col px-8 pt-6 pb-6 gap-5"
              style={{ borderTop: '1px solid rgba(26,26,26,0.06)' }}
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: '#999' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 md:px-8 flex flex-col gap-28 pt-24 pb-28">
        <section id="about" style={{ scrollMarginTop: '120px' }} className="md:scroll-mt-24"><Hero /></section>
        <section id="timeline" style={{ scrollMarginTop: '120px' }} className="md:scroll-mt-24"><Timeline /></section>
        <section id="experience" style={{ scrollMarginTop: '120px' }} className="md:scroll-mt-24"><Experience /></section>
        <section id="education" style={{ scrollMarginTop: '120px' }} className="md:scroll-mt-24"><Education /></section>
        <section id="achievements" style={{ scrollMarginTop: '120px' }} className="md:scroll-mt-24"><Achievements /></section>
        <section id="projects" style={{ scrollMarginTop: '120px' }} className="md:scroll-mt-24"><Projects /></section>
        <section id="publications" style={{ scrollMarginTop: '120px' }} className="md:scroll-mt-24"><Publications /></section>
        <section id="resume" style={{ scrollMarginTop: '120px' }} className="md:scroll-mt-24"><Resume /></section>
        <section id="contact" style={{ scrollMarginTop: '120px' }} className="md:scroll-mt-24"><Contact /></section>
      </div>

    </main>
  )
}