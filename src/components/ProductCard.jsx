import React from "react";

const ProductCard = ({image, name, price, priceDiscount}) => {

    const hasDiscount = !!priceDiscount;
    return ( 
        <div className="w-[292px] h-[321px]">
        <div className="w-[292px] h-[321px]">
            {image}
        </div>
        <div className="mt-2">
                <h1 className="font-[Inter] font-[400px] leading-[38px] text-[24px] tracking-[0.75px]">{name}</h1>
            <div className="flex items-center gap-2">
                <span className={`font-[Inter] font-[400px] leading-[38px] text-[24px] tracking-[0.75px]
                    ${hasDiscount ? "text-light-gray line-through": "text-dark-gray"} ` }>
                        {price}
                </span>
                
                {hasDiscount && (
                <span className="font-[Inter] text-[24px] text-dark-gray">{priceDiscount}</span>)}
            </div>
        </div>
        </div>
     );
}
 
export default ProductCard;