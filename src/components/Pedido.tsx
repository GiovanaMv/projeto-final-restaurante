import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type CartItem = {
  name: string;
  price: number;
  image: string;
};

type CartContextType = {
  cartItems: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
};

const CarrinhoContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.length;

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
     return (
    <CarrinhoContext.Provider
      value={{
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CarrinhoContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};