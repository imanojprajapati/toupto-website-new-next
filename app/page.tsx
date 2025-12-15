import ProductHero from "@/components/sections/ProductHero";
import ProductShowcase from "@/components/sections/ProductShowcase";
import VisiTrackKiosk from "@/components/sections/VisiTrackKiosk";
import EAPWorkflow from "@/components/sections/EAPWorkflow";
import TrustLogos from "@/components/sections/TrustLogos";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <ProductHero />
      <ProductShowcase />
      <VisiTrackKiosk />
      <EAPWorkflow />
      <TrustLogos />
      <FinalCTA />
    </>
  );
}

