
export interface Feature {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface SaaSProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'DevOps' | 'Marketing' | 'AI' | 'Finance' | 'Design';
  icon: string;
  stats: { label: string; value: string }[];
  features: Feature[];
  workflow: WorkflowStep[];
  faqs: FAQItem[];
  techStack: string[];
  demoUrl: string;
  previewImage: string;
}

export type ViewState = 'home' | 'detail';
