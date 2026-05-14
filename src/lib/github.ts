import type { GitHubRepo } from '@/types/github'

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1, name: 'summit-air',
    description: 'AI-powered inbound call handler for HVAC. Built on Vapi.ai and GPT-4o — handles scheduling triage, books appointments, flags emergencies, and logs everything to Airtable.',
    html_url: 'https://github.com/jhughesbu/summit-air', homepage: null, language: 'JavaScript', stargazers_count: 0,
    topics: ['voice-ai', 'vapi', 'gpt-4o', 'express', 'airtable'],
  },
]

export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f7df1e', TypeScript: '#3178c6', Python: '#3572a5', Go: '#00add8',
  Rust: '#dea584', Ruby: '#cc342d', CSS: '#563d7c', HTML: '#e34c26',
  Shell: '#89e051', Swift: '#fa7343', Kotlin: '#7f52ff', Java: '#b07219',
}
