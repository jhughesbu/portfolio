'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { clsx } from 'clsx'
import { fadeInUp } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function SectionWrapper({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const prefersReduced = useReducedMotion()
  return (
    <motion.div ref={ref} variants={prefersReduced ? {} : fadeInUp} initial="hidden" animate={isInView ? 'visible' : 'hidden'} transition={{ delay }} className={clsx(className)}>
      {children}
    </motion.div>
  )
}
