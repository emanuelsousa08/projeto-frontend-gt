import React from "react";
import Logo from "./Logo";

const Header = () => {
    return (
        <header className="bg-white shadow-md flex items-center justify-between gap-6 w-full">
            <div className="logo py-7 px-15">
                <Logo location="header"  />
            </div>
            <div className="hidden md:block flex-grow mx-8 max-w-md relative">
                <input 
                type="text" 
                placeholder="Pesquisar produto..." 
                className="w-full bg-light-gray-3 p-3 border-none rounded-md focus:outline focus:ring-pink-600"/>
                <i className="pi pi-search text-light-gray-2 absolute right-4 top-1/2 transform -translate-y-1/2" />
            </div>
            <div className="md:block flex-grow mx-8 max-w-md">
                <a href="#" className="underline text-dark-gray-2 font-normal px-4">Cadastre-se</a>
                <a href="#" className="bg-primary text-white font-bold p-3 px-10 rounded-md">Entrar</a>
            </div>
            

        </header>
    );
}

export default Header;