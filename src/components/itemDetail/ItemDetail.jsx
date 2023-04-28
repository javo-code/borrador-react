import "./itemDetail.css";
import ItemCount from "../itemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)
  
  const { addItem } = useState(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)

    const item = {
      id, name, price
    }

    addItem(item, quantity);
  }

  return (
    <article className="CardItemDetailContainer ">
      <header className="CardItemDetailHeader ItemHeader">
        <h2 className="CardItemDetailHeader ItemHeader">
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className="CardItemDetailImg" />
      </picture>
      <section>
        <p className="InfoCategoryDetail">
          <b>Categoria:</b> {category}
        </p>
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
            <Link to='/cart' className='Option'>Terminar compra</Link>
          ) : (
            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
          )
        }
      </footer>
    </article>

  )

};

export default ItemDetail; 
