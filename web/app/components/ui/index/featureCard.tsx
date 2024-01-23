"use client";
import Image from "next/image";
import React from "react";

interface cardInfo {
  image: string;
  title: string;
  text: string;
  direction: boolean;
}

interface props {
  card: cardInfo[];
}

const FeatureCard: React.FC<props> = ({ card }) => {
  return (
    <>
      <div>
        {card.map((cardItem, index) => (
          <div
            key={index}
            className={`w-full h-full flex ${cardItem ? "flex-row-reverse" : "flex-row"}`}
          >
            <Image src={cardItem.image} alt="" width={500} height={330} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureCard;
