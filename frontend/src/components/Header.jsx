import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { to: "/numbers-assets", label: "Numeração de Ativos" },
    { to: null, label: "Checkin" },
    { to: null, label: "Checkout" },
    { to: null, label: "Ativos" },
    { to: null, label: "Acessórios" },
    { to: "/checklist", label: "Checklist" },
    { to: "/days-of-acident", label: "Dias sem Acidente" },
  ];

  return (
    <header className="bg-red-500 text-white">
      <div className="flex flex-row justify-between items-center h-24 p-8">
        <div className="flex flex-row items-center gap-4">
          <h1 className="text-3xl font-bold">Infraboys</h1>
        </div>
        {/* Desktop nav */}
        <nav className="hidden md:flex flex-row justify-between items-center gap-4 text-lg">
          {navLinks.map((link, idx) =>
            link.to ? (
              <Link
                key={idx}
                to={link.to}
                className="hover:underline hover:text-gray-200 transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <span
                key={idx}
                className="cursor-pointer hover:underline hover:text-gray-200 transition-colors"
              >
                {link.label}
              </span>
            )
          )}
        </nav>
        {/* Hamburger icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span
            className={`block h-1 w-8 bg-white rounded transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-8 bg-white rounded my-1 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-1 w-8 bg-white rounded transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>
      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>
      {/* Mobile menu drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-red-500 z-50 shadow-lg transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
        >
          &times;
        </button>
        <ul className="flex flex-col mt-20 gap-6 px-8 text-lg">
          {navLinks.map((link, idx) =>
            link.to ? (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="block py-2 hover:underline hover:text-gray-200 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ) : (
              <li key={idx}>
                <span className="block py-2 cursor-pointer hover:underline hover:text-gray-200 transition-colors">
                  {link.label}
                </span>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
