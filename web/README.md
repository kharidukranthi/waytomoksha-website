# WayToMoksha website

The public Next.js site lives in this `web/` directory. Keep it here; do not move the app to the repository root.

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production preview

```bash
npm run lint
npm run build
npm run start
```

`npm run start` serves the production build at [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` when you need local overrides.

- `NEXT_PUBLIC_SITE_URL` — canonical origin for metadata, sitemap, and robots. Default in code is `https://waytomoksha.org`.
- `NEXT_PUBLIC_ALLOW_INDEXING` — must stay `false` for the first preview. Production indexing must only be enabled after admin review, then set this to `true` when connecting the real domain.

Admin review notes stay visible on the preview so content owners can see what still needs confirmation.

## Deploy on Vercel

1. Import the GitHub repository.
2. Set **Root Directory** to `web`.
3. Leave `NEXT_PUBLIC_ALLOW_INDEXING` unset or `false` for the first preview URL.
4. Optionally set `NEXT_PUBLIC_SITE_URL` to the preview URL if you need matching canonicals during review.
5. Do not connect `waytomoksha.org` until admins have reviewed the preview.

The temporary favicon and Open Graph image are placeholders until an official logo is provided.
