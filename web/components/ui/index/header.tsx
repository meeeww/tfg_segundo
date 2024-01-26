"use client";

import { Menu } from "lucide-react";
import HeaderLinks from "./headerLinks";
import { Button } from "@/components/ui/button";

const Header = () => {
  const mobileMenu = () => {
    document.querySelector(".menu")?.classList.toggle("!translate-x-0");
  };

  const enlaces = [
    { text: "Home", url: "/" },
    { text: "About us", url: "/about" },
    { text: "Features", url: "/features" },
    { text: "Contact", url: "/contact" },
  ];

  const estilos =
    "gap-4 flex md:flex-row flex-col md:static absolute top-0 left-0 w-full md:w-auto bg-sky-50 mt-[70px] md:mt-0 items-center justify-center translate-x-[-100%] md:translate-x-0 menu transition-all p-4";

  return (
    <header className="w-full h-[75px] flex items-center justify-between md:justify-center gap-10 px-4 relative bg-sky-50">
      <h2 className="text-2xl font-bold">
        Chit<span className="text-sky-500">Chat</span>
      </h2>
      <HeaderLinks links={enlaces} estilos={estilos} />
      <Button className=" hidden md:block">Get Started</Button>
      <Button className="block md:hidden bg-[none] hover:bg-[none]" onClick={mobileMenu}>
        <Menu className="text-black" />
      </Button>
    </header>
  );
};

export default Header;
