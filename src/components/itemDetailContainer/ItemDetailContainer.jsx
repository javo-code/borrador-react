import './itemDetailContainer.css';
import { useState, useEffect } from "react";
import ItemDetail from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from "../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();
    
    useEffect(() => {
        setLoading(true);
        
        const docRef = doc(db, 'products', itemId);

    setTimeout(() => {
        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productsAdapted = { id: response.id, ...data };
                setProduct(productsAdapted);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            })
            .finally(() => {
        setLoading(false)
      })
  }, 500);
    
    }, [itemId]);

    return (
        <div className="ItemDetailContainer">
            {loading ? (
                <div className="CartDetailMsn">Cargando detalle del producto...</div>
            ) : (
                <ItemDetail {...product}/>
            )}
        </div>
    );
};

export default ItemDetailContainer;