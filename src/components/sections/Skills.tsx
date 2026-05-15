'use client'
import { motion } from 'framer-motion'
import { SkillBadge } from '@/components/ui/SkillBadge'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { SKILLS, SKILL_CATEGORIES } from '@/lib/skills-data'
import { staggerContainer, staggerItem } from '@/lib/animations'

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <p className="font-mono text-green text-sm mb-3">04. skills</p>
          <h2 className="section-heading">Tech I Work With</h2>
          <p className="text-muted text-sm font-mono mb-12">the tools, languages, and platforms I reach for</p>
        </SectionWrapper>
        <div className="space-y-10">
          {SKILL_CATEGORIES.map((category, ci) => (
            <SectionWrapper key={category} delay={ci * 0.05}>
              <h3 className="font-mono text-xs text-muted uppercase tracking-widest mb-4">{category}</h3>
              <motion.div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}>
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <motion.div key={skill.name} variants={staggerItem}><SkillBadge skill={skill} /></motion.div>
                ))}
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
