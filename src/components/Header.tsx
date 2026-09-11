'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import TheoryModal from './TheoryModal';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0A0C]/85 backdrop-blur">
        <div className="mx-auto grid max-w-3xl grid-cols-[1fr_auto_1fr] items-center px-4 py-3">
          <div />
          <Link href="/" className="text-center leading-tight">
            <span className="block text-[11px] font-bold tracking-[0.35em] text-white">
              SPIRIT NICHE
            </span>
            <span className="mt-0.5 block text-[10px] tracking-widest text-white/40">
              精神生态位标本馆
            </span>
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-1.5 justify-self-end rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-colors hover:border-white/25 hover:text-white"
          >
            <BookOpen size={14} />
            <span>理论文献</span>
          </button>
        </div>
      </header>
      <TheoryModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
