export type Language = 'vi' | 'en';

export interface LocalizedText {
  vi: string;
  en: string;
}

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'architecture';

export type MockupType =
  | 'observability'
  | 'design-system'
  | 'fintech'
  | 'codelens'
  | 'storefront';

export interface ProjectMetric {
  label: LocalizedText;
  value: string;
}

export interface ProjectCaseStudy {
  challenge: LocalizedText;
  solution: LocalizedText;
  architectureHighlights: LocalizedText[];
  metrics: ProjectMetric[];
  codeSnippet: {
    filename: string;
    code: string;
  };
}

export interface ProjectItem {
  id: string;
  year: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: LocalizedText;
  title: string;
  tagline: LocalizedText;
  summary: LocalizedText;
  role: LocalizedText;
  timeline: string;
  teamSize: LocalizedText;
  impactBadge: LocalizedText;
  stack: string[];
  mockupType: MockupType;
  imageUrl: string;
  imageAlt: LocalizedText;
  liveUrl: string;
  repoUrl: string;
  caseStudy: ProjectCaseStudy;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: LocalizedText;
  company: string;
  location: LocalizedText;
  summary: LocalizedText;
  highlights: LocalizedText[];
  stack: string[];
}

export interface SkillGroup {
  id: string;
  title: LocalizedText;
  skills: {
    name: string;
    level: string;
    filterable?: boolean;
  }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: LocalizedText;
  company: string;
  avatarUrl: string;
  quote: LocalizedText;
  relationship: LocalizedText;
  projectTag: string;
}
