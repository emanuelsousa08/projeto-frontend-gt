const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="flex flex-col">
      {/* Imagem do produto */}
      <div className="w-[292px] h-[321px] overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Nome do produto */}
      <h3 className="mt-3 text-lg font-medium">{name}</h3>

      {/* Preços */}
      <div className="mt-2 flex items-center gap-2">
        {priceDiscount ? (
          <>
            {/* Preço original com linha cortando */}
            <span className="text-gray-400 line-through text-2xl">{price}</span>

            {/* Preço com desconto */}
            <span className="text-gray-800 text-2xl font-medium">{priceDiscount}</span>
          </>
        ) : (
          /* Apenas preço normal */
          <span className="text-gray-800 text-2xl font-medium">{price}</span>
        )}
      </div>
    </div>
  )
}

export default ProductCard