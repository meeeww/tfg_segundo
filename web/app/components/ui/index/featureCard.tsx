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
            className={`w-full h-full flex items-center justify-center flex-col text-center ${
              cardItem.direction ? "md:flex-row-reverse " : "md:flex-row "
            }`}
          >
            <Image src={cardItem.image} alt="" width={500} height={500} />
            <div>
              <h3 className="font-semibold text-2xl">{cardItem.title}</h3>
              <p>{cardItem.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureCard;
