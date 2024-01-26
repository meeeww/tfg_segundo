import Faq from "@/components/ui/index/faq";
import Features from "@/components/ui/index/features";
import Hero from "@/components/ui/index/hero";
import TryItNow from "@/components/ui/index/tryItNow";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="px-[19px] md:px-[112px]">
        <Hero />
        <Features />
        <TryItNow />
        <Faq />
      </main>
    </>
  );
}
