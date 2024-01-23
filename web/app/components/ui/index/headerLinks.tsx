"use client";

import Link from "next/link";

interface Link {
  text: string;
  url: string;
}

interface props {
  links: Link[];
}

const HeaderLinks: React.FC<props> = ({ links }) => {
  return (
    <ul className="gap-4 flex md:flex-row flex-col md:static absolute top-0 left-0 w-full md:w-auto bg-sky-50 mt-[70px] md:mt-0 items-center justify-center translate-x-[-100%] md:translate-x-0 menu transition-all p-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className="px-2 py-1 rounded-md transition-all"
        >
          {link.text}
        </Link>
      ))}
    </ul>
  );
};

export default HeaderLinks;
