import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "./Container";
import { Section } from "./Section";

const TOTAL = 20; // Easy to expand to ~100
const photos = Array.from({ length: TOTAL }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/images/edizioni/edizione-${n}.jpg`,
    alt: `Concorso Mercurio · momento dalle edizioni precedenti ${n}`,
  };
});

export function EdizioniCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: "trimSnaps" },
    [Autoplay({ delay: 5500, stopOnInteraction: true })],
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

  return (
    <Section id="edizioni" className="bg-secondary/40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.22em] text-primary">Archivio</p>
            <h2 className="font-display text-4xl sm:text-5xl text-foreground text-balance">
              Edizioni passate
            </h2>
            <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
              Immagini, premiazioni e momenti raccolti dalle precedenti edizioni del Concorso
              Mercurio.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Foto precedente"
              onClick={() => emblaApi?.scrollPrev()}
              className="h-11 w-11 rounded-full border border-border bg-card hover:bg-accent/15 transition flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              aria-label="Foto successiva"
              onClick={() => emblaApi?.scrollNext()}
              className="h-11 w-11 rounded-full border border-border bg-card hover:bg-accent/15 transition flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div className="overflow-hidden -mx-2" ref={emblaRef}>
          <div className="flex">
            {photos.map((p, i) => (
              <div
                key={p.src}
                className="px-2 shrink-0 grow-0 basis-[85%] sm:basis-[55%] lg:basis-[40%]"
              >
                <PhotoCard src={p.src} alt={p.alt} index={i + 1} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <p className="text-sm text-foreground/55 italic">Archivio fotografico in aggiornamento.</p>
          <p className="font-display text-foreground/70 tabular-nums">
            {String(selected + 1).padStart(2, "0")}{" "}
            <span className="text-foreground/40">/ {String(TOTAL).padStart(2, "0")}</span>
          </p>
        </div>
      </Container>
    </Section>
  );
}

function PhotoCard({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [errored, setErrored] = useState(false);

  return (
    <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-[var(--gradient-warm)] shadow-warm">
      {!errored ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center text-center px-6">
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--gradient-gold)] text-primary-foreground">
            <ImageIcon size={20} />
          </div>
          <p className="font-display text-2xl text-foreground/80">Edizione {index}</p>
          <p className="mt-1 text-sm text-foreground/55 italic">Foto in arrivo</p>
        </div>
      )}
    </figure>
  );
}
