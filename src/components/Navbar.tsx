import React from 'react';
import { Search, Bookmark, Sparkles, BookOpen } from 'lucide-react';

interface Props {
  onOpenSearch: () => void;
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
  savedCount: number;
  onOpenSaved: () => void;
}

export const Navbar: React.FC<Props> = ({
  onOpenSearch,
  onNavigateHome,
  onNavigateSection,
  savedCount,
  onOpenSaved
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-50/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand wordmark (single text element) */}
        <button
          onClick={onNavigateHome}
          className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-stone-900 hover:text-teal-800 transition-colors whitespace-nowrap text-left"
        >
          Beyond Cancer
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => onNavigateSection('articles-section')}
            className="hover:text-stone-900 transition-colors py-1 cursor-pointer"
          >
            All Articles
          </button>
          <button
            onClick={() => onNavigateSection('topics-section')}
            className="hover:text-stone-900 transition-colors py-1 cursor-pointer"
          >
            Topics
          </button>
          <button
            onClick={() => onNavigateSection('quiz-section')}
            className="hover:text-stone-900 transition-colors py-1 cursor-pointer"
          >
            Knowledge Check
          </button>
          <button
            onClick={() => onNavigateSection('about-section')}
            className="hover:text-stone-900 transition-colors py-1 cursor-pointer"
          >
            About & Ethics
          </button>
          <button
            onClick={() => onNavigateSection('disclaimer-section')}
            className="hover:text-stone-900 transition-colors py-1 cursor-pointer text-stone-500"
          >
            Disclaimer
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-stone-600 bg-stone-200/60 hover:bg-stone-200 hover:text-stone-900 rounded-lg transition-colors cursor-pointer"
            title="Search articles"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search</span>
            <span className="text-[10px] font-mono opacity-60 hidden sm:inline">⌘K</span>
          </button>

          <button
            onClick={onOpenSaved}
            className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            title="View reading list"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reading List</span>
            {savedCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-teal-500 text-stone-950 font-bold text-[10px] flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
