# Plan — Carousel, VII Edizione, Footer

## 1. Add 2025 trophy asset
- Copy `user-uploads://Franca_Mercurio23-2.jpg` → `public/images/edizioni/2025.jpg`.

## 2. Rework `EdizioniCarousel.tsx`
Update the `editions` array to 8 entries with `edition` (roman) + `year` + optional `src`:

| # | Edition | Year | Image |
|---|---------|------|-------|
| 1 | I | 2019 | 2019.jpeg |
| 2 | II | 2020 | placeholder ("Archivio fotografico in aggiornamento") |
| 3 | III | 2021 | 2021.jpg |
| 4 | IV | 2022 | 2022a.jpeg |
| 5 | V | 2023 | 2023.jpg |
| 6 | VI | 2024 | 2024.jpg |
| 7 | VII | 2025 | 2025.jpg (new trophy) |
| 8 | VIII | — | placeholder ("In sviluppo") |

Changes:
- Featured caption shows `{edition} Edizione` prominently with `{year}` smaller below.
- Side panel: large roman numeral as display, smaller year subline, refreshed description per slide.
- Year-selector pills become edition-selector pills showing roman numerals (`I…VIII`); accessible labels keep year context.
- Placeholder card branch handles both 2020 ("Archivio fotografico in aggiornamento") and VIII ("In sviluppo") via the missing-`src` path with custom subtitle.
- Keep `object-cover` + `aspect-[16/10]` so vertical 2025 trophy crops cleanly; add `object-position: center` so the trophy stays centered. (Optionally use `object-contain` with warm gradient bg for the portrait trophy slide so it isn't cropped — recommended.)
- Intro paragraph already matches requested copy; keep as-is.

## 3. Update `Footer.tsx`
Add a credit line below the copyright:

```
Designed by <a href="https://yaideacloudltd.com/" target="_blank" rel="noopener noreferrer">Yaidea Cloud Ltd®</a>
```

Style: same `text-xs text-foreground/40`, link uses `text-[#8A4B2F] hover:text-[#4A2F24] underline-offset-4 hover:underline transition`. Quiet, single line, centered with the rest.

## 4. Quietly fix hydration mismatch
`Hero.tsx` currently triggers a SSR/client class mismatch (runtime error log). No change requested by user that conflicts; ensure padding classes are stable (already `pt-12 pb-20 sm:pt-20 sm:pb-28`). Verify no `_app` route or stale SSR cache — restart dev server if mismatch persists after the edits above.

## Out of scope
No changes to Hero copy, Navbar, IlConcorso, VideoCarousel, ContactCTA, design tokens, or routing.
