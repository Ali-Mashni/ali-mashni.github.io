import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import type { ContactData } from '../../types/portfolio'

type ContactSectionProps = {
  contact: ContactData
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
      <p className="max-w-3xl text-base leading-relaxed text-zinc-300">{contact.ctaText}</p>

      <a
        href={`mailto:${contact.email}`}
        className="mt-5 inline-flex min-h-14 items-center gap-3 rounded-xl border border-emerald-300/35 bg-emerald-300/10 px-5 py-3 text-lg font-semibold text-emerald-100 transition hover:border-emerald-200 hover:bg-emerald-300/18"
      >
        <Mail className="h-5 w-5" aria-hidden="true" />
        {contact.email}
      </a>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-base font-semibold text-zinc-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
        >
          <FaLinkedin className="h-5 w-5" aria-hidden="true" />
          LinkedIn
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 text-base font-semibold text-zinc-100 transition hover:border-emerald-300/70 hover:text-emerald-100"
        >
          <FaGithub className="h-5 w-5" aria-hidden="true" />
          GitHub
        </a>
      </div>
    </div>
  )
}
