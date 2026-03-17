'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PROMPT = 'vishnu@portfolio:~$'

const commands = {
  help: `Available commands:
  whoami              → who I am
  cat experience.txt  → work experience
  cat projects.txt    → projects
  cat education.txt   → education
  cat skills.txt      → tech stack
  open resume         → opens resume PDF
  contact             → get in touch
  clear               → clear terminal
  exit                → close terminal`,

  whoami: `Vishnu Athreya
Software Engineer · Bengaluru, India
Systems thinker. People first.
Currently at Dayforce — scaling enterprise HR software for 6M+ employees.`,

  'cat experience.txt': `[1] Dayforce — Associate Software Engineer (2024 — Present)
    Scaling enterprise HR software for 6M+ employees, 600+ clients.
    Mentored 40+ interns across APAC.

[2] QuantBlu — Founding Engineer (2024)
    Two-person team. Built auth systems and APIs from scratch.

[3] TuteDude — Web Development Instructor (Nov 2023 — Feb 2024)
    55+ hours of original course content. MERN stack.`,

  'cat projects.txt': `[1] ESS AI Assistant
    LLM-powered chatbot for enterprise HR navigation.

[2] Market Data Pipeline
    Time-series ingestion across NSE, BSE, Zerodha, Upstox.

[3] Auth & Security Platform
    Backend auth for 3M+ users, 1000+ enterprise deployments.

[4] This Portfolio
    Next.js, Tailwind v4, Framer Motion. Every line typed by hand.

[5] Adaptive UI for Geriatric Users
    IEEE published research. Best Capstone among 200 teams.`,

  'cat education.txt': `PES University — B.Tech, Computer Science & Engineering (2020 — 2024)
  IEEE published · Best Capstone · Design thinking · Mentorship

Graduate School — Masters (2026 —)
  Details coming soon.`,

  'cat skills.txt': `Languages     Python · Java · JavaScript · SQL
Backend       REST APIs · Node.js · Express · Distributed Systems
Data          PostgreSQL · MongoDB · Time-Series · pandas
Tools         Git · Docker · Figma · Postman · CI/CD`,

  contact: `Email     vishnu.athreya77@gmail.com
LinkedIn  linkedin.com/in/vish28
GitHub    github.com/vishnuathreya28`,
}

export default function CLI() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', text: `Welcome. Type 'help' to see available commands.` },
  ])
  const [cmdHistory, setCmdHistory] = useState([])
  const [cmdIndex, setCmdIndex] = useState(-1)
  const inputRef = useRef(null)
  const bottomRef = useRef(null)

  // Open on '/' keypress
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

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  // Scroll to bottom on new output
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
    // Arrow up — previous command
    if (e.key === 'ArrowUp') {
      const next = Math.min(cmdIndex + 1, cmdHistory.length - 1)
      setCmdIndex(next)
      setInput(cmdHistory[next] || '')
    }
    // Arrow down — next command
    if (e.key === 'ArrowDown') {
      const next = Math.max(cmdIndex - 1, -1)
      setCmdIndex(next)
      setInput(cmdHistory[next] || '')
    }
  }

  return (
    <>
      {/* Hint */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="fixed bottom-6 right-6 z-40 text-xs px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: 'rgba(26,26,26,0.06)',
              color: '#999',
              fontFamily: 'monospace',
            }}
          >
            press / to open terminal
          </motion.div>
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
            className="fixed bottom-0 left-0 right-0 z-50 mx-auto"
            style={{ maxWidth: '768px', left: '50%', transform: 'translateX(-50%)' }}
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
              {/* Terminal title bar */}
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