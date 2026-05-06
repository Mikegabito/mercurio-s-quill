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
          className="relative overflow-hidden rounded-[2rem] border border-foreground/40 p-8 sm:p-14 lg:p-20 text-[oklch(0.96_0.02_85)]"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.03 50) 0%, oklch(0.28 0.05 45) 60%, oklch(0.34 0.09 40) 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full opacity-50"
            style={{ background: "radial-gradient(circle, oklch(0.7 0.14 60 / 0.45), transparent 70%)" }}
          />

          <div className="relative grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7">
              <p className="mb-4 text-xs uppercase tracking-[0.22em] text-[oklch(0.8_0.13_70)]">Partecipa</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance">
                Richiedi il <span className="italic text-[oklch(0.78_0.13_65)]">bando</span>.
              </h2>
              <p className="mt-6 max-w-xl text-current/80 text-lg leading-relaxed opacity-85">
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
                  className="!text-[oklch(0.96_0.02_85)] !border-[oklch(0.96_0.02_85_/_0.4)] hover:!border-[oklch(0.96_0.02_85_/_0.8)] hover:!bg-[oklch(0.96_0.02_85_/_0.08)]"
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
        className="flex items-center gap-4 rounded-2xl px-5 py-4 border border-[oklch(0.96_0.02_85_/_0.18)] bg-[oklch(0.96_0.02_85_/_0.06)] backdrop-blur-md transition hover:border-[oklch(0.78_0.13_65_/_0.6)] hover:bg-[oklch(0.96_0.02_85_/_0.1)]"
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--gradient-gold)] text-primary-foreground shrink-0">
          {icon}
        </span>
        <span className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.18em] text-[oklch(0.96_0.02_85_/_0.6)]">{label}</span>
          <span className="font-display text-lg text-[oklch(0.96_0.02_85)]">{value}</span>
        </span>
      </a>
    </li>
  );
}
