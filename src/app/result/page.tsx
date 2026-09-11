import { Suspense } from 'react';
import ResultClient from './ResultClient';

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-white/50">
          正在生成诊断报告…
        </div>
      }
    >
      <ResultClient />
    </Suspense>
  );
}
