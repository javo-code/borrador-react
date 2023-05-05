import "./itemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import {  getDocs,  collection,  query,  where} from "firebase/firestore";
import { db } from "../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
  setLoading(true);

  const collectionRef = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

  setTimeout(() => {
    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, 500);

}, [categoryId]);


  return (
    <div className="">
      <div>
        <h1 className="titulo bounce-in-bck">{greeting}</h1>
      </div>
      {loading ? (
        <div className="Loading">Cargando productos...</div>
      ) : (
        <div className="ItemListContainer">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
