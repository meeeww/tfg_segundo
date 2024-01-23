"use client";

import FeatureCard from "./featureCard";

const card = [
  {
    image: "",
    title: "Chat With Your Friends",
    text: "Easy to add and chat with your friends",
    direction: false,
  },
  {
    image: "",
    title: "Create Amazing Communities",
    text: "Create servers and chat with lots of people",
    direction: true,
  },
  { image: "", title: "Easy to navigate", text: "Simple and intuitive design", direction: false },
];

const Features = () => {
  return (
    <div className="w-full h-full bg-red-300">
      <h2 className="text-[60px] text-center font-semibold">
        Connect, Chat, and <br /> Create Memories - <br /> All in One Place
      </h2>
      <FeatureCard card={card} />
    </div>
  );
};

export default Features;
