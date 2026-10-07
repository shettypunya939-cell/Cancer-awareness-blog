import React from 'react';
import { Article } from '../types';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

interface Props {
  featuredArticle: Article;
  onReadArticle: (article: Article) => void;
  onBrowseAll: () => void;
}

export const Hero: React.FC<Props> = ({
  featuredArticle,
  onReadArticle,
  onBrowseAll
}) => {
  return (
    <section className="relative pt-8 pb-12 md:pt-14 md:pb-16 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Magazine Editorial Masthead */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-stone-500 mb-3">
            An Educational Science Publication · Written for Curious Minds
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-stone-900 leading-[1.1] mb-5">
            Beyond Cancer
          </h1>
          <p className="text-lg sm:text-xl font-serif italic text-stone-700 max-w-2xl mx-auto leading-relaxed">
            “Understanding, Treating & Searching for a Cure”
          </p>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto mt-4 leading-relaxed font-sans">
            A comprehensive, 10-part student-authored science journal breaking down the molecular biology of cancer, clinical diagnostics, modern therapies, and the reality of the search for a cure.
          </p>
        </div>

        {/* Lead Feature Story Box */}
        <div className="bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Visual Column */}
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[440px] bg-stone-900">
              <img
                src={featuredArticle.heroImage}
                alt={featuredArticle.heroImageAlt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-3 left-4 right-4 text-xs text-white/80 italic font-serif hidden lg:block bg-stone-950/60 backdrop-blur-xs p-2 rounded">
                {featuredArticle.heroCaption}
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                {/* Unboxed Zero-Pill Metadata */}
                <div className="flex items-center gap-2 text-xs text-stone-500 font-sans mb-3">
                  <span className="font-semibold text-teal-800">{featuredArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.publishDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredArticle.readTimeMinutes} min read</span>
                </div>

                <div className="text-xs uppercase tracking-wider font-mono text-stone-400 mb-2">
                  Featured Lead Investigation
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 leading-snug mb-3">
                  {featuredArticle.title}
                </h2>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredArticle.subtitle}
                </p>

                {/* Student Voice Callout Snippet */}
                <div className="border-l-2 border-teal-700 pl-3 py-1 mb-6 text-xs sm:text-sm text-stone-700 italic font-serif">
                  &ldquo;{featuredArticle.studentHook.slice(0, 180)}...&rdquo;
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onReadArticle(featuredArticle)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors shadow-xs cursor-pointer"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onBrowseAll}
                  className="px-4 py-2.5 rounded-lg border border-stone-200 text-stone-700 text-sm font-medium hover:bg-stone-50 transition-colors cursor-pointer"
                >
                  Explore All 10 Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
