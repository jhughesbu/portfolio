import type { GitHubRepo } from '@/types/github'

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1, name: 'summit-air',
    description: 'AI-powered inbound call handler for HVAC. Built on Vapi.ai and GPT-4o — handles scheduling triage, books appointments, flags emergencies, and logs everything to Airtable.',
    html_url: 'https://github.com/jhughesbu/summit-air', homepage: null, language: 'JavaScript', stargazers_count: 0,
    topics: ['voice-ai', 'vapi', 'gpt-4o', 'express', 'airtable'],
  },
]

// Manually featured projects appended to whatever the live GitHub API returns.
// Useful for repos that live on a different account or aren't picked up by the feed.
export const EXTRA_PROJECTS: GitHubRepo[] = [
  {
    id: 1000, name: 'summit-air',
    description: 'AI-powered inbound call handler for HVAC. Built on Vapi.ai and GPT-4o — handles scheduling triage, books appointments, flags emergencies, and logs everything to Airtable.',
    html_url: 'https://github.com/jhughesbu/summit-air', homepage: null, language: 'JavaScript', stargazers_count: 0,
    topics: ['voice-ai', 'vapi', 'gpt-4o', 'express', 'airtable'],
  },
  {
    id: 999, name: 'portfolio',
    description: 'This site. Next.js + Tailwind, custom animated visuals for each featured project (voice call, maze solve, doc scan), deployed on Vercel. Built to position as a Forward Deployed Engineer.',
    html_url: 'https://github.com/jhughesbu/portfolio', homepage: null, language: 'TypeScript', stargazers_count: 0,
    topics: ['nextjs', 'tailwind', 'framer-motion', 'typescript', 'vercel'],
  },
  {
    id: 1001, name: 'The-Maze',
    description: 'Java maze app — generates random mazes with Kruskal\'s algorithm, then races DFS and BFS to find the exit. Includes a manual-solve mode so the player can try it themselves.',
    html_url: 'https://github.com/jhughes33/The-Maze', homepage: null, language: 'Java', stargazers_count: 0,
    topics: ['algorithms', 'kruskal', 'dfs', 'bfs', 'pathfinding'],
  },
  {
    id: 1002, name: 'Pyramid-Solitaire',
    description: 'Pyramid Solitaire built in Java with a clean MVC split — model holds the game state and rules, view/controller handles play, and cards are modeled through interfaces with dedicated Suit and Number classes.',
    html_url: 'https://github.com/jhughes33/Pyramid-Solitaire', homepage: null, language: 'Java', stargazers_count: 0,
    topics: ['java', 'mvc', 'oop', 'interfaces', 'game'],
  },
]

export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f7df1e', TypeScript: '#3178c6', Python: '#3572a5', Go: '#00add8',
  Rust: '#dea584', Ruby: '#cc342d', CSS: '#563d7c', HTML: '#e34c26',
  Shell: '#89e051', Swift: '#fa7343', Kotlin: '#7f52ff', Java: '#b07219',
}
