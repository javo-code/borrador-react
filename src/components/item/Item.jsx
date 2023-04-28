import { Link } from 'react-router-dom';
import "./item.css";

const Item = ({ id, name, img, price, stock }) => {
  
  return (
    <article className="card-container">
      <header className="Header">
        <h2 className="ItemHeader">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info-price">
          Precio: ${price},00
        </p>
        <p className="Info-stock">
          Stock Disponible: {stock}
        </p>
      </section>
      <footer className="ItemFooter">
        <button className='BtnVerDetalle'>
            <Link to={`/item/${id}`} className="BtnCard">Ver Detalle</Link>
        </button>
      </footer>
        
    </article>
  );
};

export default Item;