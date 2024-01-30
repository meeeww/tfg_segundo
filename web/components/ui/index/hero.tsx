"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import hero_image from "@/public/hero_image.svg";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const Hero = () => {
  return (
    <div className="w-full max-h-[585px] min-h-[322px] h-full gap-4 flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center md:text-left gap-4 max-w-[500px]">
        <Logo estilos="text-[60px] font-bold md:w-full" />
        <p className="text-center md:text-left text-[#6D7280]">
          Your Gateway to Meaningful Conversations, Authentic Friendships, and Unforgettable Moments
        </p>
        <div className="md:w-full flex gap-4">
          <Button>
            <Link href={"/register"}>Get Started</Link>
          </Button>
          <Button className=" hidden md:inline-flex" variant={"secondary"}>
            <Link href={"/login"}>Already have an account?</Link>
          </Button>
        </div>
      </div>
      <Image src={hero_image} width={500} height={500} alt={""} className="hidden md:block" />
    </div>
  );
};

export default Hero;
