export type CTA = {
  label: string
  href: string
}

export type LinkItem = {
  label: string
  url: string
}

export type HeroMetric = {
  label: string
  value: string
}

export type HeroData = {
  eyebrow: string
  headline: string
  supportLine: string
  body: string
  ctaButtons: CTA[]
  credibilityChips: string[]
  metrics: HeroMetric[]
}

export type AboutData = {
  summary: string
  highlights: string[]
  imageAlt: string
}

export type ExperienceItem = {
  role: string
  organization: string
  location: string
  dates: string
  bullets: string[]
  stack: string[]
  tags: string[]
}

export type ProjectItem = {
  title: string
  summary: string
  problem: string
  stack: string[]
  impact: string
  tags: string[]
  links: LinkItem[]
  image: string
  imageAlt: string
  spotlight?: boolean
}

export type SkillCategory =
  | 'Security'
  | 'Tools'
  | 'Programming'
  | 'Frameworks'
  | 'Databases'
  | 'Blockchain'
  | 'Languages'
  | 'Documentation / Writing'

export type SkillFilterCategory = 'All' | SkillCategory

export type SkillWeight = 'high' | 'medium' | 'low'

export type SkillItem = {
  name: string
  category: SkillCategory
  weight: SkillWeight
}

export type ContactData = {
  email: string
  linkedin: string
  github: string
  ctaText: string
}

export type PortfolioData = {
  brand: {
    markLabel: string
    name: string
  }
  navLinks: CTA[]
  hero: HeroData
  about: AboutData
  experiences: ExperienceItem[]
  projects: {
    featured: ProjectItem[]
    additional: ProjectItem[]
  }
  skills: {
    defaultCategory: SkillFilterCategory
    categories: SkillFilterCategory[]
    items: SkillItem[]
  }
  contact: ContactData
}
