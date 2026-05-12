# Concorso Mercurio

Sito ufficiale del **Concorso letterario Mercurio**, organizzato dal comitato *Carta Penna Calamaio*. Il concorso, giunto alla VIII edizione, è riservato a tutti gli esercenti le professioni sanitarie ed è animato da scopo benefico.

Costruito con **TanStack Start**, **React 19**, **Vite 7** e **Tailwind CSS v4**.

---

## Requisiti

- Node.js ≥ 20
- [Bun](https://bun.sh) (consigliato) **oppure** npm

> Bun è il package manager preferito di questo repository (sono presenti `bunfig.toml` e `bun.lock`), ma il progetto può essere installato e avviato anche con npm.

---

## Clonare il repository

```bash
git clone <repository-url>
cd mercurio-s-quill
```

---

## Setup con Bun (consigliato)

```bash
bun install      # installa le dipendenze
bun run dev      # avvia il dev server
bun run build    # build di produzione
```

---

## Setup con npm (alternativa)

```bash
npm install      # installa le dipendenze
npm run dev      # avvia il dev server
npm run build    # build di produzione
npm run start    # avvia il server Node.js in produzione (porta 3000)
```

---

## Deploy su Node.js (Hostinger / VPS / generico)

Il progetto è configurato per girare come **server Node.js** (target `node-server`) e include un piccolo entry `server.mjs` che adatta l'handler `fetch` di TanStack Start a un server HTTP Node tramite `@hono/node-server`.

```bash
npm install
npm run build      # genera dist/client e dist/server
npm run start      # avvia node server.mjs (PORT=3000 di default)
```

Su Hostinger Node.js:
- **Application root**: cartella del progetto
- **Application URL**: dominio configurato
- **Application startup file**: `server.mjs`
- **Node.js version**: ≥ 20
- Variabili d'ambiente opzionali: `PORT`, `HOST` (default `0.0.0.0`)

Eseguire `npm install` e `npm run build` prima di avviare l'app dal pannello.


---

## Struttura del progetto

```
src/
  assets/              immagini e logo
  components/site/     sezioni della landing (Hero, IlConcorso, …)
  components/ui/       componenti shadcn/ui
  routes/              file-based routing TanStack Start
  styles.css           design tokens (oklch) + Tailwind v4
public/                asset statici
index.html
vite.config.ts
```

---

## Deploy

Il sito è pubblicato tramite Lovable. Le modifiche al frontend vanno in produzione cliccando **Publish → Update** nell'editor Lovable.
