import { Link } from 'react-router-dom'

const Msj1 = () => {
    return (<div className="EmptyCartSms">
        <h1>No hay productos en tu carrito...!</h1>
        <Link to='/'>
                <button className='checkout-btn btn btn-success btn-block btn-kepBuying'>Ir a comprar</button>
              </Link>
      </div>)
}

export default Msj1;