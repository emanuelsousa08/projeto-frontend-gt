import { useCart } from '../Context/CartProvider';
import { useState } from 'react';
import { FaQrcode,FaCreditCard, FaMoneyBill } from "react-icons/fa";
import { formatPrice } from '../utils/formatPrice';

const Pedidos = () => {
    const {cartItems, removeFromCart} = useCart();
    const [itemToDelete,setItemToDelete] = useState(null);
    const [paymentOption, setPaymentOption] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const handleDelete = () => {
        // const productId = cartItems[itemToDelete]?.id;
        if(itemToDelete !== null){
            removeFromCart(itemToDelete);
            setItemToDelete(null);
        }
    };

    const handleOverlayClick = (e, closeFunc) => {
        if (e.target === e.currentTarget) {
        closeFunc();
        }
    };

    const handleSimPayment = () => {
        setPaymentOption(false);
        setSuccessAlert(true);
        setTimeout(()=>{
            setSuccessAlert(false);
        }, 3000)
    }
    //aplica desconto no carrinho todo
    const total = cartItems.reduce((sum,item)=>{
        if(!item || typeof item.price !== 'number') return sum;
        return sum + item.price * 0.7;
    }, 0);
    // const total = cartItems.reduce((sum, item) => {
    //     const price = typeof item?.price === 'string' 
    //         ? Number(item.price.replace(/[^0-9.-]+/g, '')) 
    //         : item?.price || 0;
    //     return sum + (price * 0.7); // 30% de desconto
    // }, 0);
//     const total = cartItems.reduce((sum, item) => {
//         const price = Number(item?.price) || 0; // Garante número
//         return sum + (price * 0.7); // 30% de desconto
// }, 0);
    return ( 
        <>
        <div className="px-10 py-6 relative">
            {successAlert && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50 animate-fade-in-out">
                    Compra realizada com sucesso!
                </div>
            )}
            <h1 className="text-2xl font-bold text-primary mb-4">Meus pedidos</h1>
            {cartItems.length === 0 ? (
                <p className='text-dark-gray-2'>Seu carrinho está vazio.</p>
            ): (
                <>
                <ul className="space-y-4">
                    {cartItems.map((item) => (
                        <li key={item.id} className="border p-4 rounded shadow-sm bg-white flex justify-between items-center">
                            <div>
                                <p className="font-medium">{item.name || "Produto sem título"}</p>
                                <p className="text-sm text-dark-gray-3">{item.category || "Categoria desconhecida"}</p>
                                <span className="font-bold text-primary">
                                    R${typeof item?.price === 'number' ? (item.price * 0.7).toFixed(2) : "0.00"}
                                    {/* R$ {formatPrice(item?.price * 0.7)} */}
                                </span>
                            </div>
                            <button
                            onClick={() => setItemToDelete(item.id)}
                            className="text-red-500 hover:text-red-700 font-medium"
                            >
                            Excluir
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 text-right text-lg font-semibold text-primary">
                    {/* Total: R$ {formatPrice(total)} */}
                    Total: R$ {total.toFixed(2)}
                </div>
                <div className="mt-6 flex justify-end">
                    <button
                    onClick={() => setPaymentOption(true)}
                    className="px-6 shop-button rounded">Finalizar</button>
                </div>
                {itemToDelete !== null && (
                    <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={(e) => handleOverlayClick(e, () => setItemToDelete(null))}>
                        <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center relative">
                            <button
                                onClick={() => setItemToDelete(null)}
                                className="absolute top-2 right-3 text-light-gray text-lg hover:text-dark-gray"
                            >
                            ×
                            </button>
                            <p className='mb-4 text-lg'>Tem certeza de que deseja excluir este item?</p>
                            <div className="flex justify-center gap-4">
                                <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                                    Sim
                                </button>
                                <button
                                onClick={() => setItemToDelete(null)}
                                className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700">
                                    Não
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {paymentOption && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={(e) => handleOverlayClick(e, () => setPaymentOption(false))}>
                        <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full text-center relative">
                            <button
                                onClick={() => setPaymentOption(false)}
                                className="absolute top-2 right-3 text-gray-400 text-lg hover:text-gray-600"
                            >
                            ×
                            </button>
                            <h2 className="text-xl font-semibold mb-4">Escolha a forma de pagamento</h2>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={handleSimPayment}
                                    className="flex items-center justify-center gap-2 bg-sky-900 text-white px-4 py-2 rounded hover:bg-sky-950"
                                >
                                    <FaQrcode /> Pix
                                </button>
                                <button
                                    onClick={handleSimPayment}
                                    className="flex items-center justify-center gap-2 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                                >
                                    <FaCreditCard /> Cartão de Crédito
                                </button>
                                <button
                                    onClick={handleSimPayment}
                                    className="flex items-center justify-center gap-2 bg-green-900 text-white px-4 py-2 rounded hover:bg-green-950"
                                >
                                    <FaMoneyBill /> Dinheiro
                                </button>
                            </div>
                            <button
                                onClick={() => setPaymentOption(false)}
                                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                            Cancelar
                            </button>
                        </div>
                    </div>
                )}
                </>
            )}
        </div>
        </>
     );
}
 
export default Pedidos;