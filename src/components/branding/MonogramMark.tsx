type MonogramMarkProps = {
  src: string
  alt: string
  className?: string
}

export function MonogramMark({ src, alt, className = '' }: MonogramMarkProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-2xl border border-emerald-300/25 bg-gradient-to-br from-emerald-300/10 via-emerald-500/5 to-transparent p-3 shadow-[0_0_40px_-15px_rgba(52,211,153,0.65)] ${className}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
  )
}
