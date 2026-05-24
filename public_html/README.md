# Concorso Mercurio — VIII Edizione 2026 (Hostinger PHP/HTML)

Sito statico ufficiale del Concorso letterario **Mercurio · VIII Edizione 2026**,
pronto per essere caricato su Hostinger nella cartella `public_html` con
l'opzione **PHP/HTML** (nessun Node.js, nessun build, nessun server richiesto).

Apri direttamente `index.html` nel browser e il sito funziona.

## Struttura

```
/
├── index.html
├── favicon.ico
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── images/
│   │   ├── logos/
│   │   │   ├── logo-abe.png
│   │   │   └── carta-penna-calamaio.png
│   │   ├── mercurio/
│   │   │   └── mercury-artwork.jpg
│   │   └── carousel/
│   │       ├── I-Edizione/
│   │       ├── II-Edizione/
│   │       ├── III-Edizione/
│   │       ├── IV-Edizione/
│   │       ├── V-Edizione/
│   │       ├── VI-Edizione/
│   │       ├── VII-Edizione/
│   │       └── VIII-Edizione/
│   └── documents/
│       └── bando-2026.pdf
└── README.md
```

## Deploy su Hostinger (PHP/HTML)

1. Scarica/esporta tutto il contenuto di questa cartella (`public_html/` del repository).
2. Entra nel **File Manager** di Hostinger (o usa FTP).
3. Carica `index.html`, `favicon.ico` e l'intera cartella `assets/` dentro `public_html/`
   (la radice del tuo dominio).
4. Verifica che esistano:
   - `assets/documents/bando-2026.pdf`
   - `assets/images/logos/logo-abe.png`
5. Apri https://concorsomercurio.it/ — il sito è online.

Non serve `npm install`, `npm run build`, `bun install` o alcun build step:
i file vengono serviti così come sono.

## Test locale

Apri `index.html` direttamente nel browser, oppure avvia un piccolo server
statico per evitare problemi CORS con gli iframe YouTube:

```bash
python3 -m http.server 8080
# poi apri http://localhost:8080
```

## Contenuti chiave 2026

- **Scadenza invio opere:** 31 ottobre 2026
- **Sezioni a 20,00 €:** Poesia singola · Racconto breve · Il Coraggio · Sezione Speciale Premio Mercurio
- **Premio Speciale ABE (10,00 €):** dedicato ai volontari di ABE ODV
- **Beneficiario:** Associazione ABE ODV — bambino emopatico
- **Contatti:** comitato.cartapennacalamaio@gmail.com · WhatsApp 328 5649213
- **Posta:** Franca Pagni, via Martinengo Cesaresco 78 — 25128 Brescia
- **Instagram:** https://www.instagram.com/concorsomercurio/

I dettagli operativi e le modalità di donazione (IBAN, Postepay, PayPal) non
sono pubblicati sulla landing page: sono indicati esclusivamente nel
**bando ufficiale** (`assets/documents/bando-2026.pdf`).

## Modifiche

- **Testi & contenuti:** `index.html`
- **Stili & colori:** `assets/css/style.css`
- **Carosello edizioni & video:** `assets/js/main.js`
- **Bando aggiornato:** sostituire `assets/documents/bando-2026.pdf`
- **Logo ABE:** sostituire `assets/images/logos/logo-abe.png`
- **Foto edizioni future:** aggiungere i file dentro la cartella della relativa edizione
  in `assets/images/carousel/<N>-Edizione/` e listare i nomi file nell'array
  `carouselImages` di `assets/js/main.js` (campo `images`).
