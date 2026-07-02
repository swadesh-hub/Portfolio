export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year: string;
  grade?: string;
  details: string;
  icon: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface VisitorStats {
  totalViews: number;
  uniqueVisitors: number;
  submissions: number;
}
