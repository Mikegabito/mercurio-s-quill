// Concorso Mercurio — static landing page logic
(function () {
  // YEAR
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // MOBILE NAV
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  // EDIZIONI CAROUSEL
  // To add new photos: drop image files into the corresponding folder and list their filenames in `images`.
  var carouselImages = [
    { label: "I Edizione",    folder: "assets/images/carousel/I-Edizione/",    images: ["2019.jpeg"] },
    { label: "II Edizione",   folder: "assets/images/carousel/II-Edizione/",   images: [] },
    { label: "III Edizione",  folder: "assets/images/carousel/III-Edizione/",  images: ["2021.jpg"] },
    { label: "IV Edizione",   folder: "assets/images/carousel/IV-Edizione/",   images: ["2022a.jpeg"] },
    { label: "V Edizione",    folder: "assets/images/carousel/V-Edizione/",    images: ["2023.jpg"] },
    { label: "VI Edizione",   folder: "assets/images/carousel/VI-Edizione/",   images: ["2024.jpg"] },
    { label: "VII Edizione",  folder: "assets/images/carousel/VII-Edizione/",  images: ["2025.jpg"] },
    { label: "VIII Edizione", folder: "assets/images/carousel/VIII-Edizione/", images: [] }
  ];

  var editionsMeta = {
    "I Edizione":    { year: "2019", alt: "Cerimonia di premiazione del Concorso Mercurio, I Edizione (2019)", description: "Una sala storica, le targhe in fila, le parole dei vincitori. La voce del Premio prende forma." },
    "II Edizione":   { year: "2020", alt: "II Edizione (2020) — archivio fotografico in aggiornamento", description: "Un'edizione discreta, vissuta in un tempo sospeso. Le immagini sono ancora in attesa di essere raccolte.", placeholderText: "Archivio fotografico in aggiornamento", placeholderIcon: "✎" },
    "III Edizione":  { year: "2021", alt: "Lettura e premiazione, III Edizione del Concorso Mercurio (2021)", description: "Sotto un affresco silenzioso, le voci tornano a incontrarsi: letture, riconoscimenti, gratitudine." },
    "IV Edizione":   { year: "2022", alt: "Foto di gruppo dei vincitori e della giuria, IV Edizione (2022)", description: "I vincitori, la giuria, gli amici del Premio raccolti in una sola immagine." },
    "V Edizione":    { year: "2023", alt: "Pubblico in sala durante la cerimonia del Concorso Mercurio, V Edizione (2023)", description: "Una sala piena, attenta, partecipe. Il Premio diventa un appuntamento atteso della città." },
    "VI Edizione":   { year: "2024", alt: "Lettura accompagnata dal contrabbasso, VI Edizione (2024)", description: "Parole e musica intrecciate: la letteratura incontra il suono del contrabbasso." },
    "VII Edizione":  { year: "2025", alt: "Targa di cristallo Mercurio 2025 con il logo Carta Penna Calamaio", description: "La targa di cristallo della VII Edizione: un riconoscimento prezioso a chi ha saputo trasformare la cura in parola.", fit: "contain" },
    "VIII Edizione": { alt: "VIII Edizione — in sviluppo", description: "La nuova edizione sta nascendo. Presto nuove voci, nuove storie, nuovi incontri.", placeholderText: "In sviluppo", placeholderIcon: "✦" }
  };

  var romanFromLabel = function (label) { return label.split(" ")[0]; };

  var editions = carouselImages.map(function (group) {
    var meta = editionsMeta[group.label] || {};
    var first = group.images && group.images.length ? group.folder + group.images[0] : null;
    return {
      edition: romanFromLabel(group.label),
      label: group.label,
      year: meta.year,
      src: first,
      alt: meta.alt || group.label,
      description: meta.description || "",
      placeholderText: meta.placeholderText,
      placeholderIcon: meta.placeholderIcon,
      fit: meta.fit
    };
  });

  var track = document.getElementById("edizioniTrack");
  var dotsEl = document.getElementById("edDots");
  var numEl = document.getElementById("edNumeral");
  var yearEl = document.getElementById("edYear");
  var descEl = document.getElementById("edDesc");
  var current = 0;
  var autoplay;

  if (track) {
    editions.forEach(function (e) {
      var slide = document.createElement("div");
      slide.className = "edizioni-slide";
      var card = document.createElement("figure");
      card.className = "ed-card" + (e.fit === "contain" ? " contain" : "");
      if (e.src) {
        card.innerHTML =
          '<img src="' + e.src + '" alt="' + e.alt + '" loading="lazy" />' +
          '<figcaption class="ed-cap"><span class="ed-cap-title">' + e.edition + ' Edizione</span>' +
          (e.year ? '<span class="ed-cap-year">' + e.year + '</span>' : '') + '</figcaption>';
      } else {
        card.innerHTML =
          '<div class="ed-placeholder">' +
          '<div class="ed-ph-icon">' + (e.placeholderIcon || '✎') + '</div>' +
          '<p class="ed-ph-title">' + e.edition + ' Edizione</p>' +
          (e.year ? '<p class="ed-ph-year">' + e.year + '</p>' : '') +
          '<p class="ed-ph-text">' + (e.placeholderText || 'In aggiornamento') + '</p>' +
          '</div>';
      }
      slide.appendChild(card);
      track.appendChild(slide);

      var dot = document.createElement("button");
      dot.className = "ed-dot";
      dot.type = "button";
      dot.textContent = e.edition;
      dot.setAttribute("aria-label", "Vai a " + e.edition + " Edizione" + (e.year ? " (" + e.year + ")" : ""));
      dot.addEventListener("click", function () { go(editions.indexOf(e)); restartAutoplay(); });
      dotsEl.appendChild(dot);
    });

    function go(i) {
      current = (i + editions.length) % editions.length;
      track.style.transform = "translateX(-" + (current * 100) + "%)";
      var e = editions[current];
      numEl.textContent = e.edition;
      yearEl.textContent = e.year || "";
      yearEl.style.display = e.year ? "" : "none";
      descEl.textContent = e.description;
      Array.prototype.forEach.call(dotsEl.children, function (d, idx) {
        d.classList.toggle("active", idx === current);
      });
    }
    function restartAutoplay() {
      clearInterval(autoplay);
      autoplay = setInterval(function () { go(current + 1); }, 6500);
    }

    document.getElementById("edPrev").addEventListener("click", function () { go(current - 1); restartAutoplay(); });
    document.getElementById("edNext").addEventListener("click", function () { go(current + 1); restartAutoplay(); });

    go(0);
    restartAutoplay();
  }

  // VIDEO CAROUSEL
  var videoIds = ["UMBPvCQppOY","Ff6bi1SFSRs","V-OPyGMtlUA","I30284yEdrs","qkwSWxh_KCA","PCNekDVsfPI","NRtsBaqpYd0","VYKrlMKnOuI"];
  var player = document.getElementById("videoPlayer");
  var thumbs = document.getElementById("videoThumbs");
  var idxEl = document.getElementById("videoIndex");
  var totalEl = document.getElementById("videoTotal");
  var vCurrent = 0;

  if (player && thumbs) {
    totalEl.textContent = String(videoIds.length).padStart(2, "0");
    videoIds.forEach(function (id, i) {
      var b = document.createElement("button");
      b.className = "video-thumb";
      b.type = "button";
      b.setAttribute("aria-label", "Riproduci video " + (i + 1));
      b.innerHTML = '<img src="https://img.youtube.com/vi/' + id + '/hqdefault.jpg" alt="Anteprima video ' + (i + 1) + '" loading="lazy" />';
      b.addEventListener("click", function () { setVideo(i); });
      thumbs.appendChild(b);
    });

    function setVideo(i) {
      vCurrent = (i + videoIds.length) % videoIds.length;
      player.src = "https://www.youtube.com/embed/" + videoIds[vCurrent] + "?rel=0";
      idxEl.textContent = String(vCurrent + 1).padStart(2, "0");
      Array.prototype.forEach.call(thumbs.children, function (t, idx) {
        t.classList.toggle("active", idx === vCurrent);
      });
    }
    document.getElementById("vPrev").addEventListener("click", function () { setVideo(vCurrent - 1); });
    document.getElementById("vNext").addEventListener("click", function () { setVideo(vCurrent + 1); });
    setVideo(0);
  }
})();
