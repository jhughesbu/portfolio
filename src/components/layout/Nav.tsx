'use client'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={clsx('fixed top-0 left-0 right-0 z-50 transition-all duration-300', scrolled ? 'bg-bg/80 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent')}>
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="font-mono text-green font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">JH</a>
        <ul className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}><button onClick={() => handleNavClick(link.href)} className="font-mono text-sm text-muted hover:text-white transition-colors duration-200">{link.label}</button></li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a href="https://github.com/jhughesbu" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-white transition-colors" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <button className="sm:hidden text-muted hover:text-white transition-colors" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            {menuOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="sm:hidden bg-bg/95 backdrop-blur-md border-b border-white/[0.06] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <button key={link.href} onClick={() => handleNavClick(link.href)} className="font-mono text-sm text-gray-300 hover:text-green text-left transition-colors">{link.label}</button>
          ))}
        </div>
      )}
    </header>
  )
}
