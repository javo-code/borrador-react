import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="EmptyCartSms">
        <h1>No hay productos en tu carrito...!</h1>
        <Link to="/" className="Button">Ir a comprar</Link>
      </div>
    );
  }

  return (
    <div className="CartItemFooter">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: ${total}</h3>
      {cart.length > 0 && (
        <div className="BtnClearCart">
          <button onClick={() => clearCart()} className="Button">
            Limpiar el carrito
          </button>
        </div>
      )}
      <div className="BtnCheckout">
        <Link to="/checkout" className="CheckoutLink">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
