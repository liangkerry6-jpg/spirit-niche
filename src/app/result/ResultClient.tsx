'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { toPng } from 'html-to-image';
import { Download, RotateCcw, X } from 'lucide-react';
import Header from '@/components/Header';
import PosterCard from '@/components/PosterCard';
import DeskSignCard from '@/components/DeskSignCard';
import SpeciesMascot from '@/components/SpeciesMascot';
import { SPECIES_PROFILES } from '@/data/speciesProfiles';
import { SpeciesKey } from '@/types';

function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  const coarse = window.matchMedia?.('(pointer: coarse)').matches;
  const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const ua = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  return coarse || touch || ua;
}

export default function ResultClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const dominantRaw = searchParams.get('dominant');
  const dominantKey: SpeciesKey = (
    dominantRaw && dominantRaw in SPECIES_PROFILES ? dominantRaw : 'capybara'
  ) as SpeciesKey;
  const latentRaw = searchParams.get('latent');
  const latentKey: SpeciesKey = (
    latentRaw && latentRaw in SPECIES_PROFILES ? latentRaw : 'owl'
  ) as SpeciesKey;
  const domPctRaw = parseInt(searchParams.get('domPct') ?? '', 10);
  const domPct = Number.isFinite(domPctRaw) ? Math.min(100, Math.max(5, domPctRaw)) : 60;
  const latPct = 100 - domPct;
  const profile = SPECIES_PROFILES[dominantKey];
  const latentProfile = SPECIES_PROFILES[latentKey];

  const [isGenerating, setIsGenerating] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<'poster' | 'deskSign'>('poster');
  const [previewFilename, setPreviewFilename] = useState('spirit-niche.png');

  const handleSave = async () => {
    const nodeId = mode === 'deskSign' ? 'desk-sign-node' : 'poster-node';
    const node = document.getElementById(nodeId);
    if (!node) return;
    setIsGenerating(true);
    setError(null);
    try {
      const dataUrl = await toPng(node, { pixelRatio: 2 });
      const filename =
        mode === 'deskSign'
          ? `spirit-niche-desk-${profile.key}.png`
          : `spirit-niche-${profile.key}.png`;
      if (isMobileDevice()) {
        setPreviewUrl(dataUrl);
        setPreviewFilename(filename);
      } else {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
      }
    } catch (e) {
      console.error('导出失败:', e);
      setError('图片生成失败，请长按截图保存，或更换浏览器后重试。');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleRetake = () => router.push('/quiz');
  const handleHome = () => router.push('/');

  return (
    <div className="min-h-dvh">
      <Header />

      <main className="mx-auto max-w-3xl px-5 py-8">
        {/* 动画物种形象 */}
        <div className="mb-8 flex flex-col items-center text-center">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <SpeciesMascot species={dominantKey} size={140} glow />
          </motion.div>
          <h1 className="mt-4 text-2xl font-black text-white">你是「{profile.chineseName}」</h1>
          <p className="mt-1 text-sm italic text-white/50">{profile.englishName}</p>
          <p className="mt-3 text-xs text-white/55">
            潜伏人格 ·{' '}
            <span className="font-semibold" style={{ color: latentProfile.themeColor }}>
              {latentProfile.chineseName} {latPct}%
            </span>
          </p>
        </div>

        {/* 模式切换 */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
            <button
              type="button"
              onClick={() => setMode('poster')}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-colors sm:text-sm ${
                mode === 'poster' ? 'bg-emerald-500 text-black' : 'text-white/65 hover:text-white'
              }`}
            >
              📱 9:16 标本海报
            </button>
            <button
              type="button"
              onClick={() => setMode('deskSign')}
              className={`rounded-full px-4 py-2 text-xs font-bold transition-colors sm:text-sm ${
                mode === 'deskSign' ? 'bg-emerald-500 text-black' : 'text-white/65 hover:text-white'
              }`}
            >
              🪧 课桌电子立牌
            </button>
          </div>
        </div>

        {/* 卡片渲染区（海报 / 立牌） */}
        <div className="flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              className="flex w-full justify-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {mode === 'poster' ? (
                <PosterCard
                  dominantKey={dominantKey}
                  latentKey={latentKey}
                  domPct={domPct}
                  latPct={latPct}
                />
              ) : (
                <DeskSignCard species={dominantKey} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 操作按钮 */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={handleSave}
            disabled={isGenerating}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-emerald-400 disabled:cursor-wait disabled:opacity-60"
          >
            {isGenerating ? (
              mode === 'deskSign' ? '正在生成立牌…' : '正在生成海报…'
            ) : (
              <>
                <Download size={16} />
                {mode === 'deskSign' ? '📸 保存横屏立牌壁纸' : '📸 保存结果海报 (长按/下载)'}
              </>
            )}
          </button>
          <button
            onClick={handleRetake}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/85 transition-colors hover:border-white/30 hover:text-white"
          >
            <RotateCcw size={15} />
            🔄 重新测试
          </button>
        </div>

        {error && <p className="mt-3 text-center text-sm text-rose-400">{error}</p>}

        {/* 诊断报告（补充防御机制与典型症状） */}
        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-bold text-white">🧪 诊断报告</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-widest text-white/40">防御机制</p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                {profile.defenseMechanism}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] uppercase tracking-widest text-white/40">典型行为症状</p>
              <ul className="mt-2 space-y-2">
                {profile.symptoms.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm leading-relaxed text-white/75">
                    <span className="mt-0.5 shrink-0 text-emerald-400">▸</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-6 text-center">
          <button
            onClick={handleHome}
            className="text-xs text-white/40 underline underline-offset-2 transition-colors hover:text-white/70"
          >
            返回首页重新选择版本
          </button>
        </div>
      </main>

      {/* 移动端长按保存浮层 */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/85 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewUrl(null)}
          >
            <button
              onClick={() => setPreviewUrl(null)}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-white/70 transition-colors hover:text-white"
              aria-label="关闭"
            >
              <X size={20} />
            </button>
            <p className="mb-4 text-sm text-white/80">长按图片即可保存至相册或发送给朋友</p>
            {/* base64 data URL 预览，无法用 next/image 优化，故使用原生 img */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewUrl}
              alt="精神生态位测评海报"
              className="max-h-[78vh] w-auto rounded-xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
            <a
              href={previewUrl}
              download={previewFilename}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/85 transition-colors hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Download size={15} />
              也可点此直接下载
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
