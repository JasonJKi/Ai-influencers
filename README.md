# AI Influencer Studio

Studio for designing an AI persona and generating on-brand content drafts for
Instagram, TikTok, X, and YouTube Shorts. v1 is human-in-the-loop: the AI
drafts captions and image prompts, you approve before anything is published.

> Status: **v0 scaffold.** Next.js + TypeScript + Tailwind shell with a sample
> persona and a placeholder landing page. No model calls or platform
> integrations yet — those land in later phases (see roadmap).

## Idea in one paragraph

Most "AI influencer" projects jump straight to autoposting. This one starts
from the persona — a tight spec of name, look, voice, niche, values, and
do/don't list — and treats every post as a draft against that spec. The studio
generates caption + image-prompt pairs, you review them in a queue, and
approved drafts feed into platform-specific adapters.

## Persona model

A persona is the source of truth for everything generated. See
[`lib/persona.ts`](./lib/persona.ts) for the type and a sample.

| Field       | Purpose                                                        |
| ----------- | -------------------------------------------------------------- |
| `name`      | Public name of the influencer                                  |
| `handle`    | Canonical handle (used as fallback across platforms)           |
| `niche`     | Topic area + audience the persona speaks to                    |
| `look`      | Visual prompt seed — lighting, palette, framing, age cues      |
| `voice`     | Tone + cadence rules for captions                              |
| `values`    | What the persona cares about (anchors creative direction)      |
| `dos`       | Hard "always" rules                                            |
| `donts`     | Hard "never" rules (engagement bait, fake giveaways, etc.)     |
| `platforms` | Which targets to draft for                                     |

## Planned content pipeline

```
persona ──► idea ──► caption + image prompt ──► human review ──► approved ──► (Phase 4) publish
```

Each stage is a swappable module — the v0 scaffold just sketches the folder
shape (`lib/generators/`, `lib/queue/`, `lib/platforms/`).

## Roadmap

See [`docs/roadmap.md`](./docs/roadmap.md). Short version:

- **Phase 0 (now):** scaffold + product brief.
- **Phase 1:** persona editor UI + Anthropic-backed caption generator.
- **Phase 2:** image-prompt generator + asset library.
- **Phase 3:** review/approval queue.
- **Phase 4:** platform adapters (start with X — easiest API).
- **Phase 5:** scheduler + analytics.

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Open questions

To be resolved as we iterate (the user will share a reference example):

- Which existing AI-influencer accounts should we use as style anchors?
- Image generation: third-party API (e.g. Flux, SDXL via Replicate) or
  self-hosted?
- How strict is the persona contract — should generations that violate `donts`
  be auto-rejected or just flagged?
- Multi-persona (a roster) vs. single persona for v1?
