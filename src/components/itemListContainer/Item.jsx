const Item = ( {product} ) => {
  return (
    <div>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price},00</p>
    </div>
  )
}

export default Item;
