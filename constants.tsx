import React from 'react';
import {
  MessageSquare,
  FileSpreadsheet,
  BarChart3,
  Clock,
  BrainCircuit,
  Trophy,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Lock,
  Globe,
  Database,
  Users,
  Layers,
  Search,
  CheckCircle,
  FileCode,
  Sparkles,
  Layout,
  Code2,
  Bug,
  BookOpen,
  Scissors
} from 'lucide-react';
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'remotesync',
    name: "RemoteSync",
    tagline: "Results Focused, Not Just Active Hours",
    shortDescription: "The Integrated Accountability Hub for Slack, XL, and Jira.",
    description: "RemoteSync bridges the gap between management oversight and developer autonomy. No micromanagement, just clear accountability through outcome-based tracking.",
    accentColor: "#4f46e5",
    icon: <Users />,
    liveDemoUrl: "https://demo.remotesync.io",
    features: [
      { title: "Slack Attendance", description: "", icon: <MessageSquare /> },
      { title: "Sprint Syncing", description: "", icon: <FileSpreadsheet /> },
      { title: "Effort Scorecards", description: "", icon: <Trophy /> },
      { title: "Result Archiving", description: "", icon: <Clock /> }
    ],
    problems: [
      { title: "Attendance Chaos", description: "Slack updates disappear.", icon: <ShieldAlert /> },
      { title: "Data Silos", description: "Jira and Sheets aren't unified.", icon: <Layers /> }
    ]
  },
  {
    id: 'plugin-analyzer',
    name: "Plugin Analyzer",
    tagline: "Say good-bye to default wordpress directory plugins search",
    shortDescription: "Scan and find exact plugins with enhanced filter and search.",
    description: "If you’ve ever tried to do market research on WP.org, you know the frustration: basic fuzzy search, limited results, and zero visibility into the actual health or opportunities within a niche.",
    accentColor: "#ef4444",
    icon: <ShieldAlert />,
    liveDemoUrl: "https://plugin-analyzer.zodevs.com/",
    features: [
      { title: "Strict Match", description: "", icon: <Lock /> },
      { title: "Market Gap Scouting", description: "", icon: <Zap /> },
      { title: "Filter by rating, installation & More", description: "", icon: <ShieldCheck /> },
      { title: "Initial Release Scout & More", description: "", icon: <Database /> }
    ],
    problems: [
      { title: "Bloated Sites", description: "Too many plugins slowing things down.", icon: <Clock /> },
      { title: "Security Gaps", description: "Outdated code creating backdoors.", icon: <Lock /> }
    ]
  },
  {
    id: 'w3c-fixer',
    name: "W3C Validator Fixer",
    tagline: "Automated Compliance & Syntax Repair",
    shortDescription: "Auto-fix HTML/CSS validation errors to meet modern web standards & THEMEFOREST REQUIREMENTS.",
    description: "Stop wasting hours manually fixing validation logs. Our engine automatically repairs non-compliant code while maintaining your design integrity.",
    accentColor: "#f59e0b",
    icon: <CheckCircle />,
    liveDemoUrl: "https://w3c-issue-fixer.zodevs.com/",
    features: [
      { title: "W3C issue Explain & Fix", description: "", icon: <Bug /> },
      { title: "Instant Fix & Line Number Indicator", description: "", icon: <Globe /> },
      { title: "Copy & Compare Like VS Code", description: "", icon: <Layers /> },
      { title: "Strict Fix & Best Fix Versions", description: "", icon: <Zap /> }
    ],
    problems: [
      { title: "Validation Lag", description: "Manually fixing errors is slow.", icon: <Clock /> },
      { title: "SEO Impact", description: "Bad syntax hurts your rankings.", icon: <BarChart3 /> }
    ]
  },
  {
    id: 'readme-gen',
    name: "ReadMe Gen",
    tagline: "AI-Powered GitHub README Generator",
    shortDescription: "Generate professional repository documentation in seconds.",
    description: "ReadMe Gen scans your codebase to create structured, beautiful, and accurate documentation. Focus on coding, not on writing docs.",
    accentColor: "#10b981",
    icon: <BookOpen />,
    liveDemoUrl: "http://readme-gen.zodevs.com/",
    features: [
      { title: "README.md Generation", description: "", icon: <Search /> },
      { title: "readme.txt for WordPress Plugins", description: "", icon: <Code2 /> },
      { title: "Cover modern, professional 7 simple styling", description: "", icon: <Sparkles /> },
      { title: "Options for Custom Sections & Instructions", description: "", icon: <Layout /> }
    ],
    problems: [
      { title: "Empty Repos", description: "No documentation leads to zero adoption.", icon: <FileCode /> },
      { title: "Stale Docs", description: "Docs never match the current code.", icon: <ShieldAlert /> }
    ]
  },
  {
    id: 'cleaner-indexer',
    name: "JS/CSS Cleaner & Indexer",
    tagline: "Deep Asset Optimization & Indexing",
    shortDescription: "Eliminate dead code and index project architecture for peak performance.",
    description: "Our tool deep-scans your assets to strip unused selectors and functions, then creates a structural index for lightning-fast navigation.",
    accentColor: "#06b6d4",
    icon: <Scissors />,
    liveDemoUrl: "https://js-css-cleaner-indexer.zodevs.com/",
    features: [
      { title: "Clean JSS/CSS/SCSS", description: "", icon: <Scissors /> },
      { title: "Index any CSS/JS File", description: "", icon: <Database /> },
      { title: "Maintain Themeforest Coding Standards", description: "", icon: <BrainCircuit /> },
      { title: "Clean Commented Out Code", description: "", icon: <Zap /> }
    ],
    problems: [
      { title: "Asset Bloat", description: "Large JS/CSS files killing load times.", icon: <Zap /> },
      { title: "Code Jungle", description: "Hard to find where functions are defined.", icon: <Search /> }
    ]
  }
];

export const FEATURES: any[] = [];
export const STEPS: any[] = [];
export const TESTIMONIALS: any[] = [];
