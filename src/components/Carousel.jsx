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
      className={`relative overflow-hidden ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
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
            <div className="absolute top-16 right-16 w-36 h-36">
              <div className="relative w-full h-full">
                <img src={ornament} />
              </div>
            </div>
            {/* label, titulo, texto e botão */}
            <div className="flex items-center justify-between px-16 py-12 h-full relative z-10">
              <div className="flex-1 pr-8">
                <p className={`text-sm font-medium mb-3 ${slide.labelColor || 'text-warning'}`}>
                  {slide.label}
                </p>
                <h2 className={`text-5xl font-bold mb-4 leading-tight ${slide.titleColor || 'text-dark-gray'}`}>
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
                {/* imagens dos tenis */}
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
        {/* seta esquerda */}
      <button
        onClick={goToPrevious}
        disabled={isFirstSlide}
        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isFirstSlide 
            ? 'cursor-not-allowed opacity-50' 
            : 'hover:bg-light-gray cursor-pointer hover:shadow-xl'
        }`}
        style={{ zIndex: 10 }}
      >
        <img
          src={arrowleft}
          alt="Anterior"
          className={`w-6 h-6 ${isFirstSlide ? 'opacity-50' : ''}`}
        />
      </button>
        {/* seta direita */}
      <button
        onClick={goToNext}
        disabled={isLastSlide}
        className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isLastSlide 
            ? 'cursor-not-allowed opacity-50' 
            : 'hover:bg-light-gray cursor-pointer hover:shadow-xl'
        }`}
        style={{ zIndex: 10 }}
      >
        <img
          src={arrowright}
          alt="Próximo"
          className={`w-6 h-6 ${isLastSlide ? 'opacity-50' : ''}`}
        />
      </button>
        {/* indicador de posição do slide */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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