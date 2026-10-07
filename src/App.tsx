/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ARTICLES, CATEGORIES, QUIZ_QUESTIONS } from './data/articles';
import { Article } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArticleCard } from './components/ArticleCard';
import { ArticleView } from './components/ArticleView';
import { KnowledgeQuiz } from './components/KnowledgeQuiz';
import { SearchModal } from './components/SearchModal';
import { SavedModal } from './components/SavedModal';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { Filter, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [savedOpen, setSavedOpen] = useState<boolean>(false);
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('beyond_cancer_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Sync saved bookmarks with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('beyond_cancer_saved', JSON.stringify(savedArticleIds));
    } catch {
      // localStorage may fail in restricted sandboxes
    }
  }, [savedArticleIds]);

  const toggleSave = (articleId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedArticleIds((prev) =>
      prev.includes(articleId)
        ? prev.filter((id) => id !== articleId)
        : [...prev, articleId]
    );
  };

  const handleClearSaved = () => {
    setSavedArticleIds([]);
  };

  const savedArticles = ARTICLES.filter((a) => savedArticleIds.includes(a.id));

  // Filter articles by category
  const filteredArticles =
    selectedCategory === 'All'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCategory);

  const handleNavigateSection = (sectionId: string) => {
    setSelectedArticle(null);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans selection:bg-teal-800 selection:text-white">
      {/* Universal Top Bar */}
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onNavigateHome={() => setSelectedArticle(null)}
        onNavigateSection={handleNavigateSection}
        savedCount={savedArticleIds.length}
        onOpenSaved={() => setSavedOpen(true)}
      />

      {/* Main Content Area */}
      {selectedArticle ? (
        <ArticleView
          article={selectedArticle}
          onBack={() => setSelectedArticle(null)}
          onNavigateArticle={(art) => setSelectedArticle(art)}
          allArticles={ARTICLES}
          isSaved={savedArticleIds.includes(selectedArticle.id)}
          onToggleSave={(id) => toggleSave(id)}
        />
      ) : (
        <main className="flex-1">
          {/* Editorial Hero Marquee */}
          <Hero
            featuredArticle={ARTICLES[0]}
            onReadArticle={(art) => setSelectedArticle(art)}
            onBrowseAll={() => {
              const el = document.getElementById('articles-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* Articles & Topics Section */}
          <section id="articles-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
            {/* Section Header with Category Filter */}
            <div id="topics-section" className="mb-10 sm:mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-6">
                <div>
                  <div className="text-xs uppercase tracking-wider font-mono text-stone-500 mb-2">
                    The 10-Article Curriculum
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                    Understanding Cancer: From Cells to Cures
                  </h2>
                  <p className="text-stone-600 text-sm mt-2 max-w-2xl leading-relaxed">
                    Explore all ten chapters spanning basic cell mechanics, clinical detection, established and emerging therapies, and future frontiers.
                  </p>
                </div>

                {/* Interactive Category Segmented Tabs (Functional Buttons) */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/70 rounded-xl self-start md:self-auto">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                        selectedCategory === cat
                          ? 'bg-white text-stone-900 shadow-xs font-semibold'
                          : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid (10 Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredArticles.map((article, idx) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  index={ARTICLES.findIndex((a) => a.id === article.id)}
                  onSelect={(art) => setSelectedArticle(art)}
                  isSaved={savedArticleIds.includes(article.id)}
                  onToggleSave={toggleSave}
                />
              ))}
            </div>
          </section>

          {/* Interactive Knowledge Quiz Section */}
          <div id="quiz-section" className="px-4 sm:px-6 lg:px-8">
            <KnowledgeQuiz questions={QUIZ_QUESTIONS} />
          </div>

          {/* About & Ethics Section */}
          <AboutSection />
        </main>
      )}

      {/* Global Footer */}
      <Footer
        articles={ARTICLES}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        articles={ARTICLES}
        onSelectArticle={(art) => setSelectedArticle(art)}
      />

      {/* Saved Articles Drawer/Modal */}
      <SavedModal
        isOpen={savedOpen}
        onClose={() => setSavedOpen(false)}
        savedArticles={savedArticles}
        onSelectArticle={(art) => setSelectedArticle(art)}
        onRemoveSaved={(id) => toggleSave(id)}
        onClearAll={handleClearSaved}
      />
    </div>
  );
}
