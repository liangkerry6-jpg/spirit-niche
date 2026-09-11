'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, GraduationCap, Briefcase, FlaskConical } from 'lucide-react';
import Header from '@/components/Header';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-3xl px-5 py-12 sm:py-16">
        {/* Hero */}
        <section className="text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold tracking-[0.3em] text-emerald-300">
            <FlaskConical size={12} />
            SPIRIT NICHE
          </p>
          <h1 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl">
            测测你在现代压力下的
            <br />
            精神物种
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/50">
            基于资源保存 (COR) 与感官防御 (SPS) 理论构建的 90 秒应激切片测评
          </p>
        </section>

        {/* 分流选择器 */}
        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => router.push('/quiz?version=student')}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-all hover:border-emerald-400/40 hover:bg-emerald-500/[0.06]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
              <GraduationCap size={22} />
            </div>
            <h2 className="mt-4 text-lg font-bold text-white">🎓 校园修仙 · 学生版</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              专测早八、期末突击、寝室关系、组员摆烂与教务崩溃。
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-300 transition-transform group-hover:translate-x-0.5">
              开始测评 <ArrowRight size={15} />
            </span>
          </button>

          <button
            onClick={() => router.push('/quiz?version=worker')}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-all hover:border-sky-400/40 hover:bg-sky-500/[0.06]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-300">
              <Briefcase size={22} />
            </div>
            <h2 className="mt-4 text-lg font-bold text-white">💼 职场受难 · 打工版</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/55">
              专测周五突发艾特、甩锅会议、无理指责与深夜问讯。
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-300 transition-transform group-hover:translate-x-0.5">
              开始测评 <ArrowRight size={15} />
            </span>
          </button>
        </section>

        {/* 学术背书脚注 */}
        <footer className="mt-14 border-t border-white/10 pt-6 text-center">
          <p className="text-xs leading-relaxed text-white/35">
            本测评基于 Hobfoll 资源保存理论 (1989)、Aron 感觉处理敏感性模型 (1997) 与
            Rotter 心理控制点理论 (1966) 构建，仅供娱乐参考，不构成任何临床诊断。
          </p>
        </footer>
      </main>
    </div>
  );
}
