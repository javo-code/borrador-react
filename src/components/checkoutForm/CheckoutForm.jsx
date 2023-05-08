import { useContext, useState } from 'react';
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
  const { isReadyToCheckout, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">Nombre:</label>
      <input type="text" name="firstName" onChange={handleInputChange} />

      <label htmlFor="lastName">Apellido:</label>
      <input type="text" name="lastName" onChange={handleInputChange} />

      <label htmlFor="phone">Teléfono:</label>
      <input type="text" name="phone" onChange={handleInputChange} />

      <label htmlFor="email">E-mail:</label>
      <input type="email" name="email" onChange={handleInputChange} />

      <label htmlFor="confirmEmail">Confirmar E-mail:</label>
      <input type="email" name="confirmEmail" onChange={handleInputChange} />

      <button type="submit" disabled={!isReadyToCheckout}>
        <Link to='/checkout'>
                <button className='checkout-btn btn btn-info btn-block btn-kepBuying'>Realizar compra</button>
              </Link>
      </button>

      <div>
        <p>Nombre: {formData.firstName}</p>
        <p>Apellido: {formData.lastName}</p>
        <p>Teléfono: {formData.phone}</p>
        <p>E-mail: {formData.email}</p>
        <p>Confirmar E-mail: {formData.confirmEmail}</p>
      </div>
    </form>
  );
};

export default CheckoutForm;
