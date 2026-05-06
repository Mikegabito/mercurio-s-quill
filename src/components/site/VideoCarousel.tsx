import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Container } from "./Container";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

const videoIds = [
  "UMBPvCQppOY",
  "Ff6bi1SFSRs",
  "V-OPyGMtlUA",
  "I30284yEdrs",
  "qkwSWxh_KCA",
  "PCNekDVsfPI",
  "NRtsBaqpYd0",
  "VYKrlMKnOuI",
];

export function VideoCarousel() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + videoIds.length) % videoIds.length);
  const next = () => setActive((i) => (i + 1) % videoIds.length);

  const current = videoIds[active];

  return (
    <Section id="video">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-12"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-primary">Voci e momenti</p>
          <h2 className="font-display text-4xl sm:text-5xl text-foreground text-balance">
            Voci e momenti
          </h2>
          <p className="mt-4 text-foreground/70 text-lg leading-relaxed">
            Una selezione di video dalle edizioni e dagli incontri del Concorso Mercurio.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-8">
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-border shadow-warm bg-foreground">
              <iframe
                key={current}
                src={`https://www.youtube.com/embed/${current}?rel=0`}
                title={`Concorso Mercurio · video ${active + 1}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="font-display text-foreground/70 tabular-nums">
                {String(active + 1).padStart(2, "0")}{" "}
                <span className="text-foreground/40">/ {String(videoIds.length).padStart(2, "0")}</span>
              </p>
              <div className="flex items-center gap-3">
                <button
                  aria-label="Video precedente"
                  onClick={prev}
                  className="h-11 w-11 rounded-full border border-border bg-card hover:bg-accent/15 transition flex items-center justify-center"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  aria-label="Video successivo"
                  onClick={next}
                  className="h-11 w-11 rounded-full border border-border bg-card hover:bg-accent/15 transition flex items-center justify-center"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="grid grid-cols-3 gap-3 lg:grid-cols-2 lg:max-h-[460px] lg:overflow-y-auto lg:pr-2">
              {videoIds.map((id, i) => (
                <button
                  key={id}
                  onClick={() => setActive(i)}
                  className={cn(
                    "group relative aspect-video overflow-hidden rounded-xl border transition",
                    i === active
                      ? "border-primary ring-2 ring-primary/40"
                      : "border-border hover:border-accent/60",
                  )}
                  aria-label={`Riproduci video ${i + 1}`}
                >
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt={`Anteprima video ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 flex items-center justify-center bg-foreground/30 transition-opacity",
                      i === active ? "opacity-0" : "opacity-100 group-hover:opacity-60",
                    )}
                  >
                    <Play size={18} className="text-paper" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
