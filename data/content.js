export const personas = ['All', 'Finance', 'Data Engineering', 'SWE']

export const bio = {
  name: 'Vishnu Athreya',
  tagline: 'Systems at scale. Research that ships. Code that matters.',
}

export const projects = [
  {
    id: 1,
    title: 'Market Data Pipeline',
    description: 'Ingestion and normalization of time-series data across NSE, BSE, Zerodha and Upstox. Handles latency, missing data, and schema inconsistencies.',
    tags: ['Python', 'PostgreSQL', 'Time-Series', 'Data Engineering'],
    personas: ['All', 'Finance', 'Data Engineering'],
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Auth & Security Platform',
    description: 'Backend authentication system serving 3M+ active users across 1,000+ enterprise deployments. Focused on reliability and failure rate reduction.',
    tags: ['Java', 'REST APIs', 'Distributed Systems', 'CI/CD'],
    personas: ['All', 'SWE', 'Data Engineering'],
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Adaptive UI for Geriatric Users',
    description: 'IEEE published research. Adaptive interface reducing cognitive load in high-stakes workflows using psychometric analysis and rule-based personalization.',
    tags: ['Research', 'HCI', 'JavaScript', 'UX'],
    personas: ['All', 'SWE'],
    github: '#',
    featured: false,
  },
]

export const skills = [
  { name: 'Python', personas: ['All', 'Finance', 'Data Engineering', 'SWE'] },
  { name: 'Java', personas: ['All', 'SWE'] },
  { name: 'SQL', personas: ['All', 'Finance', 'Data Engineering', 'SWE'] },
  { name: 'PostgreSQL', personas: ['All', 'Data Engineering', 'Finance'] },
  { name: 'MongoDB', personas: ['All', 'SWE', 'Data Engineering'] },
  { name: 'REST APIs', personas: ['All', 'SWE'] },
  { name: 'CI/CD', personas: ['All', 'SWE', 'Data Engineering'] },
  { name: 'Distributed Systems', personas: ['All', 'SWE'] },
  { name: 'Time-Series Analysis', personas: ['All', 'Finance', 'Data Engineering'] },
  { name: 'Market Data Pipelines', personas: ['All', 'Finance', 'Data Engineering'] },
  { name: 'pandas', personas: ['All', 'Finance', 'Data Engineering'] },
  { name: 'Machine Learning', personas: ['All', 'Finance', 'Data Engineering'] },
]

export const contact = [
  {name: 'Email ID', value: 'vishnu.athreya77@gmail.com'},
  {name: 'Phone Number', value: '+91 9731819219'},
  {name: 'LinkedIn', value:'https://www.linkedin.com/in/vish28'},
]

export const personaColors = {
  'All': {
    accent: '#94a3b8',
    glow: 'rgba(148,163,184,0.06)',
    border: 'rgba(148,163,184,0.3)',
    tag: 'rgba(148,163,184,0.08)'
  },
  'Finance': { 
    accent: '#10b981', 
    glow: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.2)',
    tag: 'rgba(16,185,129,0.08)'
  },
  'Data Engineering': { 
    accent: '#f59e0b', 
    glow: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.2)',
    tag: 'rgba(245,158,11,0.08)'
  },
  'SWE': { 
    accent: '#3b82f6', 
    glow: 'rgba(59,130,246,0.06)',
    border: 'rgba(59,130,246,0.2)',
    tag: 'rgba(59,130,246,0.08)'
  },
}