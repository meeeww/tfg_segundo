"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HeaderLinks from "./headerLinks";

const Header = () => {
  const mobileMenu = () => {
    document.querySelector(".menu")?.classList.toggle("translate-x-0");
  };

  const enlaces = [
    { text: "Home", url: "/" },
    { text: "About us", url: "/about" },
    { text: "Features", url: "/features" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <header className="w-full h-[75px] flex items-center justify-between md:justify-center gap-10 px-4 relative">
      <h2 className="text-2xl font-bold">ChitChat</h2>
      <HeaderLinks links={enlaces} />
      <Button className="bg-sky-500 hover:bg-sky-600 transition-all text-white px-4 py-2 rounded-md hidden md:block">
        Get Started
      </Button>
      <Button className="block md:hidden" onClick={mobileMenu}>
        menu
      </Button>
    </header>
  );
};

export default Header;
