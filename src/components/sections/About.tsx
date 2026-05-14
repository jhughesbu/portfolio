import { SectionWrapper } from '@/components/ui/SectionWrapper'

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-green text-sm mb-3">01. about</p>
              <h2 className="section-heading">Who I Am</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-[15px]">
                <p>I&apos;m Jack — a builder who sits at the intersection of product thinking and technical execution. I&apos;m most at home when I&apos;m taking something from zero to shipped: scoping the problem, picking the right stack, and getting it live.</p>
                <p>My background spans both the business side and the code side. I&apos;ve built voice AI systems, automation pipelines, and web products — the kind of stuff where you own the whole thing, not just one layer. I care less about titles and more about whether it works.</p>
                <p>Outside of building things, I&apos;m drawn to how technology actually changes how people work — not the hype, but the real shifts. I&apos;m also a decent home cook, an okay golfer, and someone who reads too much about things he doesn&apos;t need to know.</p>
              </div>
            </div>
            <div className="glass-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/[0.06]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-muted">jack@portfolio ~ % </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-3">
                <div><span className="text-muted">// currently building</span><br /><span className="text-cyan">const</span><span className="text-white"> focus </span><span className="text-muted">= </span><span className="text-green">&quot;voice AI + web products&quot;</span><span className="text-muted">;</span></div>
                <div><span className="text-muted">// based in</span><br /><span className="text-cyan">const</span><span className="text-white"> location </span><span className="text-muted">= </span><span className="text-green">&quot;New York, NY&quot;</span><span className="text-muted">;</span></div>
                <div><span className="text-muted">// open to</span><br /><span className="text-cyan">const</span><span className="text-white"> openTo </span><span className="text-muted">= [</span><br /><span className="text-green pl-4">&quot;interesting problems&quot;</span><span className="text-muted">,</span><br /><span className="text-green pl-4">&quot;collaborations&quot;</span><span className="text-muted">,</span><br /><span className="text-green pl-4">&quot;good conversations&quot;</span><br /><span className="text-muted">];</span></div>
                <div className="pt-1 border-t border-white/[0.06]"><span className="text-muted">// github</span><br /><span className="text-white">github.com/</span><span className="text-green">jhughesbu</span></div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
