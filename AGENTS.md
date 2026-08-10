# CLAUDE.md / AGENTS.md — Time to Build Funnel Kit

Guidance for Claude when working in this repo (and orientation for students who
chat with Claude here). This is a **landing-page kit** creators brand and build
by talking to Claude — Astro 5 + Tailwind v4 + React, static output.

## The skills (how students use this)

- **`/brand-setup`** (`.claude/skills/brand-setup/`) — sets the student's name,
  colours/theme, fonts, corner radius, email form, and checkout link by writing
  `src/config.ts` + `src/styles/global.css`.
- **`/build-page`** (`.claude/skills/build-page/`) — picks the right template and
  fills in the student's copy.

These are **project-scoped** (they only load when this folder is open in Claude
Code) and travel with the repo.

## Structure

- `src/pages/` — the routes. `index.astro` = the **offer page** (home `/`),
  `fx-mini-vault.astro` = opt-in, `sales-letter.astro`, `showcase.astro` (hero
  gallery + the Customise Theme panel preview).
- `src/components/` — reusable pieces (`Hero.astro` + `HeroCopy.astro`,
  `CheckoutCard`, `StudentWins`, `GhlForm.tsx` → Go High Level,
  `ThemeCustomizer.astro`).
- `src/config.ts` — the `site` object: `name`, `description`, `ghlFormUrl`,
  `ghlFormName`, `checkoutUrl`, `theme` (light/dark), `preset` (accent hue),
  `themePreset` (full theme).
- `src/styles/global.css` — **the design system.** All colour/shape/type tokens.

## How to make changes

- **Copy** → edit the `const` data blocks at the top of a page in `src/pages/`.
  Leave the markup/components below them alone.
- **Brand colour** → `--brand-hue` + `--brand-chroma` in `global.css` `@theme`
  (the whole 10-step brand scale derives from these), or pick a `themePreset`.
- **Full themes** → 8 of them as `[data-theme-preset="x"]` (light) +
  `[data-theme="dark"][data-theme-preset="x"]` (dark) blocks in `global.css`:
  default, sage, nature, brutalist, linen, amber, retro, ocean. **Rule:** keep
  `--color-line` off the surface/`muted` colour or card strokes go invisible;
  dark neutrals stay neutral grey (tinting them reads cheap/brown).
- **Corners** → `--radius-control` (buttons/inputs) + `--radius-card`
  (cards/images).
- Don't restructure components or break the token system — that's what keeps
  every page on-brand.
- **`GhlForm.tsx` on a page twice** (e.g. desktop sidebar + mobile sheet) —
  give each instance a distinct `instanceId` prop, and set `loadScript={false}`
  on all but one, or you get duplicate DOM ids and the embed script loading
  more than once.
- **Testimonials with no real photo yet** — leave `image` unset rather than
  attaching a stock/placeholder photo to a real person's name; `StudentWins`
  and the testimonial grid both fall back to initials.

## Images

**AdobeRGB photos must be converted to sRGB before resizing/compressing**, or
the colour strips out:
`sips --matchTo '/System/Library/ColorSync/Profiles/sRGB Profile.icc' SRC -s format tiff --out tmp.tiff`
then resize with `sips`/`ffmpeg`. Put web images in `public/images/`.

- **Raw vs. web copies**: source/raw photos live in `Images/` at the project
  root (gitignored, not deployed); optimized web copies go in
  `public/images/`. Process from the former into the latter, never commit
  raw originals.
- **ffmpeg auto-rotates JPEGs** based on EXIF orientation on decode. If you
  add a manual `transpose` filter on top of that, it double-rotates. If a
  photo looks sideways, re-encode with no filter first before reaching for
  `transpose`.

## Dev + deploy

- **Requires Node ≥ 22.12** (pinned in `.nvmrc`).
- `npm run dev` (localhost:4321), `npm run build` → `dist/`, `npm run preview`.
- After a big batch of edits, **restart the dev server clean** (`pkill -9 -f
  astro` then `npm run dev`) — stale HMR silently breaks the React islands.
- Deploy: **Cloudflare Pages** (the Pages flow, *not* Workers) — build
  `npm run build`, output `dist`. Push → auto-deploy.
