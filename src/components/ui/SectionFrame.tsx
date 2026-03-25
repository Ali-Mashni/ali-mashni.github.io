import type { ReactNode } from 'react'

type SectionFrameProps = {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
}

export function SectionFrame({ id, title, eyebrow, children }: SectionFrameProps) {
  return (
    <section
      id={id}
      data-section-reveal
      className="relative overflow-hidden rounded-3xl border border-emerald-400/10 bg-[#07120e]/70 p-6 backdrop-blur-[2px] md:p-8"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden="true"
      />
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">{eyebrow}</p>
      ) : null}
      <h2 className={`font-display text-2xl text-zinc-100 md:text-3xl ${eyebrow ? 'mt-3' : ''}`}>
        {title}
      </h2>
      <div className="relative mt-6">{children}</div>
    </section>
  )
}
