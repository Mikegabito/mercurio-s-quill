import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";

const links = [
  { href: "#concorso", label: "Il concorso" },
  { href: "#edizioni", label: "Edizioni passate" },
  { href: "#video", label: "Video" },
  { href: "#contatti", label: "Contatti" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="font-display text-xl sm:text-2xl tracking-tight text-foreground">
          Concorso <span className="italic text-primary">Mercurio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground/75 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contatti" variant="primary" className="px-5 py-2.5 text-xs">
            Richiedi il bando
          </Button>
        </div>

        <button
          aria-label="Apri menu"
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <Container className="flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <Button href="#contatti" variant="primary" className="mt-2 self-start px-5 py-2.5 text-xs">
              Richiedi il bando
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
