import React from "react";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";

export default function ProductPage() {
  const product = {
    name: "Tênis Esportivo",
    reference: "REF123456",
    stars: 4,
    rating: 138,
    price: "R$ 499,90",
    priceDiscount: "R$ 399,90",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    images: [
      "/product-image-1.jpeg",
      "/product-image-2.jpeg",
      "/product-image-3.jpeg",
      "/product-image-4.jpeg",
      "/product-image-5.jpeg"
    ],
    options: {
      sizes: ["36", "37", "38", "39", "40", "41", "42"],
      colors: ["#000000", "#f87171", "#60a5fa", "#10b981"]
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-4">
      <Gallery images={product.images} />
      <BuyBox
        name={product.name}
        reference={product.reference}
        stars={product.stars}
        rating={product.rating}
        price={product.price}
        priceDiscount={product.priceDiscount}
        description={product.description}
      >
        <ProductOptions options={product.options} shape="square" radius="6px" />
      </BuyBox>
    </div>
  );
}
