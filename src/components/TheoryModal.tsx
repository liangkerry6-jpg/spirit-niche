'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { THEORY_ITEMS } from '@/data/theoryData';

function extractUrl(md: string): string {
  const m = md.match(/\(([^)]+)\)/);
  return m ? m[1] : md;
}

export default function TheoryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#121216] p-6"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">三大心理学底层理论</h2>
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 p-1.5 text-white/60 transition-colors hover:text-white"
                aria-label="关闭"
              >
                <X size={18} />
              </button>
            </div>

            <ul className="space-y-4">
              {THEORY_ITEMS.map((item) => (
                <li key={item.id} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-semibold text-white">{item.nameCn}</h3>
                    <span className="shrink-0 text-xs text-white/40">{item.authorYear}</span>
                  </div>
                  <p className="mt-0.5 text-xs italic text-white/45">{item.nameEn}</p>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/80">{item.coreInsight}</p>
                  <a
                    href={extractUrl(item.referenceUrl)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-400 underline underline-offset-2 transition-colors hover:text-emerald-300"
                  >
                    <ExternalLink size={12} />
                    {extractUrl(item.referenceUrl)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
