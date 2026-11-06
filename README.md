# Nuxt 4 + Builder.io repro app

A Nuxt 4 SPA wired to Builder.io (`@builder.io/sdk-vue`) used to reproduce Builder.io issues.

## Setup

```bash
cp .env.example .env   # then set NUXT_PUBLIC_BUILDER_API_KEY
npm install
npm run dev
```

All Builder credentials come from the environment (`NUXT_PUBLIC_BUILDER_API_KEY`, surfaced through
`runtimeConfig.public.builderApiKey` and the `useBuilderConfig()` composable). Nothing is hardcoded.
To point at a different Builder space, change the env var only (at runtime for `node .output/server/index.mjs`, no rebuild needed).

## Production

```bash
npm run build
NUXT_PUBLIC_BUILDER_API_KEY=... node .output/server/index.mjs
```

Security headers are set in `nuxt.config.ts` (`routeRules`); framing is limited to `*.builder.io` so the visual editor works.

## Routes

| Route | Builder model | Notes |
|---|---|---|
| `/*` | `page` | Catch-all; `/` falls back to `DefaultLanding` when no entry exists |
| `/landing-page` | `landing-page` | Same fallback |
| `/blog/:slug`, `/builder-article-preview` | `article`, `articles` | Data-model previews (enrich: true) |
| `/builder-symbol-preview`, `/edit-symbols` | `symbol` | Symbol editing/preview |
| `/test` | – | Renders components directly |

Set your model **Preview URL** to the matching route above.

## Registered components (`app/utils/builder-components.ts`)

Header, Hero, StatsBar, Cards, Testimonials, PricingTable, FaqAccordion, CtaBanner, ContentSection (accepts children),
VideoEmbed, Footer, `Core:Button` (override), and **InputShowcase**, a debug component that accepts every input type
(string, longText, richText, html, number, boolean, color, date, email, url, file, enum, tags, reference, object, list, showIf, required,
advanced, hideFromUI, localized) and prints the resolved props — use it to reproduce input-type bugs.

See https://www.builder.io/c/docs/register-components-options.

## Reproducing issues

1. Add/adjust a component in `app/components` and register it in `builder-components.ts`.
2. Use `InputShowcase` to inspect what the SDK passes to a component.
3. `NUXT_PUBLIC_BUILDER_CACHE_SECONDS=0` (default) disables SDK caching so edits show immediately.
