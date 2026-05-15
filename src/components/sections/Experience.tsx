'use client'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface Company {
  name: string
  blurb: string
  accent: string
  bg: string
  textClass: string
  span?: string
}

const COMPANIES: Company[] = [
  { name: 'AMC Networks',          blurb: 'Media',                accent: '#3B82F6', bg: 'bg-[#0E2A4A]', textClass: 'font-bold tracking-tight uppercase', span: 'sm:col-span-2' },
  { name: 'Manulife · John Hancock', blurb: 'Financial Services', accent: '#00A758', bg: 'bg-white',     textClass: 'font-semibold text-[#1a1a1a]' },
  { name: 'Reorg',                 blurb: 'Financial Intelligence', accent: '#60A5FA', bg: 'bg-[#1E2A47]', textClass: 'font-bold tracking-tight' },
  { name: 'Alvarez & Marsal',      blurb: 'Consulting',           accent: '#1E40AF', bg: 'bg-white',     textClass: 'font-semibold text-[#0E2A4A]' },
  { name: 'Blockchain Founders Fund', blurb: 'Venture Capital',   accent: '#F97316', bg: 'bg-[#0a0a0a]', textClass: 'font-bold tracking-wide uppercase text-xs sm:text-sm' },
]

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <p className="font-mono text-green text-sm mb-3">02. experience</p>
          <h2 className="section-heading">Worked With</h2>
          <p className="text-muted text-sm font-mono mb-12">teams and clients I&apos;ve shipped alongside</p>
        </SectionWrapper>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {COMPANIES.map(c => (
            <motion.div
              key={c.name}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className={`relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden border border-white/[0.08] ${c.bg} ${c.span ?? ''} group`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: `inset 0 0 0 1px ${c.accent}66` }}
              />
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <span className={`text-center text-base sm:text-xl text-white ${c.textClass}`}>{c.name}</span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-2 font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: c.accent }}
              >
                {c.blurb}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
