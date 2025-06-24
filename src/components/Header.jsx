import React, { useState } from "react";
import Logo from "./Logo";
import { NavLink, Link } from "react-router-dom";
import SearchBar from './SearchBar';
import NavMain from './NavMain';
import IconCart from "./IconCart";
import AuthLink from "./AuthLink";


const Header = () => {
  //const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <header className="bg-white shadow-md w-full">
      <div className="container mx-auto px-3 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center mx-4 scale-75 lg:scale-100 lg:py-7">
            <Link to="/">
              <Logo location="header" />
            </Link>
          </div>
          <SearchBar />
          <div className="flex items-center gap-4"> 
            {/* <div className="relative cursor-pointer mx-auto md:ml-2 lg:ml-5 right-1">
              <img
                src="/src/assets/mini-cart.svg"
                alt="Carrinho"
                className="min-w-5 min-h-5"
              />
              <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                2
              </div>
            </div> */}
            <IconCart />
          </div>
        </div>
        <AuthLink />
        <NavMain />
      </div>
    </header>
    </>
  );
};

export default Header;
