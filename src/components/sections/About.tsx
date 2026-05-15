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
                <p>I&apos;m Jack — a builder who sits at the intersection of product thinking, technical execution, and the conversation that connects the two. I&apos;m most at home when I&apos;m embedded with a customer: scoping the real problem, picking the right stack, and getting something live in front of them.</p>
                <p>My background spans both the business side and the code side — a FinTech concentration at Northeastern, now a Master&apos;s in Data Science at Boston University. I&apos;ve built automation pipelines, BI reporting, web products, and more — the kind of stuff where you own the whole thing, not just one layer. I care less about titles and more about whether the thing works and the person across the table trusts it.</p>
                <p>Outside of building things, I&apos;m drawn to how technology actually changes how people work — not the hype, but the real shifts. I&apos;m also a decent home cook, a corporate basketball league champ, and someone who reads too much about things he doesn&apos;t need to know.</p>
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
                <div><span className="text-muted">// currently building</span><br /><span className="text-cyan">const</span><span className="text-white"> focus </span><span className="text-muted">= </span><span className="text-green">&quot;data, automation &amp; AI products&quot;</span><span className="text-muted">;</span></div>
                <div><span className="text-muted">// based in</span><br /><span className="text-cyan">const</span><span className="text-white"> location </span><span className="text-muted">= </span><span className="text-green">&quot;New York, NY&quot;</span><span className="text-muted">;</span></div>
                <div><span className="text-muted">// education</span><br /><span className="text-cyan">const</span><span className="text-white"> education </span><span className="text-muted">= [</span><br /><span className="text-green pl-4">&quot;MS Data Science · Boston University&quot;</span><span className="text-muted">,</span><br /><span className="text-green pl-4">&quot;BS FinTech · Northeastern&quot;</span><br /><span className="text-muted">];</span></div>
                <div><span className="text-muted">// open to</span><br /><span className="text-cyan">const</span><span className="text-white"> openTo </span><span className="text-muted">= [</span><br /><span className="text-green pl-4">&quot;interesting problems&quot;</span><span className="text-muted">,</span><br /><span className="text-green pl-4">&quot;collaborations&quot;</span><span className="text-muted">,</span><br /><span className="text-green pl-4">&quot;good conversations&quot;</span><br /><span className="text-muted">];</span></div>
                <div className="pt-1 border-t border-white/[0.06]"><span className="text-muted">// github</span><br /><span className="text-white">github.com/</span><span className="text-green">jhughesbu</span></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-14 pt-8 border-t border-white/[0.06]">
            <div className="text-center">
              <div className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-green leading-none">60+</div>
              <div className="font-mono text-[10px] sm:text-xs text-muted mt-2 tracking-wider uppercase">Demos Delivered</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-green leading-none">2,000+</div>
              <div className="font-mono text-[10px] sm:text-xs text-muted mt-2 tracking-wider uppercase">Stakeholders Engaged</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-green leading-none">All Levels</div>
              <div className="font-mono text-[10px] sm:text-xs text-muted mt-2 tracking-wider uppercase">ICs to C-Suite</div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  )
}
