export type Language = 'en' | 'id';
export type Theme = 'dark' | 'light';

export type RoutePath =
  | { page: 'home' }
  | { page: 'about' }
  | { page: 'projects' }
  | { page: 'blog'; slug?: string }
  | { page: 'contact' };

export interface GitHubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  company: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
  updated_at: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

export interface CaseStudy {
  id: string;
  date: string;
  visualType: 'multimodal' | 'antispoofing' | 'granite';
  repoUrl: string;
  badge: { en: string; id: string };
  title: { en: string; id: string };
  subtitle: { en: string; id: string };
  summary: { en: string; id: string };
  metricValue: string;
  metricLabel: { en: string; id: string };
  techStack: string[];
  highlights: { en: string[]; id: string[] };
  architectureNote: { en: string; id: string };
}

export interface BlogSection {
  heading: { en: string; id: string };
  paragraphs: { en: string[]; id: string[] };
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface BlogPost {
  slug: string;
  publishedAt: string;
  readTimeMinutes: number;
  category: 'Deep Learning' | 'Computer Vision' | 'Data Analytics' | 'NLP';
  visualType: 'multimodal' | 'antispoofing' | 'granite' | 'forecasting';
  title: { en: string; id: string };
  excerpt: { en: string; id: string };
  keyTakeaways: { en: string[]; id: string[] };
  sections: BlogSection[];
  relatedRepoUrl: string;
}
