'use client'
import { motion } from 'framer-motion'
import type { GitHubRepo } from '@/types/github'

interface FeaturedProjectProps { repo: GitHubRepo }

const STACK = ['Vapi.ai', 'GPT-4o', 'Express', 'Airtable', 'Node.js']

const TRANSCRIPT = [
  { who: 'agent', text: 'Hi, this is Summit Air — how can I help?' },
  { who: 'caller', text: 'My AC stopped cooling this morning.' },
  { who: 'agent', text: 'Got it. I can get a tech out today between 2 and 4pm — does that work?' },
]

export function FeaturedProject({ repo }: FeaturedProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass-card overflow-hidden mb-10 hover:border-white/[0.14] hover:shadow-glow-green transition-shadow duration-300"
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="p-7 sm:p-10 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-green">Featured</span>
            <span className="h-px flex-1 bg-gradient-to-r from-green/40 to-transparent" />
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">Summit Air</h3>
            <p className="font-mono text-sm text-muted">Voice AI for HVAC dispatch</p>
          </div>

          <div className="space-y-3 text-gray-400 text-[15px] leading-relaxed">
            <p>HVAC shops bleed revenue when calls go unanswered — emergencies pile up, schedules slip, and customers walk to the next listing. Summit Air is a 24/7 voice agent that picks up the line, triages the issue, and books the right tech to the right job.</p>
            <p>Built on Vapi.ai with GPT-4o for natural conversation, an Express backend for scheduling logic, and Airtable as the source of truth for jobs, customers, and emergency flags. Every call is logged and routed without a human in the loop.</p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {STACK.map(t => (
              <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.06] text-muted">{t}</span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-1">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green text-bg font-semibold text-xs rounded-lg hover:bg-green/90 active:scale-95 transition-all duration-150 font-mono"
            >
              View Code →
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/20 text-gray-300 font-semibold text-xs rounded-lg hover:border-cyan/40 hover:text-white active:scale-95 transition-all duration-150 font-mono"
              >
                Live Demo →
              </a>
            )}
          </div>
        </div>

        <div className="relative min-h-[280px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/[0.06] bg-gradient-to-br from-green/[0.04] via-transparent to-cyan/[0.04] flex items-center justify-center p-6">
          <div className="w-full max-w-sm space-y-3">
            <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
              </span>
              CALL IN PROGRESS
              <span className="ml-auto">00:42</span>
            </div>

            <div className="flex items-end gap-1 h-10">
              {[0.4, 0.7, 1, 0.6, 0.85, 0.5, 0.9, 0.3, 0.7, 0.55, 0.95, 0.4, 0.8, 0.6, 0.45].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 bg-green/60 rounded-sm animate-waveform"
                  style={{
                    height: `${h * 100}%`,
                    animationDelay: `${i * 80}ms`,
                  }}
                />
              ))}
            </div>

            <div className="space-y-2 pt-2">
              {TRANSCRIPT.map((line, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] px-3 py-2 rounded-lg text-[12px] leading-snug ${
                    line.who === 'agent'
                      ? 'bg-green/10 border border-green/20 text-gray-200'
                      : 'bg-white/[0.04] border border-white/[0.06] text-gray-300 ml-auto'
                  }`}
                >
                  <span className="font-mono text-[9px] uppercase tracking-wider opacity-60 block mb-0.5">
                    {line.who === 'agent' ? 'Summit Air' : 'Caller'}
                  </span>
                  {line.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
