import CounterInCard from "./ItemCount";
import "./itemListContainer.css";

const Item = ({ product }) => {
  return (
    <div className="card-container">

      <div className="card-img-container">
        <img className="card-img" src={product.img} alt={product.name} />
      </div>

      <div className="card-desc">
        <h2>{product.name}</h2>

        <p>{product.description}</p>
        <p>${product.price},00</p>
        <CounterInCard
          initial={0}
          stock={10}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </div>
      
    </div>
  );
};

export default Item;
