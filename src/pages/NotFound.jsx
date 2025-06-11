import React from 'react';
import Logo from "../components/Logo";
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--secondary), var(--white))'
      }}
    >
      <div className="flex flex-col items-center text-center max-w-sm sm:max-w-md md:max-w-lg">
        <div className="mb-8 sm:mb-12">
          <div 
            className="flex justify-center items-center"
            style={{ 
              filter: 'drop-shadow(0 4px 20px var(--primary))'
            }}
          >
            <Logo location="header" />
          </div>
        </div>

        <div className="mb-8 sm:mb-10">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--dark-gray)' }}
          >
            Oops! Página não encontrada :(
          </h1>
          
          <p 
            className="text-base sm:text-lg leading-relaxed px-4"
            style={{ color: 'var(--dark-gray-2)' }}
          >
            Este recurso está sendo planejado com muito carinho e em breve estará disponível para você!
          </p>
        </div>

        <Link to={'/'}>   
            <button
            className="flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 cursor-pointer rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
            style={{ 
                backgroundColor: 'var(--primary)',
                boxShadow: '0 4px 15px rgba(201, 32, 113, 0.3)'
            }}
            onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--white)';
                e.target.style.color = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--primary)';
                e.target.style.color = 'var(--white)';
            }}
            >
            <Home className="w-5 h-5 transition-transform duration-300 hover:-translate-x-1" />
            <span className="text-sm sm:text-base">Voltar para a home</span>
            </button>
        </Link>
      </div>
    </div>
  );
}
 
export default NotFound;