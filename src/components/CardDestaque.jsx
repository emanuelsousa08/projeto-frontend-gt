import React from "react";


const CardDestaque = ({ title, imagePath }) => {
    return ( 
        <div className="w-80 h-52 md:w-96 md:h-64 bg-slate-200 rounded-lg relative overflow-hidden">
      
      {/* Desconto */}
      <div className="absolute top-3 left-3 px-3.5 py-[5px] bg-lime-200 rounded-[29px] z-10">
        <span className="text-zinc-700 text-sm font-bold font-['Inter'] leading-snug tracking-wide">
          {title}
        </span>
      </div>

      {/* Imagem */}
      <img 
        src={imagePath} 
        alt="" 
        className="w-full h-full object-cover"
      />

      {/* Overlay com botão */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-[95%] z-20">
        <button className="secondary-button px-6 py-2 rounded-md">
          Comprar
        </button>
      </div>
    </div>
     );
}
 
export default CardDestaque;