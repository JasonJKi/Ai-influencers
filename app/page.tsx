import { PersonaCard } from "@/components/PersonaCard";
import { samplePersona } from "@/lib/persona";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-6 py-16 dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            AI Influencer Studio
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Design a persona. Draft on-brand content. Approve before you post.
          </h1>
          <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
            v0 scaffold — the pipeline (caption + image-prompt generation,
            review queue, platform adapters) lands in later phases. For now,
            this is the canvas we&apos;ll iterate on together.
          </p>
        </header>

        <PersonaCard persona={samplePersona} />

        <section className="rounded-2xl border border-dashed border-zinc-300 p-6 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
          <h2 className="text-base font-medium text-zinc-800 dark:text-zinc-200">
            Next up
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Phase 1 — persona editor + Anthropic-backed caption generator</li>
            <li>Phase 2 — image-prompt generator + asset library</li>
            <li>Phase 3 — review/approval queue</li>
            <li>Phase 4 — platform adapters (start with X)</li>
            <li>Phase 5 — scheduler + analytics</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
