import { motion } from "framer-motion";
import { Container } from "./Container";
import { Button } from "./Button";
import mercurio from "@/assets/mercurio.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* warm radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 75% 30%, oklch(0.85 0.09 70 / 0.35), transparent 70%), radial-gradient(50% 40% at 15% 80%, oklch(0.75 0.1 40 / 0.18), transparent 70%)",
        }}
      />

      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <p className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-8 bg-primary/60" />
            VIII edizione · Concorso letterario
          </p>

          <h1 className="font-display text-balance text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-foreground">
            Una stanza luminosa <br className="hidden sm:block" />
            <span className="italic text-primary">per la parola</span> che cura.
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg text-foreground/75 leading-relaxed">
            Concorso Mercurio invita chi esercita una professione sanitaria a trasformare
            esperienza, ascolto e memoria in poesia e narrativa.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contatti" variant="primary">
              Richiedi il bando
            </Button>
            <Button href="#concorso" variant="secondary">
              Scopri il concorso
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <motion.figure
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-[var(--gradient-warm)] shadow-warm" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-accent/30 shadow-warm">
              <img
                src={mercurio}
                width={1024}
                height={1024}
                alt="Mercurio, messaggero alato con caduceo, pergamena e penna"
                className="block w-full h-auto"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 60%, oklch(0.6 0.12 50 / 0.18) 100%)",
                }}
              />
            </div>
            <figcaption className="mt-5 text-center font-display italic text-foreground/70 text-lg">
              Mercurio, messaggero di parole, incontri e storie.
            </figcaption>
          </motion.figure>
        </motion.div>
      </Container>
    </section>
  );
}
