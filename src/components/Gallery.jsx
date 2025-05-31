import React, { useState } from "react";

const Gallery = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Imagem principal */}
      <div className="w-full aspect-square overflow-hidden rounded-2xl border border-light-gray-2">
        <img
          src={images[current]}
          alt={`Imagem ${current + 1}`}
          className="w-full h-full object-contain"
        />
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