import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';
import { Article } from '../types';

interface Props {
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<Props> = ({
  articles,
  onSelectArticle,
  onNavigateSection
}) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Purpose */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-serif font-bold text-white mb-2">
              Beyond Cancer
            </h4>
            <p className="text-xs font-serif italic text-stone-400 mb-4">
              Understanding, Treating & Searching for a Cure
            </p>
            <p className="text-xs text-stone-400 leading-relaxed mb-4">
              A 10-article digital science publication exploring cellular biology, precision treatments, and the ongoing scientific search for better therapies.
            </p>
            <div className="text-[11px] font-mono text-stone-500">
              Student Science Writing Project · 2026
            </div>
          </div>

          {/* Col 2: The 10 Articles (Part 1) */}
          <div>
            <h5 className="text-xs uppercase font-mono tracking-wider text-teal-400 mb-3">
              Articles I – V
            </h5>
            <ul className="space-y-2 text-xs">
              {articles.slice(0, 5).map((a, i) => (
                <li key={a.id}>
                  <button
                    onClick={() => onSelectArticle(a)}
                    className="hover:text-white transition-colors text-left line-clamp-1 text-stone-300 cursor-pointer"
                  >
                    0{i + 1}. {a.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: The 10 Articles (Part 2) */}
          <div>
            <h5 className="text-xs uppercase font-mono tracking-wider text-teal-400 mb-3">
              Articles VI – X
            </h5>
            <ul className="space-y-2 text-xs">
              {articles.slice(5, 10).map((a, i) => (
                <li key={a.id}>
                  <button
                    onClick={() => onSelectArticle(a)}
                    className="hover:text-white transition-colors text-left line-clamp-1 text-stone-300 cursor-pointer"
                  >
                    0{i + 6}. {a.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Primary Institutional Sources */}
          <div>
            <h5 className="text-xs uppercase font-mono tracking-wider text-teal-400 mb-3">
              Trusted Medical Authorities
            </h5>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <a
                  href="https://www.cancer.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>National Cancer Institute (NCI)</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.cancer.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>American Cancer Society (ACS)</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.who.int/health-topics/cancer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>World Health Organization (WHO)</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.aacr.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>American Association for Cancer Research (AACR)</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Hairline & Legal */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Beyond Cancer Publication. Educational science journalism project.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigateSection('disclaimer-section')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Medical Disclaimer
            </button>
            <button
              onClick={() => onNavigateSection('about-section')}
              className="hover:text-stone-300 transition-colors cursor-pointer"
            >
              Editorial Methodology
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
