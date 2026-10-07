import React from 'react';
import { Article } from '../types';
import { Bookmark, X, ArrowRight, Trash2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveSaved: (articleId: string) => void;
  onClearAll: () => void;
}

export const SavedModal: React.FC<Props> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveSaved,
  onClearAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="border-b border-stone-200 flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-teal-800" />
            <h3 className="font-serif font-bold text-stone-900 text-lg">Your Reading List</h3>
            <span className="text-xs font-mono text-stone-500">({savedArticles.length})</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-6 divide-y divide-stone-100">
          {savedArticles.length === 0 ? (
            <div className="text-center py-12 text-stone-500 text-sm">
              <Bookmark className="w-10 h-10 mx-auto mb-3 opacity-30 text-stone-400" />
              <p className="font-medium text-stone-800 mb-1">Your reading list is empty</p>
              <p className="text-stone-500 text-xs">
                Click the bookmark icon on any article card to save it for later.
              </p>
            </div>
          ) : (
            savedArticles.map((article) => (
              <div
                key={article.id}
                className="py-4 flex items-center justify-between gap-4 group"
              >
                <div
                  onClick={() => {
                    onSelectArticle(article);
                    onClose();
                  }}
                  className="cursor-pointer flex-1"
                >
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                    <span>{article.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTimeMinutes} min read</span>
                  </div>
                  <h4 className="font-serif font-semibold text-stone-900 text-sm group-hover:text-teal-800 transition-colors line-clamp-1">
                    {article.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs flex items-center gap-1"
                    title="Read article"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onRemoveSaved(article.id)}
                    className="p-2 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    title="Remove from reading list"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {savedArticles.length > 0 && (
          <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-between items-center text-xs">
            <span className="text-stone-500">Saved to browser storage</span>
            <button
              onClick={onClearAll}
              className="text-stone-500 hover:text-rose-600 transition-colors"
            >
              Clear All Saved
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
