# Plan — Logo Carta Penna Calamaio nella sezione "Il Concorso"

## Obiettivo
Aggiungere il logo **Carta Penna Calamaio** nella sezione `Il Concorso`, presentato con la stessa cura visiva riservata al dipinto di Mercurio nell'Hero (cornice morbida, ombra calda, leggera animazione di galleggiamento, didascalia poetica).

## Passi

### 1. Asset
- Copiare `user-uploads://logocartapenna.png` → `src/assets/carta-penna-calamaio.png`.
- Importarlo come ES module in `IlConcorso.tsx`.

### 2. Layout di `IlConcorso.tsx`
Trasformare il blocco testuale attuale (oggi `max-w-3xl` su singola colonna) in una griglia a 12 colonne come l'Hero:

- **lg:col-span-7** → testo (eyebrow "Il concorso", H2, paragrafi).
- **lg:col-span-5** → figura del logo:
  - cornice tonda/morbida coerente con la palette (`bg-[var(--gradient-warm)]`, `shadow-warm`, `border-accent/30`).
  - Il logo è già su sfondo bianco con cerchio rosso → mostrarlo dentro un cerchio crema (`rounded-full` o `rounded-[2rem]`) con padding generoso così respira; `object-contain`, `max-w-sm` centrato.
  - Animazione `motion.figure` con leggero `y: [0, -8, 0]` (più discreto del Mercurio, per non competere).
  - `figcaption` italica: *"Carta Penna Calamaio — il comitato che dà voce al Premio."*
- Su mobile il logo appare sotto il testo, ridotto (~`max-w-[220px]`).

Le tre `WarmGlassCard` (Per chi / Categorie / Finalità) restano invariate sotto la griglia.

### 3. Accessibilità & SEO
- `alt="Logo del comitato Carta Penna Calamaio: piuma, calamaio e monogramma CPC"`.
- `loading="lazy"`, dimensioni intrinseche.

### 4. Fix silenzioso hydration
Tag `<br>` dentro `<h2>` resta valido; il mismatch nei log riguarda l'estensione browser Lovable (`data-lov-*`). Nessuna modifica necessaria.

## Out of scope
- Nessuna modifica a Hero, Navbar, Footer, Carosello, Video, ContactCTA o token di design.
- Nessun cambio di copy nei paragrafi esistenti.
