import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import type { ProjectItem } from '../../types/portfolio'
import { Pill } from '../ui/Pill'

type ProjectsSectionProps = {
  featured: ProjectItem[]
  additional: ProjectItem[]
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <article
      data-card-reveal
      style={{ transitionDelay: `${index * 70}ms` }}
      className="project-card overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/65 backdrop-blur-[2px]"
    >
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#0a1711] to-[#08120f] p-3 md:h-56">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-lg border border-zinc-800/80 object-contain"
        />
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-display text-xl text-zinc-100">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">{project.summary}</p>

        <div className="mt-4 space-y-3 text-sm text-zinc-300">
          <p>
            <span className="font-semibold text-emerald-200">Problem: </span>
            {project.problem}
          </p>
          <p>
            <span className="font-semibold text-emerald-200">Stack: </span>
            {project.stack.join(' | ')}
          </p>
          <p>
            <span className="font-semibold text-emerald-200">Why it matters: </span>
            {project.impact}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag} text={tag} tone={tag === 'Cybersecurity' ? 'accent' : 'neutral'} />
          ))}
        </div>

        {project.links.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-3">
            {project.links.map((link) => {
              const isGitHub = link.label.toLowerCase().includes('github')
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
                >
                  {isGitHub ? <FaGithub className="h-4 w-4" aria-hidden="true" /> : <ExternalLink className="h-4 w-4" aria-hidden="true" />}
                  {link.label}
                </a>
              )
            })}
          </div>
        ) : null}
      </div>
    </article>
  )
}

function AdditionalProjectItem({ project, index }: { project: ProjectItem; index: number }) {
  return (
    <article
      className="grid gap-4 rounded-xl border border-zinc-800 bg-zinc-950/55 p-4 backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/35 md:grid-cols-[160px_1fr] md:items-center"
      style={{ transitionDelay: `${index * 45}ms` }}
    >
      <div className="h-28 overflow-hidden rounded-lg border border-zinc-800 bg-gradient-to-br from-[#0a1711] to-[#08120f] p-2">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full rounded-md object-contain"
        />
      </div>
      <div>
        <h4 className="font-display text-lg text-zinc-100">{project.title}</h4>
        <p className="mt-1 text-sm text-zinc-300">{project.summary}</p>
        <p className="mt-2 text-xs text-zinc-400">{project.stack.join(' | ')}</p>
      </div>
    </article>
  )
}

export function ProjectsSection({ featured, additional }: ProjectsSectionProps) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-xl text-zinc-100 md:text-2xl">Featured Projects</h3>
        <div className="mt-4 grid gap-5 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      <div>
        <button
          type="button"
          onClick={() => setShowMore((prev) => !prev)}
          className="inline-flex min-h-11 items-center rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-2 text-sm font-semibold text-zinc-100 transition hover:border-emerald-300/60 hover:text-emerald-100"
          aria-expanded={showMore}
          aria-controls="additional-projects"
        >
          {showMore ? 'Hide More Projects' : 'Show More Projects'}
        </button>

        <div
          id="additional-projects"
          className={`expandable mt-4 grid gap-3 ${showMore ? 'open' : ''}`}
        >
          {additional.map((project, index) => (
            <AdditionalProjectItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
