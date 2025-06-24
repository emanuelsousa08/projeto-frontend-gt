import ProductCard from "./ProductCard"
import { products } from "../data/product";

const ProductList = () => {

  // const products = [
  //   {
  //     id: 1,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 2,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 3,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 4,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 5,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 6,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 7,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 8,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 9,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 10,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 11,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 12,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 13,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 14,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 15,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 16,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 17,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 18,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 19,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  //   {
  //     id: 20,
  //     category: "Tênis",
  //     name: "K-Swiss V8 - Masculino",
  //     price: "$200",
  //     priceDiscount: "$100",
  //     image: "/k-swiss-v8-masc.png",
  //   },
  // ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {products.map((product, index) => (
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
  )
}

export default ProductList