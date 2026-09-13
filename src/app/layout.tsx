import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://spirit-niche.netlify.app/'),
  title: 'Spirit Niche · 数字精神生态位测评',
  description:
    '测测你在现代压力下的精神物种 —— 基于资源保存 (COR) 与感官防御 (SPS) 理论构建的 90 秒应激切片测评。',
  openGraph: {
    title: 'Spirit Niche · 数字精神生态位测评',
    description:
      '基于资源保存 (COR) 与感官防御 (SPS) 理论构建的 90 秒应激切片测评，测出你的精神物种。',
    type: 'website',
    locale: 'zh_CN',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 1200,
        alt: '数字精神生态位测评 · 六种精神物种封面',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spirit Niche · 数字精神生态位测评',
    description:
      '基于资源保存 (COR) 与感官防御 (SPS) 理论构建的 90 秒应激切片测评，测出你的精神物种。',
    images: ['/og-cover.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#0A0A0C] text-[#F3F4F6] antialiased">
        {children}
      </body>
    </html>
  );
}
