import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Feather, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Section } from "./Section";

type Edition = {
  edition: string; // roman numeral
  year?: string;
  src?: string;
  alt: string;
  description: string;
  placeholderText?: string;
  placeholderIcon?: "feather" | "sparkles";
  fit?: "cover" | "contain";
};

const editions: Edition[] = [
  {
    edition: "I",
    year: "2019",
    src: "/images/edizioni/2019.jpeg",
    alt: "Cerimonia di premiazione del Concorso Mercurio, I edizione (2019)",
    description:
      "Una sala storica, le targhe in fila, le parole dei vincitori. La voce del Premio prende forma.",
  },
  {
    edition: "II",
    year: "2020",
    alt: "II Edizione (2020) — archivio fotografico in aggiornamento",
    description:
      "Un'edizione discreta, vissuta in un tempo sospeso. Le immagini sono ancora in attesa di essere raccolte.",
    placeholderText: "Archivio fotografico in aggiornamento",
    placeholderIcon: "feather",
  },
  {
    edition: "III",
    year: "2021",
    src: "/images/edizioni/2021.jpg",
    alt: "Lettura e premiazione, III edizione del Concorso Mercurio (2021)",
    description:
      "Sotto un affresco silenzioso, le voci tornano a incontrarsi: letture, riconoscimenti, gratitudine.",
  },
  {
    edition: "IV",
    year: "2022",
    src: "/images/edizioni/2022a.jpeg",
    alt: "Foto di gruppo dei vincitori e della giuria, IV edizione (2022)",
    description:
      "I vincitori, la giuria, gli amici del Premio raccolti in una sola immagine.",
  },
  {
    edition: "V",
    year: "2023",
    src: "/images/edizioni/2023.jpg",
    alt: "Pubblico in sala durante la cerimonia del Concorso Mercurio, V edizione (2023)",
    description:
      "Una sala piena, attenta, partecipe. Il Premio diventa un appuntamento atteso della città.",
  },
  {
    edition: "VI",
    year: "2024",
    src: "/images/edizioni/2024.jpg",
    alt: "Lettura accompagnata dal contrabbasso, VI edizione (2024)",
    description:
      "Parole e musica intrecciate: la letteratura incontra il suono del contrabbasso.",
  },
  {
    edition: "VII",
    year: "2025",
    src: "/images/edizioni/2025.jpg",
    alt: "Targa di cristallo Mercurio 2025 con il logo Carta Penna Calamaio",
    description:
      "La targa di cristallo della VII edizione: un riconoscimento prezioso a chi ha saputo trasformare la cura in parola.",
    fit: "contain",
  },
  {
    edition: "VIII",
    alt: "VIII Edizione — in sviluppo",
    description:
      "La nuova edizione sta nascendo. Presto nuove voci, nuove storie, nuovi incontri.",
    placeholderText: "In sviluppo",
    placeholderIcon: "sparkles",
  },
];

export function EdizioniCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 6500, stopOnInteraction: true })],
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const current = editions[selected] ?? editions[0];

  return (
    <Section id="edizioni" className="bg-secondary/40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[#8A4B2F]">Archivio</p>
          <h2 className="font-display text-4xl sm:text-5xl text-[#3B2A22] text-balance">
            Edizioni passate
          </h2>
          <p className="mt-4 text-[#3B2A22]/80 text-lg leading-relaxed">
            Le edizioni passate raccontano la storia viva del Premio Mercurio: cerimonie, letture,
            incontri, applausi e momenti condivisi attorno alla parola.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
          <div className="lg:col-span-8 relative">
            <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
              <div className="flex">
                {editions.map((e) => (
                  <div key={e.edition} className="shrink-0 grow-0 basis-full">
                    <FeaturedCard edition={e} />
                  </div>
                ))}
              </div>
            </div>

            <button
              aria-label="Edizione precedente"
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-[#F8EFE4]/95 border border-[#4A2F24]/20 text-[#3B2A22] shadow-warm hover:bg-[#F8EFE4] transition flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Edizione successiva"
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-[#F8EFE4]/95 border border-[#4A2F24]/20 text-[#3B2A22] shadow-warm hover:bg-[#F8EFE4] transition flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <aside className="lg:col-span-4 flex flex-col justify-between rounded-3xl border border-[#4A2F24]/15 bg-[#F8EFE4]/70 p-7 sm:p-9">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-[#8A4B2F]">Edizione</p>
              <p className="mt-2 font-display text-6xl sm:text-7xl text-[#3B2A22] leading-none">
                {current.edition}
              </p>
              {current.year && (
                <p className="mt-2 text-sm tracking-[0.22em] uppercase text-[#6E5A4E] tabular-nums">
                  {current.year}
                </p>
              )}
              <p className="mt-6 text-[#3B2A22]/85 leading-relaxed">{current.description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {editions.map((e, i) => {
                const active = i === selected;
                return (
                  <button
                    key={e.edition}
                    onClick={() => emblaApi?.scrollTo(i)}
                    aria-label={`Vai a ${e.edition} Edizione${e.year ? ` (${e.year})` : ""}`}
                    aria-current={active}
                    className={
                      "min-w-10 px-3.5 py-1.5 rounded-full text-sm font-medium transition border " +
                      (active
                        ? "bg-[#4A2F24] text-[#FFF8EF] border-[#4A2F24]"
                        : "bg-transparent text-[#3B2A22] border-[#4A2F24]/30 hover:border-[#4A2F24]/70")
                    }
                  >
                    {e.edition}
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

function FeaturedCard({ edition }: { edition: Edition }) {
  const Icon = edition.placeholderIcon === "sparkles" ? Sparkles : Feather;
  return (
    <figure className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-3xl border border-[#4A2F24]/15 bg-[var(--gradient-warm)] shadow-warm">
      {edition.src ? (
        <>
          <img
            src={edition.src}
            alt={edition.alt}
            loading="lazy"
            className={
              "h-full w-full " + (edition.fit === "contain" ? "object-contain p-4" : "object-cover")
            }
          />
          <figcaption className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-gradient-to-t from-[#3B2A22]/85 via-[#3B2A22]/45 to-transparent text-[#FFF8EF]">
            <span className="font-display text-lg sm:text-xl">{edition.edition} Edizione</span>
            {edition.year && (
              <span className="ml-3 text-sm tracking-[0.2em] uppercase text-[#FFF8EF]/80 tabular-nums">
                {edition.year}
              </span>
            )}
          </figcaption>
        </>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center text-center px-8">
          <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#4A2F24]/25 text-[#8A4B2F]">
            <Icon size={24} />
          </div>
          <p className="font-display text-3xl sm:text-4xl text-[#3B2A22]">
            {edition.edition} Edizione
          </p>
          {edition.year && (
            <p className="mt-1 text-sm tracking-[0.22em] uppercase text-[#6E5A4E] tabular-nums">
              {edition.year}
            </p>
          )}
          <p className="mt-2 text-[#6E5A4E] italic">
            {edition.placeholderText ?? "In aggiornamento"}
          </p>
          <div aria-hidden className="mt-6 h-px w-24 bg-[#4A2F24]/20" />
        </div>
      )}
    </figure>
  );
}
