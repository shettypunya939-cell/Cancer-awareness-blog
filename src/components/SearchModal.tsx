import React, { useState, useEffect } from 'react';
import { Article } from '../types';
import { Search, X, BookOpen, ArrowRight } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const SearchModal: React.FC<Props> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // toggle modal
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? []
    : articles.filter(a => {
        const q = query.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.subtitle.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.tags.some(t => t.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q) ||
          a.sections.some(s => s.content.some(c => c.toLowerCase().includes(q)))
        );
      });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header Search Input */}
        <div className="relative border-b border-stone-200 flex items-center px-4 py-3.5">
          <Search className="w-5 h-5 text-stone-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles by topic, drug, gene (p53, immunotherapy, PET, chemo)..."
            className="w-full text-base bg-transparent border-none focus:outline-hidden text-stone-900 placeholder:text-stone-400"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-600 mr-2 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono text-stone-500 bg-stone-100 rounded hover:bg-stone-200"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-stone-100">
          {query.trim() === '' ? (
            <div className="text-center py-10 text-stone-400 text-sm">
              <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Type to search all 10 articles, biological pathways, and treatments.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4 text-xs">
                {['Immunotherapy', 'p53', 'Metastasis', 'Biopsy', 'mRNA Vaccines', 'Chemotherapy'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-10 text-stone-500 text-sm">
              No articles found matching &ldquo;{query}&rdquo;. Try another term.
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectArticle(item);
                  onClose();
                }}
                className="py-3 px-3 rounded-lg hover:bg-stone-50 cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                  <span>{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.readTimeMinutes} min read</span>
                </div>
                <h5 className="font-serif font-semibold text-stone-900 group-hover:text-teal-800 transition-colors text-base mb-1">
                  {item.title}
                </h5>
                <p className="text-stone-600 text-xs line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>
                <div className="flex items-center gap-1 text-xs text-teal-700 font-medium mt-2">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
