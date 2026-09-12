// 用户提供的 4 个物种吉祥物插画（200×200 viewBox）。
// 以嵌套 <svg> 形式内联进 120×120 徽章（缩放 0.5 并居中），
// 保持渐变 <defs> 随内容一起内联，避免 html-to-image 外部资源跨域问题。

export function CapybaraArt() {
  return (
    <svg x="10" y="10" width="100" height="100" viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="capy-caramel" x1="100" y1="40" x2="100" y2="175" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C68A4C" />
          <stop offset="100%" stopColor="#9A612A" />
        </linearGradient>
        <radialGradient id="capy-belly" cx="100" cy="140" r="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F5DEB3" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C68A4C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="capy-orange" x1="100" y1="18" x2="100" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="36" rx="14" ry="12" fill="url(#capy-orange)" />
      <circle cx="96" cy="32" r="2.8" fill="#FFF7ED" />
      <path d="M100 25C107 19 114 22 115 26C109 29 103 27 100 25Z" fill="#22C55E" />
      <path d="M100 26C99 22 97 19 94 18" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
      <circle cx="48" cy="82" r="11" fill="#784315" />
      <circle cx="48" cy="82" r="6" fill="#D97706" fillOpacity="0.5" />
      <circle cx="152" cy="82" r="11" fill="#784315" />
      <circle cx="152" cy="82" r="6" fill="#D97706" fillOpacity="0.5" />
      <path d="M50 92C50 58 72 46 100 46C128 46 150 58 150 92C150 134 162 165 100 165C38 165 50 134 50 92Z" fill="url(#capy-caramel)" />
      <ellipse cx="100" cy="132" rx="42" ry="26" fill="url(#capy-belly)" />
      <ellipse cx="62" cy="116" rx="10" ry="6" fill="#F43F5E" fillOpacity="0.25" />
      <ellipse cx="138" cy="116" rx="10" ry="6" fill="#F43F5E" fillOpacity="0.25" />
      <ellipse cx="74" cy="98" rx="5.5" ry="6.5" fill="#1C1917" />
      <circle cx="76" cy="96" r="2.2" fill="#FFFFFF" />
      <circle cx="72" cy="100" r="1" fill="#FFFFFF" />
      <ellipse cx="126" cy="98" rx="5.5" ry="6.5" fill="#1C1917" />
      <circle cx="128" cy="96" r="2.2" fill="#FFFFFF" />
      <circle cx="124" cy="100" r="1" fill="#FFFFFF" />
      <rect x="85" y="104" width="30" height="20" rx="10" fill="#5E300E" />
      <ellipse cx="94" cy="112" rx="2" ry="2.5" fill="#1C1917" />
      <ellipse cx="106" cy="112" rx="2" ry="2.5" fill="#1C1917" />
      <path d="M100 124V128" stroke="#5E300E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M94 128C97 130 103 130 106 128" stroke="#5E300E" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="86" cy="148" rx="8" ry="7" fill="#E2BA86" />
      <ellipse cx="114" cy="148" rx="8" ry="7" fill="#E2BA86" />
      <path d="M84 148V151M88 148V151" stroke="#9A612A" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M112 148V151M116 148V151" stroke="#9A612A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function HedgehogArt() {
  return (
    <svg x="10" y="10" width="100" height="100" viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="quills" x1="100" y1="30" x2="100" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop stopColor="#312E81" />
        </linearGradient>
        <linearGradient id="hedge-face" x1="100" y1="80" x2="100" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DDD6FE" />
          <stop stopColor="#C4B5FD" />
        </linearGradient>
      </defs>
      <path d="M100 22L112 45H88L100 22Z" fill="url(#quills)" />
      <path d="M70 32L88 52L66 58L70 32Z" fill="url(#quills)" />
      <path d="M130 32L134 58L112 52L130 32Z" fill="url(#quills)" />
      <path d="M42 55L64 70L46 82L42 55Z" fill="url(#quills)" />
      <path d="M158 55L154 82L136 70L158 55Z" fill="url(#quills)" />
      <path d="M26 90L50 96L36 112L26 90Z" fill="url(#quills)" />
      <path d="M174 90L164 112L150 96L174 90Z" fill="url(#quills)" />
      <path d="M28 130L52 125L42 145L28 130Z" fill="url(#quills)" />
      <path d="M172 130L158 145L148 125L172 130Z" fill="url(#quills)" />
      <circle cx="100" cy="106" r="66" fill="url(#quills)" />
      <ellipse cx="100" cy="120" rx="44" ry="40" fill="url(#hedge-face)" />
      <path d="M52 110C52 68 148 68 148 110" stroke="#818CF8" strokeWidth="7" strokeLinecap="round" />
      <rect x="44" y="98" width="14" height="28" rx="7" fill="#6366F1" />
      <rect x="47" y="104" width="4" height="16" rx="2" fill="#C7D2FE" />
      <rect x="142" y="98" width="14" height="28" rx="7" fill="#6366F1" />
      <rect x="149" y="104" width="4" height="16" rx="2" fill="#C7D2FE" />
      <circle cx="82" cy="118" r="5.5" fill="#1E1B4B" />
      <circle cx="84" cy="116" r="2" fill="#FFFFFF" />
      <circle cx="118" cy="118" r="5.5" fill="#1E1B4B" />
      <circle cx="120" cy="116" r="2" fill="#FFFFFF" />
      <ellipse cx="100" cy="128" rx="4.5" ry="3.5" fill="#1E1B4B" />
      <path d="M96 135C98 137 102 137 104 135" stroke="#4338CA" strokeWidth="2" strokeLinecap="round" />
      <circle cx="86" cy="148" r="6" fill="#DDD6FE" />
      <circle cx="114" cy="148" r="6" fill="#DDD6FE" />
    </svg>
  );
}

export function OctopusArt() {
  return (
    <svg x="10" y="10" width="100" height="100" viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="octo-mint" x1="100" y1="40" x2="100" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4ADE80" />
          <stop stopColor="#10B981" />
        </linearGradient>
      </defs>
      <path d="M45 140C35 155 42 172 58 170C68 168 68 152 64 140" fill="#059669" />
      <path d="M155 140C165 155 158 172 142 170C132 168 132 152 136 140" fill="#059669" />
      <path d="M60 142C52 165 65 178 80 172C90 168 85 148 82 142" fill="url(#octo-mint)" />
      <path d="M140 142C148 165 135 178 120 172C110 168 115 148 118 142" fill="url(#octo-mint)" />
      <path d="M92 145C92 175 108 175 108 145" fill="url(#octo-mint)" />
      <path d="M152 118C168 112 175 125 168 135C160 142 148 135 148 128" fill="url(#octo-mint)" />
      <ellipse cx="100" cy="96" rx="58" ry="54" fill="url(#octo-mint)" />
      <circle cx="48" cy="164" r="3" fill="#A7F3D0" />
      <circle cx="152" cy="164" r="3" fill="#A7F3D0" />
      <circle cx="72" cy="168" r="3" fill="#A7F3D0" />
      <circle cx="128" cy="168" r="3" fill="#A7F3D0" />
      <circle cx="78" cy="98" r="18" fill="#FFFFFF" />
      <circle cx="80" cy="98" r="11" fill="#0F172A" />
      <circle cx="83" cy="94" r="5" fill="#FFFFFF" />
      <circle cx="76" cy="102" r="2" fill="#FFFFFF" />
      <circle cx="122" cy="98" r="18" fill="#FFFFFF" />
      <circle cx="120" cy="98" r="11" fill="#0F172A" />
      <circle cx="123" cy="94" r="5" fill="#FFFFFF" />
      <circle cx="116" cy="102" r="2" fill="#FFFFFF" />
      <ellipse cx="62" cy="116" rx="7" ry="4" fill="#F43F5E" fillOpacity="0.3" />
      <ellipse cx="138" cy="116" rx="7" ry="4" fill="#F43F5E" fillOpacity="0.3" />
      <ellipse cx="100" cy="120" rx="5" ry="6" fill="#065F46" />
    </svg>
  );
}

export function BadgerArt() {
  return (
    <svg x="10" y="10" width="100" height="100" viewBox="0 0 200 200" fill="none">
      <defs>
        <linearGradient id="badger-dark" x1="100" y1="50" x2="100" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#334155" />
          <stop stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="jacket" x1="100" y1="130" x2="100" y2="190" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DC2626" />
          <stop stopColor="#991B1B" />
        </linearGradient>
      </defs>
      <path d="M50 170L70 135L100 152L130 135L150 170H50Z" fill="url(#jacket)" />
      <circle cx="68" cy="150" r="2.5" fill="#FCA5A5" />
      <circle cx="132" cy="150" r="2.5" fill="#FCA5A5" />
      <path d="M52 105C52 65 148 65 148 105C148 135 125 152 100 152C75 152 52 135 52 105Z" fill="url(#badger-dark)" />
      <circle cx="56" cy="74" r="10" fill="#0F172A" />
      <circle cx="56" cy="74" r="5" fill="#FFFFFF" />
      <circle cx="144" cy="74" r="10" fill="#0F172A" />
      <circle cx="144" cy="74" r="5" fill="#FFFFFF" />
      <path d="M84 62C84 62 100 58 116 62C122 75 124 100 114 125L100 134L86 125C76 100 78 75 84 62Z" fill="#FFFFFF" />
      <path d="M68 94L84 98" stroke="#EF4444" strokeWidth="4.5" strokeLinecap="round" />
      <ellipse cx="76" cy="106" rx="5.5" ry="7" transform="rotate(10 76 106)" fill="#EF4444" />
      <circle cx="78" cy="104" r="2" fill="#FFFFFF" />
      <path d="M132 94L116 98" stroke="#EF4444" strokeWidth="4.5" strokeLinecap="round" />
      <ellipse cx="124" cy="106" rx="5.5" ry="7" transform="rotate(-10 124 106)" fill="#EF4444" />
      <circle cx="122" cy="104" r="2" fill="#FFFFFF" />
      <polygon points="100,120 93,113 107,113" fill="#0F172A" />
      <path d="M96 128C102 131 110 130 114 125" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
