import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (

    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">

      <div className="container">

        <Link className="navbar-brand" to="/">
          Juguetería
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Inicio
          </Link>

          <Link className="nav-link" to="/galeria">
            Galería
          </Link>

          <Link className="nav-link" to="/tienda">
            Tienda
          </Link>

          <Link className="nav-link" to="/login">
            Login
          </Link>

          <Link className="nav-link" to="/register">
            Registro
          </Link>

          <Link className="nav-link" to="/carrito">
            🛒 Carrito ({totalItems})
          </Link>

        </div>

      </div>

    </nav>

  );
};

export default Navbar;