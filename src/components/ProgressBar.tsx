'use client';

import { motion } from 'framer-motion';

export default function ProgressBar({
  current,
  total,
  progress,
}: {
  current: number; // 1-based
  total: number;
  progress: number; // 0-100
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="font-mono text-white/60">
          {String(current).padStart(2, '0')}
          <span className="text-white/30"> / {String(total).padStart(2, '0')}</span>
        </span>
        <span className="font-mono text-emerald-400">{Math.round(progress)}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        />
      </div>
    </div>
  );
}
