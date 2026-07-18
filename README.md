# KANZA AI Demo

Demo built for Ameer Albahouth (KANZA) — AI-powered content management platform for Saudi businesses.

## Run locally

```bash
cd /home/admin/Documents/Project/Testing/kanza-ai-demo
npm run dev
```

Opens on **http://localhost:3001**

## Pages

- `/` — Landing page (marketing site)
- `/dashboard` — Main dashboard (overview + stats)
- `/dashboard/content-generator` — AI content ideas generator (interactive)
- `/dashboard/analytics` — Social insights (FAQs, viral posts, engagement)
- `/dashboard/calendar` — Content calendar (scheduling view)
- `/dashboard/approvals` — Approval workflow (review before publish)

## Key features to show Ameer

1. **Website analysis** — reads product images/descriptions (mocked with fragrance brand)
2. **AI content generation** — click "Generate" on the content-generator page to see the AI loading animation
3. **Bilingual content** — every generated idea has both English and Arabic versions
4. **Manual approval** — approvals page shows the workflow he explicitly asked for
5. **Multi-platform scheduling** — Instagram, TikTok, Twitter, Snapchat in one calendar
6. **Social insights** — FAQ frequency + viral post analysis with AI suggestions

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- All data is mocked in `/lib/mock-data.ts` — no backend needed

## To record demo video

Use the following flow (~2 minutes):
1. Landing page → click "Live Demo"
2. Dashboard overview → point to stats
3. Content Generator → click "Generate", show AI loading, show ideas
4. Analytics → show FAQ patterns and viral posts
5. Calendar → show scheduling grid
6. Approvals → click through 2 ideas, show approve/reject

## For deployment (later)

Deploy to Vercel with one command:
```bash
npx vercel
```

Or export static:
```bash
npm run build
```
