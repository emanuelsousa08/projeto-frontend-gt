import React from "react";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function ProductPage() {
  const product = {
    name: "Tênis Nike Revolution 6 Next Nature Masculino",
    reference: "REF123456",
    stars: 4,
    rating: 138,
    price: 499.99,
    priceDiscount: 399.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    images: [
      "/produc-image-1.jpeg",
      "/produc-image-2.jpeg",
      "/produc-image-3.jpeg",
      "/produc-image-4.jpeg",
      "/produc-image-5.jpeg",
    ],
    options: {
      sizes: ["36", "37", "38", "39", "40", "41", "42"],
      colors: ["#000000", "#f87171", "#60a5fa", "#10b981"],
    },
  };
  const relatedProduct = [
    {
      id: 1,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: 200,
      priceDiscount: 100,
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 2,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: 200,
      priceDiscount: 100,
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 3,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: 200,
      priceDiscount: 100,
      image: "/k-swiss-v8-masc.png",
    },
    {
      id: 4,
      category: "Tênis",
      name: "K-Swiss V8 - Masculino",
      price: 200,
      priceDiscount: 100,
      image: "/k-swiss-v8-masc.png",
    },
  ];
  return (
    <div className="bg-main">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-4">
      <Gallery images={product.images} />
      <BuyBox
        name={product.name}
        reference={product.reference}
        stars={product.stars}
        rating={product.rating}
        price={`R$ ${product.price}`}
        priceDiscount={`R$ ${product.priceDiscount}`}
        description={product.description}
      >
        <ProductOptions options={product.options} shape="square" radius="6px" />
      </BuyBox>
    </div>
    <Section>
        <div className="container mx-auto w-3/4">
          <div className="my-8 mx-15 lg:my-8 justify-center items-center">
            <div className="flex justify-between items-center">
              <h5 className="text-dark-gray-2 text-2xl font-bold">
                Produtos Relacionados
              </h5>
              <Link to={'/products'} className="text-sm text-primary cursor-pointer font-normal flex items-center gap-1">
                  Ver todos <img src="./src/assets/Right-24px.svg" />
                </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {relatedProduct.map((product, index) => (
              <ProductCard
                key={product.id}
                image={product.image}
                category={product.category}
                name={product.name}
                price={`R$ ${product.price}`}
                priceDiscount={`R$ ${product.priceDiscount}`}
                showDiscount={index < 2}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
