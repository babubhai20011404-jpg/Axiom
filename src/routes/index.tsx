import { createFileRoute } from "@tanstack/react-router";
import { Marquee, Nav } from "@/components/site/Nav";
import {
  About,
  CaseArc,
  CaseNova,
  CaseVanta,
  Deliverables,
  Faq,
  FinalCta,
  Footer,
  Hero,
  Offer,
  Problem,
  Process,
  WhoFor,
  WhyAxiom,
} from "@/components/site/sections";

const title = "AXIOM — 72-Hour Product Rescue";
const description =
  "AXIOM fixes critical product experiences for startups, SaaS, fintech and Web3 teams in 72 hours.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Process />
        <CaseNova />
        <CaseArc />
        <CaseVanta />
        <Deliverables />
        <WhoFor />
        <WhyAxiom />
        <Offer />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
