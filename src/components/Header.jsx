import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-3 py-3">
        <div className="flex columns-3 md:flex-row items-center justify-between gap-4">
          <div className="logo py-7">
            <Logo location="header" />
          </div>
          <div className="hidden md:block flex-grow mx-4 max-w-md relative">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              className="w-full bg-light-gray-3 p-3 border-none rounded-md outline-offset-2 focus:outline-primary focus:ring-primary transition-colors duration-250"
            />
            <i className="pi pi-search text-dark-gray-3 absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-250" />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block flex-grow px-2 max-w-md gap-4">
              <a
                href="#"
                className="underline text-dark-gray-2 font-normal px-4"
              >
                Cadastre-se
              </a>
              <a
                href="#"
                className="bg-primary text-white font-bold p-3 px-10 rounded-md"
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
              className="w-full bg-light-gray-3 p-3 border-none rounded-md outline-offset-4 focus:outline-primary focus:ring-primary"
            />
            <i className="pi pi-search text-light-gray-2 absolute right-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        <nav>
          <div className="container mx-auto px-4">
            <ul className="flex overflow-x-auto whitespace-nowrap justify-start py-1 gap-8">
              <li className="text-primary font-medium relative inline-block pb-1 border-b-2 border-primary">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-dark-gray-2 hover:text-primary relative inline-block pb-1 group transition-colors duration-200">
                <NavLink to="/productlistingpage">
                  Produtos
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li className="text-dark-gray-2 hover:text-primary relative inline-block pb-1 group transition-colors duration-200">
                <NavLink to="/categorias">
                  Categorias
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li className="text-dark-gray-2 hover:text-primary relative inline-block pb-1 group transition-colors duration-200">
                <NavLink to="/meus-pedidos">
                  Meus Pedidos
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
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
