'use client'
import { motion } from 'framer-motion'
import type { GitHubRepo } from '@/types/github'

interface MazeFeaturedProjectProps { repo: GitHubRepo }

const STACK = ['Java', "Kruskal's", 'DFS', 'BFS', 'OOP']

function MazeViz() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
        </span>
        SOLVING
        <span className="ml-auto">step 12 / 14</span>
      </div>

      <svg viewBox="0 0 200 140" className="w-full h-auto rounded-md border border-white/[0.04] bg-black/20">
        {Array.from({ length: 10 }).map((_, c) =>
          Array.from({ length: 7 }).map((_, r) => (
            <circle key={`${c}-${r}`} cx={c * 20 + 10} cy={r * 20 + 10} r={1} fill="rgba(255,255,255,0.10)" />
          ))
        )}

        <g stroke="rgba(0,212,255,0.22)" strokeWidth="1.4" strokeLinecap="round" fill="none">
          <path d="M 50 0 L 50 30" />
          <path d="M 70 30 L 90 30" />
          <path d="M 90 10 L 130 10" />
          <path d="M 130 30 L 130 50" />
          <path d="M 30 50 L 30 90" />
          <path d="M 50 70 L 90 70" />
          <path d="M 110 50 L 110 90" />
          <path d="M 150 30 L 150 90" />
          <path d="M 130 110 L 170 110" />
          <path d="M 70 90 L 70 130" />
        </g>

        <path
          d="M 10 10 L 30 10 L 30 50 L 70 50 L 70 30 L 110 30 L 110 70 L 130 70 L 130 110 L 170 110 L 170 130 L 190 130"
          stroke="#00ff88"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          className="animate-maze-solve"
          style={{ strokeDasharray: 1, filter: 'drop-shadow(0 0 4px rgba(0,255,136,0.45))' }}
        />

        <circle cx="10" cy="10" r="3" fill="#00ff88" />

        <g transform="translate(190, 130)">
          <circle r="4" fill="#00d4ff" opacity="0.35">
            <animate attributeName="r" values="3;6.5;3" dur="1.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <circle r="2.5" fill="#00d4ff" />
        </g>
      </svg>

      <div className="grid grid-cols-2 gap-2 pt-1">
        <div className="px-3 py-2 rounded-lg bg-green/10 border border-green/20 text-[11px] font-mono leading-snug">
          <div className="flex items-center gap-2 mb-0.5 text-gray-200">
            <span className="w-1.5 h-1.5 rounded-full bg-green" />
            <span className="font-semibold">DFS</span>
          </div>
          <span className="text-gray-400">14 steps</span>
        </div>
        <div className="px-3 py-2 rounded-lg bg-cyan/10 border border-cyan/20 text-[11px] font-mono leading-snug">
          <div className="flex items-center gap-2 mb-0.5 text-gray-200">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
            <span className="font-semibold">BFS</span>
          </div>
          <span className="text-gray-400">12 steps</span>
        </div>
      </div>
    </div>
  )
}

export function MazeFeaturedProject({ repo }: MazeFeaturedProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="glass-card overflow-hidden mb-10 hover:border-white/[0.14] hover:shadow-glow-cyan transition-shadow duration-300"
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr]">
        <div className="p-7 sm:p-10 flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-cyan">Featured</span>
            <span className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" />
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">The Maze</h3>
            <p className="font-mono text-sm text-muted">Pathfinding visualizer in Java</p>
          </div>

          <div className="space-y-3 text-gray-400 text-[15px] leading-relaxed">
            <p>Random mazes generated on the fly with Kruskal&apos;s algorithm, then DFS and BFS race to solve them. A manual-solve mode lets the player try first, which builds intuition before the algorithms take over.</p>
            <p>One program, three distinct algorithm families: a generator and two solvers sharing the same grid representation. The kind of classic CS project that quietly proves you can model a problem cleanly before you reach for a library.</p>
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
              className="px-4 py-2 bg-cyan text-bg font-semibold text-xs rounded-lg hover:bg-cyan/90 active:scale-95 transition-all duration-150 font-mono"
            >
              View Code →
            </a>
          </div>
        </div>

        <div className="relative min-h-[280px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-white/[0.06] bg-gradient-to-br from-cyan/[0.04] via-transparent to-green/[0.04] flex items-center justify-center p-6">
          <MazeViz />
        </div>
      </div>
    </motion.article>
  )
}
