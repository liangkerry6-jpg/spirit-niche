'use client';

import { motion } from 'framer-motion';
import { Option, Question, SpeciesKey } from '@/types';

interface Props {
  question: Question;
  options: Option[]; // 已经洗牌后的选项次序
  selected: SpeciesKey | null; // 该题当前已选 species（用于回退时保留状态）
  onSelect: (option: Option) => void;
}

export default function QuestionCard({ question, options, selected, onSelect }: Props) {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-semibold tracking-wide text-emerald-300">
          【{question.sceneTitle}】
        </p>
        <p className="mt-2.5 text-lg font-bold leading-relaxed text-white">
          {question.description}
        </p>
      </div>

      <div className="space-y-3">
        {options.map((opt) => {
          const isSelected = selected === opt.species;
          return (
            <motion.button
              key={opt.id}
              type="button"
              onClick={() => onSelect(opt)}
              className={`w-full rounded-xl border px-4 py-3 text-left ${
                isSelected
                  ? 'border-emerald-400 bg-emerald-500/10 ring-2 ring-emerald-400'
                  : 'border-white/10 bg-white/[0.04] transition-colors hover:border-white/25 hover:bg-white/[0.07]'
              }`}
              animate={isSelected ? { scale: [1, 1.02, 1] } : { scale: 1 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <span className="text-[15px] leading-relaxed text-white/90">{opt.text}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
