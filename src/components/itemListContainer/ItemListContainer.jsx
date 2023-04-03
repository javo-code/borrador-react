import { useEffect, useState } from "react";
import showItems from "./showItems";
import ItemList from "./ItemList";

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
  
    showItems()
      .then((res) => {
        setProducts(res);
      })
  },[])


  return (
    <div>
      <ItemList products={products} />
    </div>
  )
};


export default ItemListContainer;