import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d', 'bg-2': '#141414', 'bg-3': '#1a1a1a',
        green: '#00ff88', cyan: '#00d4ff', muted: '#6b7280',
        border: 'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 24px rgba(0, 255, 136, 0.15)',
        'glow-cyan': '0 0 24px rgba(0, 212, 255, 0.15)',
        card: '0 1px 3px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        waveform: 'waveform 1.2s ease-in-out infinite',
        'maze-solve': 'maze-solve 5s ease-in-out infinite',
        'doc-scan': 'doc-scan 5s ease-in-out infinite',
        'match-reveal': 'match-reveal 5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0', transform: 'translateY(10px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        waveform: { '0%, 100%': { transform: 'scaleY(0.3)', opacity: '0.5' }, '50%': { transform: 'scaleY(1)', opacity: '1' } },
        'maze-solve': {
          '0%': { strokeDashoffset: '1' },
          '40%': { strokeDashoffset: '0' },
          '65%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '-1' },
        },
        'doc-scan': {
          '0%, 100%': { width: '0%' },
          '22%': { width: 'var(--score)' },
          '85%': { width: 'var(--score)' },
        },
        'match-reveal': {
          '0%, 100%': { opacity: '0', transform: 'translateY(4px)' },
          '38%, 85%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
