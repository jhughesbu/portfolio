export interface Skill { name: string; icon: string; category: string }

export const SKILLS: Skill[] = [
  { name: 'TypeScript', icon: 'typescript', category: 'Languages' },
  { name: 'JavaScript', icon: 'javascript', category: 'Languages' },
  { name: 'Python', icon: 'python', category: 'Languages' },
  { name: 'SQL', icon: 'sql', category: 'Languages' },
  { name: 'Next.js', icon: 'nextjs', category: 'Frameworks' },
  { name: 'React', icon: 'react', category: 'Frameworks' },
  { name: 'Node.js', icon: 'nodejs', category: 'Frameworks' },
  { name: 'Express', icon: 'express', category: 'Frameworks' },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'Frameworks' },
  { name: 'Vapi.ai', icon: 'vapi', category: 'Tools' },
  { name: 'Airtable', icon: 'airtable', category: 'Tools' },
  { name: 'Git', icon: 'git', category: 'Tools' },
  { name: 'OpenAI', icon: 'openai', category: 'Tools' },
  { name: 'Vercel', icon: 'vercel', category: 'Cloud & Infra' },
  { name: 'Railway', icon: 'railway', category: 'Cloud & Infra' },
  { name: 'GitHub', icon: 'github', category: 'Cloud & Infra' },
]

export const SKILL_CATEGORIES = ['Languages', 'Frameworks', 'Tools', 'Cloud & Infra']
