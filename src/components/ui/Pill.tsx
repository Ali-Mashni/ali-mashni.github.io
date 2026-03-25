type PillProps = {
  text: string
  tone?: 'neutral' | 'accent'
}

export function Pill({ text, tone = 'neutral' }: PillProps) {
  const style =
    tone === 'accent'
      ? 'border-emerald-300/40 bg-emerald-300/15 text-emerald-100'
      : 'border-zinc-700 bg-zinc-900/80 text-zinc-300'

  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-wide ${style}`}
    >
      {text}
    </span>
  )
}
