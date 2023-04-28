import './cart.css'
import CartItem from '../cartItem/CartItem'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)
    
    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en tu carrito...!</h1>
                <Link to='/' classname='Option'>Volver a todos los Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p} />) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className='Button'>Limpiar el carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart;