export interface SourceReference {
  id: string;
  authorOrOrg: string;
  title: string;
  publicationOrSource: string;
  year: string;
  url?: string;
  note?: string;
}

export interface SectionContent {
  id: string;
  heading: string;
  content: string[];
  callout?: {
    title: string;
    text: string;
    type?: 'insight' | 'verified-fact' | 'clinical-context';
  };
}

export interface QnAItem {
  question: string;
  shortAnswer: string; // 40-60 word direct factual summary for Answer Engine Optimization (AEO)
  detailedAnswer: string;
}

export interface DiagramData {
  type: 'cell-cycle' | 'metastasis-cascade' | 'immunotherapy' | 'diagnostic-matrix';
  title: string;
  caption: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  studentHook: string;
  readTimeMinutes: number;
  publishDate: string;
  category: 'Cellular Biology' | 'Diagnostics & Detection' | 'Treatments & Therapies' | 'Frontiers of Research' | 'Specific Cancers & Care';
  tags: string[];
  heroImage: string;
  heroImageAlt: string;
  heroCaption: string;
  summary: string;
  metaDescription?: string;
  primaryKeywords?: string[];
  keyTakeaways: string[];
  sections: SectionContent[];
  qnaList?: QnAItem[];
  interactiveDiagram?: DiagramData;
  sources: SourceReference[];
  statusClassification: 'Established Biology' | 'Standard of Care' | 'Active Clinical Trials' | 'Emerging Research';
  relatedSlugs?: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}
