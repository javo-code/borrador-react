import { useEffect, useState } from "react";
import showItems from "./showItems";
import ItemList from "./ItemList";
import './itemListContainer.css'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    showItems()
      .then((res) => {
        setProducts(res);
      })
  },[])


  return (
    <div className="itemList-container">
      <ItemList products={products} />
    </div>
  )
};


export default ItemListContainer;