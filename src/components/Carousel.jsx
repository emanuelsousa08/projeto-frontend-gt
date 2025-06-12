import { useState } from "react";
import arrowleft from '../assets/arrow-left.svg';
import arrowright from '../assets/arrow-right.svg';
import ornament from '../assets/decoracao.svg';

const Carousel = ({ 
  width = "800",
  height = "400", 
  radius = "8px",
  slides = [],
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Se não há slides, não renderiza nada
  if (!slides || slides.length === 0) {
    return <div>Nenhum slide encontrado</div>;
  }

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <div 
      className={`relative overflow-hidden w-full h-80 sm:h-96 md:h-[400px] ${className}`}
      style={{
        width: window.innerWidth >= 768 ? `${width}px` : '100%',
        height: window.innerWidth >= 768 ? `${height}px` : 'auto',
        borderRadius: radius
      }}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {slides.map((slide, index) => (
          // plano de fundo e icone
          <div key={index}
            className={`w-full h-full flex-shrink-0 relative overflow-hidden ${slide.backgroundColor || 'bg-light-gray-3'}`}
            style={{ borderRadius: radius }}>
            
            {/* Ornamento - visível em todos os tamanhos */}
            <div className="absolute top-4 right-4 w-16 h-16 sm:top-8 sm:right-8 sm:w-24 sm:h-24 md:top-16 md:right-16 md:w-36 md:h-36">
              <div className="relative w-full h-full">
                <img src={ornament} alt="Ornamento" />
              </div>
            </div>

            {/* Layout Mobile: Vertical Stack */}
            <div className="flex flex-col sm:hidden h-full">
              {/* Imagem do produto - Mobile */}
              <div className="flex-1 flex justify-center items-center px-4 pt-8 pb-4">
                <div className="relative">
                  {slide.highlight && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-full blur-3xl transform scale-150"></div>
                  )}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="relative z-10 max-w-full max-h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    style={{ maxWidth: '280px', maxHeight: '200px' }}
                  />
                </div>
              </div>

              {/* Conteúdo de texto - Mobile */}
              <div className="px-4 pb-8 text-center">
                <p className={`text-xs font-medium mb-2 ${slide.labelColor || 'text-warning'}`}>
                  {slide.label}
                </p>
                <h2 className={`text-2xl font-bold mb-3 leading-tight ${slide.titleColor || 'text-dark-gray'}`}>
                  {slide.title}
                </h2>
                <p className={`text-sm leading-relaxed mb-6 ${slide.textColor || 'text-dark-gray-2'}`}>
                  {slide.text}
                </p>
                <button 
                  className="primary-button font-semibold w-full sm:w-auto"
                  onClick={slide.onButtonClick}
                >
                  {slide.buttonText || 'Ver Ofertas'}
                </button>
              </div>
            </div>

            {/* Layout Desktop: Horizontal (oculto no mobile) */}
            <div className="hidden sm:flex items-center justify-between px-8 py-8 md:px-16 md:py-12 h-full relative z-10">
              <div className="flex-1 pr-4 md:pr-8">
                <p className={`text-sm font-medium mb-3 ${slide.labelColor || 'text-warning'}`}>
                  {slide.label}
                </p>
                <h2 className={`text-3xl md:text-5xl font-bold mb-4 leading-tight ${slide.titleColor || 'text-dark-gray'}`}>
                  {slide.title}
                </h2>
                <p className={`text-base leading-relaxed mb-8 max-w-md ${slide.textColor || 'text-dark-gray-2'}`}>
                  {slide.text}
                </p>
                <button 
                  className="primary-button font-semibold"
                  onClick={slide.onButtonClick}
                >
                  {slide.buttonText || 'Ver Ofertas'}
                </button>
              </div>
              
              {/* Imagem dos tênis - Desktop */}
              <div className="flex-1 flex justify-center items-center relative">
                <div className="relative">
                  {slide.highlight && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-full blur-3xl transform scale-150"></div>
                  )}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="relative z-10 max-w-full max-h-full object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    style={{ maxWidth: '500px', maxHeight: '400px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Seta esquerda */}
      <button
        onClick={goToPrevious}
        disabled={isFirstSlide}
        className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${
          isFirstSlide 
            ? 'cursor-not-allowed opacity-50' 
            : 'hover:bg-light-gray cursor-pointer hover:shadow-xl'
        }`}
        style={{ zIndex: 10 }}
      >
        <img
          src={arrowleft}
          alt="Anterior"
          className={`w-4 h-4 sm:w-6 sm:h-6 ${isFirstSlide ? 'opacity-50' : ''}`}
        />
      </button>

      {/* Seta direita */}
      <button
        onClick={goToNext}
        disabled={isLastSlide}
        className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 ${
          isLastSlide 
            ? 'cursor-not-allowed opacity-50' 
            : 'hover:bg-light-gray cursor-pointer hover:shadow-xl'
        }`}
        style={{ zIndex: 10 }}
      >
        <img
          src={arrowright}
          alt="Próximo"
          className={`w-4 h-4 sm:w-6 sm:h-6 ${isLastSlide ? 'opacity-50' : ''}`}
        />
      </button>

      {/* Indicador de posição do slide */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary' 
                : 'bg-white opacity-60 hover:opacity-80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;