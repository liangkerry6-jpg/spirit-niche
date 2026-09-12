'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { useQuizEngine } from '@/hooks/useQuizEngine';
import ProgressBar from '@/components/ProgressBar';
import QuestionCard from '@/components/QuestionCard';
import { Option } from '@/types';

const TRANSITION_PHRASES = [
  '正在通过 COR 资源矩阵分析应激防御…',
  '匹配神经生态位标本…',
];

function TransitionScreen({ onDone }: { onDone: () => void }) {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const phrase = TRANSITION_PHRASES[phraseIndex];
    if (charIndex < phrase.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 45);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      if (phraseIndex < TRANSITION_PHRASES.length - 1) {
        setPhraseIndex((p) => p + 1);
        setCharIndex(0);
      } else {
        onDone();
      }
    }, 400);
    return () => clearTimeout(t);
  }, [charIndex, phraseIndex, onDone]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center px-6 text-center">
      <div className="text-4xl">🧬</div>
      <p className="type-cursor mt-6 min-h-[2rem] text-lg font-medium text-white/90">{text}</p>
      <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full bg-emerald-400"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
}

export default function QuizClient() {
  const router = useRouter();

  const {
    questions,
    currentQuestion,
    currentIndex,
    total,
    progress,
    answers,
    shuffledOptions,
    result,
    selectAnswer,
    goTo,
  } = useQuizEngine();

  const [phase, setPhase] = useState<'quiz' | 'transition'>('quiz');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectedSpecies = answers[currentQuestion.id] ?? null;

  const handleSelect = useCallback(
    (option: Option) => {
      const qid = currentQuestion.id;
      selectAnswer(qid, option.species);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        const idx = questions.findIndex((q) => q.id === qid);
        if (idx < total - 1) {
          goTo(idx + 1);
        } else {
          setPhase('transition');
        }
      }, 180);
    },
    [currentQuestion.id, questions, total, goTo, selectAnswer],
  );

  const handleBack = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  const handleDone = useCallback(() => {
    const q = new URLSearchParams({
      dominant: result.dominant.key,
      latent: result.latent.key,
      domPct: String(result.dominant.percentage),
      latPct: String(result.latent.percentage),
    });
    router.replace(`/result?${q.toString()}`);
  }, [router, result]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (phase === 'transition') {
    return <TransitionScreen onDone={handleDone} />;
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-5 py-6">
      {/* 顶部：回退 + 版本标识 */}
      <header className="flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentIndex === 0}
          className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={15} />
          上一题
        </button>
        <span className="text-xs text-white/50">8题极速版</span>
        <span className="hidden text-[10px] tracking-[0.25em] text-white/25 sm:inline">SPIRIT NICHE</span>
      </header>

      {/* 进度条 */}
      <div className="mt-5">
        <ProgressBar current={currentIndex + 1} total={total} progress={progress} />
      </div>

      {/* 题目流转 */}
      <main className="mt-7 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <QuestionCard
              question={currentQuestion}
              options={shuffledOptions[currentQuestion.id] ?? currentQuestion.options}
              selected={selectedSpecies}
              onSelect={handleSelect}
            />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-8 text-center text-xs text-white/30">
        点击选项后自动进入下一题
      </footer>
    </div>
  );
}
