import { motion } from "framer-motion";
import { BookOpen, Heart, Users } from "lucide-react";
import { Container } from "./Container";
import { Section } from "./Section";
import { WarmGlassCard } from "./WarmGlassCard";

const cards = [
  {
    icon: Users,
    title: "Per chi",
    text: "Esercenti le professioni sanitarie.",
  },
  {
    icon: BookOpen,
    title: "Categorie",
    text: "Poesia e narrativa a tema libero, non scientifico.",
  },
  {
    icon: Heart,
    title: "Finalità",
    text: "Un concorso animato da uno scopo benefico.",
  },
];

export function IlConcorso() {
  return (
    <Section id="concorso">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-primary">Il concorso</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground text-balance">
            Il comitato <span className="italic">Carta Penna Calamaio</span>
            <br className="hidden sm:block" /> torna con l'ottava edizione.
          </h2>

          <div className="mt-8 space-y-5 text-foreground/75 text-lg leading-relaxed">
            <p>
              Il comitato Carta Penna Calamaio, anche quest'anno organizza il Concorso letterario
              Mercurio, arrivato alla VIII edizione. Il concorso è riservato a tutti gli esercenti
              le professioni sanitarie e animato da scopo benefico.
            </p>
            <p>
              Il concorso segue il classico schema dei concorsi letterari con distinzione a
              categorie, poesia e narrativa, a tema libero non scientifico, facendo riferimento a
              una giuria appositamente designata. Il ricavato dalle quote di partecipazione verrà,
              quest'anno, devoluto all'Associazione{" "}
              <span className="italic text-primary">[INSERIRE ASSOCIAZIONE BENEFICIARIA]</span>.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <WarmGlassCard className="h-full">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gradient-gold)] text-primary-foreground shadow-warm">
                  <c.icon size={20} />
                </div>
                <h3 className="font-display text-2xl text-foreground">{c.title}</h3>
                <p className="mt-2 text-foreground/70 leading-relaxed">{c.text}</p>
              </WarmGlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
