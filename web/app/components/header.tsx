import { Link } from "@remix-run/react";
import menu from "../../public/assets/menu.png";

export default function Header() {
  const handleMenu = () => {
    document.querySelector(".menu_mobile")?.classList.toggle("hidden");
  };

  return (
    <>
      {/* Desktop menu */}
      <header className="w-full h-[72px] flex justify-between items-center md:px-20 px-4 bg-[var(--color-fondo-componentes)]  font-semibold">
        <span className="text-4xl font-bold">ChitChat</span>
        <nav className="md:flex hidden ">
          <ul className="flex gap-8 text-lg">
            <li className="hover:text-[var(--color-principal)] transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[var(--color-principal)] transition-all">
              <Link to="/about">About us</Link>
            </li>
            <li className="hover:text-[var(--color-principal)] transition-all">
              <Link to="/features">Features</Link>
            </li>
            <li className="hover:text-[var(--color-principal)] transition-all">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden relative" onClick={() => handleMenu()}>
          <img src={menu} alt="Menu" />
        </button>
        <button className="md:block hidden bg-[var(--color-principal)] px-8 py-2 rounded-md text-white hover:bg-[var(--color-principal-dark)] transition-all">
          <Link to={"/app"}>Get Started</Link>
        </button>
      </header>

      {/* Mobile menu */}
      <div className="hidden py-4 md:hidden mt-[72px] absolute top-0 left-0 w-full bg-[var(--color-fondo-componentes)] text-lg font-semibold menu_mobile">
        <nav className="md:hidden ">
          <ul className="flex flex-col text-center gap-4">
            <li className="hover:text-[var(--color-principal)] transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[var(--color-principal)] transition-all">
              <Link to="/about">About us</Link>
            </li>
            <li className="hover:text-[var(--color-principal)] transition-all">
              <Link to="/features">Features</Link>
            </li>
            <li className="hover:text-[var(--color-principal)] transition-all">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
