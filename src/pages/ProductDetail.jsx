import { useParams } from "react-router-dom"
import products from "../data/products"
import { useState } from "react"

const ProductDetail = () => {

  const [liked, setLiked] = useState(false)

const handleLike = () => {
  setLiked(!liked)
}

  const { id } = useParams()

  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return <h2 className="text-center mt-5">Producto no encontrado</h2>
  }

  return (

    <div className="container mt-5">

      <div className="row">

        <div className="col-md-6">

          <img
            src={product.img}
            alt={product.name}
            className="img-fluid rounded"
          />

        </div>

        <div className="col-md-6">

          <h2>{product.name}</h2>

           <span
    onClick={handleLike}
    style={{
      cursor: "pointer",
      fontSize: "2rem",
      color: liked ? "red" : "gray"
    }}
  >
    ♥
  </span>

          <span className="badge bg-secondary mb-3">
            {product.category}
          </span>

          <p>{product.desc}</p>

          <h4 className="fw-bold">
            ${product.price.toLocaleString("es-CL")}
          </h4>

          <button className="btn btn-primary mt-3">
            Agregar al carrito
          </button>

        </div>

      </div>

    </div>

  )
}

export default ProductDetail