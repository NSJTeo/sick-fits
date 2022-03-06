import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

export const CartStateProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return (
    <LocalStateProvider
      value={{ cartOpen, setCartOpen, closeCart, openCart, toggleCart }}
    >
      {children}
    </LocalStateProvider>
  );
};

export const useCart = () => useContext(LocalStateContext);
