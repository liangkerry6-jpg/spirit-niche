import { SpeciesKey } from '@/types';
import { SPECIES_PROFILES } from '@/data/speciesProfiles';
import { CapybaraArt, HedgehogArt, OctopusArt, BadgerArt } from './mascotArt';

interface SpeciesMascotProps {
  species: SpeciesKey;
  size?: number;
  /** 是否叠加主题色外发光（海报内请传 false，避免 html-to-image 渲染异常）。 */
  glow?: boolean;
}

function renderMascot(species: SpeciesKey) {
  switch (species) {
    case 'capybara':
      return <CapybaraArt />;
    case 'hedgehog':
      return <HedgehogArt />;
    case 'octopus':
      return <OctopusArt />;
    case 'badger':
      return <BadgerArt />;
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
