import React from 'react';
import { Article } from '../types';
import { ArrowRight, Bookmark, Clock, Check } from 'lucide-react';

interface Props {
  article: Article;
  onSelect: (article: Article) => void;
  isSaved: boolean;
  onToggleSave: (articleId: string, e: React.MouseEvent) => void;
  index: number;
}

export const ArticleCard: React.FC<Props> = ({
  article,
  onSelect,
  isSaved,
  onToggleSave,
  index
}) => {
  return (
    <article
      onClick={() => onSelect(article)}
      className="group bg-white rounded-xl border border-stone-200/90 overflow-hidden hover:border-stone-400 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Article Image Container */}
        <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
          <img
            src={article.heroImage}
            alt={article.heroImageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <button
              onClick={(e) => onToggleSave(article.id, e)}
              className={`p-2 rounded-full backdrop-blur-xs transition-colors shadow-xs ${
                isSaved
                  ? 'bg-stone-900 text-teal-400 hover:bg-stone-800'
                  : 'bg-white/90 text-stone-600 hover:text-stone-900 hover:bg-white'
              }`}
              title={isSaved ? 'Remove from reading list' : 'Save to reading list'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-teal-400' : ''}`} />
            </button>
          </div>
          <div className="absolute bottom-2 left-3 text-[11px] font-mono tracking-wider uppercase text-white/90 bg-stone-950/70 px-2 py-0.5 rounded backdrop-blur-xs">
            0{index + 1} · {article.statusClassification}
          </div>
        </div>

        {/* Text Area */}
        <div className="p-5 sm:p-6">
          {/* Unboxed Zero-Pill Metadata */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-2.5 font-sans">
            <span className="font-semibold text-teal-800">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTimeMinutes} min read</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishDate.split(',')[0]}</span>
          </div>

          <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-teal-900 transition-colors leading-snug mb-2">
            {article.title}
          </h3>

          <p className="text-stone-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {article.subtitle}
          </p>
        </div>
      </div>

      {/* Card Base */}
      <div className="px-5 sm:px-6 pb-5 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
        <span className="text-xs text-stone-400 font-mono">
          {article.sources.length} Verified Sources
        </span>
        <div className="flex items-center gap-1 text-xs font-semibold text-teal-800 group-hover:translate-x-0.5 transition-transform">
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
};
