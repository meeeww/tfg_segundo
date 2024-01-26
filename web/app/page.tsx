import Features from "@/components/ui/index/features";
import Hero from "@/components/ui/index/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="px-[19px] md:px-[112px]">
        <Hero />
        <Features />
      </main>
    </>
  );
}
