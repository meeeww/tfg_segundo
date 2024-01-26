"use client";

import IndexFeaturesCard from "./indexFeaturesCard";

const cards = [
  { title: "titulo", text: "text", image: "url", orientation: true },
  { title: "titulo", text: "text", image: "url", orientation: true },
  { title: "titulo", text: "text", image: "url", orientation: true },
  { title: "titulo", text: "text", image: "url", orientation: true },
];

const IndexFeatures = () => {
  return (
    <div className="my-8">
      <h2 className="text-4xl font-semibold w-full text-center">
        Connect, chat and Create Memories
      </h2>
      <div className="w-full items-center justify-center">
        <IndexFeaturesCard cards={cards} />
      </div>
    </div>
  );
};

export default IndexFeatures;
