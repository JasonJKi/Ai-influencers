import type { Persona, Platform } from "@/lib/persona";

const platformLabel: Record<Platform, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  x: "X",
  youtube_shorts: "YouTube Shorts",
};

export function PersonaCard({ persona }: { persona: Persona }) {
  return (
    <article className="w-full rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <header className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            {persona.name}
          </h2>
          <p className="text-sm text-zinc-500">{persona.handle}</p>
        </div>
        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900">
          draft v0
        </span>
      </header>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label="Niche" value={persona.niche} />
        <Field label="Voice" value={persona.voice} />
        <Field label="Look" value={persona.look} className="sm:col-span-2" />
      </dl>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <List label="Values" items={persona.values} />
        <List label="Do" items={persona.dos} />
        <List label="Don't" items={persona.donts} />
      </section>

      <footer className="mt-6 flex flex-wrap gap-2">
        {persona.platforms.map((p) => (
          <span
            key={p}
            className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
          >
            {platformLabel[p]}
          </span>
        ))}
      </footer>
    </article>
  );
}

function Field({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="text-xs uppercase tracking-wide text-zinc-500">{label}</dt>
      <dd className="mt-1 text-sm text-zinc-800 dark:text-zinc-200">{value}</dd>
    </div>
  );
}

function List({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-wide text-zinc-500">{label}</h3>
      <ul className="mt-2 space-y-1 text-sm text-zinc-800 dark:text-zinc-200">
        {items.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
    </div>
  );
}
