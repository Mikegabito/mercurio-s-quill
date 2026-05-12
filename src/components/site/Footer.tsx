import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <Container className="flex flex-col items-center gap-3 text-center">
        <p className="font-display text-lg text-foreground">
          Concorso Mercurio · Carta Penna Calamaio · VIII edizione
        </p>
        <p className="text-sm italic text-foreground/60">
          La parola come incontro, memoria e cura.
        </p>
        <p className="mt-4 text-xs text-foreground/40">
          © {new Date().getFullYear()} Concorso Mercurio. Tutti i diritti riservati.
        </p>
        <p className="text-xs text-foreground/40">
          Designed by{" "}
          <a
            href="https://yaideacloudltd.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A4B2F] underline-offset-4 hover:text-[#4A2F24] hover:underline transition"
          >
            Yaidea Cloud Ltd®
          </a>
        </p>
      </Container>
    </footer>
  );
}
