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
  vizType?: 'atlas' | 'valuation'
}

const CORPORATE_PROJECTS: CorporateProject[] = [
  {
    name: 'DocuSearch',
    attribution: 'S&P Global · Automation Manager',
    award: '1st Place · i3 AI Hackathon',
    description: 'Led a team of developers and subject-matter experts to take 1st place at the i3 AI Hackathon, selected over 400 teams and 1,000+ participants by a panel of C-suite judges. The winning product: a full-stack LLM-driven document search tool, originally a Flask web app on the internal Spark API with bulk DOCX ingest, similarity scoring, WebSocket progress, and parallel processing. Later re-architected as a custom RAG pipeline on Databricks that ingests, parses, and semantically indexes 1,000+ equity and multi-asset methodology documents, enabling natural-language search, variant detection, and automated editing at scale.',
    stack: ['Flask', 'Python', 'Spark API', 'Databricks', 'RAG', 'WebSockets'],
    featured: true,
  },
  {
    name: 'Atlas',
    attribution: 'S&P Global · Automation Manager',
    description: 'Led the build of a full-stack application that centralizes ETF launch and workflow tracking across the org. Replaced fragmented trackers and email threads with a single source of truth, saving ~20 hours a week across 200+ global stakeholders and giving leadership real-time visibility into every launch in flight.',
    stack: ['Power Apps', 'Power Automate', 'Power BI', 'SharePoint', 'Databricks', 'Jira', 'REST APIs'],
    vizType: 'atlas',
  },
  {
    name: 'P/E Valuation Pipelines & Dashboards',
    attribution: 'Alvarez & Marsal · Forward Deployed Engineer, Private Equity',
    description: 'Launched a Power BI dashboard and end-to-end ETL system serving private equity clients including General Atlantic, Silver Lake, and Patient Square Capital, credited with ~$1M in revenue impact by deepening data analytics for equity client services. Built and maintained the pipelines in Python and SQL with dbt, AWS (EC2, Lambda, S3), and Airflow orchestration, landing the data in Snowflake for Power BI to sit on top.',
    stack: ['Python', 'SQL', 'dbt', 'AWS', 'Airflow', 'Snowflake', 'Power BI'],
    vizType: 'valuation',
  },
  {
    name: 'Valuation Collection Automation',
    attribution: 'Alvarez & Marsal · Forward Deployed Engineer, Private Equity',
    description: 'Replaced the manual valuation-request workflow (thousands of emails and Excel attachments each quarter) with an automated intake system. Power Apps forms collect responses from PE firms, Power Automate routes follow-ups by portfolio company and file urgency/type, and every submission lands in Snowflake. Cut quarterly completion time by ~60 hours.',
    stack: ['Python', 'Power Automate', 'Power Apps', 'Snowflake', 'M365'],
  },
  {
    name: 'Sales Intelligence Dashboards',
    attribution: 'Octus (formerly Reorg) · Business Intelligence Developer',
    description: 'Built dynamic Power BI sales dashboards that supported the achievement of a $118M business target, with optimized SQL queries running against 100M+ data points in Snowflake. Also designed and ran A/B testing on Reorg\'s new bankruptcy algorithm features and UX, with feedback that drove higher client adoption of the product.',
    stack: ['Power BI', 'SQL', 'Snowflake', 'A/B Testing'],
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

function DocIcon() {
  return (
    <svg width="11" height="13" viewBox="0 0 12 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M2 1h6l3 3v9H2z" />
      <path d="M8 1v3h3" />
    </svg>
  )
}

const DOCU_DOCS = [
  { name: 'Methodology_2024_Q3.docx', score: 94 },
  { name: 'Index_Rules_v12.docx',     score: 71 },
  { name: 'Equity_ETF_Spec.docx',     score: 58 },
  { name: 'Multi_Asset_Brief.docx',   score: 42 },
]

function DocuSearchViz() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-black/30 border border-amber-300/15">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(252, 211, 77, 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16" y2="16" />
        </svg>
        <span className="font-mono text-[11px] text-amber-100/70 truncate">passage: &quot;index rebalance methodology&quot;</span>
      </div>

      <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300" />
        </span>
        SCANNING DOCUMENTS
        <span className="ml-auto">1,247 indexed</span>
      </div>

      <div className="space-y-2.5">
        {DOCU_DOCS.map((doc, i) => (
          <div key={doc.name} className="space-y-1">
            <div className="flex items-center justify-between text-[11px] font-mono">
              <div className="flex items-center gap-1.5 text-gray-300 truncate text-amber-200/90">
                <DocIcon />
                <span className="truncate">{doc.name}</span>
              </div>
              <span className="text-amber-200 shrink-0 ml-2">{doc.score}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-amber-200 animate-doc-scan"
                style={{ ['--score' as string]: `${doc.score}%`, animationDelay: `${i * 0.18}s` } as React.CSSProperties}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="pt-3 mt-1 border-t border-amber-300/15 animate-match-reveal"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-green">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Top Match
        </div>
        <div className="flex items-center justify-between mt-1 text-[12px] font-mono">
          <span className="text-gray-200 truncate">Methodology_2024_Q3.docx</span>
          <span className="text-green shrink-0 ml-2">94%</span>
        </div>
      </div>
    </div>
  )
}

const ATLAS_STAGES = ['PLAN', 'BUILD', 'REVIEW', 'LAUNCH']

const ATLAS_ETFS = [
  { name: 'S&P 500 ESG Index',         status: 'LAUNCHED',  color: 'green' },
  { name: 'DJ Emerging Markets Bond',  status: 'IN REVIEW', color: 'amber' },
  { name: 'S&P Tech Pure-Play',        status: 'BUILDING',  color: 'cyan'  },
  { name: 'DJ Sustainable Real Est.',  status: 'PLANNING',  color: 'muted' },
]

const STATUS_STYLES: Record<string, string> = {
  green: 'bg-green/15 border-green/30 text-green',
  amber: 'bg-amber-400/15 border-amber-300/30 text-amber-200',
  cyan:  'bg-cyan/15 border-cyan/30 text-cyan',
  muted: 'bg-white/[0.04] border-white/[0.08] text-muted',
}

function AtlasViz() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300" />
        </span>
        ATLAS · 14 ETFs IN FLIGHT
        <span className="ml-auto text-amber-200/70">20 hrs/wk saved</span>
      </div>

      <div className="px-1 pt-1">
        <div className="relative h-2">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-amber-300/25" />
          <div className="absolute inset-0 flex justify-between items-center">
            {ATLAS_STAGES.map((_, i) => (
              <span
                key={i}
                className="block w-2 h-2 rounded-full bg-amber-300/60 animate-atlas-stage"
                style={{ animationDelay: `${i * 1.45}s` } as React.CSSProperties}
              />
            ))}
          </div>
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-200 shadow-[0_0_10px_rgba(252,211,77,0.7)] animate-atlas-flow"
            style={{ left: '0%' }}
          />
        </div>
        <div className="mt-2 grid grid-cols-4 text-center">
          {ATLAS_STAGES.map(s => (
            <span key={s} className="font-mono text-[9px] uppercase tracking-widest text-muted">{s}</span>
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        {ATLAS_ETFS.map(etf => (
          <div key={etf.name} className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-md bg-black/20 border border-white/[0.04]">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="block w-1 h-1 rounded-full bg-amber-300/70 shrink-0" />
              <span className="font-mono text-[11px] text-gray-300 truncate">{etf.name}</span>
            </div>
            <span className={`shrink-0 px-1.5 py-0.5 rounded border font-mono text-[9px] uppercase tracking-wider ${STATUS_STYLES[etf.color]}`}>
              {etf.status}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-2 mt-1 border-t border-amber-300/15 flex items-center justify-between font-mono text-[10px] text-muted uppercase tracking-wider">
        <span>200+ stakeholders</span>
        <span className="text-amber-200/80">single source of truth</span>
      </div>
    </div>
  )
}

const VAL_BARS = [
  { label: 'GA-01', height: 0.92 },
  { label: 'SL-02', height: 0.68 },
  { label: 'PS-03', height: 0.84 },
  { label: 'GA-04', height: 0.55 },
  { label: 'SL-05', height: 0.72 },
  { label: 'PS-06', height: 0.41 },
]

function ValuationViz() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div className="flex items-center gap-2 font-mono text-[11px] text-muted">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300" />
        </span>
        Q3 2024 · PORTCO VALUATIONS
        <span className="ml-auto text-amber-200/70">refreshed nightly</span>
      </div>

      <div className="rounded-md bg-black/25 border border-amber-300/15 px-3 py-3">
        <div className="flex items-end justify-between gap-2 h-28">
          {VAL_BARS.map((b, i) => (
            <div key={b.label} className="flex-1 flex flex-col items-center gap-1.5 h-full">
              <div className="flex-1 w-full flex items-end">
                <div
                  className="w-full rounded-t-sm bg-gradient-to-t from-amber-500/80 to-amber-200 origin-bottom animate-bar-grow"
                  style={{
                    height: '100%',
                    ['--bar' as string]: `${b.height}`,
                    animationDelay: `${i * 0.18}s`,
                  } as React.CSSProperties}
                />
              </div>
              <span className="font-mono text-[8.5px] text-muted tracking-wider uppercase">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-md bg-black/20 border border-amber-300/10 px-2.5 py-2 text-center">
          <div className="font-mono text-base font-bold text-amber-200 leading-none">$2.4B</div>
          <div className="font-mono text-[9px] text-muted mt-1 uppercase tracking-wider">AUM</div>
        </div>
        <div className="rounded-md bg-black/20 border border-amber-300/10 px-2.5 py-2 text-center">
          <div className="font-mono text-base font-bold text-amber-200 leading-none">47</div>
          <div className="font-mono text-[9px] text-muted mt-1 uppercase tracking-wider">PortCos</div>
        </div>
        <div className="rounded-md bg-black/20 border border-amber-300/10 px-2.5 py-2 text-center">
          <div className="font-mono text-base font-bold text-green leading-none">+$1M</div>
          <div className="font-mono text-[9px] text-muted mt-1 uppercase tracking-wider">Impact</div>
        </div>
      </div>

      <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-muted">
        <span>source</span>
        <span className="flex-1 h-px bg-amber-300/15" />
        <span>dbt</span>
        <span className="flex-1 h-px bg-amber-300/15" />
        <span>snowflake</span>
        <span className="flex-1 h-px bg-amber-300/15" />
        <span className="text-amber-200/80">power bi</span>
      </div>
    </div>
  )
}

function pickViz(t: CorporateProject['vizType']) {
  if (t === 'atlas') return <AtlasViz />
  if (t === 'valuation') return <ValuationViz />
  return null
}

export function CorporateProjects() {
  return (
    <section id="corporate-projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <p className="font-mono text-green text-sm mb-3">03. corporate projects</p>
          <h2 className="section-heading">Corporate Projects</h2>
          <p className="text-muted text-sm font-mono mb-12">client and employer work, under NDA but here&apos;s the gist</p>
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
            const viz = pickViz(p.vizType)
            if (isFeatured) {
              return (
                <motion.div
                  key={p.name}
                  variants={staggerItem}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="relative glass-card overflow-hidden h-full sm:col-span-2 border-amber-300/40 bg-gradient-to-br from-amber-400/[0.07] via-transparent to-amber-300/[0.03] hover:border-amber-300/60 shadow-[0_0_40px_-12px_rgba(251,191,36,0.25)] transition-colors duration-300"
                >
                  <span
                    className="pointer-events-none absolute inset-x-0 -top-px h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.7), transparent)' }}
                  />
                  <div className="grid lg:grid-cols-[1.1fr_1fr]">
                    <div className="p-5 sm:p-7 flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-mono font-semibold leading-snug text-amber-200 text-lg sm:text-xl">{p.name}</h3>
                        {p.award && (
                          <span className="flex items-center gap-1.5 shrink-0 mt-0.5 px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-300/40 text-amber-200">
                            <TrophyIcon />
                            <span className="text-[10px] font-mono uppercase tracking-wider font-semibold">{p.award}</span>
                          </span>
                        )}
                      </div>
                      <p className="font-mono text-xs text-muted">{p.attribution}</p>
                      <p className="text-gray-400 leading-relaxed flex-1 text-[15px]">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/[0.06]">
                        {p.stack.map(t => (
                          <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono border bg-amber-400/[0.06] border-amber-300/20 text-amber-100/80">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="relative min-h-[320px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-amber-300/15 bg-gradient-to-br from-amber-400/[0.04] via-transparent to-amber-300/[0.02] flex items-center justify-center p-6">
                      <DocuSearchViz />
                    </div>
                  </div>
                </motion.div>
              )
            }
            if (viz) {
              return (
                <motion.div
                  key={p.name}
                  variants={staggerItem}
                  whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                  className="relative glass-card overflow-hidden h-full sm:col-span-2 hover:border-amber-400/30 transition-colors duration-300"
                >
                  <div className="grid lg:grid-cols-[1.1fr_1fr]">
                    <div className="p-5 sm:p-6 flex flex-col gap-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-mono text-amber-300/90 text-sm font-semibold leading-snug">{p.name}</h3>
                        <span className="flex items-center gap-1.5 shrink-0 mt-0.5 text-amber-400/70">
                          <LockIcon />
                          <span className="text-[10px] font-mono uppercase tracking-wider">Confidential</span>
                        </span>
                      </div>
                      <p className="font-mono text-xs text-muted">{p.attribution}</p>
                      <p className="text-gray-400 leading-relaxed flex-1 text-sm">{p.description}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/[0.06]">
                        {p.stack.map(t => (
                          <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono border bg-white/[0.04] border-white/[0.06] text-muted">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="relative min-h-[320px] lg:min-h-0 border-t lg:border-t-0 lg:border-l border-amber-300/15 bg-gradient-to-br from-amber-400/[0.03] via-transparent to-amber-300/[0.02] flex items-center justify-center p-6">
                      {viz}
                    </div>
                  </div>
                </motion.div>
              )
            }
            return (
              <motion.div
                key={p.name}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="relative glass-card p-5 sm:p-6 flex flex-col gap-4 h-full transition-colors duration-300 hover:border-amber-400/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-mono text-amber-300/90 text-sm font-semibold leading-snug">{p.name}</h3>
                  <span className="flex items-center gap-1.5 shrink-0 mt-0.5 text-amber-400/70">
                    <LockIcon />
                    <span className="text-[10px] font-mono uppercase tracking-wider">Confidential</span>
                  </span>
                </div>
                <p className="font-mono text-xs text-muted">{p.attribution}</p>
                <p className="text-gray-400 leading-relaxed flex-1 text-sm">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-white/[0.06]">
                  {p.stack.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-xs font-mono border bg-white/[0.04] border-white/[0.06] text-muted">{t}</span>
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
