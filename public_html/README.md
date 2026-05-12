# Concorso Mercurio — Sito statico (Hostinger PHP/HTML)

Versione **statica** del sito del Concorso letterario Mercurio (VIII Edizione), pronta per essere caricata su Hostinger nella cartella `public_html` con l'opzione PHP/HTML (nessun Node.js richiesto).

## Struttura

```
public_html/
├── index.html
├── favicon.ico
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
│       ├── mercurio.jpg
│       ├── carta-penna-calamaio.png
│       └── edizioni/   (foto delle edizioni passate)
└── README.md
```

## Deploy su Hostinger (PHP/HTML)

1. Scarica/esporta tutto il contenuto della cartella `public_html/` di questo repository.
2. Accedi al **File Manager** di Hostinger (o usa FTP).
3. Carica `index.html`, `favicon.ico` e l'intera cartella `assets/` dentro `public_html/` (la radice del tuo dominio).
4. Apri https://concorsomercurio.it/ — il sito è online.

Nessun comando `npm install`, `npm run build`, `bun install` o build step è richiesto in produzione: i file si servono così come sono.

## Test locale

Apri `index.html` direttamente nel browser, oppure per evitare problemi CORS con gli iframe YouTube avvia un piccolo server statico:

```bash
# con Python 3
python3 -m http.server 8080
# poi apri http://localhost:8080
```

## Placeholder da sostituire

Cercare nel codice e sostituire con i dati reali:

- `[INSERIRE EMAIL]` — email del comitato
- `[INSERIRE TELEFONO]` — recapito telefonico
- `[INSERIRE PROFILO]` — handle Instagram
- `[INSERIRE ASSOCIAZIONE BENEFICIARIA]` — associazione destinataria del ricavato
- Foto mancante per la **II Edizione (2020)** — aggiungere `assets/images/edizioni/2020.jpg` e aggiornare l'oggetto corrispondente in `assets/js/main.js`.

## Modifiche

- **Testi & contenuti**: `index.html`
- **Stili & colori**: `assets/css/style.css`
- **Carosello edizioni & video**: `assets/js/main.js`

## Note

- Il sito mantiene la stessa identità visiva della versione React/TanStack: palette warm (carta/terracotta/oro), tipografia Cormorant Garamond + Inter, logo Carta Penna Calamaio nella sezione "Il Concorso", artwork di Mercurio nell'hero.
- Tutte le edizioni sono etichettate in numeri romani (I, II, … VIII).
