import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { CorporateProjects } from '@/components/sections/CorporateProjects'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <CorporateProjects />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}
