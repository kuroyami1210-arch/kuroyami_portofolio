import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { useActiveSection } from './hooks/useActiveSection'
import { useReveal } from './hooks/useReveal'
import { getContent } from './data/portfolio'

export default function App() {
  const t = getContent()
  const activeSection = useActiveSection(t.nav.map((l) => l.id))
  useReveal()

  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang
    document.title = t.meta.title
    window.scrollTo(0, 0)
  }, [t.meta.htmlLang, t.meta.title])

  return (
    <div className="relative min-h-screen bg-ink text-white">
      <div className="bg-grid pointer-events-none absolute inset-0 z-[1]" />
      <Header
        activeSection={activeSection}
        navLinks={t.nav}
        headerText={t.header}
      />
      <main className="relative">
        <Hero t={t.hero} />
        <About t={t.about} exp={t.experience} />
        <Skills t={t.skills} />
        <Projects t={t.projects} />
        <Contact t={t.contact} navLinks={t.nav} />
      </main>
    </div>
  )
}
