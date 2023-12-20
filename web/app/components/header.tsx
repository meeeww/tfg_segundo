import { Link } from "@remix-run/react";
import menu from "../../public/assets/menu.png";

export default function Header() {
  const handleMenu = () => {
    document.querySelector(".menu_mobile")?.classList.toggle("hidden");
  };

  return (
    <>
      {/* Desktop menu */}
      <header className="w-full h-[72px] flex justify-between items-center px-4">
        <span className="text-2xl font-bold">ChitChat</span>
        <nav className="md:flex hidden gap-4">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/features">Features</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden relative" onClick={() => handleMenu()}>
          <img src={menu} alt="Menu" />
        </button>
        <button className="md:block hidden">
          <Link to={"#"}>Get Started</Link>
        </button>
      </header>

      {/* Mobile menu */}
      <div className="hidden py-4 md:hidden mt-[72px] absolute top-0 left-0 w-full bg-red-300 transition-all duration-300 menu_mobile">
        <nav className="md:hidden flex flex-col text-center gap-4">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/features">Features</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
