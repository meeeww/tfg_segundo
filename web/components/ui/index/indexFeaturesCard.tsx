"use client";

interface Card {
  title: string;
  text: string;
  image: string;
  orientation: boolean;
}

interface props {
  cards: Card[];
}

const IndexFeaturesCard: React.FC<props> = ({ cards }) => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default IndexFeaturesCard;
