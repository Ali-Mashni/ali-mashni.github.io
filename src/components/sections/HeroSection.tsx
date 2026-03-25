import type { HeroData } from '../../types/portfolio'
import { MonogramMark } from '../branding/MonogramMark'
import { Pill } from '../ui/Pill'

type HeroSectionProps = {
  hero: HeroData
  monogramSrc: string
  monogramAlt: string
}

export function HeroSection({ hero, monogramSrc, monogramAlt }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-3xl border border-emerald-400/20 bg-[#06110d] p-7 md:p-10"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.015)_1px,transparent_1px)] bg-[size:52px_52px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-8 top-8 h-64 w-64 rounded-full bg-emerald-500/18 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div>
          <p className="hero-stagger text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300" style={{ animationDelay: '40ms' }}>
            {hero.eyebrow}
          </p>
          <h1 className="hero-stagger font-display mt-3 max-w-3xl text-4xl leading-tight text-zinc-50 md:text-5xl xl:text-[3.35rem]" style={{ animationDelay: '100ms' }}>
            {hero.headline}
          </h1>
          <p className="hero-stagger mt-4 max-w-2xl text-base leading-relaxed text-zinc-200 md:text-lg" style={{ animationDelay: '170ms' }}>
            {hero.supportLine}
          </p>
          <p className="hero-stagger mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base" style={{ animationDelay: '230ms' }}>
            {hero.body}
          </p>

          <div className="hero-stagger mt-6 flex flex-wrap gap-2.5" style={{ animationDelay: '290ms' }}>
            {hero.credibilityChips.map((chip) => (
              <Pill key={chip} text={chip} tone="neutral" />
            ))}
          </div>

          <div className="hero-stagger mt-7 flex flex-wrap gap-3" style={{ animationDelay: '350ms' }}>
            {hero.ctaButtons.map((button, index) => (
              <a
                key={button.label}
                href={button.href}
                className={
                  index === 0
                    ? 'inline-flex min-h-11 items-center rounded-xl border border-emerald-300/40 bg-gradient-to-r from-emerald-400/20 to-emerald-300/5 px-5 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200'
                    : 'inline-flex min-h-11 items-center rounded-xl border border-zinc-700 bg-zinc-900/90 px-5 py-2 text-sm font-semibold text-zinc-200 transition hover:border-emerald-300/60 hover:text-emerald-100'
                }
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-4">
          <div className="monogram-rise rounded-2xl border border-emerald-300/20 bg-[#08130f]/90 p-4 backdrop-blur-[2px]">
            <MonogramMark
              src={monogramSrc}
              alt={monogramAlt}
              className="h-44 w-full rounded-xl border-emerald-300/25 bg-gradient-to-br from-emerald-300/10 via-transparent to-emerald-500/8 p-4 md:h-48"
            />
          </div>

          <div className="hero-stagger grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3" style={{ animationDelay: '380ms' }}>
            {hero.metrics.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/65 p-4 backdrop-blur-[2px]"
              >
                <p className="font-display text-xl text-zinc-100">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-zinc-500">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
