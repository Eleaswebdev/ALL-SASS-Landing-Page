
import React from 'react';
import { 
  Zap, 
  Shield, 
  Cpu, 
  Globe, 
  Layers, 
  BarChart3, 
  Users, 
  Rocket, 
  Palette, 
  Code2,
  FileText,
  Search,
  RefreshCw,
  CheckCircle2
} from 'lucide-react';
import { SaaSProduct } from './types';

export const PRODUCTS: SaaSProduct[] = [
  {
    id: 'team-sync',
    name: 'Team Sync',
    tagline: 'Real-time Collaboration Pulse',
    description: 'Synchronize project states and team presence across distributed environments with zero latency.',
    longDescription: 'Team Sync is the definitive real-time engine for modern remote teams. It bridges the gap between individual IDEs and shared project goals by providing instant state synchronization, presence awareness, and collaborative debugging tools.',
    category: 'DevOps',
    icon: 'Users',
    stats: [
      { label: 'Active Teams', value: '12k+' },
      { label: 'Sync Events/Sec', value: '850k' },
      { label: 'Latency', value: '<5ms' }
    ],
    features: [
      { title: 'State Presence', description: 'See exactly where your team is working in the codebase in real-time.' },
      { title: 'Conflict Resolution', description: 'Advanced merging algorithms that prevent code overwrites automatically.' },
      { title: 'Live Debugging', description: 'Invite teammates to join your debug session with a single link.' }
    ],
    workflow: [
      { title: 'Connect Workspace', description: 'Link your local project folder to the Orbit Cloud.' },
      { title: 'Invite Peers', description: 'Send secure tokens to teammates for instant environment joining.' },
      { title: 'Sync & Ship', description: 'Watch code changes propagate instantly across all connected nodes.' }
    ],
    faqs: [
      { question: 'Is the data end-to-end encrypted?', answer: 'Yes, all synchronization traffic is encrypted using AES-256 GCM.' },
      { question: 'Does it work with VS Code?', answer: 'We have native plugins for VS Code, IntelliJ, and Vim.' }
    ],
    techStack: ['WebSockets', 'Node.js', 'Redis', 'Rust'],
    demoUrl: 'https://demo.orbitsaas.com/teamsync',
    previewImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'plugin-analyzer',
    name: 'Plugin Analyzer',
    tagline: 'Deep Security & Performance Auditing',
    description: 'Identify vulnerable, slow, or redundant plugins in your ecosystem before they impact production.',
    longDescription: 'Plugin Analyzer performs deep static and dynamic analysis on your dependency tree. It doesn’t just look for versions; it simulates execution to find memory leaks and hidden security backdoors.',
    category: 'DevOps',
    icon: 'Shield',
    stats: [
      { label: 'Plugins Audited', value: '5M+' },
      { label: 'Vulnerabilities', value: '800k' },
      { label: 'Time Saved', value: '2k hrs' }
    ],
    features: [
      { title: 'Dependency Mapping', description: 'Visual graph of how plugins interact and share resources.' },
      { title: 'Security Scoring', description: 'Instant risk assessment based on CVE databases and code patterns.' },
      { title: 'Performance Benchmarking', description: 'Measure the exact millisecond impact each plugin adds to runtime.' }
    ],
    workflow: [
      { title: 'Scan Manifest', description: 'Upload your package.json, requirements.txt, or pom.xml.' },
      { title: 'Audit Engine', description: 'Our AI engine dissects code paths and network calls of every plugin.' },
      { title: 'Remediation', description: 'Receive a list of safe alternatives and auto-fix patches.' }
    ],
    faqs: [
      { question: 'Does it support private registries?', answer: 'Yes, it integrates with NPM Enterprise, Artifactory, and more.' },
      { question: 'How often are databases updated?', answer: 'Vulnerability definitions are updated every 15 minutes.' }
    ],
    techStack: ['Go', 'Python', 'AST Analysis', 'PostgreSQL'],
    demoUrl: 'https://demo.orbitsaas.com/plugin-analyzer',
    previewImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'cleaner-indexer',
    name: 'CSS/JS Cleaner & Indexer',
    tagline: 'Hyper-Optimized Asset Delivery',
    description: 'Automatic dead code elimination and lightning-fast indexing for your web assets.',
    longDescription: 'Tired of bloated bundles? Our Cleaner & Indexer identifies unused CSS selectors and unreachable JS functions with 99.9% accuracy, while building a lightning-fast index for semantic search within your assets.',
    category: 'Design',
    icon: 'Zap',
    stats: [
      { label: 'Bundle Reduction', value: '65%' },
      { label: 'Load Speed', value: '+40%' },
      { label: 'Assets Cleaned', value: '10M+' }
    ],
    features: [
      { title: 'Dead Code Purge', description: 'Tree-shaking taken to the next level by analyzing actual CSS usage.' },
      { title: 'Semantic Indexing', description: 'Search through your design system logic using natural language.' },
      { title: 'Auto-Minification', description: 'Next-gen compression that beats standard Gzip and Brotli.' }
    ],
    workflow: [
      { title: 'Ingest Assets', description: 'Provide a URL or upload your build artifacts.' },
      { title: 'Neural Scrubbing', description: 'We identify patterns of unused code and redundant logic.' },
      { title: 'Indexed Export', description: 'Download your optimized files along with a searchable map.' }
    ],
    faqs: [
      { question: 'Will it break my dynamic classes?', answer: 'No, our engine supports safe-listing and runtime analysis.' },
      { question: 'Is there a CLI tool?', answer: 'Yes, we have a lightweight CLI for CI/CD integration.' }
    ],
    techStack: ['Wasm', 'Rust', 'JavaScript', 'SWC'],
    demoUrl: 'https://demo.orbitsaas.com/cleaner',
    previewImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'w3c-fixer',
    name: 'W3C Issue Fixer',
    tagline: 'Automated Standards Compliance',
    description: 'Instantly detect and repair W3C validation errors and accessibility gaps in your HTML/CSS.',
    longDescription: 'Don’t let validation errors hurt your SEO or accessibility rankings. The W3C Issue Fixer scans your output and provides automated patches for missing ARIA labels, unclosed tags, and deprecated syntax.',
    category: 'Marketing',
    icon: 'CheckCircle2',
    stats: [
      { label: 'Fixes Applied', value: '4M+' },
      { label: 'Compliance Rate', value: '100%' },
      { label: 'SEO Boost', value: '12%' }
    ],
    features: [
      { title: 'Auto-A11y', description: 'Automatically adds missing alt tags and ARIA roles based on context.' },
      { title: 'Syntax Repair', description: 'Fixes malformed HTML and CSS according to the latest W3C specs.' },
      { title: 'SEO Guard', description: 'Ensures your header hierarchy and meta-data are perfectly structured.' }
    ],
    workflow: [
      { title: 'URL Audit', description: 'Enter any live URL or upload a template file.' },
      { title: 'Validation Scan', description: 'We run 200+ checks against W3C and WCAG 2.1 standards.' },
      { title: 'Apply Patches', description: 'Approve suggested fixes or let our AI auto-heal the code.' }
    ],
    faqs: [
      { question: 'Does it support React/Vue?', answer: 'Yes, it works by analyzing the rendered DOM tree.' },
      { question: 'Will it change my layout?', answer: 'Never. Fixes are strictly code-standard and accessibility focused.' }
    ],
    techStack: ['Puppeteer', 'Axe-core', 'Node.js', 'React'],
    demoUrl: 'https://demo.orbitsaas.com/w3c-fixer',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'readme-gen',
    name: 'Read Me Gen',
    tagline: 'Source-to-Docs Intelligence',
    description: 'Transform complex source code into beautiful, human-readable documentation instantly.',
    longDescription: 'Stop writing boilerplate documentation. Read Me Gen uses Gemini-powered analysis to understand your code logic and generates professional READMEs, API docs, and installation guides in seconds.',
    category: 'AI',
    icon: 'FileText',
    stats: [
      { label: 'Docs Generated', value: '250k' },
      { label: 'Codebases Read', value: '1M+' },
      { label: 'Accuracy', value: '96%' }
    ],
    features: [
      { title: 'Logic Synthesis', description: 'The AI explains *why* the code works, not just *what* it does.' },
      { title: 'Multi-Format', description: 'Export to Markdown, GitBook, Docusaurus, or PDF.' },
      { title: 'Auto-Diagrams', description: 'Generates Mermaid.js flowcharts based on your function calls.' }
    ],
    workflow: [
      { title: 'Parse Code', description: 'Connect your repo or paste code snippets into the editor.' },
      { title: 'Contextual Tuning', description: 'Adjust the tone from "Developer-Focused" to "Executive Summary".' },
      { title: 'Deploy Docs', description: 'One-click push to GitHub or your documentation portal.' }
    ],
    faqs: [
      { question: 'Does it support legacy code?', answer: 'Yes, it excels at explaining obfuscated or undocumented legacy blocks.' },
      { question: 'Can I use my own template?', answer: 'Absolutely. You can define custom brand styles and sections.' }
    ],
    techStack: ['Gemini API', 'TypeScript', 'Markdown', 'Next.js'],
    demoUrl: 'https://demo.orbitsaas.com/readmegen',
    previewImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1200'
  }
];

export const getIcon = (name: string, size = 24, className = "") => {
  const icons: Record<string, React.ElementType> = {
    Zap, Shield, Cpu, Globe, Layers, BarChart3, Users, Rocket, Palette, Code2, FileText, Search, RefreshCw, CheckCircle2
  };
  const IconComponent = icons[name] || Globe;
  return <IconComponent size={size} className={className} />;
};
