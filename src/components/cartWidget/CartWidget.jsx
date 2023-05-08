import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import CarritoIco from './carrito-blanco.png';
import './cartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  return (
    <div className='Cartwidget' style={{ display: cart.length > 0 ? 'block' : 'none' }}>
      <Link to='/CartModal'>
        <img src={CarritoIco} alt="" className='CartwidgetImg'/>
        <span className='Counter'>
          {totalItems}
        </span>
      </Link>
    </div>
  );
};

export default CartWidget;
