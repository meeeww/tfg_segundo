import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <>
      <footer className="w-full min-h-40 max-h-[600px] bg-[var(--color-fondo-componentes)] flex flex-col md:flex-row  items-center justify-center md:justify-between md:px-20 px-4">
        <span className="text-2xl font-bold">ChitChat</span>
        <div className="divider h-[1px] w-full bg-[var(--color-light)] my-6 md:hidden"></div>
        <ul className="text-center flex flex-col md:flex-row gap-6 font-semibold">
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
          <li className="hover:text-[var(--color-principal)] transition-all">
            <Link to="/terms">Terms</Link>
          </li>
          <li className="hover:text-[var(--color-principal)] transition-all">
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
        <span className="mt-20 md:mt-0">
          <small>©2023 ChitChat. All Rights Reserved.</small>
        </span>
      </footer>
    </>
  );
}
