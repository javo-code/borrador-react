import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../cartItem/CartItem";
import Msj1 from "./Msj1";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div className="CartItemFooter">
      {cart.length === 0 ? (
        <Msj1 />
      ) : (
        <>
          {cart.map((p) => (
            <CartItem key={p.id} {...p} />
          ))}
          <div className="BtnClearCart">
            <button onClick={() => clearCart()} className="Button">
              Limpiar el carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
