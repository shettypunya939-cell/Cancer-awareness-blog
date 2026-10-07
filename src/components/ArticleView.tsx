import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { InteractiveDiagram } from './InteractiveDiagrams';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Clock,
  Calendar,
  ExternalLink,
  BookOpen,
  ChevronRight,
  ChevronLeft,
  Check,
  Quote,
  ShieldCheck,
  Type
} from 'lucide-react';

interface Props {
  article: Article;
  onBack: () => void;
  onNavigateArticle: (article: Article) => void;
  allArticles: Article[];
  isSaved: boolean;
  onToggleSave: (articleId: string) => void;
}

export const ArticleView: React.FC<Props> = ({
  article,
  onBack,
  onNavigateArticle,
  allArticles,
  isSaved,
  onToggleSave
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [article.id]);

  const currentIndex = allArticles.findIndex(a => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Sticky Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-stone-200">
        <div
          className="h-full bg-teal-700 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Top Utility Bar */}
      <div className="border-b border-stone-200 bg-white sticky top-0 z-30 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Font size toggle */}
            <button
              onClick={() => setFontSize(prev => prev === 'normal' ? 'large' : 'normal')}
              className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors"
              title="Toggle reading text size"
            >
              <Type className="w-4 h-4" />
            </button>

            {/* Bookmark button */}
            <button
              onClick={() => onToggleSave(article.id)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                isSaved
                  ? 'bg-stone-900 text-teal-400'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-teal-400' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-medium transition-colors"
              title="Copy link to clipboard"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-teal-700" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 py-10 lg:py-14">
        {/* Article Header */}
        <header className="max-w-3xl mx-auto mb-10 text-center sm:text-left">
          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-stone-500 mb-4 font-sans">
            <span className="font-semibold text-teal-800">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishDate}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTimeMinutes} min read</span>
            <span aria-hidden="true">·</span>
            <span className="text-stone-700 font-mono">{article.statusClassification}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 leading-[1.2] mb-4">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl font-serif text-stone-600 leading-relaxed mb-6">
            {article.subtitle}
          </p>

          {/* Author Byline */}
          <div className="flex items-center gap-3 pt-4 border-t border-stone-200 text-xs text-stone-600">
            <div className="w-9 h-9 rounded-full bg-teal-800 text-white flex items-center justify-center font-serif font-bold text-sm">
              BC
            </div>
            <div>
              <div className="font-semibold text-stone-900">Student Science Desk · Beyond Cancer Project</div>
              <div className="text-stone-500">Reviewed against NCI, ACS & WHO peer-reviewed medical guidelines</div>
            </div>
          </div>
        </header>

        {/* Hero Image Presentation */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-stone-200 bg-stone-900 shadow-sm max-w-4xl mx-auto">
          <img
            src={article.heroImage}
            alt={article.heroImageAlt}
            referrerPolicy="no-referrer"
            className="w-full max-h-[480px] object-cover object-center"
          />
          <div className="p-3 bg-stone-900 text-stone-400 text-xs font-serif italic text-center sm:text-left border-t border-stone-800">
            {article.heroCaption}
          </div>
        </div>

        {/* Content Layout: 2 Columns on desktop (TOC sidebar + Reading prose) */}
        <div className="grid lg:grid-cols-12 gap-10 max-w-4xl mx-auto">
          {/* Main Reading Column */}
          <div className="lg:col-span-12">
            {/* Student Writer's Perspective Callout */}
            <div className="mb-8 p-6 bg-teal-50/70 border-l-3 border-teal-700 rounded-r-xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-teal-800 font-mono mb-2">
                <Quote className="w-4 h-4" />
                <span>Student Writer's Notebook</span>
              </div>
              <p className="text-sm sm:text-base text-stone-800 italic font-serif leading-relaxed">
                &ldquo;{article.studentHook}&rdquo;
              </p>
            </div>

            {/* Key Takeaways Box */}
            <div className="mb-10 p-6 bg-white border border-stone-200 rounded-xl shadow-xs">
              <h3 className="text-base font-serif font-bold text-stone-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-700" />
                <span>Essential Scientific Takeaways</span>
              </h3>
              <ul className="space-y-2 text-sm text-stone-700 list-disc list-inside">
                {article.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className={`article-prose ${fontSize === 'large' ? 'text-lg leading-loose' : 'text-base leading-relaxed'}`}>
              {article.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="mb-10">
                  <h2 className="text-2xl font-serif font-bold text-stone-900 mt-8 mb-4 border-b border-stone-200 pb-2">
                    {sec.heading}
                  </h2>

                  {sec.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-stone-800 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}

                  {/* Section Callout if present */}
                  {sec.callout && (
                    <aside className={`my-6 p-5 rounded-xl border text-sm ${
                      sec.callout.type === 'verified-fact'
                        ? 'bg-amber-50/60 border-amber-200 text-stone-800'
                        : sec.callout.type === 'clinical-context'
                        ? 'bg-stone-100 border-stone-300 text-stone-800'
                        : 'bg-teal-50/60 border-teal-200 text-stone-800'
                    }`}>
                      <h4 className="font-bold text-xs uppercase tracking-wider mb-1.5 font-mono text-stone-700">
                        {sec.callout.title}
                      </h4>
                      <p className="leading-relaxed">{sec.callout.text}</p>
                    </aside>
                  )}
                </section>
              ))}
            </div>

            {/* Embedded Interactive Diagram */}
            {article.interactiveDiagram && (
              <InteractiveDiagram diagram={article.interactiveDiagram} />
            )}

            {/* Educational Medical Disclaimer */}
            <div className="my-10 p-5 bg-stone-100 border border-stone-300 rounded-xl text-xs text-stone-600 leading-relaxed">
              <strong className="block text-stone-800 font-semibold mb-1">
                Educational Disclaimer & Scope:
              </strong>
              This article is written for general science education and public curiosity as part of a student research project. It does not constitute medical advice, diagnosis, or personalized treatment recommendations. Anyone experiencing persistent bodily changes or seeking cancer guidance should consult a licensed physician or visit certified resources such as the National Cancer Institute (cancer.gov) or the American Cancer Society (cancer.org).
            </div>

            {/* Sources & References Section */}
            <footer className="mt-12 pt-8 border-t border-stone-200">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-teal-800" />
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Sources & Peer-Reviewed References
                </h3>
              </div>
              <p className="text-xs text-stone-500 mb-6">
                All claims and data in this article are cross-referenced with peer-reviewed medical literature and official institutional guidelines.
              </p>

              <ol className="space-y-4 text-xs sm:text-sm text-stone-700 divide-y divide-stone-100">
                {article.sources.map((src, idx) => (
                  <li key={src.id} className="pt-3">
                    <div className="font-semibold text-stone-900">
                      [{idx + 1}] {src.authorOrOrg} ({src.year})
                    </div>
                    <div className="italic text-stone-700">{src.title}</div>
                    <div className="text-stone-500 text-xs font-mono mt-0.5">
                      {src.publicationOrSource}
                    </div>
                    {src.url && (
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-teal-800 hover:text-teal-900 font-medium text-xs mt-1"
                      >
                        <span>View Publication / Official Source</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </footer>

            {/* Next / Prev Navigation */}
            <nav className="mt-12 pt-8 border-t border-stone-200 grid sm:grid-cols-2 gap-4">
              {prevArticle ? (
                <button
                  onClick={() => onNavigateArticle(prevArticle)}
                  className="p-4 rounded-xl border border-stone-200 bg-white hover:border-stone-400 text-left transition-all group"
                >
                  <div className="flex items-center gap-1 text-xs text-stone-500 mb-1">
                    <ChevronLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                    <span>Previous Article</span>
                  </div>
                  <div className="font-serif font-semibold text-stone-900 group-hover:text-teal-800 text-sm line-clamp-1">
                    {prevArticle.title}
                  </div>
                </button>
              ) : <div />}

              {nextArticle && (
                <button
                  onClick={() => onNavigateArticle(nextArticle)}
                  className="p-4 rounded-xl border border-stone-200 bg-white hover:border-stone-400 text-right transition-all group sm:ml-auto w-full"
                >
                  <div className="flex items-center justify-end gap-1 text-xs text-stone-500 mb-1">
                    <span>Next Article</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="font-serif font-semibold text-stone-900 group-hover:text-teal-800 text-sm line-clamp-1">
                    {nextArticle.title}
                  </div>
                </button>
              )}
            </nav>
          </div>
        </div>
      </article>
    </div>
  );
};
