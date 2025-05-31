import React from "react";
import StarIcon from "../assets/star-icon.svg";

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  const totalStars = 5;
  const filledStars = Math.round(stars);
  const emptyStars = totalStars - filledStars;
  return (
    <>
      <div className="flex flex-col gap-4">
        {/*NOME DO PRODUTO */}
        <h1 className="w-96 justify-start font-bold font-['Inter'] leading-9 tracking-wide text-dark-gray">
          {name}
        </h1>
        {/*REFERÊNCIA DO PRODUTO */}
        <span className="w-96 h-5 justify-center text-dark-gray-3 text-xs font-medium font-['Inter'] leading-none tracking-wide">
          {reference}
        </span>
        {/*ESTRELAS/AVALIAÇÃO */}
        <div className="flex items-center gap-2">
          <div className="flex gap-[2px]">
            {[...Array(filledStars)].map((_, i) => (
              <img
                key={"filled-" + i}
                src={StarIcon}
                alt="Star"
                className="w-4 h-4 rounded bg-warning p-[2px]"
              />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
              <img
                key={"empty-" + i}
                src={StarIcon}
                alt="Empty Star"
                className="w-4 h-4 rounded bg-white p-[2px] border border-warning"
              />
            ))}
          </div>
          <span className="text-sm font-medium font-['Inter] leading-enug tracking-tight text-light-gray-2">
            {rating}
          </span>
        </div>
        {/*PREÇO */}
        <div className="w-24 justify-start flex items-center gap-4">
          <span
            className={`text-dark-gray-2 text-[32px] text-3xl font-bold font-['Inter'] leading-9 tracking-wide
            ${priceDiscount ? "line-through text-light-gray-2" : "text-light-gray-2"}`}
          >
            {price}
          </span>
          {priceDiscount && (
            <span className="text-[16px] text-light-gray-2 text-base font-normal font-['Inter'] line-through leading-7 tracking-wide">
              {priceDiscount}
            </span>
          )}
        </div>
        {/*DESCRIÇÃO DO PRODUTO */}
        <p className="justify-start text-light-gray text-sm font-bold font-['Inter'] leading-snug tracking-wide">
          Descrição do produto
        </p>
        <p className="text-sm font-medium font-['Inter'] leading-snug tracking-wide text-dark-gray">
          {description}
        </p>
        {/*CHILDREN - AQUI VAI O ProductOptions */}
        <div className="flex flex-col gap-2">
          <p className="text-light-gray text-sm font-bold font-['Inter] leading-snug tracking-wide">
            Tamanho
          </p>
          {children}
        </div>
        {/*BOTÃO DE COMPRAR */}
        <button className="shop-button font-bold font-['Inter']">
          COMPRAR
        </button>
      </div>
    </>
  );
};

export default BuyBox;
