'use client'
import { useEffect, useRef } from 'react'

export function CursorSpotlight() {
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const handler = (e: MouseEvent) => {
      if (!divRef.current) return
      divRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(0,255,136,0.04), rgba(0,212,255,0.02), transparent 70%)`
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return <div ref={divRef} className="pointer-events-none fixed inset-0 z-30" aria-hidden="true" />
}
