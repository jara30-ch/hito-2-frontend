import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom"
import { useState } from "react"  

const CardProduct = ({ product }) => {

  const [liked, setLiked] = useState(false)

const handleLike = () => {
  setLiked(!liked)
}

  const { addToCart } = useContext(CartContext);

  return (

    <div className="card m-3" style={{ width: "18rem" }}>

      <img src={product.img} className="card-img-top" alt={product.name} />

      <div className="card-body">

        <h5>{product.name}</h5>

          <span className="badge bg-secondary mb-2">
      {product.category}
    </span>

       <p>${product.price.toLocaleString()}</p>

      <div
  style={{ cursor: "pointer", userSelect: "none" }}
  onClick={handleLike}
>
  <span
    style={{
      color: liked ? "red" : "gray",
      fontSize: "1.3rem",
      marginRight: "5px"
    }}
  >
    ♥
  </span>
</div>

        <div className="d-flex gap-2">

  <button
    className="btn btn-primary"
    onClick={() => addToCart(product)}
  >
    Agregar
  </button>

  <Link
    to={`/product/${product.id}`}
    className="btn btn-outline-dark"
  >
    Ver detalle
  </Link>

</div>

      </div>

    </div>
  );
};

export default CardProduct;