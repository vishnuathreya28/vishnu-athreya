'use client'

import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Projects from '@/components/Projects'
import Publications from '@/components/Publications'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'

export default function Home() {
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
        className="sticky top-0 z-50 w-full flex justify-center px-8"
        style={{
          backgroundColor: 'rgba(240,239,233,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(26,26,26,0.06)',
          padding: '18px 32px',
        }}
      >
        <div className="w-full max-w-4xl flex items-center justify-between">
          <span className="text-sm font-bold tracking-tight" style={{ color: '#1a1a1a' }}>
            VA
          </span>
          <div className="flex gap-8">
            {['About', 'Experience', 'Education', 'Achievements', 'Projects', 'Publications', 'Resume', 'Contact'].map((item) => (
              
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
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col" style={{ gap: '120px', paddingTop: '100px', paddingBottom: '120px' }}>
        <section id="about"><Hero /></section>
        <section id="timeline"><Timeline /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="achievements"><Achievements /></section>
        <section id="projects"><Projects /></section>
        <section id="publications"><Publications /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </div>

    </main>
  )
}