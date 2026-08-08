'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { staggerContainer, staggerItem } from '@/lib/animations'

interface Company {
  name: string
  blurb: string
  accent: string
  bg: string
  logo?: string
}

const COMPANIES: Company[] = [
  { name: 'Salesforce',               blurb: 'Forward Deployed Engineer',  accent: '#00A1E0', bg: 'bg-white',                                    logo: '/logos/salesforce.png' },
  { name: 'S&P Global',               blurb: 'Financial Data & Analytics', accent: '#FFFFFF', bg: 'bg-[#DA1F26]',                                logo: '/logos/sp-global.jpg' },
  { name: 'AMC Networks',             blurb: 'Media',                      accent: '#FFFFFF', bg: 'bg-gradient-to-br from-[#5fa84e] to-[#1a8fb5]', logo: '/logos/amc-networks.jpg' },
  { name: 'John Hancock',             blurb: 'Financial Services',         accent: '#FFFFFF', bg: 'bg-[#0000DC]',                                logo: '/logos/john-hancock.jpg' },
  { name: 'Octus',                    blurb: 'Private Credit Intelligence', accent: '#FFFFFF', bg: 'bg-[#3E32FF]',                                logo: '/logos/octus.jpg' },
  { name: 'Alvarez & Marsal',         blurb: 'Consulting',                 accent: '#0E2A4A', bg: 'bg-white',                                    logo: '/logos/alvarez-marsal.jpg' },
  { name: 'Blockchain Founders Fund', blurb: 'Venture Capital',            accent: '#F97316', bg: 'bg-white',                                    logo: '/logos/blockchain-founders-fund.jpg' },
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
              className={`relative aspect-[4/3] sm:aspect-square rounded-xl overflow-hidden border border-white/[0.08] ${c.bg} group`}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{ boxShadow: `inset 0 0 0 2px ${c.accent}66` }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-5">
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={c.name}
                    fill
                    sizes="(min-width: 1024px) 220px, (min-width: 640px) 30vw, 45vw"
                    className="object-contain p-4"
                  />
                ) : (
                  <span className="font-sans font-bold text-2xl sm:text-3xl text-white tracking-tight text-center">
                    {c.name}
                  </span>
                )}
              </div>
              <div className="absolute inset-x-0 bottom-0 px-3 py-2 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/90">{c.blurb}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
