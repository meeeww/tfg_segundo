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

export default function Header() {
  return (
    <header className="w-full h-[75px] flex items-center justify-between md:justify-center gap-10 px-4 relative">
      <h2 className="text-2xl font-bold">ChitChat</h2>
      <ul className="gap-4 hidden md:flex">
        <Link href={"/"} className="hover:bg-sky-200 px-2 py-1 rounded-md transition-all">
          Home
        </Link>
        <Link href={"/about"} className="hover:bg-sky-200 px-2 py-1 rounded-md transition-all">
          About us
        </Link>
        <Link href={"/features"} className="hover:bg-sky-200 px-2 py-1 rounded-md transition-all">
          Features
        </Link>
        <Link href={"/contact"} className="hover:bg-sky-200 px-2 py-1 rounded-md transition-all">
          Contact
        </Link>
      </ul>
      <Button className="bg-sky-500 hover:bg-sky-600 transition-all text-white px-4 py-2 rounded-md hidden md:block">
        Get Started
      </Button>
    </header>
  );
}
