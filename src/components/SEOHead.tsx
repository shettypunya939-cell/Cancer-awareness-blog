import React, { useEffect } from 'react';
import { Article, QnAItem } from '../types';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  article?: Article;
  qnaList?: QnAItem[];
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  keywords = [],
  ogType = 'website',
  article,
  qnaList
}) => {
  useEffect(() => {
    // 1. Update Title
    const siteTitle = 'Beyond Cancer';
    const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;
    document.title = fullTitle;

    // 2. Helper to set or create meta tags
    const setMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Description & Keywords
    setMetaTag('name', 'description', description);
    if (keywords.length > 0) {
      setMetaTag('name', 'keywords', keywords.join(', '));
    }

    // Canonical link
    const origin = window.location.origin;
    const fullCanonicalUrl = `${origin}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // OpenGraph
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Beyond Cancer: Understanding, Treating & Searching for a Cure');

    // Twitter
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);

    // 3. Schema.org JSON-LD Generation
    const existingScript = document.getElementById('seo-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'seo-json-ld';
    script.type = 'application/ld+json';

    const schemaGraph: any[] = [
      {
        '@type': 'Organization',
        '@id': `${origin}/#organization`,
        name: 'Beyond Cancer Publication',
        url: origin,
        description: 'An educational science publication translating molecular oncology, clinical diagnostics, and therapeutic breakthroughs for curious readers.'
      },
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: origin,
        name: 'Beyond Cancer',
        publisher: {
          '@id': `${origin}/#organization`
        }
      }
    ];

    if (article) {
      // Scholarly / Medical Article Schema
      const articleSchema: any = {
        '@type': 'MedicalScholarlyArticle',
        '@id': `${fullCanonicalUrl}#article`,
        isPartOf: {
          '@id': `${origin}/#website`
        },
        headline: article.title,
        alternativeHeadline: article.subtitle,
        description: article.metaDescription || article.summary,
        url: fullCanonicalUrl,
        datePublished: '2026-10-02T08:00:00+00:00',
        dateModified: '2026-10-15T12:00:00+00:00',
        author: {
          '@type': 'Person',
          name: 'Student Science Desk · Beyond Cancer Initiative'
        },
        publisher: {
          '@id': `${origin}/#organization`
        },
        mainEntityOfPage: fullCanonicalUrl,
        keywords: article.primaryKeywords ? article.primaryKeywords.join(', ') : article.tags.join(', '),
        about: {
          '@type': 'MedicalCondition',
          name: article.title
        },
        citation: article.sources.map(s => `${s.authorOrOrg} (${s.year}). ${s.title}. ${s.publicationOrSource}`)
      };
      schemaGraph.push(articleSchema);

      // BreadcrumbList Schema
      schemaGraph.push({
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: origin
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: article.category,
            item: `${origin}/topics/${encodeURIComponent(article.category.toLowerCase().replace(/\s+/g, '-'))}`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: fullCanonicalUrl
          }
        ]
      });

      // FAQPage Schema for AEO & AI Engines if Q&A items exist
      if (qnaList && qnaList.length > 0) {
        schemaGraph.push({
          '@type': 'FAQPage',
          '@id': `${fullCanonicalUrl}#faq`,
          mainEntity: qnaList.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${item.shortAnswer} ${item.detailedAnswer}`
            }
          }))
        });
      }
    } else {
      schemaGraph.push({
        '@type': 'MedicalWebPage',
        '@id': `${fullCanonicalUrl}#webpage`,
        url: fullCanonicalUrl,
        name: title,
        description: description,
        about: {
          '@type': 'MedicalSpecialty',
          name: 'Oncology'
        }
      });
    }

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': schemaGraph
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('seo-json-ld');
      if (el) el.remove();
    };
  }, [title, description, canonicalPath, keywords, ogType, article, qnaList]);

  return null;
};
