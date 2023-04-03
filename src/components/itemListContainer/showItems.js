import data from "../data/products.json";

const showItems = () => {
    return new Promise((resolve, reject) => {
      resolve(data)
    })
}
  
export default showItems;