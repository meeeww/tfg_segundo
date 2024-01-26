"use client";
import Link from "next/link";
import React from "react";
interface Link {
  text: string;
  url: string;
}

interface props {
  links: Link[];
  estilos: string;
}

const HeaderLinks: React.FC<props> = ({ links, estilos }) => {
  return (
    <ul className={estilos}>
      {links.map((link, index) => (
        <Link key={index} href={link.url} className="px-2 py-1 rounded-md transition-all">
          {link.text}
        </Link>
      ))}
    </ul>
  );
};
export default HeaderLinks;
