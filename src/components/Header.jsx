import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <button
              className="text-gray-700 text-2xl"
              onClick={() => setIsMenuOpen(prev => !prev)}
            >
              <i className="pi pi-bars"></i>
            </button>
          </div>

          <div className="flex items-center mx-4 scale-75 lg:scale-100 lg:py-7">
            <Logo location="header" />
          </div>

          <div className="hidden lg:flex relative w-full max-w-lg pl-6">
            <input
              type="text"
              placeholder="Pesquisar produto..."
              className="w-full bg-light-gray-3 p-3 border-none rounded-md outline-offset-2 focus:outline-primary focus:ring-primary transition-colors duration-250"
            />
            <i className="pi pi-search text-light-gray-2 absolute right-4 top-1/2 -translate-y-1/2" />
          </div>

          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <button
                className={`transition-colors duration-300 ${isSearchOpen ? 'text-primary':'text-light-gray-2'}`}
                onClick={() => setIsSearchOpen(prev => !prev)}
              >
                <i className="pi pi-search"></i>
              </button>
            </div>

            <div className="hidden lg:flex gap-4">
              <a
                href="#"
                className="underline text-dark-gray-2 font-normal px-3 py-2"
              >
                Cadastre-se
              </a>
              <a
                href="#"
                className="bg-primary text-white font-bold px-3 py-2 rounded"
              >
                Entrar
              </a>
            </div>

            <div className="relative cursor-pointer mx-0 lg:ml-10 scale-90 right-3 lg:right-1 lg:scale-100">
              <img
                src="/src/assets/mini-cart.svg"
                alt="Carrinho"
                className="w-6 h-6"
              />
              <div className="absolute -top-1 -right-3 bg-primary text-white text-xs font-bold py-1 px-1 scale-90 lg:scale-100 rounded-full w-4.5 h-4.5 inline-flex items-center justify-center">
                2
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${
            isSearchOpen ? 'max-h-32 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="w-full p-3 bg-light-gray-3 rounded-md focus:outline-primary"
          />
        </div>

        <div className={`transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white rounded-md shadow-md p-4 space-y-4">
            <div>
              <h2 className="text-dark-gray font-semibold mb-2">Páginas</h2>
              <nav className="flex flex-col space-y-2">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/productlistingpage" onClick={() => setIsMenuOpen(false)}>
                  Produtos
                </NavLink>
                <NavLink to="/notfound" onClick={() => setIsMenuOpen(false)}>
                  Categorias
                </NavLink>
                <NavLink to="/notfound" onClick={() => setIsMenuOpen(false)}>
                  Meus Pedidos
                </NavLink>
              </nav>
            </div>

            <hr className="border-light-gray-2" />

            <div className="flex flex-col space-y-2">
              <a href="#" className="bg-primary text-white font-bold px-4 py-2 rounded text-center">
                Entrar
              </a>
              <a href="#" className="underline text-dark-gray-2 font-normal text-center">
                Cadastre-se
              </a>
            </div>
          </div>
        </div>


        <nav className="hidden lg:block mt-4">
          <div className="container mx-auto px-4">
            <ul className="flex overflow-x-auto whitespace-nowrap gap-8 py-1">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/productlistingpage">Produtos</NavLink></li>
              <li><NavLink to="/notfound">Categorias</NavLink></li>
              <li><NavLink to="/notfound">Meus Pedidos</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
