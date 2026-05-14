'use client'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

type Phase = 'typing' | 'pausing' | 'deleting' | 'switching'

export function useTypewriter({ words, typeSpeed = 80, deleteSpeed = 40, pauseAfterType = 1800, pauseAfterDelete = 400 }: { words: string[]; typeSpeed?: number; deleteSpeed?: number; pauseAfterType?: number; pauseAfterDelete?: number }) {
  const prefersReduced = useReducedMotion()
  const [displayText, setDisplayText] = useState(prefersReduced ? words[0] : '')
  const [cursorVisible, setCursorVisible] = useState(true)
  const wordIndexRef = useRef(0)
  const phaseRef = useRef<Phase>('typing')
  const charIndexRef = useRef(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (prefersReduced) { setDisplayText(words[0]); return }
    const tick = () => {
      const word = words[wordIndexRef.current]
      const phase = phaseRef.current
      if (phase === 'typing') {
        charIndexRef.current += 1
        setDisplayText(word.slice(0, charIndexRef.current))
        if (charIndexRef.current >= word.length) { phaseRef.current = 'pausing'; timeoutRef.current = setTimeout(tick, pauseAfterType) }
        else timeoutRef.current = setTimeout(tick, typeSpeed)
      } else if (phase === 'pausing') { phaseRef.current = 'deleting'; timeoutRef.current = setTimeout(tick, deleteSpeed) }
      else if (phase === 'deleting') {
        charIndexRef.current -= 1
        setDisplayText(word.slice(0, charIndexRef.current))
        if (charIndexRef.current <= 0) { phaseRef.current = 'switching'; timeoutRef.current = setTimeout(tick, pauseAfterDelete) }
        else timeoutRef.current = setTimeout(tick, deleteSpeed)
      } else if (phase === 'switching') {
        wordIndexRef.current = (wordIndexRef.current + 1) % words.length
        phaseRef.current = 'typing'
        timeoutRef.current = setTimeout(tick, typeSpeed)
      }
    }
    timeoutRef.current = setTimeout(tick, 600)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [words, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete, prefersReduced])

  useEffect(() => {
    if (prefersReduced) return
    const interval = setInterval(() => setCursorVisible(v => phaseRef.current === 'pausing' ? true : !v), 530)
    return () => clearInterval(interval)
  }, [prefersReduced])

  return { displayText, cursorVisible }
}
