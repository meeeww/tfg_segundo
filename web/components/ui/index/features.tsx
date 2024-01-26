"use client";

import FeatureCard from "./featureCard";

const card = [
  {
    image: "hero_image.svg",
    title: "Chat With Your Friends",
    text: "Easy to add and chat with your friends",
    direction: false,
  },
  {
    image: "hero_image.svg",
    title: "Create Amazing Communities",
    text: "Create servers and chat with lots of people",
    direction: true,
  },
  {
    image: "hero_image.svg",
    title: "Easy to navigate",
    text: "Simple and intuitive design",
    direction: false,
  },
];

const Features = () => {
  return (
    <div className="w-full h-full py-8" id="features">
      <h2 className="md:text-[60px] text-4xl text-center font-semibold flex flex-col gap-1 md:gap-8">
        <span>Connect, Chat, and</span>
        <span>Create Memories -</span>
        <span className="hidden md:block">All in One Place</span>
      </h2>
      <FeatureCard card={card} />
    </div>
  );
};

export default Features;
