import { motion } from "framer-motion";
import { Mail, Phone, Instagram } from "lucide-react";
import { Container } from "./Container";
import { Section } from "./Section";
import { Button } from "./Button";

export function ContactCTA() {
  return (
    <Section id="contatti" className="pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-accent/30 p-8 sm:p-14 lg:p-20"
          style={{ background: "var(--gradient-warm)" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full opacity-40"
            style={{ background: "radial-gradient(circle, oklch(0.75 0.13 65 / 0.5), transparent 70%)" }}
          />

          <div className="relative grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-primary">Partecipa</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground text-balance">
                Richiedi il <span className="italic text-primary">bando</span>.
              </h2>
              <p className="mt-6 max-w-xl text-foreground/75 text-lg leading-relaxed">
                Per ricevere informazioni sull'ottava edizione, sulle modalità di partecipazione e
                sulle scadenze, contatta il comitato organizzatore.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="mailto:[INSERIRE EMAIL]" variant="primary">
                  <Mail size={16} />
                  Scrivi al comitato
                </Button>
                <Button
                  href="https://instagram.com/[INSERIRE PROFILO]"
                  variant="secondary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Instagram size={16} />
                  Segui su Instagram
                </Button>
              </div>
            </div>

            <ul className="lg:col-span-5 space-y-5">
              <ContactRow
                icon={<Mail size={18} />}
                label="Email"
                value="[INSERIRE EMAIL]"
                href="mailto:[INSERIRE EMAIL]"
              />
              <ContactRow
                icon={<Phone size={18} />}
                label="Telefono"
                value="[INSERIRE TELEFONO]"
                href="tel:[INSERIRE TELEFONO]"
              />
              <ContactRow
                icon={<Instagram size={18} />}
                label="Instagram"
                value="[INSERIRE PROFILO]"
                href="https://instagram.com/[INSERIRE PROFILO]"
              />
            </ul>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        className="warm-glass flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:border-primary/50"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-gold)] text-primary-foreground shrink-0">
          {icon}
        </span>
        <span className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.18em] text-foreground/55">{label}</span>
          <span className="font-display text-lg text-foreground">{value}</span>
        </span>
      </a>
    </li>
  );
}
