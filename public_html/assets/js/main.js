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
  // To add new photos: drop image files into the corresponding edition folder
  // (assets/images/carousel/<N>-Edizione/) and list their filenames in `images` below.
  var carouselData = [
    {
      label: "I Edizione", year: "2019", roman: "I",
      folder: "assets/images/carousel/I-Edizione/",
      description: "Una sala storica, le targhe in fila, le parole dei vincitori. La voce del Premio prende forma.",
      images: ["2019.jpg"]
    },
    {
      label: "II Edizione", year: "2020", roman: "II",
      folder: "assets/images/carousel/II-Edizione/",
      description: "Un'edizione discreta, vissuta in un tempo sospeso. Le immagini sono ancora in attesa di essere raccolte.",
      images: []
    },
    {
      label: "III Edizione", year: "2021", roman: "III",
      folder: "assets/images/carousel/III-Edizione/",
      description: "Sotto un affresco silenzioso, le voci tornano a incontrarsi: letture, riconoscimenti, gratitudine.",
      images: ["2021.jpg", "2021a.jpg", "2021b.jpg", "2021c.jpg", "2021d.jpg"]
    },
    {
      label: "IV Edizione", year: "2022", roman: "IV",
      folder: "assets/images/carousel/IV-Edizione/",
      description: "Una nuova tappa del percorso letterario e benefico del Premio Mercurio.",
      images: ["2022.jpg", "2022a.jpg", "2022b.jpg"]
    },
    {
      label: "V Edizione", year: "2023", roman: "V",
      folder: "assets/images/carousel/V-Edizione/",
      description: "Voci, incontri e memoria condivisa nella quinta edizione.",
      images: ["2023.jpg", "2023a.jpg", "2023b.jpg", "2023c.jpg", "2023d.jpg", "2023f.jpg"]
    },
    {
      label: "VI Edizione", year: "2024", roman: "VI",
      folder: "assets/images/carousel/VI-Edizione/",
      description: "La sesta edizione raccontata attraverso immagini, letture e momenti di premiazione.",
      images: ["2024.jpg", "2024b.jpg", "2024c.jpg", "2024d.jpg", "2024f.jpg", "2024g.jpg", "2024h.jpg", "2024j.jpg", "2024k.jpg", "2024l.jpg"]
    },
    {
      label: "VII Edizione", year: "2025", roman: "VII",
      folder: "assets/images/carousel/VII-Edizione/",
      description: "La settima edizione del Concorso Mercurio, tra parole, cura e riconoscimenti.",
      images: ["2025.jpg", "2025a.jpg", "2025b.jpg", "2025c.jpg", "2025d.jpg", "2025f.jpg", "2025g.jpg", "2025h.jpg", "2025j.jpg", "2025k.jpg"]
    },
    {
      label: "VIII Edizione", year: "2026", roman: "VIII",
      folder: "assets/images/carousel/VIII-Edizione/",
      description: "La nuova edizione 2026. Foto in arrivo.",
      images: []
    }
  ];

  var track = document.getElementById("edizioniTrack");
  var dotsEl = document.getElementById("edDots");
  var numEl = document.getElementById("edNumeral");
  var yearEl = document.getElementById("edYear");
  var descEl = document.getElementById("edDesc");
  var currentEditionIndex = 0;
  var currentImageIndex = 0;
  var autoplay;

  function renderCurrent() {
    if (!track) return;
    var ed = carouselData[currentEditionIndex];
    var total = ed.images.length;
    var inner;
    if (total > 0) {
      var src = ed.folder + ed.images[currentImageIndex];
      var counter = '<span class="ed-cap-count">' + (currentImageIndex + 1) + ' / ' + total + '</span>';
      inner =
        '<figure class="ed-card">' +
          '<img src="' + src + '" alt="' + ed.label + ' — foto ' + (currentImageIndex + 1) + '" loading="lazy" />' +
          '<figcaption class="ed-cap">' +
            '<span class="ed-cap-title">' + ed.roman + ' Edizione</span>' +
            '<span class="ed-cap-year">' + ed.year + '</span>' +
            counter +
          '</figcaption>' +
        '</figure>';
    } else {
      inner =
        '<figure class="ed-card">' +
          '<div class="ed-placeholder">' +
            '<div class="ed-ph-icon">✦</div>' +
            '<p class="ed-ph-title">' + ed.roman + ' Edizione</p>' +
            '<p class="ed-ph-year">' + ed.year + '</p>' +
            '<p class="ed-ph-text">Foto in arrivo</p>' +
          '</div>' +
        '</figure>';
    }
    track.innerHTML = '<div class="edizioni-slide active">' + inner + '</div>';

    numEl.textContent = ed.roman;
    yearEl.textContent = ed.year;
    yearEl.style.display = "";
    descEl.textContent = ed.description;
    Array.prototype.forEach.call(dotsEl.children, function (d, idx) {
      d.classList.toggle("active", idx === currentEditionIndex);
    });
  }

  function selectEdition(i) {
    currentEditionIndex = (i + carouselData.length) % carouselData.length;
    currentImageIndex = 0;
    renderCurrent();
  }
  function nextImage() {
    var ed = carouselData[currentEditionIndex];
    if (ed.images.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % ed.images.length;
    renderCurrent();
  }
  function prevImage() {
    var ed = carouselData[currentEditionIndex];
    if (ed.images.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + ed.images.length) % ed.images.length;
    renderCurrent();
  }
  function restartAutoplay() {
    clearInterval(autoplay);
    autoplay = setInterval(function () {
      var ed = carouselData[currentEditionIndex];
      if (ed.images.length > 1) nextImage();
    }, 6500);
  }

  if (track && dotsEl) {
    carouselData.forEach(function (ed, idx) {
      var dot = document.createElement("button");
      dot.className = "ed-dot";
      dot.type = "button";
      dot.textContent = ed.roman;
      dot.setAttribute("aria-label", "Vai a " + ed.label + " (" + ed.year + ")");
      dot.addEventListener("click", function () { selectEdition(idx); restartAutoplay(); });
      dotsEl.appendChild(dot);
    });

    document.getElementById("edPrev").addEventListener("click", function () { prevImage(); restartAutoplay(); });
    document.getElementById("edNext").addEventListener("click", function () { nextImage(); restartAutoplay(); });

    selectEdition(0);
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
