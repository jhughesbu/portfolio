'use client'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface CorporateProject {
  name: string
  attribution: string
  description: string
  stack: string[]
}

const CORPORATE_PROJECTS: CorporateProject[] = [
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
          {CORPORATE_PROJECTS.map(p => (
            <motion.div
              key={p.name}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="glass-card p-5 flex flex-col gap-4 h-full hover:border-amber-400/30 transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-mono text-amber-300/90 text-sm font-semibold leading-snug">{p.name}</h3>
                <span className="flex items-center gap-1.5 shrink-0 mt-0.5 text-amber-400/70">
                  <LockIcon />
                  <span className="text-[10px] font-mono uppercase tracking-wider">Confidential</span>
                </span>
              </div>
              <p className="font-mono text-xs text-muted">{p.attribution}</p>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/[0.06]">
                {p.stack.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.06] text-muted">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
