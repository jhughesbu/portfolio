export interface Skill { name: string; icon: string; category: string }

export const SKILLS: Skill[] = [
  { name: 'Python', icon: 'python', category: 'Languages' },
  { name: 'SQL', icon: 'sql', category: 'Languages' },
  { name: 'Next.js', icon: 'nextjs', category: 'Frameworks' },
  { name: 'React', icon: 'react', category: 'Frameworks' },
  { name: 'Node.js', icon: 'nodejs', category: 'Frameworks' },
  { name: 'Express', icon: 'express', category: 'Frameworks' },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'Frameworks' },
  { name: 'Scikit-learn', icon: 'scikit', category: 'Data & ML' },
  { name: 'PyTorch', icon: 'pytorch', category: 'Data & ML' },
  { name: 'Databricks', icon: 'databricks', category: 'Data & ML' },
  { name: 'Vapi.ai', icon: 'vapi', category: 'Tools' },
  { name: 'Airtable', icon: 'airtable', category: 'Tools' },
  { name: 'Git', icon: 'git', category: 'Tools' },
  { name: 'OpenAI', icon: 'openai', category: 'Tools' },
  { name: 'Power Automate', icon: 'powerautomate', category: 'Tools' },
  { name: 'Power BI', icon: 'powerbi', category: 'Tools' },
  { name: 'Power Apps', icon: 'powerapps', category: 'Tools' },
  { name: 'Vercel', icon: 'vercel', category: 'Cloud & Infra' },
  { name: 'Railway', icon: 'railway', category: 'Cloud & Infra' },
  { name: 'GitHub', icon: 'github', category: 'Cloud & Infra' },
]

export const SKILL_CATEGORIES = ['Languages', 'Frameworks', 'Data & ML', 'Tools', 'Cloud & Infra']
