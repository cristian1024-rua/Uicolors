'use client';

import ThemeSwitch from './components/ThemeSwitch';
import './globals.css';

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-cristian-600 dark:bg-cristian-900">
      <section className="flex flex-col items-center gap-y-10">
        {}
        <div className="absolute top-5 right-5">
          <ThemeSwitch />
        </div>

        <div className="bg-cristian-500 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-cristian-900 font-[family-name:var(--font-rubik-wet)]">Transactions every 24 hours</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-cristian-900 sm:text-5xl font-[family-name:var(--font-rubik-wet)]">44 million</dd>
              </div>

              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-cristian-900 font-[family-name:var(--font-rubik-wet)]">Assets under holding</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-cristian-900 sm:text-5xl font-[family-name:var(--font-rubik-wet)]">$119 trillion</dd>
              </div>

              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-cristian-900 font-[family-name:var(--font-rubik-wet)]">New users annually</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-cristian-900 sm:text-5xl font-[family-name:var(--font-rubik-wet)]">46,000</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
