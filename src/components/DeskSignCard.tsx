import { SpeciesKey } from '@/types';
import { SPECIES_PROFILES } from '@/data/speciesProfiles';
import { DESK_SIGN_DATA } from '@/data/deskSignData';
import SpeciesMascot from './SpeciesMascot';

interface DeskSignCardProps {
  species: SpeciesKey;
}

export default function DeskSignCard({ species }: DeskSignCardProps) {
  const profile = SPECIES_PROFILES[species];
  const signData = DESK_SIGN_DATA[species];
  const color = profile.themeColor;

  return (
    <div
      id="desk-sign-node"
      className="relative flex aspect-[16/9] w-full max-w-[640px] flex-col justify-between overflow-hidden rounded-2xl border-2 border-white/10 bg-[#0C0D12] p-6 shadow-2xl"
    >
      {/* 顶部：黄色/红色警示斜纹装饰条（内联渐变，避免导出跨域黑屏） */}
      <div
        className="absolute left-0 right-0 top-0 h-3"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(250,204,21,0.55) 0px, rgba(250,204,21,0.55) 12px, rgba(239,68,68,0.45) 12px, rgba(239,68,68,0.45) 24px)',
        }}
      />

      {/* 头部：标牌信息与版本标签 */}
      <div className="flex items-center justify-between font-mono text-xs tracking-widest text-zinc-500">
        <span>DESK WARNING SIGN // NO.{species.toUpperCase()}</span>
        <span className="rounded border border-zinc-700 bg-zinc-900 px-2 py-0.5 text-zinc-300">
          {profile.chineseName} · 专属工位结界
        </span>
      </div>

      {/* 中部核心区：左侧吉祥物小标 + 右侧超大嘴替标语 */}
      <div className="my-auto flex items-center gap-6">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/80 p-1 shadow-inner">
          <SpeciesMascot species={species} size={88} />
        </div>

        <div className="flex flex-col justify-center gap-2">
          {/* 核心状态超大标签（带主题色） */}
          <div
            className="flex items-center gap-2 text-2xl font-black tracking-wider sm:text-3xl"
            style={{ color }}
          >
            <span>{signData.statusTitle}</span>
            <span
              className="rounded border px-1.5 py-0.5 font-mono text-xs font-normal uppercase opacity-60"
              style={{ borderColor: color }}
            >
              {signData.statusEn}
            </span>
          </div>

          {/* 扎心嘴替正文 */}
          <div className="text-base font-bold leading-relaxed text-zinc-200 sm:text-lg">
            {signData.content}
          </div>
        </div>
      </div>

      {/* 底部：严正免责声明与物理参数（工业警示铭牌） */}
      <div className="flex items-center justify-between border-t border-zinc-800 pt-3 font-mono text-[11px] text-zinc-400">
        <span className="max-w-[80%] truncate">{signData.warningFoot}</span>
        <span className="shrink-0 text-zinc-600">CAMPUS NICHE LAB.</span>
      </div>
    </div>
  );
}
