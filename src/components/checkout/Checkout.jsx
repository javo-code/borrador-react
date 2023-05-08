import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './checkout.css';


const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = () => {
    return cart.reduce ((prev, act) => prev + act.quantity * act.price, 0)
  }

  const handleCloseModal = () => {
    const modal = document.querySelector('.cart-modal');
    modal.style.display = 'none';
  };
  
  return (
    <div className='cart-modal cart-modal-background'>
      <div className='cart-modal-content'>
        <div className='cart-modal-header'>
          <div className="d-flex col-12 Header">
            <h1 className='h1-checkout'>Success!</h1>
            <button className='close-btn' onClick={handleCloseModal}>
          <Link to='/'>X</Link>
            </button>
          </div>
          <h3 className='h3-checkout'>Su compra fue realizada con éxito.</h3>
          <h6 className='h6-checkout'>El comprobante de la operación fue enviada a la casilla de e-mail: { } </h6>
        </div>
        <div className='UserData'>
        
        </div>
        <div className='checkout-items'>
          {cart.map(({ id, name, price, quantity }) => ( 
            <div key={id} className='cart-item'>
              <div className='cart-item-info'>
                <h3><i>{name}</i></h3> 
                <p><b>Cantidad: </b>{quantity}</p>
                <p><b>Precio unitario: </b>$ {price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='cart-modal-footer'>
          <div className='cart-modal-total'>
            <h2><i>TOTAL: $ {totalPrice()},00</i></h2> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
