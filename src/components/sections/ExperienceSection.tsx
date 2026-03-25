import type { ExperienceItem } from '../../types/portfolio'
import { Pill } from '../ui/Pill'

type ExperienceSectionProps = {
  experiences: ExperienceItem[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <div className="grid gap-5">
      {experiences.map((experience) => (
        <article
          key={`${experience.role}-${experience.organization}`}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/65 p-5 md:p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-xl text-zinc-100 md:text-2xl">{experience.role}</h3>
              <p className="mt-2 font-display text-lg text-zinc-50 md:text-xl">{experience.organization}</p>
              <p className="mt-1 text-sm text-zinc-300 md:text-base">{experience.location}</p>
            </div>
            <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/8 px-3 py-2 backdrop-blur-[2px]">
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-emerald-200">
                {experience.dates}
              </p>
            </div>
          </div>

          <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-zinc-300 md:text-base">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="mt-5 text-xs uppercase tracking-[0.18em] text-zinc-500">Tools / Stack</p>
          <p className="mt-2 text-sm text-zinc-300">{experience.stack.join(' | ')}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <Pill key={tag} text={tag} tone={tag === 'Cybersecurity' ? 'accent' : 'neutral'} />
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}
