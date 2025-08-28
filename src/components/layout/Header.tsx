import React from "react";
import { Link } from "react-router-dom"; // Precisaremos instalar react-router-dom
import Button from "../ui/Button";
import Logo from "../../assets/logo.svg"; // Certifique-se de ter um logo SVG ou altere para PNG/JPG

const Header: React.FC = () => {
  const navItems = [
    { name: "Início", path: "/" },
    { name: "Serviços", path: "/services" },
    { name: "Sobre", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contato", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center fixed w-full z-50 top-0">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Logo Psique & Mente"
            className="h-10 w-auto mr-3"
          />
          <span className="text-xl font-bold text-gray-800 hidden md:block">
            Psique & Mente
          </span>
        </Link>
      </div>
      <nav className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <Button
          onClick={() => alert("Agendar Consulta")}
          className="hidden md:block"
        >
          Agendar Consulta
        </Button>
        {/* Adicionar um ícone de menu hamburger para mobile aqui */}
        <button className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none">
          {/* Ícone de menu (ex: um SVG ou ícone de biblioteca) */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
