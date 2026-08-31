# WayToMoksha website

The public Next.js site lives in this `web/` directory. Keep it here; do not move the app to the repository root.

The production build is a **static export** (`web/out/`) for Cloudflare Pages static hosting. Do not use OpenNext, Wrangler, or Workers.

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production preview (static export)

```bash
npm run lint
npm run build
npx --yes serve out
```

`npm run build` writes static files to `out/`. Do not use `npm run start`; `next start` does not serve a static export.

A generated Open Graph image was removed because `next/og` is incompatible with static export. Open Graph title and description remain. Add a static PNG under `public/` later if a social preview image is needed. The favicon is a temporary mark until an official logo is provided.

## Environment

Copy `.env.example` to `.env.local` when you need local overrides.

- `NEXT_PUBLIC_SITE_URL` — canonical origin for metadata, sitemap, and robots. Default in code is `https://waytomoksha.org`.
- `NEXT_PUBLIC_ALLOW_INDEXING` — must stay `false` for the first preview. Production indexing must only be enabled after admin review, then set this to `true` when connecting the real domain.

Admin review notes stay visible on the preview so content owners can see what still needs confirmation.

## Deploy on Cloudflare Pages

Use **static Pages**, not the Next.js / OpenNext / Workers preset.

1. Framework preset: **None** (or static HTML).
2. Root directory: `web`
3. Build command: `npm run build`
4. Build output directory: `out`
5. Node version: 20
6. Leave `NEXT_PUBLIC_ALLOW_INDEXING` unset or `false`.
7. Optionally set `NEXT_PUBLIC_SITE_URL` to the Pages preview hostname if canonicals should match the preview.

Do not connect `waytomoksha.org` until admins have reviewed the preview.
