import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-3 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between space-x-4">
          <div className="logo py-7">
            <Logo location="header" />
          </div>
          <div className="hidden md:block flex-grow max-w-3xl relative">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              className="w-full bg-light-gray-3 p-3 border-none rounded-md outline-offset-2 focus:outline-primary focus:ring-primary transition-colors duration-250"
            />
            <i className="pi pi-search text-dark-gray-3 absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-250" />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block flex-grow px-2 max-w-md gap-8">
              <a
                href="#"
                className="underline text-dark-gray-2 font-normal px-4"
              >
                Cadastre-se
              </a>
              <a
                href="#"
                className="bg-primary text-white font-bold"
              >
                Entrar
              </a>
            </div>
            <div className="hidden md:block mx-6 max-w-md relative cursor-pointer">
              <img
                src="/src/assets/mini-cart.svg"
                alt="Carrinho"
                className="w-6 h-6 inline-block"
              />
              <div className="absolute -top-2 -right-3 text-white bg-primary text-bold text-xs py-1 px-2 rounded-full w-5 h-5 flex items-center justify-center">
                2
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden w-full">
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              className="md:hidden w-full bg-light-gray-3 p-3 border-none rounded-md outline-offset-4 focus:outline-primary focus:ring-primary"
            />
            <i className="pi pi-search text-light-gray-2 absolute right-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        <nav>
          <div className="container mx-auto px-4">
            <ul className="flex overflow-x-auto whitespace-nowrap hover:text-primary justify-start py-1 gap-8">
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/productlistingpage">
                  Produtos
                </NavLink>
              </li>
              <li>
                <NavLink to="/notfound">
                  Categorias
                </NavLink>
              </li>
              <li>
                <NavLink to="/notfound">
                  Meus Pedidos
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
