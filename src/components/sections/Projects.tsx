'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { FeaturedProject } from '@/components/ui/FeaturedProject'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { FALLBACK_REPOS, EXTRA_PROJECTS } from '@/lib/github'
import { staggerContainer, staggerItem } from '@/lib/animations'
import type { GitHubRepo } from '@/types/github'

const FEATURED_REPO = 'summit-air'

function SkeletonCard() {
  return (
    <div className="glass-card p-5 space-y-4 animate-pulse">
      <div className="flex justify-between"><div className="h-4 w-32 bg-white/[0.06] rounded" /><div className="h-4 w-16 bg-white/[0.04] rounded" /></div>
      <div className="space-y-2"><div className="h-3 w-full bg-white/[0.04] rounded" /><div className="h-3 w-3/4 bg-white/[0.04] rounded" /></div>
      <div className="flex gap-2"><div className="h-5 w-16 bg-white/[0.04] rounded-md" /><div className="h-5 w-12 bg-white/[0.04] rounded-md" /></div>
    </div>
  )
}

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        const live = Array.isArray(data) && data.length > 0 ? data : FALLBACK_REPOS
        const seen = new Set(live.map((r: GitHubRepo) => r.name))
        const extras = EXTRA_PROJECTS.filter(r => !seen.has(r.name))
        setRepos([...live, ...extras])
      })
      .catch(() => setRepos([...FALLBACK_REPOS, ...EXTRA_PROJECTS]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <p className="font-mono text-green text-sm mb-3">03. projects</p>
          <h2 className="section-heading">Things I&apos;ve Built</h2>
          <p className="text-muted text-sm font-mono mb-12">pulled live from <a href="https://github.com/jhughesbu" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">github.com/jhughesbu</a></p>
        </SectionWrapper>
        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{[1,2,3].map(i => <SkeletonCard key={i} />)}</div>
        ) : (() => {
          const featured = repos.find(r => r.name === FEATURED_REPO)
          const rest = repos.filter(r => r.name !== FEATURED_REPO)
          return (
            <>
              {featured && <FeaturedProject repo={featured} />}
              {rest.length > 0 && (
                <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}>
                  {rest.map(repo => (<motion.div key={repo.id} variants={staggerItem}><ProjectCard repo={repo} /></motion.div>))}
                </motion.div>
              )}
            </>
          )
        })()}
      </div>
    </section>
  )
}
