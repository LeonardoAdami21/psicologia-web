import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-12 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1: Logo e Descrição */}
        <div className="flex flex-col items-start">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo Psique & Mente"
              className="h-10 w-auto mb-4 invert"
            />
          </Link>
          <p className="text-gray-400 text-sm">
            Seu espaço de cuidado psicológico e bem-estar. Oferecemos terapias
            online e presenciais com foco na sua saúde mental.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 text-sm"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-blue-400 text-sm"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-blue-400 text-sm"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-gray-400 hover:text-blue-400 text-sm"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-blue-400 text-sm"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contato e Redes Sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Fale Conosco</h3>
          <p className="text-gray-400 text-sm mb-2">
            Email: contato@psiquemente.com
          </p>
          <p className="text-gray-400 text-sm mb-4">Telefone: (XX) XXXX-XXXX</p>
          <div className="flex space-x-4">
            {/* Ícones de redes sociais - pode usar SVGs ou uma biblioteca de ícones */}
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-facebook-f"></i>FB
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-instagram"></i>IG
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400">
              <i className="fab fa-linkedin-in"></i>LN
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Psique & Mente. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
