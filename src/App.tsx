import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsCloudSection,
} from './components/sections'
import { SectionFrame } from './components/ui/SectionFrame'
import { brandAssets, portfolioData } from './data/portfolio.ts'

function App() {
  const { brand, navLinks, hero, about, experiences, projects, skills, contact } =
    portfolioData

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-section-reveal], [data-card-reveal]'),
    )

    if (revealTargets.length === 0) {
      return
    }

    if (prefersReducedMotion) {
      revealTargets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    document.documentElement.classList.add('motion-ready')

    if (!('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    revealTargets.forEach((target) => {
      const rect = target.getBoundingClientRect()
      const inViewport = rect.top <= window.innerHeight * 0.92

      if (inViewport) {
        target.classList.add('is-visible')
        return
      }

      observer.observe(target)
    })

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#030806] text-zinc-100">
      <div className="ambient-bg" aria-hidden="true" />
      <div className="brand-noise" aria-hidden="true" />

      <Navbar
        monogramSrc={brandAssets.monogram}
        brandLabel={brand.markLabel}
        brandName={brand.name}
        navLinks={navLinks}
      />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-7 px-5 pb-16 pt-8 md:px-8 lg:gap-8 lg:px-10 lg:pt-12">
        <HeroSection
          hero={hero}
          monogramSrc={brandAssets.monogram}
          monogramAlt={brand.markLabel}
        />

        <SectionFrame id="about" title="About" eyebrow="Profile">
          <AboutSection about={about} imageSrc={brandAssets.campusImage} />
        </SectionFrame>

        <SectionFrame id="experience" title="Experience" eyebrow="Security + Engineering Impact">
          <ExperienceSection experiences={experiences} />
        </SectionFrame>

        <SectionFrame id="projects" title="Projects" eyebrow="Selected Work">
          <ProjectsSection featured={projects.featured} additional={projects.additional} />
        </SectionFrame>

        <SectionFrame id="skills" title="Skills">
          <SkillsCloudSection
            categories={skills.categories}
            items={skills.items}
            defaultCategory={skills.defaultCategory}
          />
        </SectionFrame>

        <SectionFrame id="contact" title="Contact" eyebrow="Direct Outreach">
          <ContactSection contact={contact} />
        </SectionFrame>
      </main>
    </div>
  )
}

export default App
