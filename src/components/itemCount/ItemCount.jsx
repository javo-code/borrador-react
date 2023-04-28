import { useState } from 'react';
import './itemCount.css';
import CarritoIco from './carrito-naranja.png'

const ItemCount = ({ stock, initial, onAdd })=> {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    
  <div className='contenedor-botones-card'>
      {/* COUNTER CONTROLS ( + , - ) IN CARD */}
    <div className='controlesCard'>  
      <button className='btn-minus' onClick={decrement}>-</button>
      <h2 className='number'>{quantity}</h2>
      <button className='btn-plus' onClick={increment}>+</button>
    </div>
    {/* ADDTOCART BUTON */}
    <div className='contenedor-btnAddToCart'>
      <button className='btn-addToCart' onClick={() => onAdd(quantity)} disabled={!stock}>
        <img className='cart' src={CarritoIco} alt='carrito blanco con signo sumar' />
        Agregar al carrito
      </button>
    </div>
      
    </div>
    
  );
}

export default ItemCount;