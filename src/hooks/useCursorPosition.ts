'use client'

import { useEffect, useRef, useState } from 'react'

export interface CursorPosition {
  x: number
  y: number
}

export function useCursorPosition(): CursorPosition | null {
  const [position, setPosition] = useState<CursorPosition | null>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const onMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return position
}
