import { useState } from "react"
import CardProduct from "../components/CardProduct"
import products from "../data/products"

const Shop = () => {

  const [productList] = useState(products)

  return (

    <div className="mt-4">

      <h1 className="text-center mb-4">Tienda de Juguetes</h1>

      <div className="d-flex flex-wrap justify-content-center">

        {productList.map((product) => (

          <CardProduct
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>

  )
}

export default Shop