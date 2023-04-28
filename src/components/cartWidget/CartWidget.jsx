import CarritoIco from './carrito-blanco.png'
import './cartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
      <img className='icono-carrito' src={CarritoIco} alt='Cart-Widget'  />
      { totalQuantity }
    </Link>
  );
}

export default CartWidget;