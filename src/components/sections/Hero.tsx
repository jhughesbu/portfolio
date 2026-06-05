'use client'
import Image from 'next/image'
import { AnimatedGridBg } from '@/components/ui/AnimatedGridBg'
import { TypewriterText } from '@/components/ui/TypewriterText'

const WORDS = ['a Maker.', 'an FDE.', 'a Communicator.', 'a Product Manager.', 'a Builder.', 'a Shipper.']

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedGridBg />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-green/40 ring-offset-4 ring-offset-bg shadow-[0_0_40px_-10px_rgba(0,255,136,0.4)] animate-fade-in">
          <Image src="/headshot.jpg" alt="Jack Hughes" fill priority sizes="128px" className="object-cover" />
        </div>
        <p className="font-mono text-base sm:text-lg text-green mb-4 animate-fade-in">I&apos;m Jack Hughes</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          I&apos;m{' '}<TypewriterText words={WORDS} />
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          I build things that work, and I can sit in the room and explain them. Products, tools, and systems from idea to production, deployed alongside the people who use them.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <button onClick={() => document.getElementById('corporate-projects')?.scrollIntoView({ behavior: 'smooth' })} className="px-7 py-3 bg-green text-bg font-semibold text-sm rounded-lg hover:bg-green/90 active:scale-95 transition-all duration-150 font-mono">
            See My Work
          </button>
          <a href="https://www.linkedin.com/in/jack-hughes-neu" target="_blank" rel="noopener noreferrer" className="px-7 py-3 border border-white/20 text-gray-300 font-semibold text-sm rounded-lg hover:border-green/40 hover:text-white active:scale-95 transition-all duration-150 font-mono">
            LinkedIn
          </a>
          <a href="/Jack_Hughes_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-7 py-3 border border-white/20 text-gray-300 font-semibold text-sm rounded-lg hover:border-green/40 hover:text-white active:scale-95 transition-all duration-150 font-mono">
            Resume
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-green" />
      </div>
    </section>
  )
}
