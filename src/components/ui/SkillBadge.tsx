'use client'
import { motion } from 'framer-motion'
import { Icons } from './icons/SkillIcons'
import type { Skill } from '@/lib/skills-data'

export function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = Icons[skill.icon]
  return (
    <motion.div whileHover={{ scale: 1.06, transition: { type: 'spring', stiffness: 400, damping: 17 } }} className="glass-card p-3 flex flex-col items-center gap-2 cursor-default hover:border-white/[0.14] transition-colors duration-200">
      {Icon ? <Icon className="w-7 h-7" /> : <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center"><span className="text-xs font-mono text-muted">{skill.name.slice(0, 2).toUpperCase()}</span></div>}
      <span className="text-xs font-mono text-gray-400 text-center leading-tight">{skill.name}</span>
    </motion.div>
  )
}
