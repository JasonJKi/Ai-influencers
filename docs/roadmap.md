# Roadmap

A phased plan. Each phase should land as its own focused PR.

## Phase 0 — Scaffold (this commit)

- Next.js 15 (App Router) + TypeScript + Tailwind.
- Sample persona type and constant in `lib/persona.ts`.
- `PersonaCard` component + landing page that renders it.
- Empty `lib/generators/`, `lib/platforms/`, `lib/queue/`, `app/api/` so future
  modules have a home.

## Phase 1 — Persona editor + caption generator

- `/persona` route: form-driven editor backed by `lib/persona.ts`.
- Persistence: start with `localStorage`, upgrade to a DB in a later phase.
- `lib/generators/caption.ts`: Anthropic Messages API call (Claude Sonnet 4.6
  or Opus 4.7) that takes `Persona + idea + platform` and returns a caption
  draft conformant with `voice`/`dos`/`donts`.
- Rate-limit + cache responses per `(persona, idea, platform)` key.

## Phase 2 — Image prompt generator + asset library

- `lib/generators/imagePrompt.ts`: produces a structured image prompt from
  `persona.look` + the post idea.
- Asset library page that lists generated prompts and (eventually) rendered
  images. Image rendering itself is pluggable — start with a stub provider.

## Phase 3 — Review/approval queue

- `lib/queue/`: typed queue of `Draft { id, persona, platform, caption, imagePrompt, status }`.
- `/queue` route: approve / reject / edit. Approved drafts land in an
  `approved` bucket ready for Phase 4 publishing.
- Persistence migration: SQLite via `better-sqlite3` or Postgres via
  `@vercel/postgres` — decide when we have real users.

## Phase 4 — Platform adapters

- `lib/platforms/x.ts` first (cleanest API).
- Then Instagram (Graph API, Business account required), TikTok, YouTube
  Shorts. Each adapter exposes `publish(approvedDraft) -> PublishResult`.
- All publish actions stay manual-trigger until Phase 5.

## Phase 5 — Scheduler + analytics

- Cron-driven scheduler that consumes the approved bucket per platform.
- Analytics ingest from each platform's API; dashboard view of post
  performance grouped by persona and idea theme.

## Cross-cutting concerns

- **Safety:** every generated draft is checked against `persona.donts` plus a
  general policy filter before reaching the queue.
- **Disclosure:** the studio always appends an "AI-generated" disclosure
  pattern configurable per persona.
- **Cost control:** prompt caching on persona + system prompt; per-day token
  budget per persona.
