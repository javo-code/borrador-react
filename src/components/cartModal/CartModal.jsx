import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "./cartModal.css";

const CartModal = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);

  const cartTotal = cart.reduce(
    (acc, { quantity, price }) => acc + quantity * price,
    0
  );

  const handleCloseModal = () => {
    const modal = document.querySelector(".cart-modal");
    modal.style.display = "none";
  };

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <div className="cart-modal-header">
          <h2>Carrito de compras</h2>
          <button className="close-btn" onClick={handleCloseModal}>
            <Link to="/cart">X</Link>
          </button>
        </div>
        <div className="cart-modal-items">
          {cart.length === 0 ? (
            <>
              <p>No hay productos en el carrito</p>
              <Link to="/">
                <button className="checkout-btn btn btn-success btn-block btn-kepBuying">
                  Ir a comprar
                </button>
              </Link>
            </>
          ) : (
            cart.map(({ id, name, img, price, quantity }) => (
              <div key={id} className="cart-item col-12 d-flex container">
                <img src={img} alt={name} className="img-CartModal col-6" />
                <div className="cart-item-info">
                  <h3 className="h3-CartModal">{name}</h3>
                  <p className="p-CartModal">
                    <b>Cantidad:</b> {quantity}
                  </p>
                  <p className="p-CartModal">
                    <b>Precio unitario: $</b>
                    {price}
                  </p>
                </div>
                <button
                  className="remove-btn btn-delete col-1"
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="cart-modal-footer">
            <div className="cart-modal-total Total">
              <h3 className="Total">Total: ${cartTotal.toFixed(2)}</h3>
            </div>
            <div className="cart-modal-buttons">
              <div className="BtnClearCart">
                <button onClick={() => clearCart()} className="Button">
                  Limpiar el carrito
                </button>
              </div>
              <div className="col-md-4 mb-2">
                <Link
                  to="/"
                  className="btn btn-success btn-block btn-kepBuying"
                >
                  Seguir comprando
                </Link>
              </div>
              <div className="link-to-checkoutForm">
                <Link to="/checkout">
                  <button className="checkout-btn btn btn-info btn-block btn-kepBuying">
                    Finalizar compra
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
