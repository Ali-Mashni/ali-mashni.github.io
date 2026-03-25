import { useEffect, useState } from 'react'
import type { CTA } from '../../types/portfolio'
import { MonogramMark } from '../branding/MonogramMark'

type NavbarProps = {
  monogramSrc: string
  brandLabel: string
  brandName: string
  navLinks: CTA[]
}

export function Navbar({
  monogramSrc,
  brandLabel,
  brandName,
  navLinks,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        isScrolled
          ? 'border-emerald-400/20 bg-[#030a07]/90 backdrop-blur-md'
          : 'border-emerald-400/10 bg-[#030a07]/76 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-3 md:px-8 lg:px-10">
        <a href="#hero" className="group flex items-center gap-3">
          <MonogramMark
            src={monogramSrc}
            alt={brandLabel}
            className="h-10 w-10 rounded-xl p-1.5 transition group-hover:scale-[1.03]"
          />
          <span className="font-display text-sm tracking-[0.08em] text-emerald-100/90">
            {brandName}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-300 transition hover:text-emerald-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
