# Concorso Mercurio

Sito ufficiale del **Concorso letterario Mercurio**, organizzato dal comitato *Carta Penna Calamaio* — VIII Edizione.

> **Per il deploy su Hostinger (PHP/HTML) usa la cartella [`public_html/`](./public_html/).**
> Contiene la versione **statica** del sito (HTML + CSS + JS), pronta da caricare nella `public_html` del tuo hosting. Nessun Node.js, nessuna build, nessun server richiesto.

## Deploy rapido su Hostinger

1. Apri la cartella `public_html/` di questo repository.
2. Carica `index.html`, `favicon.ico` e la cartella `assets/` dentro `public_html/` su Hostinger (File Manager o FTP).
3. Apri https://concorsomercurio.it/ — il sito è online.

Vedi [`public_html/README.md`](./public_html/README.md) per dettagli, struttura, test locale e placeholder da sostituire.

## Test locale del sito statico

```bash
cd public_html
python3 -m http.server 8080
# apri http://localhost:8080
```

## Struttura del repository

```
public_html/         ← sito statico pronto per Hostinger (DEPLOY)
  index.html
  favicon.ico
  assets/css/style.css
  assets/js/main.js
  assets/images/...
  README.md

src/, vite.config.ts, package.json, ...
                     ← progetto TanStack/React originale, usato solo
                       per l'editor live di Lovable (NON serve in produzione)
```

## Placeholder da sostituire

- `[INSERIRE EMAIL]`
- `[INSERIRE TELEFONO]`
- `[INSERIRE PROFILO]` (Instagram)
- `[INSERIRE ASSOCIAZIONE BENEFICIARIA]`

Cercare nel codice di `public_html/index.html` e sostituire con i dati reali.
