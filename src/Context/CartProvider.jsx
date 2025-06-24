import { createContext, useContext, useState, useEffect } from 'react';

// Cria o contexto
export const CartContext = createContext();

// Hook para acessar o carrinho
export const useCart = () => useContext(CartContext);

// Provider do carrinho - o componente começa aqui
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  });

  // Sempre que cartItems mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Adiciona um produto ao carrinho
  const addToCart = (product) => {
    // if(!product.id){
    //     //console.error("Produto sem ID válido:", product);
    //     return;
    // }
    // if(typeof product.price === 'string'){
    //     product.price = Number(product.price.replace(/\D/g, ''))
    // }
    setCartItems((prev) => [...prev, product]);
  };

  // Remove um produto pelo id
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Limpa todo o carrinho
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  // Verifica se produto está no carrinho
  const isInCart = (id) => cartItems.some(item => item.id === id);

  // Alterna entre adicionar/remover
  const toggleCartItem = (product) => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      isInCart,
      toggleCartItem
    }}>
      {children}
    </CartContext.Provider>
  );
};
