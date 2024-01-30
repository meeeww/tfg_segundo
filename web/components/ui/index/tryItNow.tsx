"use client";

import Link from "next/link";
import { Button } from "../button";

const TryItNow = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 py-8">
      <h2 className="text-6xl font-bold text-center">
        What Are You <br />
        Waiting For
      </h2>
      <p className="text-neutral-500">Try It Now For Free</p>
      <Button>
        <Link href={"/login"}>Get started</Link>
      </Button>
    </div>
  );
};

export default TryItNow;
