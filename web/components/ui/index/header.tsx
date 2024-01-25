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

  return (
    <header className="w-full h-[75px] flex items-center justify-between md:justify-center gap-10 px-4 relative bg-sky-50">
      <h2 className="text-2xl font-bold">
        Chit<span className="text-sky-500">Chat</span>
      </h2>
      <HeaderLinks links={enlaces} />
      <Button className="bg-sky-500 hover:bg-sky-600 transition-all text-white px-4 py-2 rounded-md hidden md:block">
        Get Started
      </Button>
      <Button className="block md:hidden bg-[none] hover:bg-[none]" onClick={mobileMenu}>
        <Menu className="text-black" />
      </Button>
    </header>
  );
};

export default Header;
