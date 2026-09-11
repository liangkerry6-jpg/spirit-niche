import { SpeciesKey } from '@/types';
import { SPECIES_PROFILES } from '@/data/speciesProfiles';

interface SpeciesMascotProps {
  species: SpeciesKey;
  size?: number;
  /** 是否叠加主题色外发光（海报内请传 false，避免 html-to-image 渲染异常）。 */
  glow?: boolean;
}

function renderMascot(species: SpeciesKey) {
  switch (species) {
    case 'capybara':
      return (
        <g>
          {/* 头顶柚子 */}
          <circle cx="60" cy="33" r="8" fill="#F59E0B" />
          <path d="M60 26 q0.5 -4 5 -4 q4 0 3 4" fill="#10B981" />
          {/* 耳朵 */}
          <circle cx="38" cy="42" r="6" fill="#10B981" />
          <circle cx="82" cy="42" r="6" fill="#10B981" />
          {/* 头 */}
          <rect x="32" y="44" width="56" height="42" rx="16" fill="#10B981" />
          <rect x="40" y="56" width="40" height="22" rx="11" fill="#34D399" opacity="0.45" />
          {/* 慵懒眯眼 */}
          <rect x="44" y="58" width="10" height="3" rx="1.5" fill="#0A0A0C" />
          <rect x="66" y="58" width="10" height="3" rx="1.5" fill="#0A0A0C" />
          {/* 鼻孔 */}
          <circle cx="55" cy="70" r="1.5" fill="#0A0A0C" />
          <circle cx="65" cy="70" r="1.5" fill="#0A0A0C" />
          <path d="M52 76 Q60 81 68 76" fill="none" stroke="#0A0A0C" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case 'hedgehog':
      return (
        <g>
          {/* 背刺 */}
          <path d="M40 44 L35 32 L48 42 Z" fill="#6366F1" />
          <path d="M51 42 L52 27 L61 40 Z" fill="#6366F1" />
          <path d="M63 40 L68 27 L74 40 Z" fill="#6366F1" />
          <path d="M76 42 L85 32 L80 44 Z" fill="#6366F1" />
          {/* 身体与浅色面盘 */}
          <circle cx="60" cy="64" r="26" fill="#6366F1" />
          <circle cx="60" cy="68" r="17" fill="#C7D2FE" />
          {/* 警觉挑眉 */}
          <path d="M46 56 L56 59" stroke="#0A0A0C" strokeWidth="2" strokeLinecap="round" />
          <path d="M74 56 L64 59" stroke="#0A0A0C" strokeWidth="2" strokeLinecap="round" />
          <circle cx="52" cy="63" r="3" fill="#0A0A0C" />
          <circle cx="68" cy="63" r="3" fill="#0A0A0C" />
          <circle cx="60" cy="69" r="2.5" fill="#0A0A0C" />
          {/* 羞红 */}
          <circle cx="47" cy="70" r="3" fill="#F9A8D4" opacity="0.85" />
          <circle cx="73" cy="70" r="3" fill="#F9A8D4" opacity="0.85" />
          <path d="M56 74 Q60 77 64 74" fill="none" stroke="#0A0A0C" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      );
    case 'octopus':
      return (
        <g>
          {/* 大头 */}
          <path d="M32 56 Q32 26 60 26 Q88 26 88 56 L88 62 Q88 76 60 76 Q32 76 32 62 Z" fill="#06B6D4" />
          {/* 触手 */}
          <path d="M38 76 Q34 92 30 90" fill="none" stroke="#06B6D4" strokeWidth="7" strokeLinecap="round" />
          <path d="M47 76 Q44 96 40 98" fill="none" stroke="#06B6D4" strokeWidth="7" strokeLinecap="round" />
          <path d="M60 76 Q60 98 56 100" fill="none" stroke="#06B6D4" strokeWidth="7" strokeLinecap="round" />
          <path d="M73 76 Q76 96 80 98" fill="none" stroke="#06B6D4" strokeWidth="7" strokeLinecap="round" />
          <path d="M82 76 Q86 92 90 90" fill="none" stroke="#06B6D4" strokeWidth="7" strokeLinecap="round" />
          {/* 大眼睛 */}
          <circle cx="48" cy="50" r="8.5" fill="#FFFFFF" />
          <circle cx="72" cy="50" r="8.5" fill="#FFFFFF" />
          <circle cx="48" cy="50" r="4.2" fill="#0A0A0C" />
          <circle cx="72" cy="50" r="4.2" fill="#0A0A0C" />
          <circle cx="49.5" cy="48.5" r="1.5" fill="#FFFFFF" />
          <circle cx="73.5" cy="48.5" r="1.5" fill="#FFFFFF" />
          <circle cx="40" cy="58" r="3" fill="#67E8F9" opacity="0.8" />
          <circle cx="80" cy="58" r="3" fill="#67E8F9" opacity="0.8" />
          {/* 触手里的手机（多线程） */}
          <rect x="22" y="80" width="13" height="21" rx="3" fill="#0A0A0C" />
          <rect x="24.5" y="84" width="8" height="13" rx="1.5" fill="#67E8F9" />
        </g>
      );
    case 'badger':
      return (
        <g>
          {/* 耳朵 */}
          <circle cx="42" cy="36" r="6" fill="#EF4444" />
          <circle cx="78" cy="36" r="6" fill="#EF4444" />
          {/* 头 */}
          <ellipse cx="60" cy="60" rx="28" ry="26" fill="#EF4444" />
          {/* 白色背纹 */}
          <path d="M51 34 L69 34 L71 86 L49 86 Z" fill="#F3F4F6" />
          {/* 怒眉 */}
          <path d="M35 46 L49 53" stroke="#0A0A0C" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M85 46 L71 53" stroke="#0A0A0C" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="44" cy="56" r="3.5" fill="#0A0A0C" />
          <circle cx="76" cy="56" r="3.5" fill="#0A0A0C" />
          {/* 鼻与咧嘴 */}
          <ellipse cx="60" cy="71" rx="5" ry="4" fill="#0A0A0C" />
          <path d="M52 79 Q60 83 68 79" fill="none" stroke="#0A0A0C" strokeWidth="2" strokeLinecap="round" />
        </g>
      );
    case 'owl':
      return (
        <g>
          {/* 耳羽 */}
          <path d="M42 36 L39 20 L53 34 Z" fill="#F59E0B" />
          <path d="M78 36 L81 20 L67 34 Z" fill="#F59E0B" />
          {/* 头与肚皮 */}
          <ellipse cx="60" cy="59" rx="28" ry="27" fill="#F59E0B" />
          <ellipse cx="60" cy="67" rx="18" ry="14" fill="#FDE68A" />
          {/* 大眼 */}
          <circle cx="48" cy="55" r="12.5" fill="#FFFFFF" />
          <circle cx="72" cy="55" r="12.5" fill="#FFFFFF" />
          <circle cx="48" cy="55" r="6" fill="#0A0A0C" />
          <circle cx="72" cy="55" r="6" fill="#0A0A0C" />
          <circle cx="50" cy="53" r="2" fill="#FFFFFF" />
          <circle cx="74" cy="53" r="2" fill="#FFFFFF" />
          {/* 圆框眼镜（理智派） */}
          <circle cx="48" cy="55" r="13.5" fill="none" stroke="#0A0A0C" strokeWidth="1.6" />
          <circle cx="72" cy="55" r="13.5" fill="none" stroke="#0A0A0C" strokeWidth="1.6" />
          <path d="M62 55 L58 55" stroke="#0A0A0C" strokeWidth="1.6" />
          {/* 喙 */}
          <path d="M57 68 L63 68 L60 77 Z" fill="#B45309" />
        </g>
      );
    case 'chameleon':
      return (
        <g>
          {/* 头冠 */}
          <path d="M46 40 Q60 20 74 40 Z" fill="#EC4899" />
          {/* 头 */}
          <ellipse cx="60" cy="57" rx="27" ry="24" fill="#EC4899" />
          {/* 凸出大眼 */}
          <circle cx="47" cy="52" r="9" fill="#FFFFFF" />
          <circle cx="73" cy="52" r="9" fill="#FFFFFF" />
          <circle cx="47" cy="52" r="4.5" fill="#0A0A0C" />
          <circle cx="73" cy="52" r="4.5" fill="#0A0A0C" />
          <circle cx="48.5" cy="50.5" r="1.6" fill="#FFFFFF" />
          <circle cx="74.5" cy="50.5" r="1.6" fill="#FFFFFF" />
          <circle cx="40" cy="61" r="3.5" fill="#F9A8D4" opacity="0.85" />
          <circle cx="80" cy="61" r="3.5" fill="#F9A8D4" opacity="0.85" />
          {/* 嘴 + 卷舌捕虫 */}
          <path d="M54 67 Q60 71 66 67" fill="none" stroke="#0A0A0C" strokeWidth="2" strokeLinecap="round" />
          <path d="M66 67 C 82 67 88 53 80 47" fill="none" stroke="#F9A8D4" strokeWidth="4" strokeLinecap="round" />
          <circle cx="79" cy="46" r="3" fill="#0A0A0C" />
        </g>
      );
    default:
      return null;
  }
}

export default function SpeciesMascot({
  species,
  size = 96,
  glow = false,
}: SpeciesMascotProps) {
  const color = SPECIES_PROFILES[species].themeColor;
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      style={glow ? { filter: `drop-shadow(0 0 ${size / 7}px ${color}66)` } : undefined}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="55" fill="#0E0E13" />
      <circle cx="60" cy="60" r="54" fill="none" stroke={color} strokeOpacity="0.5" strokeWidth="2" />
      {renderMascot(species)}
    </svg>
  );
}
