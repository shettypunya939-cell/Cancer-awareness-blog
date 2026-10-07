import React from 'react';
import { ShieldCheck, BookOpen, HeartPulse, GraduationCap, ExternalLink } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-16 sm:py-20 border-t border-stone-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest font-mono text-stone-500 mb-2">
            Editorial Philosophy & Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 mb-4">
            About The “Beyond Cancer” Initiative
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Written from the desk of a curious undergraduate biomedical student for readers who want to understand cancer through real science rather than fear or sensationalism.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50">
            <GraduationCap className="w-8 h-8 text-teal-800 mb-3" />
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              The Student Writer’s Voice
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Medical textbooks are often dense and inaccessible, while social media is filled with miracle cure clickbait. We translate molecular oncology into clear, engaging storytelling with analogies, historical context, and verified biological facts.
            </p>
          </div>

          {/* Column 2 */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50">
            <ShieldCheck className="w-8 h-8 text-teal-800 mb-3" />
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Zero Invention Policy
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Every statistic, mechanism, clinical trial, and historical event is verified against peer-reviewed journals (Cell, NEJM, The Lancet) and leading institutions (NCI, American Cancer Society, WHO). We never invent clinical claims or patient anecdotes.
            </p>
          </div>

          {/* Column 3 */}
          <div className="p-6 rounded-xl border border-stone-200 bg-stone-50/50">
            <HeartPulse className="w-8 h-8 text-teal-800 mb-3" />
            <h3 className="text-lg font-serif font-bold text-stone-900 mb-2">
              Scientific Nuance
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              We never imply that a single silver bullet cure exists. We strictly differentiate between standard of care therapies, active clinical trials, and early laboratory findings, helping readers appreciate genuine medical progress.
            </p>
          </div>
        </div>

        {/* Prominent Educational Disclaimer Box */}
        <div id="disclaimer-section" className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 border border-amber-200/90 mb-12">
          <h3 className="text-base font-serif font-bold text-amber-950 mb-2 flex items-center gap-2">
            <span>Official Educational & Medical Disclaimer</span>
          </h3>
          <p className="text-amber-900/90 text-xs sm:text-sm leading-relaxed mb-4">
            The content published on <strong>Beyond Cancer: Understanding, Treating & Searching for a Cure</strong> is strictly for general informational, educational, and scientific curiosity purposes. It does not provide medical advice, diagnosis, treatment, or prognostic assessment. Always seek the advice of a qualified oncologist, physician, or healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
          </p>
          <div className="pt-3 border-t border-amber-200 text-xs text-amber-950 flex flex-wrap gap-4 items-center">
            <span className="font-semibold">Trusted Clinical Help Lines:</span>
            <a
              href="https://www.cancer.gov/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-amber-800 flex items-center gap-1"
            >
              National Cancer Institute (1-800-4-CANCER) <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.cancer.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-amber-800 flex items-center gap-1"
            >
              American Cancer Society (1-800-227-2345) <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
