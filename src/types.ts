export type ProjectCategory = 
  | "All" 
  | "AI & Computer Vision" 
  | "Full-Stack Web" 
  | "Developer Tools";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "AI & Computer Vision" | "Full-Stack Web" | "Developer Tools";
  tech: string[];
  liveUrl: string;
  sourceUrl: string;
  featured: boolean;
  keyMetrics?: string[];
  architecture?: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  badge?: string; // e.g. "Core", "Advanced", "Daily Driver"
  context?: string; // e.g. "Real-Time Tracking", "API Services"
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  details: string;
  coursework: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period?: string;
  category: string;
  skillsCovered: string[];
  credentialId?: string;
}

export interface AccoladeItem {
  title: string;
  event: string;
  year: string;
  type: "award" | "publication" | "leadership";
  description: string;
}

export interface ContactInfo {
  name: string;
  title: string;
  subTitle: string;
  email: string;
  location: string;
  status: string;
  github: string;
  linkedin: string;
  bio: string;
}
