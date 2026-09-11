import { Suspense } from 'react';
import QuizClient from './QuizClient';

export default function QuizPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center text-sm text-white/50">
          正在初始化测评…
        </div>
      }
    >
      <QuizClient />
    </Suspense>
  );
}
