import CarritoIco from './carrito-blanco.png'
import './cartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (

    <div>
      { totalQuantity > 0 && (
  <Link to='/cart' className='CartWidget'>
    <img className='icono-carrito' src={ CarritoIco } alt='Cart-Widget'/>
    { totalQuantity }
  </Link>
)}
    </div>
    
  );
}

export default CartWidget;