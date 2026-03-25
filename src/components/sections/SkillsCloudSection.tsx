import { useMemo, useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Binary,
  Bitcoin,
  BookText,
  Bug,
  Cable,
  ChartLine,
  ClipboardList,
  Code2,
  Cpu,
  Database,
  FileCheck,
  FileText,
  GitBranch,
  Globe,
  KeyRound,
  Languages,
  LayoutTemplate,
  Lock,
  Network,
  Search,
  Shield,
  ShieldAlert,
  Terminal,
  Wallet,
  Waves,
  Workflow,
} from 'lucide-react'
import burpSuiteLogo from '../../assets/BurpSuite.jpeg'
import type { SkillFilterCategory, SkillItem, SkillWeight } from '../../types/portfolio'

type SkillsCloudSectionProps = {
  categories: SkillFilterCategory[]
  items: SkillItem[]
  defaultCategory: SkillFilterCategory
}

const iconMap: Record<string, LucideIcon> = {
  'Threat Modeling': Workflow,
  'Cryptography (hashing, PKI, TLS)': Lock,
  'Network Security (TCP/IP, DNS)': Network,
  'Secure Code Review': Bug,
  'Hardening & Secure Config': ClipboardList,
  'Incident Response': ShieldAlert,
  'Log Analysis': Search,
  'DFIR Fundamentals': Shield,
  'OWASP ZAP': Shield,
  Wireshark: Waves,
  'Splunk (SIEM)': ChartLine,
  Git: GitBranch,
  'GitHub Actions (CI/CD)': Activity,
  Docker: LayoutTemplate,
  Podman: Database,
  'Linux CLI': Terminal,
  Lucidchart: Workflow,
  Python: Code2,
  JavaScript: Binary,
  Java: Cpu,
  C: Code2,
  'C++': Code2,
  Assembly: Cpu,
  React: LayoutTemplate,
  'Node.js': Cable,
  FastAPI: Activity,
  Streamlit: ChartLine,
  MySQL: Database,
  MongoDB: Database,
  PostgreSQL: Database,
  Solidity: FileCheck,
  'Ethereum (Sepolia)': Globe,
  'MetaMask / Wallets': Wallet,
  'Transactions & Gas': KeyRound,
  'Etherscan / On-chain Verification': Network,
  'Bitcoin Fundamentals': Bitcoin,
  'Merkle Trees (Concepts)': Workflow,
  Arabic: Languages,
  English: Languages,
  'Technical Writing': FileText,
  Documentation: BookText,
}

function chipClass(weight: SkillWeight, category: string): string {
  if (weight === 'high') {
    return category === 'Security'
      ? 'border-emerald-300/25 bg-zinc-900 text-zinc-100'
      : 'border-zinc-700/85 bg-zinc-900 text-zinc-100'
  }

  if (weight === 'medium') {
    return category === 'Security'
      ? 'border-emerald-400/20 bg-zinc-900/90 text-zinc-200'
      : 'border-zinc-800 bg-zinc-900/85 text-zinc-200'
  }

  return 'border-zinc-800 bg-zinc-900/70 text-zinc-400'
}

export function SkillsCloudSection({
  categories,
  items,
  defaultCategory,
}: SkillsCloudSectionProps) {
  const [activeCategory, setActiveCategory] = useState<SkillFilterCategory>(defaultCategory)

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'All') {
      return items
    }

    return items.filter((item) => item.category === activeCategory)
  }, [activeCategory, items])

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/65 p-5 backdrop-blur-[2px] md:p-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                isActive
                  ? 'rounded-full border border-emerald-300/35 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-100 transition'
                  : 'rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-200'
              }
              aria-pressed={isActive}
            >
              {category}
            </button>
          )
        })}
      </div>

      <div className="mt-5 flex flex-wrap gap-2.5">
        {filteredSkills.map((skill) => {
          const Icon = iconMap[skill.name]
          return (
            <span
              key={skill.name}
              className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium tracking-wide transition duration-200 hover:border-emerald-300/40 hover:shadow-[0_0_0_1px_rgba(110,231,183,0.12)] ${chipClass(
                skill.weight,
                skill.category,
              )}`}
            >
              {skill.name === 'Burp Suite' ? (
                <img src={burpSuiteLogo} alt="Burp Suite" className="h-4 w-4 rounded-sm object-cover" />
              ) : Icon ? (
                <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              ) : (
                <Code2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              )}
              <span>{skill.name}</span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
