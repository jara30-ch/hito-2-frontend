import { useState } from "react"
import products from "../data/products"
import CardProduct from "../components/CardProduct"

const Home = () => {

  const [productList] = useState(products)

  const featuredProducts = productList.slice(0, 2)

  return (

    <div>

      {/* HERO SECTION */}

      <div
        className="bg-light text-center p-5"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1596464716127-f2a82984de30)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white"
        }}
      >

        <div className="container">

          <h1 className="display-4 fw-bold">
            Bienvenido a la Juguetería
          </h1>

          <p className="lead">
            Los mejores juguetes para aprender y divertirse
          </p>

          <a href="/tienda" className="btn btn-warning btn-lg">
            Ver tienda
          </a>

        </div>

      </div>

      {/* PRODUCTOS DESTACADOS */}

      <div className="container mt-5">

        <h2 className="text-center mb-4">
          Productos Destacados
        </h2>

        <div className="d-flex justify-content-center flex-wrap">

          {featuredProducts.map((product) => (

            <CardProduct
              key={product.id}
              product={product}
            />

          ))}

        </div>

      </div>

    </div>

  )
}

export default Home