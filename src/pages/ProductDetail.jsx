import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { getProductById } from "../services/api"

const ProductDetail = () => {

  const { id } = useParams()

  const [product, setProduct] = useState(null)

  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }

  useEffect(() => {

    const loadProduct = async () => {

      const data = await getProductById(id)

       console.log("descripcion:", data.descripcion)

      setProduct(data)

    }

    loadProduct()

  }, [id])

  if (!product) {
    return <h2 className="text-center mt-5">Cargando producto...</h2>
  }

  return (

  <div className="container mt-5">

    <div className="row">

      <div className="col-md-6">

        <img
          src={product.imagen}
          alt={product.nombre}
          className="img-fluid rounded"
        />

      </div>

      <div className="col-md-6">

        <h2>{product.nombre}</h2>

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

        <br />

        <span className="badge bg-secondary mb-3">
          {product.categoria}
        </span>

        <p className="mt-3">
          {product.descripcion|| "SIN DESCRIPCIÓN"}
        </p>

        <h4 className="fw-bold">
          ${Number(product.precio).toLocaleString("es-CL")}
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