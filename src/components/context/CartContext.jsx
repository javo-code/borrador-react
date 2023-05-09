import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      <h1>El Producto ya fue agregado</h1>;
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = () => {
    cart.reduce((acc, actualItem) => acc + actualItem.quantity, 0);
  };

  const totalPrice = () => {
    return cart.reduce(
      (prev, actual) => prev + actual.quantity * actual.price, 0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
