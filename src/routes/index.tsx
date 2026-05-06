import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { IlConcorso } from "@/components/site/IlConcorso";
import { EdizioniCarousel } from "@/components/site/EdizioniCarousel";
import { VideoCarousel } from "@/components/site/VideoCarousel";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Concorso Mercurio · VIII edizione · Concorso letterario" },
      {
        name: "description",
        content:
          "Concorso letterario Mercurio: poesia e narrativa per chi esercita una professione sanitaria. Una stanza luminosa per la parola che cura.",
      },
      { property: "og:title", content: "Concorso Mercurio · VIII edizione" },
      {
        property: "og:description",
        content:
          "Una stanza luminosa per la parola che cura. Concorso letterario per esercenti le professioni sanitarie.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <IlConcorso />
        <EdizioniCarousel />
        <VideoCarousel />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
