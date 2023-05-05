import "./itemDetail.css";
import ItemCount from "../itemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext"; 

const ItemDetail = ({ id, name, img, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

  const item = {
      id, name, price
    }

  addItem(item, quantity);
  }

  return (
    <article className="CardItemDetailContainer ">
      <header className="CardItemDetailHeader">
        <h2 className="CardItemDetailHeader">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="CardItemDetailImg" />
      </picture>
      <section>
        <p className="InfoDescriptionDetail">
          <b>Descripción:</b> {description}
        </p>
        <p className="InfoPriceDetail">
          <b>Precio: </b>${price}
        </p>
      </section>
      <footer className="CardItemFooter">
        {
          quantityAdded > 0 ? (
            <Link to='/cart' className='Option'>Continuar con la compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
      </footer>
    </article>

  )

};

export default ItemDetail; 