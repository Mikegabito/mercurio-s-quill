## Concorso Mercurio — Homepage premium

Sito vetrina elegante per l'ottava edizione del concorso letterario, in italiano, con palette chiara e calda (carta, inchiostro, oro antico, terracotta) e mood da salotto letterario intimo.

### Stack & setup
- React + TypeScript + Vite + Tailwind (già presenti) — TanStack Start come router (già in progetto).
- Aggiunte: `framer-motion` (animazioni), `embla-carousel-react` (caroselli foto/video, già usabile via shadcn). `lucide-react` già disponibile.
- Font: Cormorant Garamond (display) + Inter (body) via Google Fonts in `__root.tsx`.

### Design system (`src/styles.css`)
- Override token chiari/caldi in `oklch`:
  - `--background`: ivory caldo
  - `--foreground`: inchiostro bruno scuro
  - `--primary`: oro antico / terracotta
  - `--accent`: terracotta soffusa
  - `--muted`: beige carta
- Aggiunta gradienti caldi, ombre soffuse, texture carta (SVG noise inline data-URI in `body::before`), classi utility: `.paper-bg`, `.warm-glass`, `.font-display`.
- Token registrati in `@theme inline` (es. `--font-display`, `--shadow-warm`).

### Struttura file
```
src/
  routes/
    index.tsx                  # homepage assemblata
  components/
    site/
      Navbar.tsx
      Hero.tsx
      IlConcorso.tsx
      EdizioniCarousel.tsx     # foto, ~20 placeholder, espandibile
      VideoCarousel.tsx        # 8 YouTube embed, lazy
      ContactCTA.tsx
      Footer.tsx
    ui/
      Section.tsx
      Container.tsx
      WarmGlassCard.tsx
      Button.tsx               # wrapper sopra shadcn con varianti "primary/secondary" calde
  assets/
    mercurio.jpg               # placeholder generato (immagine Mercurio editoriale)
```

### Sezioni (tutto il copy in italiano come da brief)
1. **Navbar** sticky, sfondo ivory con `backdrop-blur`, link centrati, CTA "Richiedi il bando" → ancora `#contatti`.
2. **Hero** split desktop / stack mobile. Testo a sinistra con eyebrow "VIII edizione · Concorso letterario", headline serif grande, sub, due bottoni. A destra immagine Mercurio in card editoriale: cornice carta, `rounded-3xl`, ombra calda, leggero overlay caldo, caption poetica. Animazioni d'ingresso Framer Motion + lieve floating parallax sull'immagine.
3. **Il concorso** — heading serif, body lungo (con placeholder `[INSERIRE ASSOCIAZIONE BENEFICIARIA]`), tre `WarmGlassCard` (Per chi / Categorie / Finalità) con icone lucide (Users, BookOpen, Heart).
4. **Edizioni passate** — `EdizioniCarousel` Embla, 20 placeholder `/images/edizioni/edizione-01..20.jpg`, frecce prev/next, contatore "03 / 20", swipe, autoplay lento opzionale, card `rounded-3xl` con ombra calda. Array generato via `Array.from({length: 20})` per facile espansione a 100.
5. **Voci e momenti** — `VideoCarousel` con 8 embed YouTube. Layout: video in evidenza grande (iframe lazy con `loading="lazy"`) + lista miniature laterale (desktop) / sotto (mobile). Frecce prev/next. Le miniature usano `https://img.youtube.com/vi/{id}/hqdefault.jpg`.
6. **Richiedi il bando** — sezione calda finale con dati contatto placeholder (`[INSERIRE EMAIL]`, `[INSERIRE TELEFONO]`, `[INSERIRE PROFILO]`) e due bottoni mailto / Instagram.
7. **Footer** minimal con due righe richieste.

### SEO & meta
In `routes/index.tsx` `head()`: title "Concorso Mercurio · VIII edizione", description poetica italiana, og:title/description, og:image = immagine Mercurio.

### Animazioni
Framer Motion: fade + slide-up su entrata di hero, headings di sezione, card. Floating sottile (`y: [0,-8,0]`) sull'immagine Mercurio. Niente effetti aggressivi.

### Asset
- Mercurio hero: genero un'immagine editoriale calda con `imagegen` (premium, Mercurio classico in stile pittorico, palette ivory/oro/terracotta) salvata in `src/assets/mercurio.jpg` e importata.
- Foto edizioni: solo path placeholder `/images/edizioni/edizione-NN.jpg` come richiesto (nessun file fisico — fallback `onError` mostra card "Foto in arrivo" con sfondo carta per evitare immagini rotte visibili).

### Accessibilità & responsive
HTML semantico (`<header><nav><main><section><footer>`), alt text su tutte le immagini, contrasto verificato sui token caldi, layout mobile-first con breakpoint `md:` / `lg:`.

### Note tecniche
- Nessuna logica backend richiesta — solo presentazione.
- Nessuna modifica a `routeTree.gen.ts`.
- `index.tsx` sostituisce completamente il placeholder esistente.
