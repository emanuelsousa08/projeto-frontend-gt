const ProductCard = ({ image, category, name, price, priceDiscount, showDiscount }) => {
  return (
    <div className="flex flex-col items-start ml-5 lg:ml-20">
      <div className="bg-white p-4 relative">
        {showDiscount && (
          <span className="absolute top-2 left-2 label-discount text-xs font-bold px-2 py-1 rounded-full">30% OFF</span>
        )}
        <img src={image || "/placeholder.svg"} alt={name} className="object-contain mx-auto h-[134px]" />
      </div>

      <h5 className="text-xs text-light-gray mt-2">{category}</h5>
      <h3 className="text-lg font-stretch-normal text-dark-gray-2">{name}</h3>
      <div className="my-2 flex items-center gap-2">
        {priceDiscount ? (
          <>
            <span className="text-light-gray-2 line-through text-2xl mb-4">{price}</span>
            <span className="text-dark-gray text-2xl font-medium mb-4">{priceDiscount}</span>
          </>
        ) : (
          <span className="text-dark-gray text-2xl font-medium mb-4">{price}</span>
        )}
      </div>
    </div>
  )
}

export default ProductCard