import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { HelpCircle, Check, X, RotateCcw, Award } from 'lucide-react';

interface Props {
  questions: QuizQuestion[];
}

export const KnowledgeQuiz: React.FC<Props> = ({ questions }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const currentQ = questions[currentIdx];
  const selectedForCurrent = selectedAnswers[currentQ.id];
  const isAnswered = selectedForCurrent !== undefined;

  const handleSelect = (optionIdx: number) => {
    if (isAnswered) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIdx
    }));
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setShowResults(false);
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [qid, optIdx]) => {
    const q = questions.find(item => item.id === Number(qid));
    return acc + (q && q.correctIndex === optIdx ? 1 : 0);
  }, 0);

  return (
    <section className="border border-stone-200 bg-white rounded-2xl p-6 sm:p-10 shadow-xs max-w-4xl mx-auto my-16">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-teal-700 font-mono mb-2">
        <HelpCircle className="w-4 h-4" />
        <span>Curious Reader Knowledge Check</span>
      </div>
      <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2">
        Test Your Understanding of Cancer Biology
      </h3>
      <p className="text-stone-600 text-sm mb-8">
        Distinguishing biological facts from cultural myths: challenge what you’ve learned about oncology mechanisms and modern cures.
      </p>

      {!showResults ? (
        <div>
          {/* Progress bar */}
          <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
            <span>Question {currentIdx + 1} of {questions.length}</span>
            <span>{Math.round(((currentIdx + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-stone-100 rounded-full h-1.5 mb-6 overflow-hidden">
            <div
              className="bg-teal-700 h-1.5 transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <h4 className="text-lg font-serif font-semibold text-stone-900 mb-6 leading-snug">
            {currentQ.question}
          </h4>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt, optIdx) => {
              const isChosen = selectedForCurrent === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;

              let style = 'border-stone-200 hover:border-stone-400 bg-stone-50/50 text-stone-800';
              if (isAnswered) {
                if (isCorrect) {
                  style = 'border-teal-600 bg-teal-50 text-teal-900 font-medium';
                } else if (isChosen) {
                  style = 'border-rose-400 bg-rose-50 text-rose-900';
                } else {
                  style = 'border-stone-200 opacity-60 text-stone-500';
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleSelect(optIdx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all text-sm flex items-start gap-3 ${style}`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-mono mt-0.5 ${
                    isAnswered && isCorrect
                      ? 'bg-teal-700 text-white'
                      : isAnswered && isChosen
                      ? 'bg-rose-600 text-white'
                      : 'bg-stone-200 text-stone-700'
                  }`}>
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="flex-1">{opt}</span>
                  {isAnswered && isCorrect && <Check className="w-5 h-5 text-teal-700 shrink-0" />}
                  {isAnswered && isChosen && !isCorrect && <X className="w-5 h-5 text-rose-600 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Callout */}
          {isAnswered && (
            <div className="p-4 bg-teal-50/80 border border-teal-200 rounded-xl text-sm mb-6 animate-fadeIn">
              <p className="text-teal-900 leading-relaxed">
                <strong className="font-semibold block mb-1">Scientific Takeaway:</strong>
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className="px-6 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shadow-xs"
            >
              {currentIdx === questions.length - 1 ? 'View Final Results' : 'Next Question'}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-6">
          <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-serif font-bold text-stone-900 mb-2">
            You scored {score} out of {questions.length}
          </h4>
          <p className="text-stone-600 text-sm max-w-md mx-auto mb-6">
            {score === questions.length
              ? 'Outstanding grasp of oncology biology! You understand the key nuances behind why cancer is so complex and how modern medicine targets it.'
              : score >= 2
              ? 'Great job! You have a solid grasp of modern cancer science and the realities of targeted and immune treatments.'
              : 'Keep exploring our articles to dive deeper into the fascinating mechanics of cells, immune defenses, and clinical trials.'}
          </p>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-stone-300 text-stone-800 text-sm font-medium hover:bg-stone-50 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Knowledge Check</span>
          </button>
        </div>
      )}
    </section>
  );
};
