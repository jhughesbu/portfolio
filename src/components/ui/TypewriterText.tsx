'use client'
import { clsx } from 'clsx'
import { useTypewriter } from '@/hooks/useTypewriter'

export function TypewriterText({ words, className }: { words: string[]; className?: string }) {
  const { displayText, cursorVisible } = useTypewriter({ words })
  return (
    <span className={clsx('inline-flex items-baseline', className)}>
      <span className="text-green">{displayText}</span>
      <span className={clsx('inline-block w-[3px] h-[0.85em] ml-[3px] bg-green align-middle translate-y-[0.05em]', cursorVisible ? 'opacity-100' : 'opacity-0')} aria-hidden="true" />
    </span>
  )
}
