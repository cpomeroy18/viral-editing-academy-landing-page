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

- `src/pages/` — the routes. `index.astro` = a redirect stub to `/offer` (the
  real homepage content was retired; see that file's own comment before
  rebuilding it), `fx-mini-vault.astro` = opt-in, `sales-letter.astro`,
  `showcase.astro` (hero gallery + the Customise Theme panel preview),
  `welcome.astro`/`offer.astro` (post-optin vs. direct-link twins, both
  sharing `src/data/offer-content.ts` — Vault-primary framing),
  `academy.astro`/`academy-offer.astro` (same post-optin/direct-link twin
  pattern, but Academy-primary framing — mostly local content, not
  `offer-content.ts`, since the copy needs to name the course instead of the
  Vault throughout; see that file's own comments for what's shared vs. local),
  `hooks.astro` (standalone free tool, see below), `privacy.astro`/
  `terms.astro` (static legal pages), `404.astro` (see the Cloudflare note
  below — don't delete this thinking it's unused).
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
- **Standalone free-tool pages** (e.g. `hooks.astro`) are a deliberate
  exception to the funnel pattern: no `SiteNav`, no `SiteFooter`, no checkout
  CTA — the user wants these to feel like a genuine gift, not part of the
  sales funnel. At most a single understated text link to `/offer` at the
  bottom (not a button, not a banner). Don't add nav/footer/CTA back onto a
  page like this thinking it's missing — it's intentional. These pages may
  also keep their own hardcoded colour palette (not `--color-brand-*`/
  `--color-ink` tokens) if it was supplied pre-styled and already fits the
  site's look — don't refactor it onto the token system unasked.
- **`GhlForm.tsx` on a page twice** (e.g. desktop sidebar + mobile sheet) —
  give each instance a distinct `instanceId` prop, and set `loadScript={false}`
  on all but one, or you get duplicate DOM ids and the embed script loading
  more than once.
- **Testimonials with no real photo yet** — leave `image` unset rather than
  attaching a stock/placeholder photo to a real person's name; `StudentWins`
  and the testimonial grid both fall back to initials.
- **"Everything included" media rendering is hand-duplicated, not shared** —
  the `deliverables.map()` block that renders each bonus's thumbnail
  (including the `portraitMedia` fixed-box/object-contain treatment and the
  `mobileVideo` mobile-only swap) is copy-pasted identically across
  `welcome.astro`, `offer.astro`, `academy.astro`, and `academy-offer.astro`.
  There's no shared component for it. If you change this rendering logic in
  one file, update all four by hand or they'll drift — same category of wart
  as the sibling vfx-vault repo's duplicated `TECHNIQUES` list.

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

## Video / GIF

The site runs on compressed looping MP4s, not raw GIFs — a 720x1350 source
GIF can be 100-190MB; the converted MP4 is typically 30KB-2MB. Same
raw-vs-web split as images: **raw GIFs live in `Gifs/` at the project root
(gitignored, not deployed)**; converted output goes in `public/videos/`.

Conversion pipeline:
```
ffmpeg -i "Gifs/Source.gif" -vf "scale='min(W,iw)':-2" -c:v libx264 -crf 24 \
  -preset slow -pix_fmt yuv420p -movflags +faststart -an public/videos/name.mp4
```
`W` = target width (960-1280 typical for a full-width/showcase clip, smaller
for a grid thumbnail). `-an` strips audio (every clip on the site autoplays
muted/looped). Always preview a couple of extracted frames first
(`ffmpeg -ss <t> -frames:v 1 out.png`) before committing to a pick or a crop
- cheap to check, expensive to redo after it's wired into a page.

Every `<video>` on the site is `autoplay muted loop playsinline`, sized via
`aspect-video w-full` + `object-cover`/`object-contain` (pick `contain` only
when the source's native aspect ratio doesn't match the box - it'll
letterbox otherwise; `cover` is safe whenever the ratio already matches, and
crops when it doesn't).

**If a source GIF gets edited/replaced but keeps the same filename**, the
converted MP4 does **not** auto-update - you have to manually re-run the
conversion. Check the source file's mtime against the existing MP4's if
there's any doubt about which content is currently live.

## Dev + deploy

- **Requires Node ≥ 22.12** (pinned in `.nvmrc`).
- `npm run dev` (localhost:4321), `npm run build` → `dist/`, `npm run preview`.
- After a big batch of edits, **restart the dev server clean** (`pkill -9 -f
  astro` then `npm run dev`) — stale HMR silently breaks the React islands.
- Deploy: **Cloudflare Pages** (the Pages flow, *not* Workers) — build
  `npm run build`, output `dist`. Push → auto-deploy.
- **`src/pages/404.astro` is load-bearing, not decorative.** Cloudflare
  Pages' documented fallback for a static site with no `404.html` is to
  serve the root `index.html` with a 200 for *any* unmatched path. Since
  `index.astro` is a redirect stub to `/offer`, that means every missing
  path silently lands on `/offer` instead of 404ing - this actually happened
  to `/privacy` and `/terms` before `404.astro` was added (2026-08-15). Don't
  delete this file, and if `index.astro` ever changes what it redirects to,
  re-check this still behaves correctly.
- **Live domain: `offer.colinpomeroy.com`.** `astro.config.mjs`'s `site`
  field is already set to this (updated from the `ttb-funnel-kit.pages.dev`
  template placeholder) — it only affects OG/canonical URLs, so if it's ever
  wrong after a domain change, wrong social-share links are the symptom.
