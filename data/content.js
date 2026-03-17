export const bio = {
  year: '2026',
  name: 'Vishnu Athreya',
  role: 'Software Engineer',
  location: 'Bengaluru, India',
  tagline: 'Systems thinker. People first.',
  email: 'vishnu.athreya77@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vish28',
  github: 'https://github.com/vishnuathreya28',
}

export const experiences = [
  {
    company: 'Dayforce',
    role: 'Associate Software Engineer',
    period: '2024 — Present',
    location: 'Bengaluru, India',
    description: 'Associate Software Engineer maintaining and scaling enterprise HR software at Dayforce, serving 6M+ employees across 600+ clients including Google, HPE, Deutsche Bank, and Oracle.',
    highlights: [
      'Spearheaded ESS go-live across multiple clients and almost 1M+ employees',
      'Built an in-house captcha service and configurable password module',
      'Resolved 16,000+ Veracode vulnerabilities, reinforcing platform security',
      'Drove cloud modernisation and hardware migration across product and infra',
      'Implemented CI/CD pipelines and migrated repositories to GitHub with AIDA',
      'Mentored 40+ interns and new joinees across the organisation',
    ],
    stack: ['Java', 'REST APIs', 'CI/CD', 'Distributed Systems'],
  },
  {
    company: 'QuantBlu',
    role: 'Founding Engineer',
    period: '2024',
    location: 'Remote',
    description: 'One of two engineers building a fintech product from scratch. Owned backend architecture, authentication systems, and API design end to end.',
    highlights: [
      'Designed secure authentication flows from scratch',
      'Built scalable APIs under tight timelines',
      'Made high-stakes architecture decisions in a 2-person team',
      'Delivered under ambiguity with full ownership',
    ],
    stack: ['Python', 'PostgreSQL', 'REST APIs', 'System Design'],
  },
  {
    company: 'TuteDude',
    role: 'Web Development Instructor',
    period: 'Nov 2023 — Feb 2024',
    location: 'Remote',
    description: 'Taught full-stack web development to students through an interactive online learning platform. Designed curriculum and delivered 55+ hours of original course content.',
    highlights: [
      'Taught MERN stack fundamentals to students across the platform',
      'Created and delivered 55+ hours of original course content',
      'Designed practical assignments and capstone projects',
      'Mentored learners individually on debugging and version control',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JavaScript'],
  },
]

export const projects = [
  {
    id: 1,
    title: 'ESS AI Assistant',
    description: 'LLM-powered chatbot built as a prototype for enterprise HR software. Lets employees interact with the application in plain language — navigate to screens, generate payslips, update details — without touching the UI directly.',
    tags: ['LLM', 'AI', 'Python', 'Enterprise Software'],
  },
  {
    id: 2,
    title: 'Market Data Pipeline',
    description: 'Ingestion and normalisation of time-series market data across NSE, BSE, Zerodha and Upstox. Built to handle latency, missing data, and schema inconsistencies across sources.',
    tags: ['Python', 'PostgreSQL', 'Time-Series', 'Data Engineering'],
  },
  {
    id: 3,
    title: 'Auth & Security Platform',
    description: 'Backend authentication system serving 3M+ active users across 1,000+ enterprise deployments. Focused on reliability, failure rate reduction, and security hardening.',
    tags: ['Java', 'REST APIs', 'Distributed Systems', 'CI/CD'],
  },
  {
    id: 4,
    title: 'This Portfolio',
    description: 'Designed and built from scratch. Next.js app router, Tailwind v4, Framer Motion animations, deployed on Vercel. Every line typed by hand.',
    tags: ['Next.js', 'Tailwind v4', 'Framer Motion', 'Vercel'],
  },
  {
    id: 5,
    title: 'Adaptive UI for Geriatric Users',
    description: 'IEEE published research on adaptive interfaces that reduce cognitive load in high-stakes workflows using psychometric analysis and rule-based personalisation.',
    tags: ['Research', 'HCI', 'JavaScript', 'UX'],
  },
  {
    id: 6,
    title: 'Resume Tailor',
    description: 'Paste a job description, get a tailored LaTeX resume — ATS clean and optimised for the role. Built with LLM-based persona reframing. Browser extension in the roadmap.',
    tags: ['LLM', 'LaTeX', 'Python', 'Developer Tools'],
    status: 'inprogress',
  },
]

export const education = [
  {
    institution: 'PES University',
    degree: 'B.Tech, Computer Science & Engineering',
    period: '2020 — 2024',
    location: 'Bengaluru, India',
    highlights: [
      'IEEE published research — Best Capstone among 200 teams',
      'Led design-thinking workshops through Samagic',
      'Mentored underprivileged students at The Coder Factory',
    ],
  },
  {
    institution: 'Graduate School',
    degree: 'Masters — Coming Soon',
    period: '2026 —',
    location: 'TBD',
    highlights: ['Details to be updated shortly.'],
    placeholder: true,
  },
]

export const achievements = [
  {
    category: 'Research & Academic',
    items: [
      {
        title: 'IEEE Published',
        description: 'Adaptive UI/UX framework for geriatric users using psychometric analysis, speech-to-text, and rule-based personalization.',
        year: '2023',
        tag: 'Publication',
      },
      {
        title: 'Best Capstone — PES University',
        description: 'Awarded best project among 200 teams across the graduating batch.',
        year: '2023',
        tag: 'Award',
      },
    ],
  },
  {
    category: 'Social Impact',
    items: [
      {
        title: 'The Coder Factory',
        description: 'Mentored underprivileged students in digital literacy and foundational programming. Teaching others became a core part of how I learn.',
        year: '2021',
        tag: 'Mentorship',
      },
      {
        title: 'Samagic',
        description: 'Organised and led design-thinking workshops focused on human-centered problem solving for real-world challenges.',
        year: '2022',
        tag: 'Community',
      },
    ],
  },
  {
    category: 'Leadership & Events',
    items: [
      {
        title: 'Event Organisation',
        description: 'Carved out a consistent voice through organising technical and community events during and after college.',
        year: '2021 — 2024',
        tag: 'Leadership',
      },
    ],
  },
]

export const publications = [
  {
    title: 'Adaptive UI/UX for Smart Geriatric Users',
    journal: 'IEEE',
    year: '2023',
    description: 'Proposed and implemented an adaptive UI/UX framework reducing cognitive load for older adults through psychometric profiling, speech-to-text integration, and rule-based interface personalization.',
    tags: ['HCI', 'Accessibility', 'Adaptive Systems', 'JavaScript'],
    link: 'https://ieeexplore.ieee.org/document/10585592/',
  },
]

export const timelineEvents = [
  {
    year: '2020',
    title: 'Entered PES University',
    description: 'Started CS during COVID. Learned to learn independently.',
    type: 'education',
  },
  {
    year: '2021',
    title: 'The Coder Factory',
    description: 'Mentored underprivileged students in digital literacy. Teaching shaped how I think.',
    type: 'impact',
  },
  {
    year: '2022',
    title: 'Samagic',
    description: 'Led design-thinking workshops. First taste of human-centered problem solving at scale.',
    type: 'impact',
  },
  {
    year: '2023',
    title: 'IEEE Published · Best Capstone',
    description: 'Built adaptive UI for geriatric users using psychometric analysis. Published. Awarded best among 200 teams.',
    type: 'achievement',
  },
  {
    year: '2023',
    title: 'QuantBlu — Founding Engineer',
    description: 'Two-person founding team. Designed auth systems and scalable APIs from scratch under pressure.',
    type: 'work',
  },
  {
    year: '2024',
    title: 'Dayforce — Associate SWE',
    description: 'Shipped for 3M+ users across 1000+ enterprise clients. Mentored 40+ interns across APAC.',
    type: 'work',
  },
  {
    year: '2025',
    title: "What's Next",
    description: 'Graduate school. Bigger systems. More impact.',
    type: 'future',
  },
]