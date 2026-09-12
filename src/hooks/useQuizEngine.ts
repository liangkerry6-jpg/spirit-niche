'use client';

import { useCallback, useMemo, useState } from 'react';
import { Option, Question, SpeciesKey } from '@/types';
import { STUDENT_QUESTIONS } from '@/data/studentQuestions';

export interface DualQuizResult {
  dominant: {
    key: SpeciesKey;
    percentage: number;
    score: number;
  };
  latent: {
    key: SpeciesKey;
    percentage: number;
    score: number;
  };
}

/**
 * 8 题制计分与双物种判定规则：
 * 1. Q1 至 Q7：选中的 species 计 1.0 分。
 * 2. Q8（终极自愈方式）：直击底层代谢，赋予 1.15 分权重。
 * 3. 排序所有物种得分：最高分为 dominant（主导物种），次高分为 latent（潜伏物种）。
 * 4. 复合百分比换算（取前两名分值做相对归一化，保留整数步长）：
 *    dominantPercentage = Math.round((top1Score / (top1Score + top2Score)) * 100)
 *    latentPercentage = 100 - dominantPercentage
 */
export function calculateDualResult(answers: Record<number, SpeciesKey>): DualQuizResult {
  const scores: Record<SpeciesKey, number> = {
    capybara: 0,
    hedgehog: 0,
    octopus: 0,
    badger: 0,
    owl: 0,
    chameleon: 0,
  };

  for (const [qIdStr, species] of Object.entries(answers)) {
    const qId = parseInt(qIdStr, 10);
    const weight = qId === 8 ? 1.15 : 1.0;
    scores[species] = (scores[species] || 0) + weight;
  }

  const sorted = (Object.keys(scores) as SpeciesKey[])
    .map((key) => ({ key, score: scores[key] }))
    .sort((a, b) => b.score - a.score);

  const top1 = sorted[0];
  const top2 = sorted[1];

  const totalTopTwo = top1.score + top2.score;
  const dominantPct = totalTopTwo > 0 ? Math.round((top1.score / totalTopTwo) * 100) : 60;
  const latentPct = 100 - dominantPct;

  return {
    dominant: {
      key: top1.key,
      score: top1.score,
      percentage: dominantPct,
    },
    latent: {
      key: top2.key,
      score: top2.score,
      percentage: latentPct,
    },
  };
}

/** Fisher-Yates 洗牌，杜绝用户看出固定的 A-F 物种分布规律。 */
export function fisherYatesShuffle<T>(input: readonly T[]): T[] {
  const arr = [...input];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export interface QuizEngine {
  questions: Question[];
  currentQuestion: Question;
  currentIndex: number;
  total: number;
  /** 0-100 的进度百分比。 */
  progress: number;
  /** 记录每道题（以题目 id 为键）所选 species。 */
  answers: Record<number, SpeciesKey>;
  /** 每道题首次挂载时完成洗牌后的选项次序（本 session 内保持稳定）。 */
  shuffledOptions: Record<number, Option[]>;
  isComplete: boolean;
  result: DualQuizResult;
  selectAnswer: (questionId: number, species: SpeciesKey) => void;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
}

export function useQuizEngine(): QuizEngine {
  const questions = useMemo<Question[]>(() => STUDENT_QUESTIONS, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, SpeciesKey>>({});

  // 全部题目一次性预洗牌，等价于“单题首次挂载时洗牌”，并保证 session 内顺序稳定。
  const [shuffledOptions] = useState<Record<number, Option[]>>(() => {
    const map: Record<number, Option[]> = {};
    for (const q of questions) {
      map[q.id] = fisherYatesShuffle(q.options);
    }
    return map;
  });

  const total = questions.length;
  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / total) * 100;
  const isComplete = answers[questions[total - 1].id] !== undefined;

  const result = useMemo(() => calculateDualResult(answers), [answers]);

  const selectAnswer = useCallback((questionId: number, species: SpeciesKey) => {
    setAnswers((prev) => ({ ...prev, [questionId]: species }));
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, total - 1)));
  }, [total]);

  const next = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, total - 1));
  }, [total]);

  const prev = useCallback(() => {
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, []);

  const reset = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
  }, []);

  return {
    questions,
    currentQuestion,
    currentIndex,
    total,
    progress,
    answers,
    shuffledOptions,
    isComplete,
    result,
    selectAnswer,
    goTo,
    next,
    prev,
    reset,
  };
}
