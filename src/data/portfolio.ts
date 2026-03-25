import aimTrainingImage from '../assets/Aim_Training.png'
import bstsImage from '../assets/bsts.png'
import kfupmImage from '../assets/KFUPM.webp'
import monogramAsset from '../assets/monogram-a-emerald.svg'
import privpromptImage from '../assets/privprompt.png'
import securityLabImage from '../assets/security-lab.png'
import smartSchedulerImage from '../assets/Smart-Scheduler.png'
import toDoListImage from '../assets/toDoListApp.png'
import type { PortfolioData } from '../types/portfolio'

export const portfolioData: PortfolioData = {
  brand: {
    markLabel: 'A Monogram',
    name: 'Ali Mashni',
  },
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    eyebrow: 'ALI MASHNI',
    headline: 'Hi, I\'m Ali.',
    supportLine:
      'A Software Engineering student from KFUPM with a cybersecurity concentration.',
    body: 'I enjoy security and building software, and my goal is to contribute to building and securing Saudi Arabia\'s digital infrastructure.',
    ctaButtons: [
      { label: 'View Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
    credibilityChips: [
      'Security Engineering',
      'Backend Systems',
      'Privacy Tooling',
      'Software Development',
    ],
    metrics: [
      { label: 'KFUPM GPA', value: '3.97/4' },
      { label: 'International Internship', value: 'Baker Hughes' },
      { label: 'Lab Reviews', value: '1,000+' },
    ],
  },
  about: {
    summary:
      'My focus is turning classroom depth into practical results across software and security work, with strong academic consistency, international internship exposure, and hands-on teaching support experience.',
    highlights: [
      'Ranked among the top 5 students in the KFUPM preparatory year',
      'Strong academic performance with a 3.97/4 GPA',
      'Cybersecurity concentration with strong systems and protocol fundamentals',
      'International internship at Baker Hughes in Celle, Germany',
      'Teaching Assistant experience in Information Security and programming courses',
    ],
    imageAlt: 'KFUPM campus and engineering environment',
  },
  experiences: [
    {
      role: 'Teacher Assistant (Information Security)',
      organization: 'King Fahd University of Petroleum & Minerals',
      location: 'Dhahran, Saudi Arabia',
      dates: 'Jan 2026 - Present',
      bullets: [
        'Implemented Splunk detections from Nginx reverse-proxy logs and built dashboards and alerts for suspicious traffic.',
        'Improved monitoring quality by structuring events for faster triage and clearer analyst interpretation.',
        'Owned project scope and grading rubric design, then led standardization across 200+ students.',
      ],
      stack: ['Splunk', 'Nginx', 'Detection Logic', 'Dashboarding', 'Alerting'],
      tags: [
        'Cybersecurity',
        'Security Engineering',
        'Detection & Monitoring',
      ],
    },
    {
      role: 'Software Engineering Intern',
      organization: 'Baker Hughes',
      location: 'Celle, Lower Saxony, Germany',
      dates: 'Jun 2025 - Aug 2025',
      bullets: [
        'Designed and refactored ETL pipelines to improve reliability in production data processing workflows.',
        'Built automated unit tests and configured CI/CD pipelines with GitHub Actions.',
        'Developed containerized on-premise data extractors using Docker, Podman, and SQL databases.',
        'Delivered in a Scrum team with structured planning, review, and iterative engineering practices.',
      ],
      stack: ['Python', 'SQL', 'GitHub Actions', 'Docker', 'Podman', 'Scrum'],
      tags: ['Software Engineering', 'Secure Systems', 'Infrastructure'],
    },
    {
      role: 'Teacher Assistant (OOP + Python/C)',
      organization: 'King Fahd University of Petroleum & Minerals',
      location: 'Dhahran, Saudi Arabia',
      dates: 'Jun 2023 - Dec 2023',
      bullets: [
        'Graded 1,000+ lab assignments with feedback on correctness, maintainability, and coding quality.',
        'Developed a comprehensive rubric to improve evaluation consistency and fairness.',
        'Reinforced fundamentals in structured programming, debugging, and technical clarity.',
      ],
      stack: ['Python', 'C', 'OOP', 'Code Review', 'Documentation'],
      tags: ['Software Engineering', 'Process Discipline'],
    },
  ],
  projects: {
    featured: [
      {
        title: 'PrivPrompt - Private AI Session Firewall',
        summary:
          'Local privacy firewall for AI prompts that routes requests through a FastAPI proxy before they leave the device.',
        problem:
          'AI sessions can leak sensitive information without local controls and policy-aware filtering.',
        stack: ['Chrome MV3', 'FastAPI', 'Python', 'JSONL Telemetry'],
        impact:
          'Adds practical safeguards and monitoring visibility for safer day-to-day AI usage.',
        tags: [
          'Cybersecurity',
          'Security Engineering',
          'Detection & Monitoring',
          'Privacy Tooling',
        ],
        links: [
          { label: 'GitHub', url: 'https://github.com/Ali-Mashni/PrivPrompt' },
          { label: 'Demo', url: '#' },
        ],
        image: privpromptImage,
        imageAlt: 'PrivPrompt dashboard and extension workflow',
      },
      {
        title: 'Cybersecurity Attack & Defense Lab',
        summary:
          'Hands-on attack and defense simulation connecting exploitation activity with detection workflows and hardening actions.',
        problem:
          'Security practice is often fragmented and misses the full path from incident to mitigation.',
        stack: ['Metasploit', 'Python', 'Splunk', 'System Logs', 'Hardening Controls'],
        impact:
          'Demonstrates practical end-to-end security thinking across offensive and defensive stages.',
        tags: ['Cybersecurity', 'Detection & Monitoring', 'Security Engineering'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/Ali-Mashni/Network-Security-Attack-Defense-Simulation',
          },
        ],
        image: securityLabImage,
        imageAlt: 'Security lab dashboard and attack-defense workflow',
      },
      {
        title: 'Blockchain Supply Chain Tracking dApp (BSTS)',
        summary:
          'Role-based supply chain dApp on Sepolia with wallet integration and verifiable on-chain interactions.',
        problem:
          'Supply chain participants need traceable records and controlled access boundaries across actors.',
        stack: ['Solidity', 'Ethereum Sepolia', 'MetaMask', 'ethers.js', 'PHP'],
        impact:
          'Applies secure role boundaries and tamper-resistant verification in a distributed workflow.',
        tags: ['Software Engineering', 'Security Engineering', 'Blockchain'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/Ali-Mashni/Blockchain-Based-Supply-Chain-Tracking-System',
          },
        ],
        image: bstsImage,
        imageAlt: 'BSTS dApp interface and blockchain interactions',
      },
    ],
    additional: [
      {
        title: 'Smart Scheduler',
        summary: 'Task and meeting scheduling web app with full-stack implementation.',
        problem: 'Students and teams need a cleaner way to manage recurring schedules.',
        stack: ['React', 'Node.js', 'Express'],
        impact: 'Showcases practical product implementation and backend integration.',
        tags: ['Software Engineering'],
        links: [{ label: 'Live', url: 'https://smart-scheduler-frontend.onrender.com/' }],
        image: smartSchedulerImage,
        imageAlt: 'Smart Scheduler user interface',
      },
      {
        title: 'Aim Training',
        summary: 'Browser-based reaction and accuracy training mini app.',
        problem: 'Need a simple way to train speed and precision in short sessions.',
        stack: ['JavaScript', 'HTML', 'CSS'],
        impact: 'Demonstrates lightweight UI logic and interactive feedback loops.',
        tags: ['Programming'],
        links: [{ label: 'Live', url: 'https://ali-mashni.github.io/Aim_Training/' }],
        image: aimTrainingImage,
        imageAlt: 'Aim Training game interface',
      },
      {
        title: 'To-Do List App',
        summary: 'Simple personal productivity app focused on clean task workflows.',
        problem: 'Daily planning requires quick capture and structured task visibility.',
        stack: ['JavaScript', 'Frontend UI'],
        impact: 'Emphasizes practical UX and iterative feature implementation.',
        tags: ['Programming'],
        links: [],
        image: toDoListImage,
        imageAlt: 'To-do list application screen',
      },
    ],
  },
  skills: {
    defaultCategory: 'All',
    categories: [
      'All',
      'Security',
      'Tools',
      'Programming',
      'Frameworks',
      'Databases',
      'Blockchain',
      'Languages',
      'Documentation / Writing',
    ],
    items: [
      { name: 'Threat Modeling', category: 'Security', weight: 'high' },
      { name: 'Cryptography (hashing, PKI, TLS)', category: 'Security', weight: 'high' },
      { name: 'Network Security (TCP/IP, DNS)', category: 'Security', weight: 'high' },
      { name: 'Secure Code Review', category: 'Security', weight: 'high' },
      { name: 'Hardening & Secure Config', category: 'Security', weight: 'high' },
      { name: 'Incident Response', category: 'Security', weight: 'medium' },
      { name: 'Log Analysis', category: 'Security', weight: 'high' },
      { name: 'DFIR Fundamentals', category: 'Security', weight: 'medium' },
      { name: 'Burp Suite', category: 'Tools', weight: 'medium' },
      { name: 'OWASP ZAP', category: 'Tools', weight: 'medium' },
      { name: 'Wireshark', category: 'Tools', weight: 'high' },
      { name: 'Splunk (SIEM)', category: 'Tools', weight: 'high' },
      { name: 'Git', category: 'Tools', weight: 'high' },
      { name: 'GitHub Actions (CI/CD)', category: 'Tools', weight: 'high' },
      { name: 'Docker', category: 'Tools', weight: 'high' },
      { name: 'Podman', category: 'Tools', weight: 'medium' },
      { name: 'Linux CLI', category: 'Tools', weight: 'high' },
      { name: 'Lucidchart', category: 'Tools', weight: 'low' },
      { name: 'Python', category: 'Programming', weight: 'high' },
      { name: 'JavaScript', category: 'Programming', weight: 'high' },
      { name: 'Java', category: 'Programming', weight: 'medium' },
      { name: 'C', category: 'Programming', weight: 'medium' },
      { name: 'C++', category: 'Programming', weight: 'medium' },
      { name: 'Assembly', category: 'Programming', weight: 'low' },
      { name: 'React', category: 'Frameworks', weight: 'medium' },
      { name: 'Node.js', category: 'Frameworks', weight: 'medium' },
      { name: 'FastAPI', category: 'Frameworks', weight: 'high' },
      { name: 'Streamlit', category: 'Frameworks', weight: 'low' },
      { name: 'MySQL', category: 'Databases', weight: 'medium' },
      { name: 'MongoDB', category: 'Databases', weight: 'medium' },
      { name: 'PostgreSQL', category: 'Databases', weight: 'medium' },
      { name: 'Solidity', category: 'Blockchain', weight: 'medium' },
      { name: 'Ethereum (Sepolia)', category: 'Blockchain', weight: 'medium' },
      { name: 'MetaMask / Wallets', category: 'Blockchain', weight: 'medium' },
      { name: 'Transactions & Gas', category: 'Blockchain', weight: 'low' },
      { name: 'Etherscan / On-chain Verification', category: 'Blockchain', weight: 'low' },
      { name: 'Bitcoin Fundamentals', category: 'Blockchain', weight: 'low' },
      { name: 'Merkle Trees (Concepts)', category: 'Blockchain', weight: 'low' },
      { name: 'Arabic', category: 'Languages', weight: 'medium' },
      { name: 'English', category: 'Languages', weight: 'medium' },
      { name: 'Technical Writing', category: 'Documentation / Writing', weight: 'medium' },
      { name: 'Documentation', category: 'Documentation / Writing', weight: 'medium' },
    ],
  },
  contact: {
    email: 'mashnialii@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ali-mashni-a80933357/',
    github: 'https://github.com/Ali-Mashni',
    ctaText: 'If you would like to discuss a role, project collaboration, or technical work, feel free to reach out directly.',
  },
}

export const brandAssets = {
  monogram: monogramAsset,
  campusImage: kfupmImage,
}
