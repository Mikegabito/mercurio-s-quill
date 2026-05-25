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

### Aggiungere nuove foto al carosello edizioni

Le foto sono organizzate **per edizione** (non per anno) in cartelle dedicate
senza spazi nel nome:

```
assets/images/carousel/
├── I-Edizione/      → mostrata come "I Edizione" (2019)
├── II-Edizione/     → "II Edizione" (2020)
├── III-Edizione/    → "III Edizione" (2021)
├── IV-Edizione/     → "IV Edizione" (2022)
├── V-Edizione/      → "V Edizione" (2023)
├── VI-Edizione/     → "VI Edizione" (2024)
├── VII-Edizione/    → "VII Edizione" (2025)
└── VIII-Edizione/   → "VIII Edizione" (2026)
```

Per aggiungere una nuova foto, ad esempio alla VII Edizione:

1. Caricare il file in `assets/images/carousel/VII-Edizione/`
   (es. `2025b.jpg`).
2. Aprire `assets/js/main.js` e aggiungere il nome del file nell'array
   `images` della voce corrispondente in `carouselImages`:

   ```js
   { label: "VII Edizione", year: "2025",
     folder: "assets/images/carousel/VII-Edizione/",
     images: ["2025.jpg", "2025b.jpg"] }
   ```

Quando un'edizione contiene più foto, sulla card del carosello compaiono
automaticamente le frecce per scorrere le immagini di quella edizione.
Se l'array `images` è vuoto (es. VIII Edizione), la card mostra il
placeholder "Foto in arrivo".
