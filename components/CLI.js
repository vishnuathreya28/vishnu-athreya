'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { bio, experiences, projects, education, publications } from '@/data/content'

const PROMPT = 'vishnu@portfolio:~$'

const commands = {
  help: `Available commands:
  whoami              → who I am
  cat experience.txt  → work experience
  cat projects.txt    → projects
  cat education.txt   → education
  cat publications    → research & publications
  open resume         → opens resume PDF
  contact             → get in touch
  clear               → clear terminal
  exit                → close terminal`,

  whoami: `${bio.name}
${bio.role} · ${bio.location}
${bio.tagline}`,

  'cat experience.txt': experiences.map((exp, i) =>
    `[${i + 1}] ${exp.company} — ${exp.role} (${exp.period})\n    ${exp.description}`
  ).join('\n\n'),

  'cat projects.txt': projects.map((p) =>
    `[${p.id}] ${p.title}${p.status === 'inprogress' ? ' [In Progress]' : ''}\n    ${p.description}`
  ).join('\n\n'),

  'cat education.txt': education.map(edu =>
    `${edu.institution} — ${edu.degree} (${edu.period})\n  ${edu.highlights.join('\n  ')}`
  ).join('\n\n'),

  'cat publications': publications.map(pub =>
    `${pub.title} — ${pub.journal} (${pub.year})\n  ${pub.description}\n  ${pub.link}`
  ).join('\n\n'),

  contact: `Email     ${bio.email}
LinkedIn  ${bio.linkedin}
GitHub    ${bio.github}`,
}

export default function CLI() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', text: `Welcome. Type 'help' to see available commands.` },
  ])
  const [cmdHistory, setCmdHistory] = useState([])
  const [cmdIndex, setCmdIndex] = useState(-1)
  const [showSpotlight, setShowSpotlight] = useState(false)
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    const seen = localStorage.getItem('cli-spotlight-seen')
    if (!seen) {
      const timer = setTimeout(() => setShowSpotlight(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const dismissSpotlight = () => {
    setShowSpotlight(false)
    localStorage.setItem('cli-spotlight-seen', 'true')
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === '/' && !open && e.target.tagName !== 'INPUT') {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    const newHistory = [...history, { type: 'input', text: cmd }]

    if (trimmed === 'exit') {
      setOpen(false)
      setHistory([{ type: 'output', text: `Welcome. Type 'help' to see available commands.` }])
      setInput('')
      return
    }

    if (trimmed === 'clear') {
      setHistory([])
      setInput('')
      setCmdHistory([cmd, ...cmdHistory])
      setCmdIndex(-1)
      return
    }

    if (trimmed === 'open resume') {
      window.open('/resume.pdf', '_blank')
      newHistory.push({ type: 'output', text: 'Opening resume.pdf...' })
    } else if (commands[trimmed]) {
      newHistory.push({ type: 'output', text: commands[trimmed] })
    } else if (trimmed === '') {
      // do nothing
    } else {
      newHistory.push({ type: 'output', text: `command not found: ${trimmed}. Type 'help' for available commands.` })
    }

    setHistory(newHistory)
    setCmdHistory([cmd, ...cmdHistory])
    setCmdIndex(-1)
    setInput('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input)
    }
    if (e.key === 'ArrowUp') {
      const next = Math.min(cmdIndex + 1, cmdHistory.length - 1)
      setCmdIndex(next)
      setInput(cmdHistory[next] || '')
    }
    if (e.key === 'ArrowDown') {
      const next = Math.max(cmdIndex - 1, -1)
      setCmdIndex(next)
      setInput(cmdHistory[next] || '')
    }
  }

  return (
    <>
      {/* Spotlight overlay */}
      <AnimatePresence>
        {showSpotlight && !open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={dismissSpotlight}
            className="fixed inset-0 z-40"
            style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          >
            <div
              className="fixed bottom-24 right-4 flex flex-col items-end gap-2"
              style={{ pointerEvents: 'none' }}
            >
              <div
                className="px-4 py-2 rounded-xl text-sm"
                style={{
                  backgroundColor: '#f59e0b',
                  color: '#1a1a1a',
                  fontFamily: 'monospace',
                  fontWeight: 600,
                }}
              >
                click to explore a different side
              </div>
              <div className="flex justify-end pr-4">
                <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                  <path
                    d="M12 0 L12 28 M5 20 L12 30 L19 20"
                    stroke="#f59e0b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLI button */}
      <AnimatePresence>
        {!open && (
          <>
            {/* Mobile */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2, duration: 0.4 }}
              onClick={() => {
                dismissSpotlight()
                setOpen(true)
              }}
              className="md:hidden fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl"
              style={{
                backgroundColor: '#1a1a1a',
                color: '#f59e0b',
                fontFamily: 'monospace',
                fontSize: '13px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
              }}
            >
              <span>&gt;_</span>
              <span style={{ color: '#999', fontSize: '11px' }}>tap to explore</span>
            </motion.button>

            {/* Desktop */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 2, duration: 0.4 }}
              onClick={() => {
                dismissSpotlight()
                setOpen(true)
              }}
              className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2 px-4 py-3 rounded-2xl"
              style={{
                backgroundColor: '#1a1a1a',
                color: '#f59e0b',
                fontFamily: 'monospace',
                fontSize: '13px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                animation: 'subtlePulse 2s ease-in-out infinite',
              }}
            >
              <span>&gt;_</span>
              <span style={{ color: '#999', fontSize: '11px' }}>press / or click</span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Terminal overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-0 left-0 right-0 z-50"
          >
            <div
              className="rounded-t-2xl overflow-hidden"
              style={{
                backgroundColor: '#1a1a1a',
                height: '420px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 -8px 40px rgba(0,0,0,0.2)',
              }}
            >
              {/* Title bar */}
              <div
                className="flex items-center justify-between px-4 py-3 flex-shrink-0"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ff5f57' }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#ffbd2e' }} />
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#28c840' }} />
                </div>
                <span className="text-xs" style={{ color: '#666', fontFamily: 'monospace' }}>
                  vishnu@portfolio
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-xs px-2 py-1 rounded"
                  style={{ color: '#666', fontFamily: 'monospace' }}
                >
                  esc
                </button>
              </div>

              {/* Output area */}
              <div
                className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
                style={{ fontFamily: 'monospace', fontSize: '13px' }}
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((line, i) => (
                  <div key={i}>
                    {line.type === 'input' ? (
                      <div style={{ color: '#f59e0b' }}>
                        <span style={{ color: '#666' }}>{PROMPT} </span>
                        {line.text}
                      </div>
                    ) : (
                      <pre
                        className="whitespace-pre-wrap"
                        style={{ color: '#d4a84b', lineHeight: '1.7' }}
                      >
                        {line.text}
                      </pre>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Input row */}
              <div
                className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <span style={{ color: '#666', fontFamily: 'monospace', fontSize: '13px' }}>
                  {PROMPT}
                </span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent outline-none"
                  style={{
                    color: '#f59e0b',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    caretColor: '#f59e0b',
                  }}
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}