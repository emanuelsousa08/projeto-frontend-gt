import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartProvider";

const IconCart = () => {
    const { cartItems } = useCart();
    const navigate = useNavigate();
    
    return ( 
        <>
        <button 
        className="relative cursor-pointer mx-auto md:ml-2 lg:ml-5 right-1"
        onClick={() => navigate('/pedidos')}>
              <i className="pi-shopping-cart"/>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartItems.length}
                </span>
              )}
            </button>
        </>
     );
}
 
export default IconCart;
