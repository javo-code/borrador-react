import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";
import CarritoIco from './carrito-blanco.png';
import './cartWidget.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  return (
    <div className='Cartwidget'>
      <Link to='/CartModal'>
        <img src={CarritoIco} alt="" className='CartwidgetImg'/>
        <span className='Counter' style={{ display: totalItems > 0 ? 'block' : 'none' }}>
          {totalItems}
        </span>
      </Link>
    </div>
  );
};

export default CartWidget;
