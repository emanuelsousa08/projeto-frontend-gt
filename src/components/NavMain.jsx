import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const NavMain = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="lg:hidden">
            <button
              className="text-dark-gray-2 text-2xl"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <i className="pi pi-bars"></i>
            </button>
          </div>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden lg:hidden ${
              isMenuOpen
                ? "max-h-[710px] max-w-[320px] opacity-100 mt-4"
                : "max-h-0 max-w-0 opacity-0"
            }`}
          >
            <div className="bg-white rounded-md shadow-md p-4 space-y-4">
              <div>
                <h2 className="text-dark-gray font-semibold mb-2">Páginas</h2>
                <nav className="flex flex-col space-y-2">
                  <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </NavLink>
                  <NavLink to="/products" onClick={() => setIsMenuOpen(false)}>
                    Produtos
                  </NavLink>
                  <NavLink
                    to="/categories"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Categorias
                  </NavLink>
                  <NavLink to="/my-orders" onClick={() => setIsMenuOpen(false)}>
                    Meus Pedidos
                  </NavLink>
                </nav>
              </div>

              <hr className="border-light-gray-2" />
            </div>
          </div>
          <nav className="hidden lg:flex mt-4">
            <div className="container mx-auto px-4">
              <ul className="flex overflow-x-auto whitespace-nowrap gap-8 py-1">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products">Produtos</NavLink>
                </li>
                <li>
                  <NavLink to="/categories">Categorias</NavLink>
                </li>
                <li>
                  <NavLink to="/my-orders">Meus Pedidos</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavMain;
