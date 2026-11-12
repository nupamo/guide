# guide — project instructions

## Product contract

- Same visual language as nupamo/tools: wordmark header with a language select and a light/dark toggle, home page with a name, one-line description and tiles (icon, name, description), then "다른 프로젝트" links from `projects` in `src/data/guides.ts`.
- Guide pages: left list of this guide's pages (+ BOOTH chip), article, right "on this page" from h2/h3. Prev/next at the bottom. No site-wide sidebar of every guide.
- Every page exists in Korean (site root), English, Japanese, Simplified and Traditional Chinese. The header links to the same page in each language.
- Colours follow the OS light/dark setting until the header toggle picks one (saved in localStorage `guide-theme`, applied as `html[data-theme]`). Use Astryx theme tokens, not fixed colours.
- Client JavaScript is limited to the small inline scripts in `Layout.astro` (language select, theme toggle). No analytics or marketing sections. Do not list guides that have no pages.

## Architecture

- Astro static output, directory-style URLs under `BASE_PATH` (`/guide/`).
- Guides, page order and localized titles live in `src/data/guides.ts`; content in `src/content/docs/<locale>/<guide>/<page>.md`.
- `src/lib/remark-guide.mjs` resolves relative `.md` links, `{#id}` heading ids and root-relative images/raw HTML.
- `src/lib/legacy-redirects.mjs` writes `<page>.html` redirects for old VitePress URLs. Keep it so external links keep working.

## Validation

Run `npm run check` and `npm run build` after changes. A successful build is not a browser check.
