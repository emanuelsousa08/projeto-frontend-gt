import React, { useState } from "react";
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const Gallery = ({ images = [], width = '100%', height = 'auto', radius = 'xl'}) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
    }
  }

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  return (
    <div className="relative w-full max-w-6x1 mx-auto" style={{height}}>
      <div className="flex flex-col gap-4">
        {/* Imagem principal */}
        <div className={`w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px] rounded-${radius} overflow-hidden`}>
            <img
              src={images[current]}
              alt={`Imagem ${current + 1}`}
              className="w-full h-full object-contain"
            />
        </div>

      <button 
        onClick={handlePrevious}
        disabled={current === 0}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-30">
          <img src={arrowLeft} alt="Anterior" />
      </button>

      <button 
        onClick={handleNext}
        disabled={current === images.length - 1}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow disabled:opacity-30">
          <img src={arrowRight} alt="Próximo" />
      </button>

      </div>

      {/* Miniaturas */}
      <div className="flex gap-2 overflow-x-auto">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-16 h-16 border rounded-lg overflow-hidden transition-all duration-200 ${
              idx === current ? "border-primary" : "border-light-gray-2"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Gallery;