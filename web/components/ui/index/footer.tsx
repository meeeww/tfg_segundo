"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import HeaderLinks from "./headerLinks";
import Logo from "@/components/ui/Logo";

const Footer = () => {
  const enlaces = [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about-us" },
    { text: "Pricing", url: "/pricing" },
    { text: "Features", url: "/#features" },
    { text: "Contact", url: "/contact" },
    { text: "Terms", url: "/terms" },
    { text: "Privacy", url: "/privacy" },
  ];

  return (
    <footer className="w-full min-h-[270px] h-full flex md:flex-col md:gap-8 items-center justify-center relative p-8 bg-neutral-50">
      <Separator className="hidden md:flex" />
      <div className="flex flex-col md:flex-row md:max-w-none max-w-[540px] gap-4 md:gap-10 min-w-[300px] md:items-center">
        <Logo estilos="text-center text-2xl font-bold" />
        <Separator className="w-full md:hidden" />
        <HeaderLinks
          links={enlaces}
          estilos="text-neutral-500 text-center flex flex-col md:flex-row w-full"
        />
        <div className="flex gap-4 items-center justify-center">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
      </div>
      <small className="text-neutral-500 absolute bottom-0 left-0 w-full text-center mb-2">
        © 2024 ChitChat. All Rights Reserved.
      </small>
    </footer>
  );
};

export default Footer;
