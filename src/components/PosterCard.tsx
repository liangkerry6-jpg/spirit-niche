import { SpeciesKey, SpeciesProfile, QuizVersion } from '@/types';
import { SPECIES_ORDER } from '@/data/speciesProfiles';
import SpeciesMascot from './SpeciesMascot';

const VERSION_LABEL: Record<QuizVersion, string> = {
  student: '校园修仙 · 学生版',
  worker: '职场受难 · 打工版',
};

/* ------------------------------------------------------------------ */
/* 占位二维码：纯内联 SVG + 确定性伪随机，避免 html-to-image 跨域空白 */
/* ------------------------------------------------------------------ */

function hashString(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(h, 31) + str.charCodeAt(i)) | 0;
  }
  return h;
}

function mulberry32(a: number) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function finder(x: number, y: number, bg: string) {
  return (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width={7} height={7} fill="#ffffff" />
      <rect x={x + 1} y={y + 1} width={5} height={5} fill={bg} />
      <rect x={x + 2} y={y + 2} width={3} height={3} fill="#ffffff" />
    </g>
  );
}

function QrPlaceholder({ seed, size = 60 }: { seed: string; size?: number }) {
  const N = 21;
  const bg = '#0A0A0C';
  const rand = mulberry32(hashString(seed));
  const cells: boolean[][] = [];
  for (let r = 0; r < N; r++) {
    const row: boolean[] = [];
    for (let c = 0; c < N; c++) row.push(rand() > 0.5);
    cells.push(row);
  }

  const isFinder = (r: number, c: number) =>
    (r < 7 && c < 7) || (r < 7 && c >= N - 7) || (r >= N - 7 && c < 7);

  const dataRects: React.ReactNode[] = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (isFinder(r, c)) continue;
      if (cells[r][c]) {
        dataRects.push(
          <rect key={`${r}-${c}`} x={c} y={r} width={1} height={1} fill="#ffffff" />,
        );
      }
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${N} ${N}`}
      shapeRendering="crispEdges"
      style={{ background: bg, borderRadius: 4 }}
    >
      {dataRects}
      {finder(0, 0, bg)}
      {finder(N - 7, 0, bg)}
      {finder(0, N - 7, bg)}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* 三维状态指示条 */
/* ------------------------------------------------------------------ */

function MetricBar({
  label,
  sub,
  value,
  color,
}: {
  label: string;
  sub: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-[10px] text-white/60">
          {label} <span className="text-white/30">{sub}</span>
        </span>
        <span className="font-mono text-[11px] font-bold" style={{ color }}>
          {value}
        </span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundColor: color, boxShadow: `0 0 8px ${color}` }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 9:16 海报渲染节点 */
/* ------------------------------------------------------------------ */

export default function PosterCard({
  profile,
  version,
}: {
  profile: SpeciesProfile;
  version: QuizVersion;
}) {
  const specimenNo = SPECIES_ORDER.indexOf(profile.key) + 1;
  const color = profile.themeColor;

  return (
    <div
      id="poster-node"
      className="poster-grid relative flex aspect-[9/16] w-full max-w-[390px] flex-col overflow-hidden rounded-2xl border border-white/10 px-6 py-5 text-white"
    >
      {/* 顶部标本编号 */}
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-bold tracking-[0.3em] text-white/50">
          NICHE SPECIMEN
        </span>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-white/15 px-2 py-0.5 text-[9px] text-white/50">
            {VERSION_LABEL[version]}
          </span>
          <span className="font-mono text-[10px] tracking-widest text-white/60">
            NO.00{specimenNo}
          </span>
        </div>
      </div>

      {/* 物种主标 */}
      <div className="mt-4 flex items-center gap-4">
        <div className="min-w-0 flex-1">
          <h1
            className="text-5xl font-black leading-none"
            style={{ color, textShadow: `0 0 28px ${color}66` }}
          >
            {profile.chineseName}
          </h1>
          <p className="mt-1.5 text-sm italic tracking-[0.25em] text-white/55">
            {profile.englishName}
          </p>
        </div>
        <SpeciesMascot species={profile.key} size={76} />
      </div>
      <span
        className="mt-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold"
        style={{ color, borderColor: `${color}66`, backgroundColor: `${color}1A` }}
      >
        {profile.tagline}
      </span>

      {/* 金句展示 */}
      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
        <p className="text-base font-bold italic leading-snug text-white">
          <span className="mr-0.5 text-xl" style={{ color }}>
            “
          </span>
          {profile.goldenQuote}
          <span className="ml-0.5 text-xl" style={{ color }}>
            ”
          </span>
        </p>
      </div>

      {/* 三维状态指示条 */}
      <div className="mt-4 space-y-2.5">
        <MetricBar label="电量余量" sub="Battery Remain" value={profile.radarMetrics.batteryRemain} color={color} />
        <MetricBar label="敏感内耗度" sub="Overload Index" value={profile.radarMetrics.overloadIndex} color={color} />
        <MetricBar label="反骨破坏力" sub="Rebellion Level" value={profile.radarMetrics.rebellionLevel} color={color} />
      </div>

      {/* 出厂警示框 */}
      <div className="warning-stripes mt-4 rounded-xl border border-amber-400/40 p-3">
        <p className="text-xs font-bold text-amber-300">⚠️ 出厂警示 · 使用禁忌</p>
        <p className="mt-1.5 text-[11px] leading-relaxed text-white/85">
          {profile.factoryWarning.replace(/^⚠️\s*/, '')}
        </p>
      </div>

      {/* 社交相性矩阵 */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
          <p className="text-[10px] font-bold text-emerald-400">合拍搭子</p>
          <p className="mt-0.5 text-sm font-bold text-white">{profile.bestPartner.name}</p>
          <p className="mt-1 text-[10px] leading-snug text-white/60">{profile.bestPartner.reason}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
          <p className="text-[10px] font-bold text-rose-400">避雷宿敌</p>
          <p className="mt-0.5 text-sm font-bold text-white">{profile.worstEnemy.name}</p>
          <p className="mt-1 text-[10px] leading-snug text-white/60">{profile.worstEnemy.reason}</p>
        </div>
      </div>

      {/* 底部标识 + 占位二维码 */}
      <div className="mt-auto flex items-center justify-between pt-3">
        <div>
          <p className="text-[11px] font-semibold text-white/80">长按保存图片 · 测测你的精神生态位</p>
          <p className="mt-0.5 text-[9px] tracking-widest text-white/35">
            SPIRIT NICHE // 精神生态位标本馆
          </p>
        </div>
        <QrPlaceholder seed={profile.key} />
      </div>
    </div>
  );
}
