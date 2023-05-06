import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import './cartModal.css';

const CartModal = () => {
  const { cart, clearCart, removeItem } = useContext(CartContext);
  const [previousLocation, setPreviousLocation] = useState(null);

  const cartTotal = cart.reduce((acc, { quantity, price }) => acc + quantity * price, 0);

  const handleCloseModal = () => {
    const modal = document.querySelector('.cart-modal');
    modal.style.display = 'none';
  };

  const location = useLocation();

  const handleCartClick = () => {
    setPreviousLocation(location);
  };

  return (
    <div className='cart-modal'>
      <div className='cart-modal-content'>
        <div className='cart-modal-header'>
          <h2>Carrito de compras</h2>
          <button className='close-btn' onClick={handleCloseModal}>
            <Link to={previousLocation || '/cart'}>X</Link>
          </button>
        </div>
        <div className='cart-modal-items'>
          {cart.length === 0 ? (
            <p>No hay productos en el carrito</p>
          ) : (
            cart.map(({ id, title, image, price, quantity }) => (
              <div key={id} className='cart-item'>
                <img src={image} alt={title} />
                <div className='cart-item-info'>
                  <h3>{title}</h3>
                  <p>Cantidad: {quantity}</p>
                  <p>Precio unitario: ${price}</p>
                  <button className='remove-btn' onClick={() => removeItem(id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className='cart-modal-footer'>
            <div className='cart-modal-total'>
              <p>Total: ${cartTotal.toFixed(2)}</p>
            </div>
            <div className='cart-modal-buttons'>
              <button className='clear-cart-btn' onClick={() => clearCart()}>
                Limpiar carrito
              </button>
              <Link to='/checkout'>
                <button className='checkout-btn'>Finalizar compra</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;


/* import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './cartModal.css';

const CartModal = () => {
const { cart, removeItem, clearCart } = useContext(CartContext);

const handleRemoveItem = (id) => {
removeItem(id);
};

const handleClearCart = () => {
clearCart();
};

return (
<div className="cartModal">
<h2>Carrito de Compras</h2>
{cart.length === 0 ? (
<p>No hay productos en el carrito</p>
) : (
<>
<ul>
{cart.map(({ id, title, quantity }) => (
<li key={id}>
<span>{title}</span>
<span>Cantidad: {quantity}</span>
<button onClick={() => handleRemoveItem(id)}>Eliminar</button>
</li>
))}
</ul>
<div className="cartModal__actions">
<button onClick={handleClearCart}>Limpiar Carrito</button>
<button>Finalizar Compra</button>
</div>
</>
)}
</div>
);
};

export default CartModal; */

/* import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartModal = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-modal">
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.name} - </span>
            <span>Cantidad: {item.quantity} - </span>
            <span>Precio: ${item.price * item.quantity}</span>
          </li>
        ))}
        <li>
          <span>Total: </span>
          <span>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
        </li>
      </ul>
    </div>
  );
};

export default CartModal; */
