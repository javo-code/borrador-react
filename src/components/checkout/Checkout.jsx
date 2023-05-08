import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CheckoutForm from '../checkoutForm/CheckoutForm';
import './checkout.css';
import { Timestamp } from 'firebase/firestore';
import { writeBatch, collection, query, where, documentId, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../services/firebase/firebaseConfig';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
      try {
        const objOrder = {
        buyer: {
          name, phone, email
        },
        items: cart,
        total: totalPrice,
        date: Timestamp.fromDate(new Date())
      }
        const batch = writeBatch(db);
      
        const outOfStock = [];
        
        const ids = cart.map(prod => prod.id);

        const productsRef = collection(db, 'products');

        const producsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

        const { docs } = producsAddedFromFirestore;

        docs.forEach(doc => {
          const dataDoc = doc.data();
          const stockDb = dataDoc.stock

          const producsAddedToCart = cart.find(prod => prod.id === doc.id);
          const prodQuantity = producsAddedToCart?.quantity

          if (stockDb >= prodQuantity) {
            batch.update(doc.ref, { stock: stockDb - prodQuantity })
          } else { 
            outOfStock.push({ id: doc.id, ...dataDoc})
          }

        })

        if (outOfStock.length === 0) {
          await batch.commit()

          const orderRef = collection(db, 'orders');

          const orderAdded = await addDoc(orderRef, objOrder);

          setOrderId(orderAdded.id);
          clearCart();
        } else {
          console.error('Hay productos sin stock')
        }
  
      } catch (error) {
        console.log(error)

      } finally {
        setLoading(false)
    }    
  }

  if (loading) {
    return <h2>Se esta generando su orden...</h2>
  }
  
  if (orderId) {
    return <h2>El ID de su orden es: {orderId} </h2>
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  )
}

export default Checkout;


/* 
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
 */