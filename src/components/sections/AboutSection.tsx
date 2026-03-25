import type { AboutData } from '../../types/portfolio'

type AboutSectionProps = {
  about: AboutData
  imageSrc: string
}

export function AboutSection({ about, imageSrc }: AboutSectionProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <p className="text-base leading-relaxed text-zinc-300">{about.summary}</p>
        <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-zinc-300 md:text-base">
          {about.highlights.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        <div className="relative aspect-[4/3]">
          <img
            src={imageSrc}
            alt={about.imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07120e] via-[#07120e]/20 to-transparent" />
        </div>
      </div>
    </div>
  )
}
