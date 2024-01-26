import Image from "next/image";
import Header from "./components/ui/index/header";
import Hero from "./components/ui/index/hero";
import Features from "./components/ui/index/features";

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
