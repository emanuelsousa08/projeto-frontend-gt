import { Link } from "react-router-dom"
import { useCart } from "../Context/CartProvider"

const ProductCard = ({ image, category, name, price, priceDiscount, showDiscount }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
  //   const productToAdd = {
  //     id: `ID-${name}-${category}`,
  //     name: name,
  //     price: Number(priceDiscount || price), // FORÇA conversão para número
  //     category: category,
  //     image: image
  //   };
  // console.log("PRODUTO ADICIONADO:", productToAdd); // Verifique isso!
  const productToAdd = {
    id: `REF-${Math.random().toString(36).slice(2, 9)}`,
    name: name,
    price: typeof priceDiscount === 'number' ? priceDiscount : 
          typeof price === 'number' ? price :
          Number((priceDiscount || price).toString().replace(/[^\d.-]/g, '')), //esse trecho específico é marmota do deepseek pra resolver o bug do carrinho, nem sei pra onde vai
    category: category,
    image: image
  };
  console.log("validado:", productToAdd);
  addToCart(productToAdd);

};
  return (
    <div className="flex flex-col items-start ml-5 lg:ml-20 max-w-[250px] gap-6">
      <div className="bg-white p-4 relative">
        {showDiscount && (
          <span className="absolute top-2 left-2 label-discount text-xs font-bold px-2 py-1 rounded-full">30% OFF</span>
        )}
        <Link to={'/productview'}>
          <img src={image || "/placeholder.svg"} alt={name} className="object-contain mx-auto h-[134px] w-full cursor-pointer" />
        </Link>
      </div>

      <div className="mt-3 w-full px-2 space-y-1">
      <h5 className="text-xs text-light-gray mt-2">{category}</h5>
      <Link to={'/productview'}>
        <h3 className="text-lg font-stretch-normal text-dark-gray-2 line-clamp-2 cursor-pointer">{name}</h3>
      </Link>
      <div className="my-2 flex items-center gap-2 mt-2">
        {priceDiscount ? (
          <>
            <span className="text-light-gray-2 line-through text-2xl mb-4">{price}</span>
            <span className="text-dark-gray text-2xl font-medium mb-4">{priceDiscount}</span>
          </>
        ) : (
          <span className="text-dark-gray text-2xl font-medium mb-4">{price}</span>
        )}
      </div>
      <button 
        onClick={handleAddToCart}
        className="primary-button w-full mt-2 mb-4 rounded-md">
        Adicionar ao carrinho
      </button>
      </div>
    </div>
  )
}

export default ProductCard;