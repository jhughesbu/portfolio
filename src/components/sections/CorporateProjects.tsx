'use client'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface CorporateProject {
  name: string
  attribution: string
  description: string
  stack: string[]
  featured?: boolean
  award?: string
}

const CORPORATE_PROJECTS: CorporateProject[] = [
  {
    name: 'DocuSearch',
    attribution: 'S&P Global',
    award: 'Hackathon Winner',
    description: 'AI-powered document analysis platform that bulk-ingests DOCX files and surfaces the most relevant content via similarity scoring. Built solo as a Flask web app on S&P Global\'s internal Spark API, with WebSocket-driven real-time progress, parallel processing across eight worker threads, and an interactive results UI with CSV export. Took home the hackathon — and was later re-architected into a custom RAG pipeline running on Databricks for production-scale use across the org.',
    stack: ['Flask', 'Python', 'Spark API', 'Databricks', 'RAG', 'WebSockets'],
    featured: true,
  },
  {
    name: 'P/E Valuation Data Pipelines',
    attribution: 'Alvarez & Marsal — Private Equity Services',
    description: 'Replaced manual Excel-based portfolio company valuation tracking with end-to-end big data pipelines. Source data flows into Snowflake on a scheduled cadence, and Power BI dashboards sit on top — giving the deal team a faster, more auditable view of PortCo metrics than the legacy spreadsheet workflow.',
    stack: ['Snowflake', 'Power BI', 'SQL', 'Power Query'],
  },
  {
    name: 'PortCo Data Intake Automation',
    attribution: 'Alvarez & Marsal — Private Equity Services',
    description: 'Replaced thousands of manual valuation-request emails with an automated intake system. Power Apps forms collect responses from PE firms, Power Automate routes follow-ups by portfolio company and file urgency/type, and every submitted file and data point lands in Snowflake — turning an email-and-Excel slog into a queryable dataset ready for deeper analysis.',
    stack: ['Power Automate', 'Power Apps', 'Snowflake', 'M365'],
  },
]

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  )
}

function TrophyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 010-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 000-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0012 0V2z" />
    </svg>
  )
}

export function CorporateProjects() {
  return (
    <section id="corporate-projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <p className="font-mono text-green text-sm mb-3">03. corporate projects</p>
          <h2 className="section-heading">Corporate Projects</h2>
          <p className="text-muted text-sm font-mono mb-12">client and employer work — under NDA, but here&apos;s the gist</p>
        </SectionWrapper>
        <motion.div
          className="grid sm:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CORPORATE_PROJECTS.map(p => {
            const isFeatured = !!p.featured
            return (
              <motion.div
                key={p.name}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className={`relative glass-card p-5 sm:p-6 flex flex-col gap-4 h-full transition-colors duration-300 ${
                  isFeatured
                    ? 'sm:col-span-2 border-amber-300/40 bg-gradient-to-br from-amber-400/[0.07] via-transparent to-amber-300/[0.03] hover:border-amber-300/60 shadow-[0_0_40px_-12px_rgba(251,191,36,0.25)]'
                    : 'hover:border-amber-400/30'
                }`}
              >
                {isFeatured && (
                  <span
                    className="pointer-events-none absolute inset-x-0 -top-px h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.7), transparent)' }}
                  />
                )}
                <div className="flex items-start justify-between gap-3">
                  <h3 className={`font-mono font-semibold leading-snug ${isFeatured ? 'text-amber-200 text-lg sm:text-xl' : 'text-amber-300/90 text-sm'}`}>
                    {p.name}
                  </h3>
                  {isFeatured && p.award ? (
                    <span className="flex items-center gap-1.5 shrink-0 mt-0.5 px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-300/40 text-amber-200">
                      <TrophyIcon />
                      <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">{p.award}</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 shrink-0 mt-0.5 text-amber-400/70">
                      <LockIcon />
                      <span className="text-[10px] font-mono uppercase tracking-wider">Confidential</span>
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-muted">{p.attribution}</p>
                <p className={`text-gray-400 leading-relaxed flex-1 ${isFeatured ? 'text-[15px]' : 'text-sm'}`}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/[0.06]">
                  {p.stack.map(t => (
                    <span
                      key={t}
                      className={`px-2 py-0.5 rounded-md text-xs font-mono border ${
                        isFeatured
                          ? 'bg-amber-400/[0.06] border-amber-300/20 text-amber-100/80'
                          : 'bg-white/[0.04] border-white/[0.06] text-muted'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
