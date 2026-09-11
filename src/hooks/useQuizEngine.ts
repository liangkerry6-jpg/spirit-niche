'use client';

import { useCallback, useMemo, useState } from 'react';
import { Option, Question, QuizVersion, SpeciesKey } from '@/types';
import { STUDENT_QUESTIONS } from '@/data/studentQuestions';
import { WORKER_QUESTIONS } from '@/data/workerQuestions';

/**
 * 计分规则说明：
 * 1. 题库共 10 题，单选题。
 * 2. 第 1 题至第 9 题：选中选项对应的 species 计 1.0 分。
 * 3. 第 10 题（独享无约束周日的终极回血机制）：权重设定为 1.1 分。
 *    原因：第 10 题直击能量代谢核心底层，1.1 的权重能够在数学上彻底消除多物种并列平票的问题。
 * 4. 累计分值最高的 species 即为主导物种。
 */
export function calculateQuizResult(answers: Record<number, SpeciesKey>): SpeciesKey {
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
    const weight = qId === 10 ? 1.1 : 1.0;
    scores[species] = (scores[species] || 0) + weight;
  }

  let leadingSpecies: SpeciesKey = 'capybara';
  let highestScore = -1;

  for (const species of Object.keys(scores) as SpeciesKey[]) {
    if (scores[species] > highestScore) {
      highestScore = scores[species];
      leadingSpecies = species;
    }
  }

  return leadingSpecies;
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
  version: QuizVersion;
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
  resultSpecies: SpeciesKey;
  selectAnswer: (questionId: number, species: SpeciesKey) => void;
  goTo: (index: number) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
}

export function useQuizEngine(version: QuizVersion): QuizEngine {
  const questions = useMemo<Question[]>(
    () => (version === 'student' ? STUDENT_QUESTIONS : WORKER_QUESTIONS),
    [version],
  );

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

  const resultSpecies = useMemo(() => calculateQuizResult(answers), [answers]);

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
    version,
    questions,
    currentQuestion,
    currentIndex,
    total,
    progress,
    answers,
    shuffledOptions,
    isComplete,
    resultSpecies,
    selectAnswer,
    goTo,
    next,
    prev,
    reset,
  };
}
