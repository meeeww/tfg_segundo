"use client";

interface props {
  estilos: string;
}

const Logo: React.FC<props> = ({ estilos }) => {
  return (
    <h2 className={estilos}>
      Chit<span className="text-sky-500">Chat</span>
    </h2>
  );
};

export default Logo;
