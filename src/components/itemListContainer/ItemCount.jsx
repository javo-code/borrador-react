import { useState } from 'react';
import './btnCard.css';
import CarritoIco from './carrito-naranja.png'

const ContadorCard = ({ stock, initial, onAdd })=> {
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
    <>
  <div className='contenedor-botones-card'>
      
    <div className='controlesCard'>
      <button
      className='btn-minus'
      onClick={decrement}>-</button>
        
      <h2 className='number'>{quantity}</h2>

      <button
      className='btn-plus'
      onClick={increment}>+</button>
    </div>
    
      <div className='contenedor-btnAddToCart'>
        <button className='addToCart' onclick={() => onAdd(quantity)} disbled={!stock}>
          <img className='cart' src={CarritoIco} alt='carrito blanco con signo sumar' />
          <p>Agregar al carrito</p>
        </button>
      </div>
      
    </div>
</>
  );
}

export default ContadorCard;