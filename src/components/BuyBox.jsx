import { useContext } from "react";
import { useCart } from "../Context/CartProvider";
import StarRating from "./StarRating";

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
 
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const product = {
      id: reference,
      name,
      price,
      priceDiscount,
      description
    };
    addToCart(product);
  }
  

  return (
    <>
      <div className="flex flex-col gap-4">
        {/*NOME DO PRODUTO */}
        <h1 className="w-96 justify-start text-[32px] font-bold font-['Inter'] leading-9 tracking-wide">
          {name}
        </h1>
        {/*REFERÊNCIA DO PRODUTO */}
        <span className="w-96 h-5 justify-center text-dark-gray-3 text-[12px] font-medium font-['Inter'] leading-none tracking-wide">
          {reference}
        </span>
        {/*ESTRELAS/AVALIAÇÃO */}
        <div className="flex items-center gap-2">
          <div className="flex gap-[2px]">
            <StarRating fill={stars} />
          </div>
          <span className="text-sm font-medium font-['Inter] leading-enug tracking-tight text-light-gray">
            {rating} avaliações
          </span>
        </div>
        {/*PREÇO */}
        <div className="w-24 justify-start flex items-center gap-4">
          <span
            className={`text-dark-gray text-[32px] text-3xl font-bold font-['Inter'] leading-9 tracking-wide
            ${!priceDiscount ? " " : "text-dark-gray"}`}
          >
            {priceDiscount}
          </span>
          {priceDiscount && (
            <span className="text-[16px] text-light-gray-2 text-base font-normal font-['Inter'] line-through leading-7 tracking-wide">
              {price}
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
        <button 
        onClick={handleAddToCart}
        className="shop-button font-bold font-['Inter']">
          COMPRAR
        </button>
      </div>
    </>
  );
};

export default BuyBox;
