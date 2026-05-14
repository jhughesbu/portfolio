'use client'
import { motion } from 'framer-motion'
import { LANGUAGE_COLORS } from '@/lib/github'
import type { GitHubRepo } from '@/types/github'

interface ProjectCardProps { repo: GitHubRepo }

export function ProjectCard({ repo }: ProjectCardProps) {
  const langColor = repo.language ? LANGUAGE_COLORS[repo.language] : null
  return (
    <motion.div whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }} className="glass-card p-5 flex flex-col gap-4 h-full cursor-default hover:border-white/[0.14] hover:shadow-glow-green transition-shadow duration-300">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-mono text-green text-sm font-semibold leading-snug">{repo.name}</h3>
        {langColor && <span className="flex items-center gap-1.5 shrink-0 mt-0.5"><span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: langColor }} /><span className="text-muted text-xs font-mono">{repo.language}</span></span>}
      </div>
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">{repo.description ?? 'No description provided.'}</p>
      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5">{repo.topics.slice(0, 4).map(topic => <span key={topic} className="px-2 py-0.5 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.06] text-muted">{topic}</span>)}</div>
      )}
      <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
        <span className="flex items-center gap-1 text-muted text-xs">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          {repo.stargazers_count}
        </span>
        <div className="flex items-center gap-3">
          {repo.homepage && <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-cyan transition-colors">Demo</a>}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-green transition-colors">Code</a>
        </div>
      </div>
    </motion.div>
  )
}
