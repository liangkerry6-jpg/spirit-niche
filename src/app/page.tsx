'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, FlaskConical } from 'lucide-react';
import Header from '@/components/Header';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-dvh">
      <Header />

      <main className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        {/* Hero */}
        <section className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold tracking-[0.3em] text-emerald-300">
            <FlaskConical size={12} />
            SPIRIT NICHE
          </p>
          <h1 className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl">
            大学生精神物种测试
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60">
            查收你的当代校园生存防御指南
          </p>
          <p className="mx-auto mt-6 max-w-md text-sm italic leading-relaxed text-white/40">
            “不要问我为什么不回消息，我的 CPU 正在低功耗运行。”
          </p>

          <button
            onClick={() => router.push('/quiz')}
            className="group mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-bold text-black transition-colors hover:bg-emerald-400 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            立即捕获我的精神物种（8题极速版）
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </button>
        </section>

        {/* 学术背书脚注 */}
        <footer className="mt-16 border-t border-white/10 pt-6 text-center">
          <p className="text-xs leading-relaxed text-white/35">
            本测评依赖AI生成，仅供娱乐参考，不构成任何诊断建议。
          </p>
        </footer>
      </main>
    </div>
  );
}
