'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('vishnu.athreya77@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contacts = [
    {
      label: 'Email',
      href: null,
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vish28',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com/vishnuathreya28',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      ),
    },
  ]

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
        Get In Touch
      </motion.h2>

      <div className="flex flex-col">
        {contacts.map((contact, index) => {
          const isEmail = contact.label === 'Email'
          const MotionEl = isEmail ? motion.div : motion.a

          return (
            <MotionEl
              key={contact.label}
              {...(isEmail
                ? { onClick: handleCopy, style: { cursor: 'pointer', borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' } }
                : { href: contact.href, target: '_blank', rel: 'noopener noreferrer', style: { borderBottom: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' } }
              )}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-center justify-between py-5 transition-all duration-200 group"
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-secondary)'}
            >
              <div className="flex items-center gap-4">
                <span style={{ color: 'var(--color-accent)' }}>{contact.icon}</span>
                <span className="text-sm font-semibold uppercase tracking-widest">
                  {contact.label}
                </span>
              </div>
              <span className="text-sm transition-all duration-200" style={{ color: 'var(--color-accent)' }}>
                {isEmail && copied ? 'Copied!' : '→'}
              </span>
            </MotionEl>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{
          marginTop: '80px',
          paddingTop: '40px',
          borderTop: '1px solid var(--color-border)',
        }}
        className="flex items-center justify-between"
      >
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
          Vishnu Athreya · 2026
        </span>
        <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
          Bengaluru, India
        </span>
      </motion.div>
    </section>
  )
}