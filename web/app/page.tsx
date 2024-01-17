import Image from "next/image";
import Header from "./components/ui/index/header";
import Hero from "./components/ui/index/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="px-[19px] md:px-[112px]">
        <Hero />
      </main>
    </>
  );
}
