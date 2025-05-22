import ProductCard from "ProductCard"

const ProductList = ({ products, cardWidth = "w-full", cardHeight = "h-auto" }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} width={cardWidth} height={cardHeight} />
      ))}
    </div>
  )
}

export default ProductList