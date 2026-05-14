'use client'
import { AnimatedGridBg } from '@/components/ui/AnimatedGridBg'
import { TypewriterText } from '@/components/ui/TypewriterText'

const WORDS = ['Builder.', 'Maker.', 'Tinkerer.', 'Shipper.']

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedGridBg />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="font-mono text-sm text-muted mb-6 animate-fade-in">Hey, I&apos;m Jack —</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          I&apos;m a{' '}<TypewriterText words={WORDS} />
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          I build things that work — products, tools, and systems from idea to production.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-7 py-3 bg-green text-bg font-semibold text-sm rounded-lg hover:bg-green/90 active:scale-95 transition-all duration-150 font-mono">
            See My Work
          </button>
          <a href="https://github.com/jhughesbu" target="_blank" rel="noopener noreferrer" className="px-7 py-3 border border-white/20 text-gray-300 font-semibold text-sm rounded-lg hover:border-green/40 hover:text-white active:scale-95 transition-all duration-150 font-mono">
            GitHub
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-green" />
      </div>
    </section>
  )
}
